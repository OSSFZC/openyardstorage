const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "OSS FZC Logistics",
  image: "https://www.openyardstorage.com/logos/oss-logo.png",
  "@id": "https://www.openyardstorage.com/#localbusiness",
  url: "https://www.openyardstorage.com/",
  telephone: "+971 50 9322 335",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hamriya Free Zone",
    addressLocality: "Sharjah",
    postalCode: "42163",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.4597221,
    longitude: 55.4925864,
  },
  sameAs: [
    "https://www.facebook.com/ossfzchamriyah/",
    "https://www.linkedin.com/company/oss-fzc/home/",
  ],
};

// Only rendered on the Home and Contact Us pages.
export const localBusinessSchemas = {
  "/": localBusinessSchema,
  "/contact-us": localBusinessSchema,
};
