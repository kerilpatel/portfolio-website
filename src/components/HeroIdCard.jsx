import { useCallback, useEffect, useRef, useState } from "react";

import { Coffee } from "lucide-react";

import profile from "../assets/profile.jpg";

/* Stage + body dimensions (design units — the stage is scaled with CSS,
   pointer coordinates are converted back into these units on the fly). */
const STAGE_W = 420;
const STAGE_H = 620;
const CARD_W = 258;
const CARD_H = 404;

const ANCHOR = { x: STAGE_W / 2, y: 10 };
const ROPE_POINTS = 8;
const SEG_LEN = 19;
/* clip -> card centre (connector + half the card) */
const ROD_LEN = 20 + CARD_H / 2;

const GRAVITY = 2200;
const DAMPING = 0.985;
const ITERATIONS = 14;

const barcode = [
  3, 1, 2, 1, 1, 3, 2, 1, 4, 1, 2, 2, 1, 3, 1, 1, 2, 4, 1, 2, 3, 1, 1, 2, 2, 1,
  4, 1, 1, 3, 2, 1, 3, 1, 2, 1,
];

const Barcode = () => (
  <div className="flex items-end gap-[2px] h-6">
    {barcode.map((w, i) => (
      <span
        key={i}
        style={{ width: `${w}px`, height: `${60 + ((i * 37) % 40)}%` }}
        className="bg-[#2a2350] rounded-[1px]"
      />
    ))}
  </div>
);

const returnTo = [
  ["GitHub", "github.com/kerilpatel"],
  ["LinkedIn", "linkedin.com/in/keril-patel"],
  ["Email", "kerilpatel@outlook.com"],
];

const detail = (label, value) => (
  <div>
    <p className="text-[8px] tracking-[0.16em] text-[#8b86a8] uppercase">
      {label}
    </p>
    <p className="text-[11px] font-semibold text-[#1b1533] mt-[2px] leading-tight">
      {value}
    </p>
  </div>
);

const HeroIdCard = () => {
  const stageRef = useRef(null);
  const cardRef = useRef(null);
  const strapRef = useRef(null);
  const strapLineRef = useRef(null);
  const clipRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  const flip = useCallback(() => setFlipped((f) => !f), []);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    const strap = strapRef.current;
    const strapLine = strapLineRef.current;
    const clip = clipRef.current;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* --- bodies: a verlet rope ending in the card's centre of mass --- */
    const rope = Array.from({ length: ROPE_POINTS }, (_, i) => ({
      x: ANCHOR.x,
      y: ANCHOR.y + i * SEG_LEN,
      px: ANCHOR.x,
      py: ANCHOR.y + i * SEG_LEN,
    }));
    const tail = rope[ROPE_POINTS - 1];
    const centre = {
      x: tail.x,
      y: tail.y + ROD_LEN,
      px: tail.x,
      py: tail.y + ROD_LEN,
    };

    let angle = 0;
    let tilt = 0;

    const drag = { active: false, x: 0, y: 0, ox: 0, oy: 0 };
    let pointerId = null;
    let downAt = 0;
    let downPos = { x: 0, y: 0 };

    const toLocal = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      const scale = rect.width / STAGE_W || 1;
      return {
        x: (clientX - rect.left) / scale,
        y: (clientY - rect.top) / scale,
      };
    };

    const solve = (a, b, len, aFixed) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 0.0001;
      const diff = (dist - len) / dist;
      if (aFixed) {
        b.x -= dx * diff;
        b.y -= dy * diff;
        return;
      }
      a.x += dx * diff * 0.5;
      a.y += dy * diff * 0.5;
      b.x -= dx * diff * 0.5;
      b.y -= dy * diff * 0.5;
    };

    const integrate = (p, dt) => {
      const vx = (p.x - p.px) * DAMPING;
      const vy = (p.y - p.py) * DAMPING;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + GRAVITY * dt * dt;
    };

    const REST_LEN = (ROPE_POINTS - 1) * SEG_LEN + ROD_LEN;
    /* how far past its resting length the lanyard can ever be pulled */
    const MAX_STRETCH = 1.5;
    const SLACK = REST_LEN * (MAX_STRETCH - 1);

    /* keep the grabbed spot glued to the pointer — pulling past the
       lanyard's length stretches it against rising resistance, up to
       MAX_STRETCH, and it snaps back on release */
    const pinToPointer = () => {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      let x = drag.x - (drag.ox * cos - drag.oy * sin);
      let y = drag.y - (drag.ox * sin + drag.oy * cos);
      const dx = x - ANCHOR.x;
      const dy = y - ANCHOR.y;
      const dist = Math.hypot(dx, dy);
      if (dist > REST_LEN) {
        const excess = dist - REST_LEN;
        const eased = SLACK * (1 - Math.exp(-excess / SLACK));
        const k = (REST_LEN + eased) / dist;
        x = ANCHOR.x + dx * k;
        y = ANCHOR.y + dy * k;
      }
      centre.x = x;
      centre.y = y;
    };

    const render = () => {
      const clipX = tail.x;
      const clipY = tail.y;

      let d = `M ${ANCHOR.x} ${ANCHOR.y}`;
      for (let i = 1; i < rope.length - 1; i++) {
        const mx = (rope[i].x + rope[i + 1].x) / 2;
        const my = (rope[i].y + rope[i + 1].y) / 2;
        d += ` Q ${rope[i].x} ${rope[i].y} ${mx} ${my}`;
      }
      d += ` L ${clipX} ${clipY}`;
      strap.setAttribute("d", d);
      strapLine.setAttribute("d", d);

      clip.setAttribute(
        "transform",
        `translate(${clipX} ${clipY}) rotate(${angle})`,
      );

      card.style.transform =
        `translate3d(${centre.x - CARD_W / 2}px, ${centre.y - CARD_H / 2}px, 0)` +
        ` rotate(${angle}deg)`;
      card.style.setProperty("--tilt", `${tilt}deg`);
    };

    if (reduced) {
      for (let i = 0; i < rope.length; i++) {
        rope[i].x = ANCHOR.x;
        rope[i].y = ANCHOR.y + i * SEG_LEN;
      }
      centre.x = ANCHOR.x;
      centre.y = tail.y + ROD_LEN;
      render();
      return undefined;
    }

    let raf;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 1 / 45);
      last = now;

      for (let i = 1; i < rope.length; i++) integrate(rope[i], dt);
      integrate(centre, dt);

      if (drag.active) pinToPointer();

      for (let k = 0; k < ITERATIONS; k++) {
        rope[0].x = ANCHOR.x;
        rope[0].y = ANCHOR.y;
        for (let i = 0; i < rope.length - 1; i++) {
          solve(rope[i], rope[i + 1], SEG_LEN, i === 0);
        }
        solve(tail, centre, ROD_LEN, false);
        if (drag.active) pinToPointer();
      }

      angle =
        ((Math.atan2(centre.x - tail.x, centre.y - tail.y) * 180) / Math.PI) *
        -1;

      const vx = centre.x - centre.px;
      tilt += (Math.max(-22, Math.min(22, vx * 2.2)) - tilt) * 0.12;

      render();
      raf = requestAnimationFrame(tick);
    };

    const onDown = (e) => {
      const p = toLocal(e.clientX, e.clientY);
      const rad = (angle * Math.PI) / 180;
      const dx = p.x - centre.x;
      const dy = p.y - centre.y;
      /* grab offset in the card's own frame */
      drag.ox = dx * Math.cos(-rad) - dy * Math.sin(-rad);
      drag.oy = dx * Math.sin(-rad) + dy * Math.cos(-rad);
      drag.x = p.x;
      drag.y = p.y;
      drag.active = true;
      downAt = performance.now();
      downPos = { x: e.clientX, y: e.clientY };
      pointerId = e.pointerId;
      card.setPointerCapture(pointerId);
      card.style.cursor = "grabbing";
    };

    const onMove = (e) => {
      if (!drag.active) return;
      const p = toLocal(e.clientX, e.clientY);
      drag.x = p.x;
      drag.y = p.y;
    };

    const onUp = (e) => {
      if (!drag.active) return;
      drag.active = false;
      card.style.cursor = "grab";
      if (pointerId !== null && card.hasPointerCapture(pointerId)) {
        card.releasePointerCapture(pointerId);
      }
      pointerId = null;
      const moved = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
      if (moved < 6 && performance.now() - downAt < 350) flip();
    };

    card.addEventListener("pointerdown", onDown);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerup", onUp);
    card.addEventListener("pointercancel", onUp);

    /* a small nudge so it is obviously alive on load */
    centre.px = centre.x + 14;
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerup", onUp);
      card.removeEventListener("pointercancel", onUp);
    };
  }, [flip]);

  return (
    <div className="hero-id flex-shrink-0 flex flex-col items-center">
      <div
        ref={stageRef}
        className="relative w-[300px] sm:w-[360px] lg:w-[420px] [--hero-id-scale:0.714] sm:[--hero-id-scale:0.857] lg:[--hero-id-scale:1]"
        style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              width: STAGE_W,
              height: STAGE_H,
              transform: "scale(var(--hero-id-scale, 1))",
            }}
          >
            <svg
              width={STAGE_W}
              height={STAGE_H}
              viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
              className="absolute inset-0 pointer-events-none"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient
                  id="idStrap"
                  gradientUnits="userSpaceOnUse"
                  x1={ANCHOR.x}
                  y1={ANCHOR.y}
                  x2={ANCHOR.x}
                  y2={ANCHOR.y + (ROPE_POINTS - 1) * SEG_LEN}
                >
                  <stop offset="0%" stopColor="#6f4bd8" />
                  <stop offset="100%" stopColor="#915eff" />
                </linearGradient>
                <filter
                  id="idGlow"
                  x="-70%"
                  y="-70%"
                  width="240%"
                  height="240%"
                >
                  <feGaussianBlur stdDeviation="22" />
                </filter>
              </defs>

              <ellipse
                cx={STAGE_W / 2}
                cy={380}
                rx={150}
                ry={170}
                fill="#915eff"
                opacity="0.14"
                filter="url(#idGlow)"
              />

              <path
                ref={strapRef}
                d=""
                fill="none"
                stroke="url(#idStrap)"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                ref={strapLineRef}
                d=""
                fill="none"
                stroke="#c9b6ff"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
              />

              {/* anchor bead */}
              <circle
                cx={ANCHOR.x}
                cy={ANCHOR.y}
                r="7"
                fill="#151030"
                stroke="#915eff"
                strokeWidth="2.5"
              />

              {/* metal clip */}
              <g ref={clipRef}>
                <rect
                  x="-9"
                  y="-4"
                  width="18"
                  height="26"
                  rx="4"
                  fill="#2b2350"
                  stroke="#c9b6ff"
                  strokeWidth="1.5"
                />
                <rect
                  x="-4"
                  y="2"
                  width="8"
                  height="12"
                  rx="2"
                  fill="#0d0a1f"
                />
              </g>
            </svg>

            <div
              ref={cardRef}
              className="hero-id-card absolute top-0 left-0 will-change-transform"
              style={{ width: CARD_W, height: CARD_H }}
              role="button"
              tabIndex={0}
              aria-label="Identity card — activate to flip"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  flip();
                }
              }}
            >
              <div
                className="hero-id-inner"
                style={{
                  transform: `rotateY(var(--tilt, 0deg)) rotateY(${flipped ? 180 : 0}deg)`,
                }}
              >
                {/* ---------- front ---------- */}
                <div className="hero-id-face rounded-2xl overflow-hidden bg-[#f6f4ff] shadow-card ring-1 ring-[#915eff]/30">
                  <div className="relative h-[132px] bg-gradient-to-br from-[#915eff] via-[#7c52e6] to-[#3b2a7a]">
                    <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-transparent via-white/25 to-transparent" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-[38px] w-[104px] h-[104px] rounded-full p-[3px] bg-gradient-to-br from-[#c9b6ff] to-[#915eff]">
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#f6f4ff]">
                        <img
                          src={profile}
                          alt="Keril Patel"
                          draggable="false"
                          className="w-full h-full object-cover"
                          /* framed on the face rather than the full square */
                          style={{ transform: "scale(1.5) translateY(-6%)" }}
                        />
                      </div>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 -top-[6px] w-[52px] h-[7px] rounded-full bg-[#0d0a1f]/70" />
                  </div>

                  <div className="pt-[46px] px-5 pb-4 flex flex-col h-[272px]">
                    <h3 className="text-center text-[19px] font-bold text-[#1b1533] leading-tight">
                      Keril Patel
                    </h3>
                    <p className="mx-auto mt-2 px-3 py-[3px] rounded-full bg-[#efeaff] border border-[#915eff]/25 text-[10px] font-semibold text-[#5b3ec4] tracking-wide">
                      Software Engineer
                    </p>

                    <div className="mt-3 pt-3 border-t border-[#1b1533]/10 grid grid-cols-2 gap-y-3 gap-x-3">
                      {detail("Specialty", "Full-Stack & GenAI")}
                      {detail("Location", "Bengaluru, India")}
                      {detail("Experience", "3+ Years")}
                      <div>
                        <p className="text-[8px] tracking-[0.16em] text-[#8b86a8] uppercase">
                          Status
                        </p>
                        <p className="text-[11px] font-semibold text-[#1b1533] mt-[2px] flex items-center gap-1">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#2fd27a]" />
                          Active
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="rounded-md border border-[#1b1533]/10 bg-white px-3 py-[6px] flex justify-center">
                        <Barcode />
                      </div>
                      <div className="mt-[6px] flex justify-between text-[8px] tracking-[0.14em] text-[#8b86a8] uppercase">
                        <span>KP-2026-SWE</span>
                        <span>Portfolio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------- back ---------- */}
                <div className="hero-id-face hero-id-back rounded-2xl overflow-hidden bg-[#151030] shadow-card ring-1 ring-[#915eff]/40 flex flex-col">
                  {/* magstripe */}
                  <div className="mt-5 h-[34px] w-full bg-[#07050f] border-y border-white/5 relative">
                    <div className="absolute inset-x-0 top-[6px] h-[3px] bg-white/5" />
                    <div className="absolute inset-x-0 bottom-[8px] h-[2px] bg-white/[0.03]" />
                  </div>

                  <div className="px-5 pt-5 pb-5 flex flex-col flex-1">
                    <p className="text-[9px] tracking-[0.22em] uppercase text-[#8b86a8]">
                      If found, please return to
                    </p>

                    <div className="mt-4 space-y-4">
                      {returnTo.map(([label, value]) => (
                        <div key={label}>
                          <p className="text-[8px] tracking-[0.16em] uppercase text-[#8b86a8]">
                            {label}
                          </p>
                          <p className="text-[11px] text-[#dfd9ff] mt-[1px]">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-start gap-2">
                      <Coffee
                        size={14}
                        className="text-[#915eff] shrink-0 mt-[1px]"
                      />
                      <p className="text-[11px] leading-snug text-[#f3f3f3]">
                        Reward: one (1) coffee and a good conversation.
                      </p>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between text-[8px] tracking-[0.14em] uppercase text-[#8b86a8]">
                      <span>KP-2026-SWE</span>
                      <span>kerilpatel.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-2 text-[12px] text-secondary tracking-wide select-none">
        Drag or click the card
      </p>
    </div>
  );
};

export default HeroIdCard;
