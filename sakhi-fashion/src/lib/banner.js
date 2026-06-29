// Single source of truth for the hero banner video.
// The admin panel writes here; the Hero reads from here.

export const BANNER_KEY = "sakhi-banner-video";
export const BANNER_EVENT = "sakhi-banner-change";

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80";

export function getBannerVideo() {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(BANNER_KEY) || "";
  } catch {
    return "";
  }
}

export function setBannerVideo(url) {
  try {
    localStorage.setItem(BANNER_KEY, url);
    window.dispatchEvent(new CustomEvent(BANNER_EVENT, { detail: url }));
  } catch (e) {
    console.error("Could not save banner video:", e);
  }
}

export function clearBannerVideo() {
  try {
    localStorage.removeItem(BANNER_KEY);
    window.dispatchEvent(new CustomEvent(BANNER_EVENT, { detail: "" }));
  } catch (e) {
    console.error("Could not clear banner video:", e);
  }
}
