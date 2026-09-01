import { useEffect, useRef } from "react";

const HeroMascot = () => {
  const rootRef = useRef(null);
  const characterRef = useRef(null);
  const pupilLRef = useRef(null);
  const pupilRRef = useRef(null);
  const glintLRef = useRef(null);
  const glintRRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const svg = root.querySelector("svg");
    const character = characterRef.current;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const eyes = [
      { cx: 192, cy: 158, pupil: pupilLRef.current, glint: glintLRef.current },
      { cx: 228, cy: 158, pupil: pupilRRef.current, glint: glintRRef.current },
    ];
    const maxOffset = 7;

    const laptopTarget = { x: 210, y: 281 };

    let target = { ...laptopTarget };
    let current = { ...laptopTarget };
    let alert = false;
    let raf;
    let blinkTimeout;

    const svgPoint = (clientX, clientY) => {
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const ctm = svg.getScreenCTM();
      if (!ctm) return { x: clientX, y: clientY };
      return pt.matrixTransform(ctm.inverse());
    };

    const setState = (isAlert) => {
      if (isAlert === alert) return;
      alert = isAlert;
      character.classList.toggle("state-alert", alert);
      character.classList.toggle("state-typing", !alert);
    };

    const restToLaptop = () => {
      target = { ...laptopTarget };
      setState(false);
    };

    const handlePoint = (clientX, clientY) => {
      const rect = root.getBoundingClientRect();
      const padding = 80;
      const inRightZone = clientX >= window.innerWidth * 0.2;
      const withinSection =
        clientY >= rect.top - padding && clientY <= rect.bottom + padding;

      if (inRightZone && withinSection) {
        target = svgPoint(clientX, clientY);
        setState(true);
      } else {
        restToLaptop();
      }
    };

    const onMouseMove = (e) => handlePoint(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (t) handlePoint(t.clientX, t.clientY);
    };
    const onVisibilityChange = () => {
      if (document.hidden) restToLaptop();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("blur", restToLaptop);
    window.addEventListener("mouseleave", restToLaptop);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", restToLaptop);
    document.addEventListener("visibilitychange", onVisibilityChange);

    const updateEye = (eye, gazeX, gazeY) => {
      const dx = gazeX - eye.cx;
      const dy = gazeY - eye.cy;
      const dist = Math.hypot(dx, dy);
      const clamped = Math.min(dist, maxOffset);
      const angle = Math.atan2(dy, dx);
      const px = eye.cx + Math.cos(angle) * clamped;
      const py = eye.cy + Math.sin(angle) * clamped;
      eye.pupil.setAttribute("cx", px);
      eye.pupil.setAttribute("cy", py);
      eye.glint.setAttribute("cx", px - 3.5);
      eye.glint.setAttribute("cy", py - 3.5);
    };

    let lastTime = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const easePerSecond = reduced ? 30 : alert ? 12 : 3.5;
      const ease = reduced ? 1 : 1 - Math.exp(-easePerSecond * dt);

      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      eyes.forEach((eye) => updateEye(eye, current.x, current.y));
      raf = requestAnimationFrame(tick);
    };

    const scheduleBlink = () => {
      const delay = 2500 + Math.random() * 3500;
      blinkTimeout = setTimeout(() => {
        root
          .querySelectorAll(".eye-group")
          .forEach((el) => el.classList.add("blink"));
        setTimeout(() => {
          root
            .querySelectorAll(".eye-group")
            .forEach((el) => el.classList.remove("blink"));
        }, 130);
        scheduleBlink();
      }, delay);
    };

    restToLaptop();
    raf = requestAnimationFrame(tick);
    if (!reduced) scheduleBlink();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("blur", restToLaptop);
      window.removeEventListener("mouseleave", restToLaptop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", restToLaptop);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(raf);
      clearTimeout(blinkTimeout);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-mascot w-[320px] sm:w-[420px] md:w-[540px] lg:w-[640px] xl:w-[760px] flex-shrink-0 pointer-events-none"
    >
      <svg
        width="420"
        height="420"
        viewBox="0 0 420 420"
        className="w-full h-auto"
      >
        <defs>
          <filter
            id="mascotSoftBlur"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="16" />
          </filter>
          <linearGradient id="mascotBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9a72fb" />
            <stop offset="100%" stopColor="#7c52e6" />
          </linearGradient>
        </defs>

        <ellipse
          cx="210"
          cy="235"
          rx="120"
          ry="120"
          fill="#915eff"
          opacity="0.16"
          filter="url(#mascotSoftBlur)"
        />

        <ellipse
          cx="210"
          cy="343"
          rx="105"
          ry="9"
          fill="#915eff"
          opacity="0.12"
          filter="url(#mascotSoftBlur)"
        />

        <rect x="95" y="330" width="230" height="7" rx="3" fill="#241b45" />

        <g className="mascot-float mascot-float-a" opacity="0.9">
          <text
            x="76"
            y="150"
            fontSize="20"
            fill="#aaa6c3"
            fontFamily="monospace"
          >
            {"</>"}
          </text>
        </g>
        <g className="mascot-float mascot-float-b" opacity="0.85">
          <circle cx="332" cy="128" r="3" fill="#c9b6ff" />
        </g>
        <g className="mascot-float mascot-float-c" opacity="0.8">
          <circle cx="315" cy="190" r="2" fill="#915eff" />
        </g>

        <g id="character" ref={characterRef} className="state-typing">
          <path
            className="mascot-arm mascot-armL"
            d="M 142 220 Q 108 245 169 253"
            stroke="#c9b6ff"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className="mascot-arm mascot-armR"
            d="M 278 220 Q 312 245 251 253"
            stroke="#c9b6ff"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          <rect
            x="140"
            y="185"
            width="140"
            height="100"
            rx="16"
            fill="url(#mascotBody)"
          />

          <path d="M 150 185 A 60 60 0 0 1 270 185 Z" fill="url(#mascotBody)" />

          <path
            d="M 202 125 C 197 111 214 108 212 121 C 210 132 225 128 220 117"
            stroke="#c9b6ff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          <path
            className="mascot-eyebrow mascot-eyebrowL"
            d="M 178 136 Q 192 128 206 136"
            stroke="#f3f3f3"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className="mascot-eyebrow mascot-eyebrowR"
            d="M 214 136 Q 228 128 242 136"
            stroke="#f3f3f3"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />

          <ellipse
            cx="170"
            cy="180"
            rx="9"
            ry="5"
            fill="#ff8fd8"
            opacity="0.35"
          />
          <ellipse
            cx="250"
            cy="180"
            rx="9"
            ry="5"
            fill="#ff8fd8"
            opacity="0.35"
          />

          <g className="eye-group">
            <circle cx="192" cy="158" r="15" fill="#f3f3f3" />
            <circle ref={pupilLRef} cx="192" cy="158" r="6.5" fill="#151030" />
            <circle
              ref={glintLRef}
              cx="188.5"
              cy="154.5"
              r="2"
              fill="#ffffff"
            />
          </g>
          <g className="eye-group">
            <circle cx="228" cy="158" r="15" fill="#f3f3f3" />
            <circle ref={pupilRRef} cx="228" cy="158" r="6.5" fill="#151030" />
            <circle
              ref={glintRRef}
              cx="224.5"
              cy="154.5"
              r="2"
              fill="#ffffff"
            />
          </g>

          <path
            d="M 197 190 Q 210 199 223 190"
            stroke="#f3f3f3"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <g>
          <rect
            x="160"
            y="238"
            width="100"
            height="70"
            rx="10"
            fill="#14102a"
            stroke="#c9b6ff"
            strokeWidth="2.5"
          />
          <rect
            x="148"
            y="312"
            width="124"
            height="10"
            rx="5"
            fill="#14102a"
            stroke="#c9b6ff"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
};

export default HeroMascot;
