import warehousingData from "../../src/data/industries/warehousing.js";
import shipsparesData from "../../src/data/industries/shipspares.js";
import offshoreLogisticsData from "../../src/data/industries/offshorelogistics.js";
import inventoryManagementData from "../../src/data/industries/inventorymanagement.js";
import heavyEquipmentData from "../../src/data/industries/heavyequipment.js";
import foodBeveragesData from "../../src/data/industries/foodbeverages.js";
import medicalData from "../../src/data/industries/medical.js";

export default {
  "/industries/projectforwarding": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is project forwarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project forwarding manages heavy, oversized, or complex cargo for large-scale projects through detailed planning and controlled execution.",
        },
      },
      {
        "@type": "Question",
        name: "Can OSS Logistics handle out-of-gauge cargo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in heavy lift and abnormal loads, including permits, route planning, and specialized equipment coordination.",
        },
      },
      {
        "@type": "Question",
        name: "Does OSS support remote or difficult site deliveries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We regularly deliver to remote, infrastructure-limited, and high-risk project locations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide on-site supervision at destination?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our experts oversee unloading, lifting operations, and final positioning on-site.",
        },
      },
      {
        "@type": "Question",
        name: "When should OSS be involved in a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Early involvement during planning and procurement ensures efficient logistics design and cost control.",
        },
      },
      {
        "@type": "Question",
        name: "What transport modes do you manage for project cargo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle sea, air, road, and multimodal transport based on cargo size, weight, and urgency.",
        },
      },
      {
        "@type": "Question",
        name: "Can OSS arrange charter vessels or aircraft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer full and part vessel charters and aircraft charters for specialized project requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you conduct feasibility and route studies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we perform feasibility assessments, route surveys, and risk analysis before execution.",
        },
      },
      {
        "@type": "Question",
        name: "How do you manage regulatory and customs compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team ensures full compliance with local and international regulations to avoid delays.",
        },
      },
      {
        "@type": "Question",
        name: "Will I receive regular project status updates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide continuous progress tracking and clear reporting throughout the project lifecycle.",
        },
      },
    ],
  },
  "/industries/distribution": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of distribution does OSS support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OSS supports regional, cross-border, last-mile, multi-point, and project-based distribution across multiple industries.",
        },
      },
      {
        "@type": "Question",
        name: "Can distribution be managed directly from OSS storage facilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our distribution services are fully integrated with our storage and open yard facilities, enabling faster dispatch and reduced handling.",
        },
      },
      {
        "@type": "Question",
        name: "How does OSS ensure on-time deliveries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through structured staging, route planning, real-time coordination, and disciplined dispatch processes.",
        },
      },
      {
        "@type": "Question",
        name: "Is distribution scalable for seasonal or project-based demand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our flexible infrastructure and planning allow us to scale operations based on volume fluctuations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer real-time tracking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Clients receive real-time updates and visibility throughout the distribution lifecycle.",
        },
      },
      {
        "@type": "Question",
        name: "Can OSS handle multi-location deliveries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We specialize in complex, multi-point distribution with route optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How do you manage delivery exceptions or delays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our teams proactively monitor operations and implement corrective actions immediately to minimize disruption.",
        },
      },
      {
        "@type": "Question",
        name: "What industries benefit most from OSS distribution services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FMCG, industrial, automotive, construction, energy, and retail sectors benefit significantly from our model.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide reporting and performance metrics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer detailed operational reports to support planning and optimization.",
        },
      },
      {
        "@type": "Question",
        name: "What makes OSS different from standard distribution providers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our integrated yard-based model, operational discipline, scalability, and client-focused execution set us apart.",
        },
      },
    ],
  },
  "/industries/warehousing": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: warehousingData.faq.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
  "/industries/shipspares": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: shipsparesData.faq.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
  "/industries/offshorelogistics": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: offshoreLogisticsData.faq.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
  "/industries/inventorymanagement": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: inventoryManagementData.faq.faqs.map(
      ({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      }),
    ),
  },
  "/industries/heavyequipment": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: heavyEquipmentData.faq.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
  "/industries/foodbeverages": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foodBeveragesData.faq.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
  "/industries/medical": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: medicalData.faq.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
};
