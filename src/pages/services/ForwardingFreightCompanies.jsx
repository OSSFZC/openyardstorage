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
import {
  FiClock,
  FiMessageSquare,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ForwardingFreightCompanies() {
  useMeta(
    "Forwarding Freight Companies in UAE | Openyard Storage FZC",
    "Reliable logistics start with the right partner. Openyard Storage FZC offers forwarding freight companies solutions for secure cargo movement. Enquire today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Streamlining Success in Forwarding Freight Companies"
        title="Storage and Freight Support for Forwarding Freight Companies"
        subtitle="OSS provides secure warehousing and freight coordination for forwarding freight companies, combining storage with integrated air and sea freight to streamline cargo movement through one reliable logistics solution across the UAE."
        buttonText="Request a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
      title="Used by Freight Forwarders and Logistics Operators"
      description="Companies relying on OSS for storage and dispatch support include international freight forwarders, customs brokers, and forwarding freight that need consistent warehousing and cargo consolidation for client shipments." />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Facing Freight Management Challenges?"
        title="Why Forwarding Freight Companies Need a Coordinated Storage Partner"
        description="Forwarding freight operating without a dedicated storage partner commonly face four problems:"
        // description2="OSS FZC simplifies logistics management with structured processes and smart coordination tools that ensure timely deliveries and seamless supply chain management."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Disconnected Storage and Freight Booking",
            text: "Coordinating separate warehousing and freight providers adds delays before client cargo reaches the port or airport.",
          },
          {
            icon: FiMessageSquare,
            title: "Inconsistent Dispatch Scheduling",
            text: "Ad hoc bookings without a fixed storage partner lead to unpredictable loading and departure windows.",
          },
          {
            icon: FiDollarSign,
            title: "Complex Customs and Documentation",
            text: "Forwarded shipments require accurate paperwork, and errors at the port cause costly delays for downstream clients.",
          },
          {
            icon: FiUsers,
            title: "Limited Visibility Once Cargo Leaves Storage",
            text: "Forwarders lose track of shipment status once freight moves out of the warehouse, making client updates harder to manage.",
          },
        ]}
      />

      <LeftalignedCards
        title="End-to-End Freight Management Made Simple"
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
              "shipment status is visible from Sharjah storage through arrival at the destination.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference "
        title="Storage Built Around the Needs of Forwarding Freight Companies"
        subtitle="OSS operates a warehousing network built to support forwarding freight, so client cargo doesn't need to move between unrelated storage and freight vendors before dispatch. Inventory can move from an OSS warehouse straight into sea or air freight without added transfer delays.

Every storage contract through OSS is structured around cargo type, shipment frequency, and destination, giving forwarding freight a faster path from storage to dispatch than working with disconnected vendors. This matters most for operators managing multiple client accounts, where consistent handling and scheduling directly affect delivery reliability and client trust."
        description="What forwarding freight get from OSS's storage and freight coordination:"
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
              "staff manage documentation, loading, and dispatch scheduling for consolidated shipments.",
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
        eyebrow="Freight Forwarding Services"
        title="Storage and Freight Offerings for Forwarding Companies"
        services={[
          {
            title: "Cargo Consolidation and Warehousing",
            image: "/images/warehouse.png",
            description:
              "Storage in Sharjah for forwarders that need a staging point between inbound client cargo and outbound dispatch.",
          },
          {
            title: "Export Documentation and Customs Support",
            image: "/images/services/bill-of-entry.jpg",
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
              "Flexible storage and freight capacity so forwarders only pay for the space their client cargo requires.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/maintenance.jpg",
            description:
              "Digital tracking gives forwarders visibility into cargo status from storage through international arrival, useful for keeping their own clients updated.",
          },
          {
            title: "Combined Sea and Air Coordination",
            image: "/images/services/air-freight.png",
            description:
              "Combined Sea and Air Coordination: Forwarding companies can pair sea freight for bulk cargo with air freight for urgent client shipments under the same provider.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Storage and Freight Support Across Five Business Sectors"
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
            image: "/images/locations/shipped.png",
            title: "Freight Forwarding and Logistics",
            description:
              "forwarding freight companies use OSS storage to consolidate multi-client cargo before onward dispatch.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Forwarding Freight"
        description="Forwarding freight moving client cargo internationally needs customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving forwarders duty-efficient handling built directly into the storage and dispatch process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Demonstrating Our Impact in Freight Forwarding"
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
            description:
              "Active manufacturing, trading, and forwarding clients.",
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

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Storage and Freight Experience Built for Forwarding Freight",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing warehousing capabilities that support forwarding freight alongside its wider sea and air freight services. Fast documentation turnaround, warehouse-to-port coordination, and destination-specific handling are built into how OSS structures every shipment for its forwarding clients. \n\n Forwarding freight using OSS for storage in Sharjah gets dedicated account management, flexible scheduling, and a logistics team experienced in coordinating consolidated cargo movement across multiple destination countries.",
          },
          {
            title: "Our Team",
            subtitle:
              "Staff Coordinating Storage and Dispatch for Forwarding Companies",
            description:
              "OSS storage operations for forwarding freight are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for cargo moving through Sharjah's ports and airports.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Storage for Forwarding Freight "
        faqs={[
          {
            question: "Does OSS offer storage support for forwarding freight?",
            answer:
              "Yes. OSS coordinates warehousing alongside its wider sea and air freight services, giving forwarding freight a single partner for storage and dispatch.",
          },
          {
            question:
              "What documentation support is included in the forwarding and shipping process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the port or airport.",
          },
          {
            question:
              "Can forwarding freight companies combine sea and air freight for the same client shipment?",
            answer:
              "Yes. Bulk cargo can move by sea while urgent portions move by air, under the same provider.",
          },
          {
            question:
              "Does OSS support cargo consolidation for forwarding freight?",
            answer:
              "Yes. OSS provides warehousing that forwarding freight use to consolidate multi-client cargo before onward dispatch.",
          },
          {
            question: "What cargo types can be stored and shipped through OSS?",
            answer:
              "OSS stores and ships general trading commodities, industrial components, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it leaves storage?",
            answer:
              "A digital tracking system provides visibility into shipment status from storage through arrival at the destination, which forwarders can pass on to their own clients.",
          },
          {
            question:
              "What are the contract terms for forwarding freight company clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring storage and freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for forwarding freight?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the storage and shipping process.",
          },
          {
            question:
              "Can storage capacity scale for forwarding freight with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting forwarding freight through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for storage and freight forwarding support?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Client Cargo with a Coordinated Storage and Freight Partner"
        description="Whether you need standalone storage in Sharjah or a combined service that pairs warehousing with sea and air freight dispatch, OSS has the infrastructure and experience to support forwarding freight companies of any size. Contact the OSS team for a storage and shipping schedule quote."
        buttonText="Contact OSS for a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
