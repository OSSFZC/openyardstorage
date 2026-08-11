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

import { FiClock, FiShuffle, FiTrendingUp, FiDollarSign } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ShippingLogisticManagement() {
  useMeta(
    "Shipping & Logistic Management UAE | Openyard Storage FZC",
    "Openyard Storage FZC delivers shipping & logistic management solutions with warehousing, freight & customs support to keep your supply chain moving.Get a quote!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Streamlining Logistics, Elevating Success."
        title="Shipping and Logistic Management in the UAE"
        subtitle="OSS provides shipping & logistic management services that connect warehousing, freight, and delivery under one provider. Trading firms, manufacturers, and e-commerce businesses use OSS to coordinate inbound storage, transport scheduling, and outbound delivery without managing multiple separate vendors."
        buttonText="Request a Shipping & Logistic Management Consultation"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating the Complexities of Shipping and Logistics?"
        title="How Poor Shipping and Logistic Management Disrupts Supply Chains"
        description="Businesses without centralized shipping & logistic management commonly face four problems"
        // description2="Fragmented supply chains often result in loss of control, impacting your bottom line. At OpenYard Storage, we understand these pressing challenges deeply. Our tailored solutions in Shipping And Logistic Management streamline operations, enhance transparency, and strengthen your supply chain."
        rightTitle="problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Multiple disconnected vendors",
            text: "Coordinating separate storage, freight, and customs providers creates communication gaps and delays.",
          },
          {
            icon: FiShuffle,
            title: "No unified shipment visibility",
            text: "Tracking cargo across different systems makes it difficult to confirm real-time status.",
          },
          {
            icon: FiTrendingUp,
            title: "Inconsistent handling standards",
            text: "Cargo passed between multiple third parties increases the risk of damage, loss, or delay.",
          },
          {
            icon: FiDollarSign,
            title: "Higher administrative overhead: ",
            text: "Managing separate contracts and invoices across providers adds unnecessary operational cost.",
          },
        ]}
      />

      <LeftalignedCards
        // eyebrow="OSS Shipping & Logistic Management"
        // title="Comprehensive Solutions for Every Step of the Supply Chain"
        title="Streamlined Logistics for Better Business Operations"
        description="OSS addresses each of these through centralized shipping & logistic management:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Single Point of Coordination",
            description:
              "Storage, freight, and delivery are managed under one provider instead of multiple vendors.",
          },
          {
            image: "/images/services/truck.png",
            title: "Unified Tracking",
            description:
              "A single WMS-based system tracks cargo from storage through final delivery.",
          },
          {
            image: "/images/services/warehouseicon.png",
            title: "Consistent Handling Standards",
            description:
              "Cargo stays within the OSS network from warehouse to destination.",
          },
          {
            image: "/images/locations/administrative.png",
            title: "Reduced Administrative Load",
            description:
              "One contract and one point of contact cover the full logistics chain.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference "
        title="Shipping and Logistic Management Under One Provider"
        subtitle="OSS operates a shipping & logistic management model that combines warehousing, freight coordination, and delivery scheduling into a single service. Businesses don't need to separately manage storage providers, freight forwarders, and last-mile delivery companies.
Every shipping & logistic management contract through OSS is built around cargo type, shipment volume, and delivery timeline, so businesses get coordination matched to how their supply chain actually operates."
        description="What businesses get from OSS's shipping & logistic management services"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking ",
            description:
              "inventory and shipment status are logged at each handling point.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Trained logistics coordinators ",
            description:
              "dispatch and delivery are managed by staff familiar with each client's cargo requirements.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway access ",
            description:
              "proximity to the E311 and E611 corridors supports fast regional distribution.",
          },
          {
            image: "/images/services/time-manager.png",
            title: "Flexible scheduling ",
            description:
              "shipping & logistic management adjusts to seasonal demand and order volume.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end coordination ",
            description:
              "inbound storage connects directly to outbound delivery without added transfer points.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Shipping & Logistic Management Offerings"
        services={[
          {
            title: "Centralized Freight Coordination",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Shipping and logistic management that combines warehousing and transport scheduling under one contract.",
          },
          {
            title: "Cross-Docking and Distribution",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from inbound arrival directly to outbound delivery, reducing storage time and handling steps.",
          },
          {
            title: "Customs and Documentation Support",
            image: "/images/locations/customer-support.jpg",
            description:
              "Coordinated processing to reduce delays between clearance and delivery.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking gives clients visibility into cargo location and delivery status across the full logistics chain.",
          },
          {
            title: "Fleet and Route Scheduling",
            image: "/images/locations/fleet-reoute.jpg",
            description:
              "Dispatch coordination for scheduled and on-demand freight movement.",
          },
          {
            title: "Inventory and Storage Integration",
            image: "/images/services/security.jpg",
            description:
              "Warehousing is managed as part of the same shipping & logistic management contract, not a separate service.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Shipping & Logistic Management Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "FMCG and General Trading",
            description:
              "Coordinated freight and storage support consistent product replenishment cycles.",
          },
          {
            image: "/images/services/truck.png",
            title: "Industrial Manufacturing",
            description:
              "Raw materials and finished machinery move on scheduled delivery windows.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Shipping & logistic management scales with order volume during peak sales periods.",
          },
          {
            image: "/images/locations/construction.png",
            title: "Construction and Infrastructure",
            description:
              "Heavy materials and equipment move on coordinated storage-to-site schedules.",
          },
          {
            image: "/images/services/world.png",
            title: "Import and Export Operators",
            description:
              "Centralized coordination shortens the transit chain for international cargo.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Coordination Within Shipping & Logistic Management"
        description="Businesses trading internationally need shipping & logistic management that accounts for customs and duty processing. OSS coordinates storage and freight close to the SAIF Zone and Hamriyah Free Zone, keeping duty-efficient handling built into the same logistics contract rather than managed separately."
      />

      {/* STATS */}
      <StatsSection
        title="Performance That Drives Reliable Logistics"
        subtitle="Proven warehousing and logistics capabilities backed by measurable operational results."
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
            value: 99.9,
            suffix: "%",
            decimals: 1,
            label: "On-Time Delivery Rate",
            description: "Across coordinated shipping and logistics contracts.",
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
            subtitle: "Shipping & Logistic Management Experience in the UAE",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, offering shipping & logistic management that combines warehousing, freight, and delivery under one service. OSS invests in fleet coordination, digital tracking systems, and trained dispatch staff to keep supply chains moving without gaps.\n\n Clients using OSS for shipping & logistic management get dedicated account management, flexible contracts, and a logistics team focused on coordination across every step of the supply chain.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Every Step of the Logistics Chain",
            description:
              "OSS shipping & logistic management is run by dispatch coordinators, warehouse technicians, and logistics analysts who manage storage placement, route scheduling, and delivery confirmation under one unified process.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Shipping & Logistic Management"
        faqs={[
          {
            question:
              "What does shipping & logistic management with OSS include?",
            answer:
              "It combines warehousing, freight coordination, customs support, and delivery scheduling under one contract, instead of requiring businesses to manage separate providers for each step.",
          },
          {
            question:
              "How is cargo tracked across the shipping & logistic management process?",
            answer:
              "A cloud-based WMS logs every item by barcode, giving clients visibility into storage status, transit location, and delivery confirmation in one system.",
          },
          {
            question:
              "What cargo types does OSS handle within its logistics services?",
            answer:
              "OSS manages general trading commodities, industrial equipment, machinery, and palletized commercial goods. Non-hazardous cargo follows standard handling, while specialized items follow separate safety procedures.",
          },
          {
            question:
              "Does OSS handle both scheduled and on-demand freight movement?",
            answer:
              "Yes. Shipping & logistic management includes both fixed-schedule freight and on-demand dispatch for urgent shipments.",
          },
          {
            question:
              "What are the contract terms for shipping & logistic management services?",
            answer:
              "OSS offers monthly short-term agreements for seasonal demand and multi-year contracts for steady, ongoing logistics needs.",
          },
          {
            question:
              "How does centralized logistics management reduce operational costs?",
            answer:
              "Combining storage, freight, and delivery under one contract reduces administrative overhead and avoids the inefficiencies of coordinating multiple separate vendors.",
          },
          {
            question:
              "Can shipping & logistic management scale during peak demand periods?",
            answer:
              "Yes. Freight and storage capacity adjust to order volume, supporting businesses through seasonal or high-demand periods.",
          },
          {
            question:
              "Does OSS support customs and free zone coordination as part of its logistics management?",
            answer:
              "Yes. Storage and freight near the SAIF Zone and Hamriyah Free Zone are coordinated within the same logistics contract to reduce customs delays.",
          },
          {
            question:
              "What security measures protect cargo during shipping & logistic management?",
            answer:
              "Facilities use 24/7 video monitoring, alarm systems, biometric and card-controlled access, and Civil Defense-approved fire suppression systems.",
          },
          {
            question:
              "What operational standards does OSS follow across its logistics services?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined health and safety protocols, and routine facility and fleet checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Simplify Your Supply Chain with One Logistics Partner"
        description="Whether you need centralized freight coordination, integrated warehousing, or full shipping & logistic management, OSS has the infrastructure and team to support it. Contact the OSS team for a logistics plan and quote."
        buttonText="Contact OSS for a Shipping & Logistic Management Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
