import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageKeywords = {
  "/services/storage-space-sharjah": [
    "storage space in sharjah",
    "freezone storage space in sharjah",
    "storage & logistics company sharjah",
  ],
  "/services/cargo-service-dubai": [
    "cargo service to dubai",
    "shipping cargo services dubai",
  ],
  "/": ["shipping companies in uae", "international logistics and transport"],
  "/locations/hamriyah-port-sharjah": ["hamriyah port sharjah"],
  "/industries/warehousing": [
    "warehouse companies in uae",
    "warehouse storage of healthcare logistics products, medicines, vaccines",
  ],
  "/services/small-storage-warehouse-for-rent": [
    "small storage warehouse for rent",
  ],
  "/services/storage-warehouse-dubai": ["storage warehouse dubai"],
  "/service/warehouse-storage-space-for-rent": [
    "warehouse storage space for rent",
    "storage warehouse for rent",
    "temperature control warehouse storage",
  ],
  "/open-yard-storage-facility": [
    "open yard storage for rent sharjah",
    "open yard storage space in sharjah",
    "yard for rent in sharjah",
  ],
  "/services/storage-space-rent-dubai": [
    "storage space for rent in dubai",
    "rent storage in dubai",
    "storage spaces in dubai",
  ],
  "/services/storage-facility-abu-dhabi": ["storage facility in abu dhabi"],
  "/services/hamriyah-free-zone-warehouse-rent": [
    "hamriyah free zone warehouse rent",
  ],
  "/services/shipping-logistic-management": [
    "shipping and logistic management",
  ],
  "/service/container-freight-logistics": [
    "cargo freight forwarders",
    "cargo transportation and logistics",
    "marine logistics companies sharjah",
    "marine logistics services sharjah",
    "sea air cargo & logistics",
    "container freight logistics",
    "logistic shipping service",
    "carrier in shipping and logistics",
  ],
  "/services/freight-shipping-service": ["freight shipping service"],
  "/service/container-logistics-transport-sharjah": [
    "container shipping services sharjah",
    "container logistics transport in sharjah",
  ],
  "/services/international-shipping-forwarder": [
    "international shipping forwarder",
  ],
  "/locations/shipping-companies-in-sharjah": [
    "shipping companies in sharjah",
    "logistics companies in sharjah",
  ],
  "/service/transport-logistic-service-sharjah": [
    "transport logistic service in sharjah",
  ],
  "/service/international-shipping-air": [
    "air freight in uae",
    "international shipping air",
  ],
  "/service/shipping-companies-sharjah": [
    "ship management companies in sharjah",
  ],
  "/industries/medical": ["medical equipment freight service and logistics"],
  "/services/forwarding-freight-companies": ["forwarding freight companies"],
  "/service/freight-forwarding-management": ["freight forwarding management"],
  "/services/freight-logistics-trucking": ["freight logistics trucking"],
  "/service/freight-logistics-services": ["freight & logistics services"],
  "/services/freight-forwarding-companies-sharjah": [
    "freight forwarding companies in sharjah",
  ],
  "/service/logistic-truck-company-sharjah": [
    "logistic truck company in sharjah",
  ],
  "/services/logistics-transport-sharjah": [
    "logistics transport service in sharjah",
  ],
  "/services/international-truck-shipping": ["international truck shipping"],
  "/services/chiller-storage-warehouse": ["chiller storage warehouse"],
  "/news": [
    "list of logistics companies in uae",
    "best storage companies in dubai",
  ],
};

export default function useMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    let keywordsMeta = document.querySelector("meta[name='keywords']");
    const keywords = pageKeywords[pathname.replace(/\/+$/, "") || "/"];

    if (keywords) {
      if (!keywordsMeta) {
        keywordsMeta = document.createElement("meta");
        keywordsMeta.name = "keywords";
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.content = keywords.join(", ");
    } else if (keywordsMeta) {
      keywordsMeta.remove();
    }
  }, [title, description, pathname]);
}
