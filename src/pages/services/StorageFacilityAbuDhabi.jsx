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
import { FiPackage, FiDollarSign, FiShield, FiClock } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageFacilityAbuDhabi() {
  useMeta(
    "Storage Facility Serving Abu Dhabi | Openyard Storage FZC",
    "Built for businesses that need reliable storage,Openyard Storage FZC offers a storage facility in Abu Dhabi with flexible warehousing solutions.Contact us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        // eyebrow="Secure. Accessible. Reliable."
        title="Storage Facility Serving Abu Dhabi"
        subtitle="OSS provides secure, scalable warehousing in Sharjah for Abu Dhabi businesses, helping trading, manufacturing, and import-export companies store inventory efficiently while reducing costs and ensuring reliable transport to Abu Dhabi."
        buttonText="Request an Abu Dhabi Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Facing Steep Challenges with Your Storage Needs?"
        title="Why Businesses Struggle to Find the Right Storage Facility Near Abu Dhabi"
        description="Businesses searching for warehouse space near Abu Dhabi commonly run into four problems:"
        // description2="At Open Yard Storage, we offer modern storage facilities with advanced security, flexible access, and scalable solutions designed to eliminate these challenges."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "High real estate costs. ",
            text: "Leasing storage directly in Abu Dhabi carries a higher cost than nearby regional alternatives.",
          },
          {
            icon: FiDollarSign,
            title: "Limited flexible capacity.",
            text: "Many Abu Dhabi storage providers require large minimum footprints or long-term-only leases.",
          },
          {
            icon: FiShield,
            title: "No real-time stock visibility",
            text: " Manual tracking systems cause inventory discrepancies and delayed order fulfillment.",
          },
          {
            icon: FiClock,
            title: "Slow transfer to delivery points",
            text: "Storage located too far from Abu Dhabi's core business and industrial districts adds unnecessary transit time.",
          },
        ]}
      />

      <LeftalignedCards
        // eyebrow="The OSS Difference "
        title="Smart Solutions for Abu Dhabi Storage Challenges"
        subtitle="OSS addresses each of these with a storage facility positioned to serve Abu Dhabi efficiently:"
        // description="What businesses get from renting small storage with OSS:"
        features={[
          {
            image: "/images/locations/money.png",
            title: "Lower-cost regional storage ",
            description:
              "Sharjah-based warehousing costs less than direct Abu Dhabi real estate while maintaining reliable transit access.",
          },
          {
            image: "/images/services/offer.png",
            title: "Flexible capacity ",
            description:
              "unit sizes and lease terms scale to actual inventory needs, not a fixed minimum.",
          },
          {
            image: "/images/services/online-test.png",
            title: "WMS digital tracking",
            description:
              "real-time visibility into SKU counts, batch numbers, and stock levels through a client portal.",
          },
          {
            image: "/images/locations/small-distance.png",
            title: "Reliable transit routing ",
            description:
              "direct highway access keeps transfer time between storage and Abu Dhabi delivery points predictable.",
          },
        ]}
      />
      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Storage Facility near Abu Dhabi That Reduces Overhead Costs"
        subtitle="OSS operates a storage facility network designed to serve Abu Dhabi-based businesses directly. Companies get enterprise-grade warehousing and dependable regional transit without the capital cost of securing storage space inside the city itself.
Every storage facility contract through OSS is built around cargo type, volume, and delivery timeline into Abu Dhabi, so businesses don't overpay for space or transit flexibility they don't need."
        description="What businesses get from OSS as their storage facility serving Abu Dhabi"
        features={[
          {
            image: "/images/industries/boxes.png",
            title: "Scalable pallet allocations ",
            description:
              "storage footage adjusts to match import cycles and Abu Dhabi order volume.",
          },
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking ",
            description:
              "reduces manual processing errors across all inventory",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Direct highway connectivity ",
            description:
              "access to major transport corridors supports reliable transit toward Abu Dhabi.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained logistics workforce ",
            description:
              "coordinators and technicians manage inbound storage and outbound delivery scheduling.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end freight management ",
            description:
              "inbound container de-stuffing connects directly to outbound delivery toward Abu Dhabi.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Storage Facility Services Supporting Abu Dhabi Businesses"
        services={[
          {
            title: "Secure Commercial Warehousing",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Storage for raw materials, industrial equipment, and finished goods in reinforced, high-clearance facilities.",
          },
          {
            title: "WMS Inventory Tracking",
            image: "/images/services/security.jpg",
            description:
              "Real-time stock control through a warehouse management system with batch tracking and replenishment alerts.",
          },
          {
            title: "Long-Term Storage",
            image: "/images/services/custom-storage.jpg",
            description:
              "Fixed pallet positions for manufacturing components and seasonal overstock destined for Abu Dhabi distribution.",
          },
          {
            title: "Short-Term Warehousing",
            image: "/images/services/short-term.jpg",
            description:
              "Temporary space for sudden inbound shipments or promotional inventory spikes ahead of Abu Dhabi sales periods.",
          },
          {
            title: "Cross-Docking Coordination",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from container arrival directly to outbound delivery toward Abu Dhabi, cutting storage time.",
          },
          {
            title: "Open Yard Storage",
            image: "/images/services/open-yard.jpg",
            description:
              "Outdoor space for heavy equipment, machinery, and industrial materials serving Abu Dhabi's construction and oil and gas sectors.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Storage Facility Serving Abu Dhabi Across Five Business Sectors"
        features={[
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support ",
            description:
              "open yard storage for pipes, equipment, and industrial materials tied to Abu Dhabi's energy sector.",
          },
          {
            image: "/images/services/truck.png",
            title: "FMCG and General Trading ",
            description:
              "high-density racking supports faster product rotation into Abu Dhabi markets.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing ",
            description:
              "staging areas hold raw materials and machinery before Abu Dhabi distribution.",
          },
          {
            image: "/images/locations/construction.png",
            title: "Construction and Infrastructure ",
            description:
              "open-yard and covered storage for building materials headed to Abu Dhabi project sites.",
          },
          {
            image: "/images/services/world.png",
            title: "Import and Export Operators ",
            description:
              "cross-docking supports fast freight transit connected to Abu Dhabi.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone-Adjacent Access for Abu Dhabi Trade"
        description="Businesses trading internationally through Abu Dhabi need storage that supports duty suspension and simplified customs processing. OSS's storage facility network sits close to the SAIF Zone and Hamriyah Free Zone, giving Abu Dhabi-focused trading firms duty-efficient storage without added customs delays."
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Enterprise-grade warehousing backed by reliable operations and measurable performance."
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Footprint",
            description: "Of storage capacity.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Enterprise Client Base",
            description: "Active manufacturing, trading, and retail clients.",
          },
          {
            value: 99.98,
            suffix: "%",
            decimals: 2,
            label: "Inventory Accuracy Rating",
            description: "Maintained via automated WMS barcode processing.",
          },
          {
            value: 12000,
            suffix: "+",
            unit: "Pallets",
            label: "Monthly Freight Throughput",
            description: "Processed and dispatched monthly.",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Facility Security",
            description: "Video surveillance with automated fire suppression.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Warehousing Experience Serving Abu Dhabi and the Wider UAE",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, giving Abu Dhabi-based businesses access to a storage facility network without requiring an Abu Dhabi-based warehouse. OSS invests in facility infrastructure, digital inventory software, and trained staff to support reliable storage and transit toward Abu Dhabi. \n\n Clients using OSS as their storage facility serving Abu Dhabi get dedicated account management, flexible contracts, and a logistics team focused on keeping operations moving without interruption.",
          },
          {
            title: "Our Team",
            subtitle:
              "Logistics Staff Supporting Abu Dhabi-Bound Storage Operations",
            description:
              "OSS storage facilities are managed by certified logistics managers, inventory analysts, and warehouse technicians who coordinate inbound container unloading, pallet placement, and outbound delivery scheduling toward Abu Dhabi.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Storage Facilities Serving Abu Dhabi"
        faqs={[
          {
            question:
              "Does OSS operate a storage facility directly inside Abu Dhabi?",
            answer:
              "OSS operates its storage facility network in Sharjah, positioned to serve Abu Dhabi's business and industrial zones with reliable transit access, without the cost of Abu Dhabi-based real estate.",
          },
          {
            question:
              "What cargo types can be stored at OSS's storage facility serving Abu Dhabi?",
            answer:
              "OSS stores general trading commodities, industrial equipment, machinery, building materials, and palletized commercial goods. Non-hazardous cargo follows standard handling, while specialized items follow separate safety procedures.",
          },
          {
            question:
              "What are the lease terms for storage facility space serving Abu Dhabi?",
            answer:
              "OSS offers monthly short-term storage for seasonal demand and multi-year contracts for steady, ongoing enterprise storage needs.",
          },
          {
            question:
              "How does OSS track inventory for Abu Dhabi-bound shipments?",
            answer:
              "A cloud-based WMS logs every item by barcode, giving clients portal access to monitor stock levels, batch numbers, and dispatch history in real time.",
          },
          {
            question: "Does OSS handle transport from storage into Abu Dhabi?",
            answer:
              "Yes. OSS manages cross-docking, fleet sorting, and delivery scheduling to move cargo from storage toward Abu Dhabi.",
          },
          {
            question:
              "How does a Sharjah-based storage facility compare to leasing space in Abu Dhabi?",
            answer:
              "Sharjah-based storage typically costs less than direct Abu Dhabi real estate while maintaining dependable transit access, avoiding the premium of prime city storage.",
          },
          {
            question:
              "Can storage capacity scale for oil and gas or construction projects near Abu Dhabi?",
            answer:
              "Yes. Storage allocation increases during active project phases and reduces during slower periods, so businesses only pay for the space they use.",
          },
          {
            question:
              "Does OSS support free zone-related storage for Abu Dhabi trade?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling for international trade connected to Abu Dhabi.",
          },
          {
            question:
              "How does OSS reduce total logistics costs for Abu Dhabi-focused businesses?",
            answer:
              "Lower-cost regional storage, automated tracking, and direct highway access reduce per-shipment costs compared to Abu Dhabi-based alternatives.",
          },
          {
            question:
              "What operational standards does OSS follow at its storage facility?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined health and safety protocols, and routine structural safety checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Get Storage That Keeps Abu Dhabi Within Reach"
        description="Whether you need scalable B2B warehousing, real-time WMS visibility, or a reliable storage facility, OSS has the infrastructure to support it. Contact the OSS logistics team for a storage layout and quote."
        buttonText="Contact Us for a Customized Storage Solution"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
