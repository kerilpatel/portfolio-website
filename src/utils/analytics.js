const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

export const initGA = () => {
  if (initialized) return;
  if (!import.meta.env.PROD) return;
  if (!MEASUREMENT_ID) {
    console.warn(
      "[analytics] VITE_GA_MEASUREMENT_ID is not set — GA disabled.",
    );
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

export const trackPageview = (path) => {
  if (!initialized || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path || window.location.pathname,
  });
};

export const trackEvent = (name, params = {}) => {
  if (!initialized || !window.gtag) return;
  window.gtag("event", name, params);
};
