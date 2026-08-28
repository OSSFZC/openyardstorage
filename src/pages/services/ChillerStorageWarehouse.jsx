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
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import { FiThermometer, FiTruck, FiClock, FiShield } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import LeftalignedCards from "../../components/LeftalignedCards";

export default function ChillerStorageWarehouse() {
  useMeta(
    "Chiller Storage Warehouse in Sharjah | Openyard Storage FZC",
    "Looking for a chiller storage warehouse? Openyard Storage FZC delivers dependable cold storage with reliable temperature control. Get a quote today for secure storage!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Precision Storage for Optimal Quality"
        title="Chiller Storage Warehouse Facilities in Sharjah"
        subtitle="OSS operates a chiller storage warehouse for businesses that need temperature-controlled space for perishable and sensitive goods. Combined with the OSS logistics network, chilled storage connects directly to inbound receiving and outbound distribution, so businesses don't need to coordinate separate cold storage and transport providers for the same inventory."
        buttonText="Request a Chiller Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider 
      title="Used by Businesses Storing Temperature-Sensitive Goods"
      description="Companies relying on OSS for chilled storage include food importers and distributors, pharmaceutical and healthcare suppliers, and retailers managing perishable stock that needs consistent temperature control between receiving and dispatch." />
      

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Tired of Compromised Storage Conditions?"
        title="Why Temperature-Sensitive Goods Need a Dedicated Chiller Storage Warehouse Partner"
        description="Businesses without access to dedicated chilled storage commonly face four problems:"
        // description2="OSS FZC provides advanced temperature-controlled warehouse solutions designed to maintain ideal storage conditions while optimizing space and operational efficiency."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiThermometer,
            title: "Inconsistent Temperature Control",
            text: "Ambient warehousing or improvised cold rooms can't maintain the stable range of perishable goods required.",
          },
          {
            icon: FiTruck,
            title: "Disconnected Storage and Distribution",
            text: "Coordinating separate cold storage and transport providers adds delays and increases the risk of temperature breaks.",
          },
          {
            icon: FiClock,
            title: "Limited Shelf-Life Visibility",
            text: "Businesses without proper stock rotation systems risk holding goods past their usable window.",
          },
          {
            icon: FiShield,
            title: "Compliance and Hygiene Gaps",
            text: "Perishable and pharmaceutical goods require documented handling standards that ad hoc facilities often can't meet.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <LeftalignedCards
        title="Temperature-Controlled Storage That Protects Product Quality"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/industries/cold-storage.png",
            title: "Consistent Chilled Conditions",
            description:
              "Temperature is monitored and maintained across dedicated storage zones.",
          },
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined Storage and Dispatch",
            description:
              "Inventory is stored and released under a single coordinated operation.",
          },
          {
            image: "/images/services/stock.png",
            title: "Stock Rotation Support",
            description:
              "Inventory management follows first-in, first-out handling to reduce spoilage risk.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documented Compliance Standards",
            description:
              "Hygiene and handling protocols are built into daily facility operations.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="The OSS Difference"
        title="Chiller Storage Warehousing Built Around Consistency and Coordination"
        subtitle={`OSS operates a chiller storage warehouse that combines temperature-controlled space with the wider OSS logistics network, so perishable and sensitive goods don't need to move between unrelated cold storage and transport providers before dispatch. Inventory can move from a chilled storage zone straight onto a delivery vehicle without breaking the cold chain.

Every storage arrangement through OSS is structured around product type, required temperature range, and turnover frequency, giving businesses a more reliable path from receiving to dispatch than working with disconnected vendors. This matters most for businesses handling recurring perishable stock, where consistent temperature control directly affects product quality and shelf life. Storage zones are monitored continuously, so deviations are identified and corrected before they affect stored inventory.`}
        description="What businesses get from OSS's chilled storage and logistics coordination:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Stock is logged at each handling point, from receiving through dispatch.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained Warehouse Staff",
            description:
              "Coordinators manage stock rotation, temperature checks, and dispatch scheduling.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway Connectivity",
            description:
              "Direct access to major transport corridors supports fast movement from storage to delivery.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Flexible Storage Volumes",
            description:
              "Small consignments and full pallet-level cold storage are both supported.",
          },
          {
            image: "/images/services/stock.png",
            title: "Consolidated Storage and Dispatch",
            description:
              "Chilled storage and outbound transport are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Services"
        title="Chiller Storage Offerings"
        services={[
          {
            title: "Temperature-Controlled Warehousing",
            image: "/images/services/controlled-temperature.jpg",
            description:
              "Dedicated chiller storage designed for perishable products requiring stable, continuously monitored temperatures to help preserve quality, freshness, and product integrity.",
          },
          {
            title: "Stock Rotation and Inventory Management",
            image: "/images/services/secure.jpg",
            description:
              "FIFO inventory handling supports efficient stock rotation, helping reduce spoilage, manage shelf life, and maintain product availability.",
          },
          {
            title: "Receiving and Dispatch Coordination",
            image: "/images/services/dispatch.jpg",
            description:
              "Chiller storage and outbound dispatch are managed under one coordinated operation, simplifying product movement and reducing unnecessary handling.",
          },
          {
            title: "Full and Part Pallet Storage",
            image: "/images/services/pallet.jpg",
            description:
              "Flexible chilled storage options allow businesses to rent pallet positions or larger areas based on actual storage requirements.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital inventory tracking provides real-time visibility into stock levels, storage status, and dispatch activity.",
          },
          {
            title: "Combined Chilled and Ambient Storage",
            image: "/images/services/ocean-freight.png",
            description:
              "Businesses can store temperature-sensitive and standard goods within the same logistics network, simplifying inventory management and distribution.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow=""
        title="Chiller Storage Support Across Five Business Sectors"
        features={[
          {
            image: "/images/locations/beverage.png",
            title: "Food and Beverage Import",
            description:
              "Perishable stock stays within a controlled temperature range from receiving through dispatch.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Temperature-sensitive components and materials are stored under monitored conditions.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Chilled storage supports products that require consistent, documented temperature handling.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Perishable and chilled goods stay fresh through peak demand periods.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Hospitality and Catering",
            description:
              "Bulk perishable supplies are stored reliably ahead of scheduled delivery.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Chilled Storage"
        description="Businesses importing temperature-sensitive goods need customs processing that keeps pace with cold chain handling. OSS chiller storage sits close to the SAIF Zone and Hamriyah Free Zone, giving clients duty-efficient handling built directly into the storage process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Achievement Stats "
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
            description: "Active manufacturing, trading, and export clients.",
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
          {
            value: 100,
            suffix: "%",
            label: "Temperature Monitoring",
            description:
              "Continuous monitoring across dedicated chilled storage zones.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Cold Storage Experience Built Around Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing chilled storage capabilities alongside its wider warehousing and transport services. Consistent temperature control, receiving-to-dispatch coordination, and documented handling standards are built into how OSS structures every chilled storage arrangement.\n\n Clients using OSS's chiller storage warehouse get dedicated account management, flexible storage terms, and a logistics team experienced in handling perishable and temperature-sensitive goods across multiple industries.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Managing Chilled Storage Operations",
            description:
              "OSS cold storage operations are run by warehouse technicians, stock rotation coordinators, and dispatch staff who manage temperature checks, inventory handling, and delivery scheduling for perishable goods moving through the facility.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Common Questions About Chiller Storage"
        faqs={[
          {
            question: "Does OSS operate a chilled storage facility in Sharjah?",
            answer:
              "Yes. OSS operates temperature-controlled storage zones alongside its wider warehousing and transport services, giving businesses a reliable option for perishable and sensitive goods.",
          },
          {
            question:
              "What temperature range does OSS's chilled storage maintain?",
            answer:
              "Storage zones are monitored continuously to maintain a stable, consistent range suited to the product type being stored.",
          },
          {
            question:
              "Can businesses combine chilled storage with standard warehousing?",
            answer:
              "Yes. Perishable stock can be held in chilled zones while non-sensitive goods are stored under standard warehousing, under the same provider.",
          },
          {
            question:
              "Does OSS combine chilled storage with outbound distribution?",
            answer:
              "Yes. Storage and dispatch are managed under a single contract, removing the need to coordinate separate cold storage and transport providers.",
          },
          {
            question:
              "What goods can be stored in OSS's chilled storage facility?",
            answer:
              "OSS stores perishable food and beverage stock, temperature-sensitive pharmaceutical products, and other goods requiring controlled conditions. Specialized products follow separate handling procedures.",
          },
          {
            question: "How is stock tracked once it enters chilled storage?",
            answer:
              "A digital tracking system provides visibility into stock levels and movement from receiving through dispatch.",
          },
          {
            question:
              "What are the contract terms for chiller storage warehouse clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional storage needs and multi-year contracts for businesses with recurring chilled storage requirements.",
          },
          {
            question:
              "Does OSS support free zone coordination for chilled storage clients?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the chilled storage process.",
          },
          {
            question:
              "Can chiller storage capacity scale for businesses with seasonal demand?",
            answer:
              "Yes. Storage capacity adjusts to stock volume, supporting businesses through both steady and high-demand periods for perishable goods.",
          },
          {
            question:
              "What operational standards does OSS follow for chilled storage?",
            answer:
              "OSS follows international supply chain and hygiene standards, using certified equipment, defined stock rotation protocols, and routine temperature checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Store Perishable Goods with a Coordinated Cold Storage Partner"
        description="Whether you need standalone chilled storage or a combined service that pairs cold storage with distribution, OSS has the infrastructure and experience to support it. Contact the OSS team for a storage plan and quote."
        buttonText="Contact OSS for a Chiller Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
