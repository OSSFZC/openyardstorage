import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalFor } from "../data/canonicalRoutes";

// Keeps <link rel="canonical"> in step with the current page during in-app navigation.
// The first page load already has the right tag from scripts/prerender.js.
export default function CanonicalTag() {
  const { pathname } = useLocation();

  useEffect(() => {
    const href = canonicalFor(pathname);
    let link = document.querySelector("link[rel='canonical']");

    if (!href) {
      link?.remove();
      return;
    }
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [pathname]);

  return null;
}
