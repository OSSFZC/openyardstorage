import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import CardsFeatures from "../../components/CardsFeatures";
import LeftalignedCards from "../../components/LeftalignedCards";
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import { FiFileText, FiClock, FiShield, FiMap } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
// import { sub } from "framer-motion/client";

export default function CargoServiceDubai() {
  useMeta(
    "Cargo Service Dubai | Openyard Storage FZC Logistics UAE",
    "Move your shipments with confidence. Openyard Storage FZC provides professional Cargo Service- Dubai backed by secure handling & timely delivery. Enquire today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        // eyebrow="Effortless Cargo Transition to Dubai"
        title="Cargo Service to Dubai from Sharjah, UAE"
        subtitle="OSS provides a reliable cargo service to Dubai, connecting its 260,000+ square-ft Sharjah storage network to Dubai's ports, free zones, and business districts. Businesses use OSS for scheduled freight runs, cross-docking, and full-load or part-load cargo movement between the two Emirates, backed by real-time shipment tracking and a dedicated fleet."
        buttonText="Request a Dubai Cargo Service Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
        title="Used by Trading, Manufacturing, and Retail Companies Moving Cargo to Dubai"
        description="Companies relying on OSS's shipping cargo services in Dubai include commodity trading firms, automotive component distributors, FMCG brands, and e-commerce sellers who need consistent transit between Sharjah warehouses and Dubai delivery points."
      />
      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating Cargo Complexities?"
        title="Why Businesses Struggle with Moving Shipping Cargo Services Between Dubai and Sharjah"
        description="Companies without a dedicated cargo service to Dubai commonly face four recurring problems"
        // description2="OSS FZC simplifies logistics with streamlined shipping processes, real-time tracking, and expert cargo management for businesses shipping to Dubai."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiMap,
            title: "Unreliable transit schedules",
            text: "Ad hoc freight bookings cause delays that disrupt delivery commitments in Dubai.",
          },
          {
            icon: FiClock,
            title: "No shipment visibility",
            text: "Without tracking, businesses can't confirm cargo location or estimated arrival time.",
          },
          {
            icon: FiShield,
            title: "Inconsistent handling standards",
            text: " Cargo passed between multiple third parties increases the risk of damage or loss in transit.",
          },
          {
            icon: FiFileText,
            title: "High per-trip costs",
            text: "Businesses paying for one-off freight runs lose the cost efficiency of scheduled, consolidated shipping.",
          },
        ]}
      />

      {/* Solving Your Storage Challenges */}
      <LeftalignedCards
        // eyebrow="Solving Your Storage Challenges"
        title="Simplifying Your Cargo Journey"
        description="OSS addresses each of these directly through its cargo service to Dubai"
        features={[
          {
            image: "/images/services/time-manager.png",
            title: "Fixed and on-demand transit schedules  ",
            description:
              " cargo moves on a set routing between Sharjah and Dubai, with additional capacity available for urgent shipments.",
          },
          {
            image: "/images/services/real-time-strategy.png",
            title: "Real-time shipment tracking",
            description:
              "clients monitor cargo status from dispatch to delivery through a digital portal.",
          },
          {
            image: "/images/services/distribution.png",
            title: "Single-operator handling ",
            description:
              " cargo stays within the OSS network from warehouse to final delivery, reducing handling risk.",
          },
          {
            image: "/images/services/risk-management.png",
            title: "Consolidated freight options ",
            description:
              "part-load and full-load cargo services in Dubai lower per-shipment costs for smaller consignments.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference"
        title="Cargo Service to Dubai Built Around Delivery Reliability"
        description="OSS operates a dedicated cargo service to Dubai that connects its Sharjah warehousing network directly to Dubai's ports, free zones, and commercial areas. This removes the need for businesses to coordinate separate storage and transport providers.
OSS is a storage and logistics company based in Sharjah, and cargo movement to Dubai is managed as an extension of that warehousing network. Each shipping schedule is set around cargo type, delivery deadline, and consignment volume."
        features={[
          {
            image: "/images/services/track.png",
            title: "Direct highway routing",
            description:
              "access to the E311 and E611 corridors shortens transit time between Sharjah and Dubai.",
          },
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "cargo status is logged at each handling point, reducing manual tracking errors.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained freight staff",
            description:
              "dispatch coordinators and drivers manage loading, transit, and delivery confirmation.",
          },
          {
            image: "/images/services/delivery-truck.png",
            title: "Flexible load sizes ",
            description:
              "businesses can book full-truckload, part-load, or pallet-level cargo service to Dubai depending on shipment volume.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end coordination  ",
            description:
              "inbound storage at Sharjah connects directly to outbound delivery in Dubai without added transfer points.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Cargo Services"
        title="Cargo and Freight Services Offered Between Sharjah and Dubai"
        services={[
          {
            title: "Scheduled Cargo Service to Dubai",
            image: "/images/services/schedule.jpg",
            description:
              "Regular freight runs on fixed routes and timings for businesses with recurring shipment needs.",
          },
          {
            title: "On-Demand Freight Dispatch",
            image: "/images/services/dispatch.jpg",
            description:
              "Urgent or one-off cargo movement to Dubai for time-sensitive orders and stock transfers.",
          },
          {
            title: "Full-Load and Part-Load Shipping",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Flexible load options so businesses only pay for the freight capacity they use.",
          },
          {
            title: "Cross-Docking to Dubai",
            image: "/images/services/custom-storage.jpg",
            description:
              "Cargo moves from inbound container arrival at Sharjah directly to outbound Dubai delivery, cutting handling time.",
          },
          {
            title: "Warehouse-to-Delivery Coordination",
            image: "/images/services/maintenance.jpg",
            description:
              "Storage and cargo shipping are managed under a single contract, removing the need to coordinate separate providers.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking gives clients visibility into cargo location, transit status, and delivery confirmation.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Warehousing Configured for Five Business Sectors"
        features={[
          {
            image: "/images/services/truck.png",
            title: "FMCG and General Trading",
            description:
              "high-density racking and picking lanes support faster product rotation.",
          },
          {
            image: "/images/services/industrial-park.png",
            title: "Industrial Manufacturing ",
            description:
              "staging areas hold raw materials, production tools, and finished machinery before scheduled distribution.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce Fulfillment",
            description:
              "space scales to handle high order volumes during peak sales periods.",
          },
          {
            image: "/images/services/engineer.png",
            title: "Construction and Infrastructure ",
            description:
              " open-yard and covered storage hold building materials, machinery, and structural components.",
          },
          {
            image: "/images/services/world.png",
            title: "Import and Export Operators ",
            description:
              "cross-docking and customs-compliant processing support fast ocean and air freight transit.",
          },
        ]}
      />

      {/* /Free Zone Storage Section */}
      <FreeZoneFeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone Cargo Access for Dubai-Bound Shipments"
        description="Businesses trading internationally need cargo shipping that supports duty-efficient handling and simplified customs processing. OSS's cargo service to Dubai connects to major free zones and shipping points, giving trading firms a direct route from Sharjah storage to Dubai-based distribution without added customs delays."
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Thousands of items securely stored and satisfied clients across Sharjah."
        stats={[
          {
            value: 100,
            suffix: "%",
            label: "Sharjah–Dubai Route Coverage",
            description:
              "Scheduled freight runs connecting all major Dubai business districts.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Enterprise Client Base",
            description: "Active manufacturing, trading, and retail clients.",
          },
          {
            value: 99.9,
            suffix: "%",
            decimals: 1,
            label: "On-Time Delivery Rate",
            description: "For scheduled cargo service to Dubai shipments.",
          },
          {
            value: 12000,
            suffix: "+",
            unit: "Pallets",
            label: "Monthly Freight Throughput",
            description: "Processed and dispatched monthly.",
          },
          {
            value: 100,
            suffix: "%",
            label: "Fleet Availability",
            description:
              "Dedicated vehicles for both scheduled and on-demand freight.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Cargo Shipping Experience Based in the UAE",
            description:
              "OSS provides cargo service to Dubai as part of its broader storage and 3PL logistics operation across the United Arab Emirates. OSS invests in fleet management, digital tracking systems, and trained dispatch staff to keep freight moving on schedule.\n\n OSS is a storage and logistics company based in Sharjah. Clients using OSS's shipping cargo services in Dubai get dedicated account management, flexible shipping schedules, and a logistics team focused on delivery reliability.",
          },
          {
            title: "Our Team",
            subtitle: "Logistics Staff Managing Cargo Movement to Dubai",
            description:
              "OSS freight operations are run by dispatch coordinators, drivers, and logistics analysts. The team manages load planning, route scheduling, and delivery confirmation to keep cargo service to Dubai shipments on time.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Cargo Service to Dubai"
        faqs={[
          {
            question: "What types of cargo does OSS transport to Dubai?",
            answer:
              "OSS moves general trading commodities, retail stock, electronics, industrial raw materials, and palletized commercial goods as part of its cargo service to Dubai. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question:
              "Does OSS offer scheduled or on-demand shipping cargo services in Dubai?",
            answer:
              "Both. OSS runs fixed-schedule freight for recurring shipments and on-demand dispatch for urgent or one-off cargo movement to Dubai.",
          },
          {
            question:
              "Can businesses book part-load shipments instead of full-truckload freight?",
            answer:
              "Yes. OSS offers full-load and part-load options, so smaller consignments don't require booking full freight capacity.",
          },
          {
            question: "How does OSS track cargo in transit to Dubai?",
            answer:
              "Cargo status is logged digitally at each handling point. Clients can monitor shipment location and delivery status through a tracking portal.",
          },
          {
            question:
              "Does OSS handle both storage and cargo shipping under one contract?",
            answer:
              "Yes. Warehousing at Sharjah and cargo service to Dubai are managed together, removing the need to coordinate separate storage and transport providers.",
          },
          {
            question:
              "How is OSS different from a standalone Dubai freight forwarder?",
            answer:
              "A standalone freight forwarder typically handles transport only. OSS combines warehousing, inventory tracking, and shipping cargo services in Dubai under a single logistics provider.",
          },
          {
            question: "Can shipment volume scale during peak sales periods?",
            answer:
              "Yes. Freight capacity adjusts to order volume, so retail and e-commerce clients can increase shipment frequency during high-demand periods.",
          },
          {
            question:
              "Does OSS's cargo service to Dubai connect with free zones?",
            answer:
              "Yes. Routes connect to major Dubai free zones and shipping points, supporting duty-efficient handling for international trade.",
          },
          {
            question: "How does OSS reduce total shipping costs to Dubai?",
            answer:
              "Consolidated freight options, direct highway routing via the E311 and E611, and combined storage-and-transport contracts reduce per-shipment costs compared to booking separate providers.",
          },
          {
            question:
              "What operational standards does OSS follow for cargo handling?",
            answer:
              "OSS follows standard freight safety protocols, using trained drivers, defined load handling procedures, and regular vehicle safety checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo to Dubai with a Dedicated Logistics Partner"
        description="Whether you need scheduled freight runs, on-demand dispatch, or full-load shipping cargo services in Dubai, OSS has the fleet and warehouse network to support it. Contact the OSS logistics team for a shipping schedule and quote."
        buttonText=" Contact OSS for a Cargo Service to Dubai Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
