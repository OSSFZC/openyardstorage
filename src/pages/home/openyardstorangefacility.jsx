import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import LeftalignedCards from "../../components/LeftalignedCards";
import CardsFeatures from "../../components/CardsFeatures";

import { FiBox, FiShield, FiClock, FiDollarSign } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function OpenYardStorage() {
  useMeta(
    "Open Yard Storage for Rent in Sharjah | Openyard Storage FZC",
    "Openyard Storage FZC offers open yard storage space in Sharjah with flexible options for a yard for rent in Sharjah for containers & machinery. Get a quote!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        // eyebrow="Maximize Your Warehousing Efficiency"
        title="Open Yard Storage for Rent in Sharjah"
        subtitle="OSS provides open yard storage for rent in Sharjah for heavy equipment, containers, vehicles, construction materials, and oversized cargo, offering secure facilities, flexible rental terms, scalable storage solutions, and convenient highway access for efficient operations."
        buttonText="Request an Open Yard Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/warehousing.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Is Your Current Storage Solution Holding You Back?"
        title="Why Businesses Need Reliable Open Yard Storage"
        description="Many businesses handling large outdoor assets face storage challenges that impact operational efficiency and project timelines."
        description2="Common issues include"
        rightTitle="Solutions to Your Storage Dilemmas"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiBox,
            title: "Limited outdoor storage availability",
            text: "Many industrial facilities prioritise enclosed warehouses, leaving limited secure yard space for oversized assets.",
          },
          {
            icon: FiShield,
            title: "Poor security",
            text: "Unsecured outdoor areas increase the risk of theft, damage, and unauthorised access.",
          },
          {
            icon: FiClock,
            title: "Restricted vehicle access",
            text: "Large trailers, cranes, and heavy transport vehicles often struggle to access smaller storage sites.",
          },
          {
            icon: FiDollarSign,
            title: "Inflexible rental agreements",
            text: "Businesses managing temporary projects require storage without long-term lease commitments.",
          },
        ]}
      />

      <LeftalignedCards
        // eyebrow="The OSS Difference "
        title="Secure Outdoor Storage That Works for Your Business"
        subtitle="OSS solves these challenges by providing open yard storage for rent in Sharjah with flexible rental options designed for industrial operations."
        // description="What businesses get from renting small storage with OSS:"
        features={[
          {
            image: "/images/services/stock.png",
            title: "Large outdoor storage areas ",
            description:
              "space for machinery, containers, vehicles, and project materials.",
          },
          {
            image: "/images/services/api.png",
            title: "Flexible rental terms ",
            description:
              "short-term and long-term agreements to suit changing project requirements.",
          },
          {
            image: "/images/services/insurance.png",
            title: "Secure storage environment ",
            description:
              "monitored facilities with controlled site access and perimeter security.",
          },
          {
            image: "/images/services/speed.png",
            title: "Excellent transport connectivity ",
            description:
              "quick access to major highways for efficient cargo movement.",
          },
        ]}
      />

 
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Industrial Open Yard for Rent in Sharjah Designed for Heavy-Duty Operations"
        subtitle="OSS delivers open yard storage space in Sharjah that supports businesses storing equipment and materials that cannot be accommodated inside conventional warehouses. Every storage area is designed to simplify loading, unloading, vehicle movement, and inventory management while maintaining high operational standards.
Each yard for rent in Sharjah is selected based on storage volume, equipment size, vehicle access requirements, and expected project duration, helping businesses avoid unnecessary costs while maintaining operational flexibility."
        description="Benefits of choosing OSS open yard storage include"
        features={[
          {
            image: "/icons/custom.png",
            title: "24/7 monitored security",
            description:
              "CCTV surveillance, controlled entry points, and secure perimeter fencing. ",
          },
          {
            image: "/icons/security.png",
            title: "Easy heavy vehicle access ",
            description:
              "suitable for trailers, cranes, forklifts, and oversized transport.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Flexible storage layouts ",
            description:
              "customised space allocation based on equipment size and project needs.",
          },
          {
            image: "/icons/support.png",
            title: "Strategic location  ",
            description:
              "convenient access to E311 and E611 highways for efficient logistics.",
          },
          {
            image: "/icons/support.png",
            title: "Scalable rental options ",
            description:
              "increase or reduce storage capacity as operational requirements change.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Storage Services"
        title="Open Yard Storage Solutions"
        services={[
          {
            title: "Equipment Storage",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Secure outdoor storage for construction equipment, generators, cranes, and heavy machinery.",
          },
          {
            title: "Container Storage",
            image: "/images/services/custom-storage.jpg",
            description:
              "Dedicated yard space for loaded or empty shipping containers with convenient transport access.",
          },
          {
            title: "Construction Material Storage",
            image: "/images/services/security.jpg",
            description:
              "Store steel, pipes, timber, concrete products, scaffolding, and bulk project materials safely.",
          },
          {
            title: "Vehicle and Fleet Storage",
            image: "/images/services/logistics.jpg",
            description:
              "Secure parking and storage for commercial vehicles, trailers, buses, and industrial fleets.",
          },
          {
            title: "Project-Based Yard Rental",
            image: "/images/services/maintenance.jpg",
            description:
              "Flexible outdoor storage for temporary construction, infrastructure, and industrial projects.",
          },
          {
            title: "Oversized Cargo Storage",
            image: "/images/services/maintenance.jpg",
            description:
              "Space for large industrial components, fabricated structures, transformers, and heavy equipment that require outdoor handling.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Open Yard Storage Supporting Multiple Industries"
        features={[
          {
            image: "/images/services/truck.png",
            title: "Construction Companies ",
            description:
              "secure storage for machinery, building materials, scaffolding, and project equipment.",
          },
          {
            image: "/images/services/industrial-park.png",
            title: "Logistics Providers",
            description:
              "outdoor storage for trailers, containers, and transport assets awaiting distribution.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Oil and Gas Contractors ",
            description:
              "storage for pipes, fabrication materials, and field equipment.",
          },
          {
            image: "/images/services/engineer.png",
            title: "Manufacturing Businesses ",
            description:
              "overflow storage for raw materials and finished industrial products.",
          },
          {
            image: "/images/services/world.png",
            title: "Infrastructure and Engineering Firms ",
            description:
              "outdoor space for heavy equipment, project components, and temporary site inventory.",
          },
        ]}
      />

      <FeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Convenient Access to Sharjah Free Zones"
        description="Businesses involved in international trade benefit from open yard storage space in Sharjah located near SAIF Zone and Hamriyah Free Zone. The location simplifies transportation, customs coordination, and cargo movement while reducing travel time between storage facilities and major industrial areas."
      />

      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Flexible storage backed by secure facilities and strategic connectivity."
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Storage Network",
            description: "Across OSS facilities.",
          },
          {
            value: 1,
            unit: "Flexible Terms",
            label: "Rental Flexibility",
            description: "Short-term and long-term rental options available.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Active Business Clients",
            description: "Manufacturing, logistics, and trading companies.",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Site Security",
            description: "CCTV surveillance with controlled access.",
          },
          {
            value: 2,
            unit: "Highways",
            label: "Transport Connectivity",
            description:
              "Direct access to the E311 and E611 highway corridors.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Outdoor Storage Backed by Nearly Two Decades of Logistics Experience",
            description:
              "Since 2006, OSS has supported businesses throughout Sharjah with reliable industrial storage and logistics solutions. Businesses looking for open yard storage for rent in Sharjah benefit from secure facilities, flexible contracts, experienced logistics support, and storage solutions designed around operational requirements rather than fixed rental models. Whether storing construction equipment, industrial materials, containers, or transport fleets, OSS provides dependable outdoor storage that grows alongside business operations.",
          },
          {
            title: "Our Team",
            subtitle: "Experienced Professionals Managing Every Storage Site",
            description:
              "OSS facilities are operated by experienced warehouse coordinators, logistics professionals, safety personnel, and site supervisors who ensure outdoor storage operations remain organised, secure, and efficient for businesses of every size.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Warehouse Storage Space For Rent Questions Answered"
        faqs={[
          {
            question: "How is pricing calculated?",
            answer:
              "Pricing is based on the amount of outdoor space required, rental duration, storage type, and any operational requirements such as equipment access or vehicle movement.",
          },
          {
            question: "What is open yard storage used for?",
            answer:
              "Open yard storage is designed for equipment, construction materials, vehicles, shipping containers, steel products, oversized cargo, and industrial assets that do not require enclosed warehouse storage.",
          },
          {
            question: "Who typically uses open yard storage?",
            answer:
              "Construction companies, logistics providers, engineering contractors, transport businesses, manufacturing companies, oil and gas contractors, and equipment rental firms commonly use outdoor storage facilities.",
          },
          {
            question: "Is the yard secured?",
            answer:
              "Yes. Every OSS storage facility includes CCTV surveillance, perimeter fencing, controlled entry, and monitored access to protect stored assets.",
          },
          {
            question: "Can heavy trucks access the storage yard?",
            answer:
              "Yes. The facilities are designed to accommodate trailers, articulated trucks, cranes, forklifts, and other heavy transport vehicles with sufficient manoeuvring space.",
          },
          {
            question: "Is short-term rental available?",
            answer:
              "Yes. OSS offers both short-term and long-term rental options, making it suitable for temporary construction projects, seasonal operations, and ongoing industrial storage.",
          },
          {
            question: "What materials can be stored in the yard?",
            answer:
              "Businesses commonly store construction materials, pipes, steel sections, machinery, shipping containers, industrial equipment, vehicles, scaffolding, timber, and oversized project components.",
          },
          {
            question: "Can storage space be increased during a project?",
            answer:
              "Yes. Businesses can scale their storage area as project requirements change, subject to space availability within the OSS facility network.",
          },
          {
            question: "Is the facility located near major transport routes?",
            answer:
              "Yes. OSS facilities offer convenient access to the E311 and E611 highways, helping businesses reduce transport time and improve operational efficiency.",
          },
          {
            question: "Why choose OSS for open yard storage?",
            answer:
              "OSS combines secure facilities, flexible contracts, experienced logistics support, strategic locations, and scalable outdoor storage solutions that help businesses manage equipment and materials efficiently while reducing operational complexity.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Secure Outdoor Storage That Fits Your Business Requirements"
        description="Whether you need temporary project storage or a long-term yard for rent in Sharjah, OSS provides secure outdoor facilities with flexible rental options and excellent transport access. Speak with our team today to discuss your storage requirements and receive a customised quotation."
        buttonText="Contact OSS for an Open Yard Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
