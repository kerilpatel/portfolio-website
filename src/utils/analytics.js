// Google Analytics 4 (GA4) integration.
//
// The Measurement ID is read from the VITE_GA_MEASUREMENT_ID env var so it is
// not hardcoded. GA4 Measurement IDs are not secrets (they ship in the page
// source), but keeping it in env lets each environment use its own property.
//
// Analytics only loads in production builds, so local `npm run dev` sessions
// don't pollute your visitor stats.

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

/**
 * Injects the gtag.js script and boots GA4. Safe to call more than once —
 * it no-ops after the first successful init or when no ID / not in prod.
 */
export const initGA = () => {
  if (initialized) return;
  if (!import.meta.env.PROD) return;
  if (!MEASUREMENT_ID) {
    console.warn("[analytics] VITE_GA_MEASUREMENT_ID is not set — GA disabled.");
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID);

  initialized = true;
};

/**
 * Records a page view. Useful if you add client-side routing later; the
 * initial load is already captured by initGA's `config` call.
 */
export const trackPageview = (path) => {
  if (!initialized || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path || window.location.pathname,
  });
};

/**
 * Records a custom event, e.g. trackEvent("contact_submit").
 */
export const trackEvent = (name, params = {}) => {
  if (!initialized || !window.gtag) return;
  window.gtag("event", name, params);
};
