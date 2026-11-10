/**
 * Lead source tracking.
 * On the visitor's first page view in this tab we remember where they came from
 * (UTM tags, Google Ads click id, referrer, landing page). The contact forms send
 * it along with the enquiry so the lead dashboard can show "leads by source".
 */
const KEY = "oss_attribution";
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

function read() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

/** Call once when the app starts. Keeps the first page view's values only. */
export function captureAttribution() {
  if (typeof window === "undefined" || read()) return;
  const params = new URLSearchParams(window.location.search);
  const data = {};
  for (const k of [...UTM, "gclid"]) {
    const v = params.get(k);
    if (v) data[k] = v.slice(0, 200);
  }
  // Only count referrers from other sites (not our own pages or the /app dashboard).
  let referrer = "";
  try {
    if (document.referrer && new URL(document.referrer).host !== window.location.host) referrer = document.referrer;
  } catch { /* ignore malformed referrer */ }
  if (referrer) data.referrer = referrer.slice(0, 500);
  data.landing_page = (window.location.pathname + window.location.search).slice(0, 500);
  try {
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch { /* private mode / storage blocked: nothing to remember */ }
}

/** The values captured on the first page view ({} if none). */
export function getAttribution() {
  return read() || {};
}

/** Tell GTM a lead was sent; call just before redirecting to /thank-you. */
export function trackLead(form) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", form });
}
