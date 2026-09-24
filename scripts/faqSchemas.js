export const faqSchemas = {
  "/": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OSS offers open yard storage, warehousing, freight shipping, air freight, land transport, customs clearance, and international logistics and transport services for businesses across the UAE.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a shipment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact the OSS team through the website or by phone to share your cargo details, including load type, volume, and destination. A logistics coordinator will confirm scheduling and provide a quote before dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "What types of goods do you handle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OSS handles general trading commodities, industrial equipment, machinery, containers, bulk materials, and palletized cargo. As one of the shipping companies in UAE working across multiple sectors, OSS follows standard handling procedures for non-hazardous cargo and separate safety procedures for specialized loads.",
        },
      },
    ],
  },
};