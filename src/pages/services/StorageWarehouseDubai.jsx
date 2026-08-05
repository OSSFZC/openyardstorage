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

import { FiBox, FiShield, FiDollarSign, FiClock } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function StorageWarehouseDubai() {
  useMeta(
    "Storage Warehouse Near Dubai|Openyard Storage FZC Logistics ",
    "Openyard Storage FZC provides storage warehouse solutions in Dubai with secure facilities,flexible storage options & secure inventory handling.Contact us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Your Trusted Partner in Dubai Storage Solutions"
        title="Storage Warehouse in Dubai"
        subtitle="OSS provides storage warehouse space in Dubai through its Sharjah facility network, giving businesses secure, scalable storage minutes from Dubai's ports, free zones, and commercial districts. Trading firms, manufacturers, and e-commerce businesses use OSS to store inventory close to Dubai without the cost of leasing standalone Dubai real estate."
        buttonText="Request a Dubai Storage Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating Dubai's Storage Challenges"
        title="Why Businesses Struggle to Find the Right Storage Warehouse in Dubai"
        description="Businesses searching for warehouse space near Dubai commonly run into four problems"
        // description2="OSS FZC provides dependable storage solutions that integrate seamlessly into your operations, ensuring asset protection and operational efficiency."
        rightTitle="Problem Statement for Dubai Storage"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiBox,
            title: "High real estate costs",
            text: "Leasing standalone warehouse space directly in Dubai carries a higher cost than nearby regional alternatives.",
          },
          {
            icon: FiShield,
            title: "Limited availability",
            text: "Prime Dubai storage locations often have long waitlists or restrictive minimum footprints.",
          },
          {
            icon: FiDollarSign,
            title: "No real-time stock visibility",
            text: "Manual tracking systems cause inventory discrepancies and delayed order fulfillment.",
          },
          {
            icon: FiClock,
            title: "Slow transfer to delivery points",
            text: "Storage located too far from Dubai's core business districts adds unnecessary transit time.",
          },
        ]}
      />

      <LeftalignedCards
        // eyebrow="The OSS Difference "
        title="We Help Overcome Your Storage Challenges"
        subtitle="OSS addresses each of these with a storage warehouse positioned close to Dubai:"
        // description="What businesses get from renting small storage with OSS:"
        features={[
          {
            image: "/images/locations/money.png",
            title: "Lower-cost regional storage.",
            description:
              "Sharjah-based warehousing costs less than direct Dubai real estate while remaining minutes away",
          },
          {
            image: "/images/services/grow.png",
            title: "Available capacity ",
            description:
              "flexible unit sizes without the long waitlists common to prime Dubai storage locations.",
          },
          {
            image: "/images/services/online-test.png",
            title: "WMS digital tracking  ",
            description:
              "real-time visibility into SKU counts, batch numbers, and stock levels through a client portal.",
          },
          {
            image: "/images/services/speed.png",
            title: "Fast transfer to Dubai ",
            description:
              "direct highway access keeps transit time between storage and Dubai delivery points short.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="A Storage Warehouse in Dubai's Reach, Without Dubai's Overhead"
        subtitle="OSS operates a storage warehouse network in Sharjah built to serve Dubai-based businesses directly. Companies get enterprise-grade storage infrastructure and fast access to Dubai without the capital cost of securing warehouse space inside the city itself.
Every storage warehouse contract through OSS is built around cargo type, volume, and delivery timeline into Dubai, so businesses don't overpay for space or transit flexibility they don't need."
        description="What businesses get from OSS as their storage warehouse in Dubai"
        features={[
          {
            image: "/images/services/stock.png",
            title: "Scalable pallet allocations ",
            description:
              "storage footage adjusts to match import cycles and Dubai order volume.",
          },
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking ",
            description:
              "reduces manual processing errors across all inventory.",
          },
          {
            image: "/images/services/track.png",
            title: "Direct highway connectivity ",
            description:
              "access to the E311 and E611 corridors supports fast transit into Dubai.",
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
              "inbound container de-stuffing connects directly to outbound delivery into Dubai.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Storage Warehouse Services Supporting Dubai Businesses"
        services={[
          {
            title: "Secure Commercial Warehousing",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Storage for raw materials, industrial equipment, and finished goods in reinforced, high-clearance facilities near Dubai.",
          },
          {
            title: "WMS Inventory Tracking",
            image: "/images/services/custom-storage.jpg",
            description:
              "Real-time stock control through a warehouse management system with batch tracking and replenishment alerts.",
          },
          {
            title: "Long-Term Storage",
            image: "/images/services/images.jpg",
            description:
              "Fixed pallet positions for manufacturing components and seasonal overstock destined for Dubai distribution.",
          },
          {
            title: "Short-Term Warehousing",
            image: "/images/services/short-term.jpg",
            description:
              "Temporary space for sudden inbound shipments or promotional inventory spikes ahead of Dubai sales periods.",
          },
          {
            title: "Cross-Docking to Dubai",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from container arrival directly to outbound delivery into Dubai, cutting storage time.",
          },
          {
            title: "Scalable B2B and E-Commerce Storage",
            image: "/images/services/logistics.jpg",
            description:
              "Dedicated picking zones and sorting stations for high-SKU inventory serving Dubai retail channels.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Storage Warehouse in Dubai Configured for Five Business Sectors"
        features={[
          {
            image: "/images/services/truck.png",
            title: "FMCG and General Trading  ",
            description:
              "high-density racking supports faster product rotation into Dubai markets.",
          },
          {
            image: "/images/services/industrial-park.png",
            title: "Industrial Manufacturing  ",
            description:
              "staging areas hold raw materials and machinery before Dubai distribution.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "storage scales to handle high order volumes during Dubai peak sales periods.",
          },
          {
            image: "/images/services/engineer.png",
            title: "Construction and Infrastructure",
            description:
              "open-yard and covered storage for building materials headed to Dubai project sites.",
          },
          {
            image: "/images/services/world.png",
            title: "Import and Export Operators ",
            description:
              "cross-docking supports fast ocean and air freight transit connected to Dubai.",
          },
        ]}
      />

      <FeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone-Adjacent Access for Dubai-Bound Trade"
        description="Businesses trading internationally through Dubai need storage that supports duty suspension and simplified customs processing. OSS's storage warehouse network sits close to the SAIF Zone and Hamriyah Free Zone, giving Dubai-focused trading firms duty-efficient storage without added customs delays."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Enterprise-grade warehousing backed by proven operational excellence."
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
            subtitle: "Warehousing Experience Serving Dubai and the Wider UAE",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, giving Dubai-based businesses access to a storage warehouse network without requiring a Dubai-based facility. OSS invests in facility infrastructure, digital inventory software, and trained staff to support fast, reliable storage close to Dubai. Clients using OSS as their storage warehouse in Dubai get dedicated account management, flexible contracts, and a logistics team focused on keeping operations moving without interruption.",
          },
          {
            title: "Our Team",
            subtitle: "Logistics Staff Supporting Dubai-Bound Storage Operations",
            description:
              "OSS storage facilities are managed by certified logistics managers, inventory analysts, and warehouse technicians who coordinate inbound container unloading, pallet placement, and outbound delivery scheduling into Dubai.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Storage Warehouse Space Near Dubai"
        faqs={[
          {
            question:
              "Does OSS operate a storage warehouse directly inside Dubai?",
            answer:
              "OSS operates its storage warehouse network in Sharjah, positioned close to Dubai's ports, free zones, and business districts for fast access without the cost of Dubai-based real estate.",
          },
          {
            question: "What cargo types can be stored at OSS's storage warehouse serving Dubai?",
            answer:
              "OSS stores general trading commodities, retail stock, electronics, industrial raw materials, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "What are the lease terms for storage warehouse space near Dubai?",
            answer:
              "OSS offers monthly short-term storage for seasonal demand and multi-year contracts for steady, ongoing enterprise storage needs.",
          },
          {
            question: "How does OSS track inventory for Dubai-bound shipments?",
            answer:
              "A cloud-based WMS logs every item by barcode, giving clients portal access to monitor stock levels, batch numbers, and dispatch history in real time.",
          },
          {
            question: "Does OSS handle transport from storage into Dubai?",
            answer:
              "Yes. OSS manages cross-docking, fleet sorting, and delivery scheduling to move cargo from storage directly into Dubai.",
          },
          {
            question: "How does a Sharjah-based storage warehouse compare to leasing space in Dubai?",
            answer:
              "Sharjah-based storage typically costs less than direct Dubai real estate while remaining a short drive from Dubai's business districts, avoiding the premium of prime city storage.",
          },
          {
            question:
              "Can storage capacity scale during Dubai's peak retail seasons?",
            answer:
              "Yes. Storage allocation increases during high-volume periods and reduces during slower periods, so businesses only pay for the space they use.",
          },
          {
            question: "Does OSS support free zone-related storage for Dubai trade?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling for international trade connected to Dubai.",
          },
          {
            question: "How does OSS reduce total logistics costs for Dubai-focused businesses?",
            answer: "Lower-cost regional storage, automated tracking, and direct highway access via the E311 and E611 reduce per-shipment costs compared to Dubai-based alternatives.",
          },
          {
            question: "What operational standards does OSS follow at its storage warehouse facilities?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined health and safety protocols, and routine structural safety checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Get Storage Space That Keeps Dubai Within Reach"
        subtitle="Whether you need scalable B2B warehousing, real-time WMS visibility, or a reliable storage warehouse in Dubai's reach, OSS has the facility infrastructure to support it. Contact the OSS logistics team for a storage layout and quote."
        buttonText="Contact OSS for a Dubai Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
  
}
