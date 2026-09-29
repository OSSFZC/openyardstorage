import homeSchemas from "./faqSchemas/home.js";
import locationSchemas from "./faqSchemas/locations.js";
import industrySchemas from "./faqSchemas/industries.js";
import serviceSchemas from "./faqSchemas/services.js";
import servicePageSchemas from "./faqSchemas/servicePages.js";

export const faqSchemas = {
  ...homeSchemas,
  ...locationSchemas,
  ...industrySchemas,
  ...serviceSchemas,
  ...servicePageSchemas,
};
