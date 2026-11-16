// Pages that get a self-referencing <link rel="canonical"> (from the On-Page SEO sheet).
// Used by scripts/prerender.js (initial HTML) and src/hooks/useMeta.jsx (in-app navigation).
// Blog posts (/blogs/...) get one automatically, so they are not listed here.
// Left out on purpose: /projects/marine-logistics-sharjah and /projects/warehouse-storage-space
// (no content yet) and /services/container-logistics-transport-sharjah (301 in vercel.json).

export const SITE_URL = "https://www.openyardstorage.com";

export const canonicalRoutes = [
  "/",
  "/about/our-story",
  "/about/founder",
  "/about/vision-mission",
  "/about/inspiration",
  "/contact-us",
  "/terms",
  "/news",
  "/services",
  "/services/break-bulk-cargo-clearance",
  "/services/medical-equipment-healthcare-storage",
  "/services/logistics-transport-sharjah",
  "/services/inventory-management-solutions",
  "/services/international-truck-shipping",
  "/services/health-care-storage-solutions",
  "/services/freight-shipping-service",
  "/services/container-cross-stuffing",
  "/services/lashing-repacking-services",
  "/services/shipping-logistic-management",
  "/services/small-storage-warehouse-for-rent",
  "/services/hamriyah-free-zone-warehouse-rent",
  "/services/storage-space-sharjah",
  "/services/storage-warehouse-dubai",
  "/services/storage-space-rent-dubai",
  "/services/storage-facility-abu-dhabi",
  "/services/chiller-storage-warehouse",
  "/services/freight-logistics-trucking",
  "/services/forwarding-freight-companies",
  "/services/international-shipping-forwarder",
  "/services/freight-forwarding-companies-sharjah",
  "/services/cargo-service-dubai",
  "/service/logistic-truck-company-sharjah",
  "/service/container-freight-logistics",
  "/service/container-logistics-transport-sharjah",
  "/service/freight-logistics-services",
  "/service/freight-forwarding-management",
  "/service/hamriyah-port-sharjah",
  "/service/international-shipping-air",
  "/service/transport-logistic-service-sharjah",
  "/service/shipping-companies-sharjah",
  "/service/warehouse-storage-space-for-rent",
  "/services/yard-for-rent-sharjah",
  "/services/temperature-controlled-warehouse",
  "/services/ship-spare-clearance",
  "/services/wooden-crating",
  "/open-yard-storage-facility",
  "/industries/medical",
  "/industries/manufacturing",
  "/industries/construction",
  "/industries/automotive",
  "/industries/oilgas",
  "/industries/fmcg",
  "/industries/retail",
  "/industries/pharmaceuticals",
  "/industries/chemicals",
  "/industries/metals",
  "/industries/foodbeverages",
  "/industries/heavyequipment",
  "/industries/inventorymanagement",
  "/industries/offshorelogistics",
  "/industries/shipspares",
  "/industries/warehousing",
  "/industries/distribution",
  "/industries/projectforwarding",
  "/locations/shipping-companies-in-sharjah",
  "/locations/hamriyah-port-sharjah",
  "/locations/cargo-service-to-dubai",
  "/locations/storage-facility-in-sharjah",
  "/projects/weatherford-drilling-international",
  "/projects/apache",
  "/projects/trinidad-drilling",
  "/services/customs-clearance-services",
];

/** Canonical URL for a path, or null when the page should not have one. */
export function canonicalFor(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (canonicalRoutes.includes(path) || /^\/blogs\/[^/]+$/.test(path)) {
    return SITE_URL + (path === "/" ? "/" : path);
  }
  return null;
}
