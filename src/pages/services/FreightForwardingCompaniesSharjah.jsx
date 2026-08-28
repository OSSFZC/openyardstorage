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
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import { FiPackage, FiClock, FiFileText, FiEye } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import CardsFeatures from "../../components/CardsFeatures";

export default function FreightForwardingCompaniesSharjah() {
  useMeta(
    "Freight Forwarding Companies in Sharjah | Openyard Storage FZC",
    "Keep shipments moving with Openyard Storage FZC, trusted by freight forwarding companies in Sharjah for seamless cargo handling & logistics support. Get a quote!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Superior Freight Solutions Tailored for You"
        title="Storage Support for Freight Forwarding Companies in Sharjah"
        subtitle="OSS provides warehousing and dispatch coordination for freight forwarding companies in Sharjah that need reliable storage paired with dependable cargo movement. Combined with the OSS air and sea freight network, storage in Sharjah connects directly to outbound dispatch, so freight forwarding companies don't need to manage separate storage and freight vendors for the same cargo."
        buttonText="Request a Sharjah Storage Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider 
      title="Trusted by Businesses Across the UAE and Worldwide"
      description="Companies relying on OSS for storage and dispatch support include international freight forwarders, customs brokers, and freight forwarding companies that need consistent warehousing to consolidate client cargo before onward dispatch." />
      
      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Struggling with Inefficient Freight Management?"
        title="Why Freight Forwarding Companies in Sharjah Need a Coordinated Storage Partner"
        description="Freight forwarding companies operating without a dedicated storage partner commonly face four problems:"
        // description2="OSS FZC simplifies freight forwarding by combining advanced logistics planning, real-time tracking technology, and regulatory expertise to ensure smooth cargo movement."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "Disconnected storage and freight booking",
            text: "Coordinating separate warehousing and freight providers adds delays before client cargo reaches the port or airport.",
          },
          {
            icon: FiClock,
            title: "Inconsistent dispatch scheduling",
            text: "Ad hoc bookings without a fixed storage partner lead to unpredictable loading and departure windows.",
          },
          {
            icon: FiFileText,
            title: "Complex customs and documentation",
            text: "Forwarded shipments require accurate paperwork, and errors at the port cause costly delays for downstream clients.",
          },
          {
            icon: FiEye,
            title: "Limited visibility once cargo leaves storage",
            text: "Forwarders lose track of shipment status once freight moves out of the warehouse, making client updates harder to manage.",
          },
        ]}
      />

      <LeftalignedCards
        title="Freight Coordination That Simplifies Every Shipment"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined storage and freight dispatch",
            description:
              "Inventory is stored and dispatched under a single coordinated service.",
          },
          {
            image: "/images/locations/schedule.png",
            title: "Reliable dispatch scheduling",
            description:
              "Dedicated freight coordination reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation support",
            description:
              "Export paperwork and customs requirements are managed as part of the shipping process.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end tracking",
            description:
              "Cargo status is visible from Sharjah storage through arrival at the destination.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference Section"
        title="Storage Built Around the Needs of Freight Forwarding Companies"
        description="OSS operates a warehousing network built to support freight forwarding companies in Sharjah, so client cargo doesn't need to move between unrelated storage and freight vendors before dispatch. Inventory can move from an OSS warehouse straight into sea or air freight without added transfer delays.

Every storage contract through OSS is structured around cargo type, shipment frequency, and destination, giving forwarders a faster path from storage to dispatch than working with disconnected vendors. This matters most for operators managing multiple client accounts, where consistent handling and scheduling directly affect delivery reliability and client trust.

What freight forwarding companies get from OSS's storage and freight coordination:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "Cargo status is logged at each handling point, from warehouse storage through dispatch.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained freight coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for consolidated shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Port and airport connectivity",
            description:
              "Direct access to major transport corridors supports fast transfer from storage to departure points.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Flexible shipment sizes",
            description:
              "Small parcels and full pallet-level cargo are both supported.",
          },
          {
            image: "/images/services/stock.png",
            title: "Consolidated warehousing and dispatch",
            description:
              "Storage and freight are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Services"
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
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking gives forwarders visibility into cargo status from storage through international arrival, useful for keeping their own clients updated.",
          },
          {
            title: "Combined Sea and Air Coordination",
            image: "/images/locations/sea-freight.jpg",
            description:
              "Freight forwarding companies can pair sea freight for bulk cargo with air freight for urgent client shipments under the same provider.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Storage Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Commodity shipments move faster with dedicated storage and dispatch coordination.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Components and finished goods move on scheduled freight lanes.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Sensitive shipments benefit from controlled storage ahead of dispatch.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Fast replenishment during peak sales periods relies on quick dispatch from storage.",
          },
          {
            image: "/images/locations/shipped.png",
            title: "Freight Forwarding and Logistics",
            description:
              "Freight forwarding companies use OSS storage to consolidate multi-client cargo before onward dispatch.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Freight Forwarding Companies"
        description="Freight forwarding companies moving client cargo internationally need customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving forwarders duty-efficient handling built directly into the storage and dispatch process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Storage and freight forwarding supported by secure infrastructure, reliable routing, and coordinated transport services."
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
              "Storage and Freight Experience Built for Freight Forwarding Companies",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing warehousing capabilities that support freight forwarding companies alongside its wider sea and air freight services. Fast documentation turnaround, warehouse-to-port coordination, and destination-specific handling are built into how OSS structures every shipment for its forwarding clients. \n\n Forwarders using OSS for storage in Sharjah get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating consolidated cargo movement across multiple destination countries.",
          },
          {
            title: "Our Team",
            subtitle:
              "Staff Coordinating Storage and Dispatch for Forwarding Companies",
            description:
              "OSS storage operations for freight forwarding companies are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for cargo moving through Sharjah's ports and airports.",
          },
        ]}
      />

      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Storage for Freight Forwarding Companies in Sharjah"
        faqs={[
          {
            question:
              "Does OSS offer storage support for freight forwarding companies?",
            answer:
              "Yes. OSS coordinates warehousing alongside its wider sea and air freight services, giving forwarders a single partner for storage and dispatch.",
          },
          {
            question:
              "What documentation support is included in the forwarding and shipping process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the port or airport.",
          },
          {
            question:
              "Can freight forwarding companies combine sea and air freight for the same client shipment?",
            answer:
              "Yes. Bulk cargo can move by sea while urgent portions move by air, under the same provider.",
          },
          {
            question:
              "Does OSS support cargo consolidation for freight forwarding companies?",
            answer:
              "Yes. OSS provides warehousing that forwarders use to consolidate multi-client cargo before onward dispatch.",
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
              "What are the contract terms for freight forwarding company clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring storage and freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for freight forwarding companies?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the storage and shipping process.",
          },
          {
            question:
              "Can storage capacity scale for forwarders with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting freight forwarding companies through both steady and high-demand periods.",
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
        description="Whether you need standalone storage in Sharjah or a combined service that pairs warehousing with sea and air freight dispatch, OSS has the infrastructure and experience to support freight forwarding companies in Sharjah of any size. Contact the OSS team for a storage and shipping schedule quote."
        buttonText="Contact OSS for a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
