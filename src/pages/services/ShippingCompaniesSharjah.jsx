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
import { FiClock, FiShield, FiFileText, FiDollarSign } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import LeftalignedCards from "../../components/LeftalignedCards";

export default function ShippingCompaniesSharjah() {
  useMeta(
    "Ship Management Companies in Sharjah | Openyard Storage FZC",
    "Looking for dependable ship management companies in Sharjah? Openyard Storage FZC delivers seamless freight, logistics, and cargo solutions. Contact us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Excellence in Motion: Redefining Shipping Companies in Sharjah"
        title="Ship Management Company in Sharjah for Companies Operating in Sharjah"
        subtitle="OSS provides warehousing and freight coordination for shipping companies in Sharjah, combining secure storage with integrated air and sea freight to streamline cargo movement through one reliable logistics partner."
        buttonText="Request a Sharjah Shipping Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
        title="Used by Shipping and Freight-Focused Businesses in Sharjah"
        description="Companies relying on OSS for shipping support in Sharjah include freight forwarders, general trading firms, manufacturers with recurring export volumes, and ship management companies in Sharjah that need consistent storage and dispatch coordination for vessel-bound cargo."
      />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Frustrated with Slow and Unreliable Shipping?"
        title="Why Ship Management Companies in Sharjah Need a Coordinated Storage Partner"
        description="Shipping companies operating without a dedicated storage and dispatch partner in Sharjah commonly face four problems:"
        // description2="At OSS FZC, we understand how vital reliable shipping is to your business success. Our services aim to streamline this, ensuring your goods are delivered safely and timely. Our seasoned team is adept at anticipating challenges, offering you peace of mind with our logistics expertise."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Disconnected storage and freight booking",
            text: "Coordinating separate warehousing and freight providers adds delays before cargo reaches the port or airport.",
          },
          {
            icon: FiShield,
            title: "Inconsistent dispatch scheduling",
            text: "Ad hoc bookings without a fixed storage partner lead to unpredictable loading and departure windows.",
          },
          {
            icon: FiFileText,
            title: "Complex customs and documentation",
            text: "Export shipments require accurate paperwork, and errors at the port cause costly delays.",
          },
          {
            icon: FiDollarSign,
            title: "Limited visibility once cargo leaves storage",
            text: "Shipping companies lose track of cargo status once freight moves out of the warehouse.",
          },
        ]}
      />

      <LeftalignedCards
        title="Integrated Storage Solutions for Shipping Companies"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined storage and freight dispatch",
            description:
              "inventory is stored and dispatched under a single coordinated service.",
          },
          {
            image: "/images/locations/schedule.png",
            title: "Reliable dispatch scheduling",
            description:
              "dedicated freight coordination reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation support",
            description:
              "export paperwork and customs requirements are managed as part of the shipping process.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end tracking",
            description:
              "cargo status is visible from Sharjah storage through arrival at the destination.",
          },
        ]}
      />

      {/* SOLUTIONS */}

      <FeatureSection
        eyebrow="The OSS Difference"
        title="Storage Built Around the Needs of Ship Management Companies in Sharjah"
        subtitle="OSS operates a warehousing network built to support shipping companies in Sharjah, so cargo doesn't need to move between unrelated storage and freight vendors before dispatch. Inventory can move from an OSS warehouse straight into sea or air freight without added transfer delays. Every storage contract through OSS is structured around cargo type, shipment frequency, and destination, giving shipping companies a faster path from storage to dispatch than working with disconnected vendors. This matters most for ship management companies with recurring vessel supply or cargo consolidation needs, where consistent handling and scheduling directly affect delivery reliability."
        description="What shipping companies get from OSS's storage and freight coordination"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "cargo status is logged at each handling point, from warehouse storage through dispatch.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained freight coordinators",
            description:
              "staff manage documentation, loading, and dispatch scheduling for outbound shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Port and airport connectivity",
            description:
              "direct access to major transport corridors supports fast transfer from storage to departure points.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Flexible shipment sizes",
            description:
              "small parcels and full pallet-level cargo are both supported.",
          },
          {
            image: "/images/services/stock.png",
            title: "Consolidated warehousing and dispatch",
            description:
              "storage and freight are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Storage and Freight Offerings for Shipping Companies"
        services={[
          {
            title: "Cargo Consolidation and Warehousing",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Storage in Sharjah for shipping companies that need a staging point between inbound cargo and outbound dispatch.",
          },
          {
            title: "Export Documentation and Customs Support",
            image: "/images/services/temporary-import-export.jpg",
            description:
              "Paperwork and clearance handling built into the shipping process to reduce delays at the port or airport.",
          },
          {
            title: "Warehouse-to-Port Coordination",
            image: "/images/services/security.jpg",
            description:
              "Storage and outbound freight are managed together, removing the need to coordinate separate providers.",
          },
          {
            title: "Full and Part Shipment Options",
            image: "/images/services/logistics.jpg",
            description:
              "Flexible storage and freight capacity so shipping companies only pay for the space their cargo requires.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/maintenance.jpg",
            description:
              "Digital tracking gives shipping companies visibility into cargo status from storage through international arrival.",
          },
          {
            title: "Combined Sea and Air Coordination",
            image: "/images/services/ocean-freight.png",
            description:
              "Shipping companies can pair sea freight for bulk cargo with air freight for urgent shipments under the same provider.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry"
        title="Storage Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "commodity shipments move faster with dedicated storage and dispatch coordination.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "components and finished goods move on scheduled freight lanes.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "sensitive shipments benefit from controlled storage ahead of dispatch.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "fast replenishment during peak sales periods relies on quick dispatch from storage.",
          },
          {
            image: "/images/services/cargo-ship.png",
            title: "Marine and Vessel Supply",
            description:
              "ship management companies in Sharjah rely on nearby storage to consolidate vessel supplies and spare parts before loading.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Shipping Companies"
        description="Shipping companies moving cargo internationally need customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving shipping companies duty-efficient handling built directly into the storage and dispatch process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Join countless satisfied clients optimizing logistics with us"
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
            description: "Active manufacturing, trading, and shipping clients.",
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
            value: 2,
            unit: "Modes",
            label: "Route Coverage",
            description:
              "Sea and air freight lanes connecting Sharjah to regional and global destinations.",
          },
        ]}
      />

      {/* ABOUT */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Storage and Freight Experience Built for Shipping Companies in Sharjah",
            description:
              "OSS has supported storage and logistics operations across the UAE since 2006, delivering integrated warehousing and freight solutions for shipping companies in Sharjah. \n\n Clients benefit from warehouse-to-port coordination, documentation support, flexible scheduling, dedicated account management, and an experienced logistics team that manages efficient cargo movement across the UAE and international destinations.",
          },
          {
            title: "Our Team",
            subtitle:
              "Staff Coordinating Storage and Dispatch for Shipping Companies",
            description:
              "OSS storage operations for shipping companies are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for cargo moving through Sharjah's ports and airports.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Shipping Companies and Storage in Sharjah"
        faqs={[
          {
            question:
              "Does OSS offer storage support for shipping companies in Sharjah?",
            answer:
              "Yes. OSS coordinates warehousing alongside its wider sea and air freight services, giving shipping companies a single partner for storage and dispatch.",
          },
          {
            question:
              "What documentation support is included in the storage and shipping process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the port or airport.",
          },
          {
            question:
              "Can shipping companies combine sea and air freight for the same cargo plan?",
            answer:
              "Yes. Bulk cargo can move by sea while urgent portions move by air, under the same provider.",
          },
          {
            question:
              "Does OSS support ship management companies in Sharjah with vessel supply storage?",
            answer:
              "Yes. OSS provides warehousing that ship management companies use to consolidate vessel supplies and spare parts ahead of loading and dispatch.",
          },
          {
            question: "What cargo types can be stored and shipped through OSS?",
            answer:
              "OSS stores and ships general trading commodities, industrial components, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it leaves storage?",
            answer:
              "A digital tracking system provides visibility into shipment status from storage through arrival at the destination.",
          },
          {
            question:
              "What are the contract terms for shipping company clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring storage and freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for shipping companies?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the storage and shipping process.",
          },
          {
            question:
              "Can storage capacity scale for shipping companies with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting shipping companies through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for storage and shipping support?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo with a Coordinated Storage and Freight Partner"
        description="Whether you need standalone storage in Sharjah or a combined service that pairs warehousing with sea and air freight dispatch, OSS has the infrastructure and experience to support shipping companies and ship management companies in Sharjah alike. Contact the OSS team for a storage and shipping schedule quote."
        buttonText="Contact OSS for a Shipping Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
