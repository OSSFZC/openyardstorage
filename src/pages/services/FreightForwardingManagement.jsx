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

import { FiPackage, FiClock, FiFileText, FiEye } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import CardsFeatures from "../../components/CardsFeatures";

export default function FreightForwardingManagement() {
  useMeta(
    "Freight Forwarding Management in UAE | Openyard Storage FZC",
    "Every shipment impacts your business.Openyard Storage FZC provides freight forwarding management that reduces delays & keeps supply chains moving.Enquire today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Simplify Your Supply Chain"
        title="Freight Forwarding Management Backed by Sharjah Storage"
        subtitle="OSS provides freight forwarding management with integrated warehousing, air freight, and sea freight, connecting secure Sharjah storage to efficient outbound cargo movement through one coordinated logistics solution."
        buttonText="Request a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating Challenges, Delivering Solutions"
        title="Why Businesses Need Coordinated Freight Forwarding Management"
        description="Businesses without a coordinated approach to freight forwarding commonly face four problems:"
        // description2="OSS FZC is here to unravel these complexities. With intricate precision, we streamline processes, ensuring timely and cost-effective delivery of your goods."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "Disconnected Storage and Freight Booking",
            text: "Coordinating separate warehousing and freight providers adds delays before cargo reaches the port or airport.",
          },
          {
            icon: FiClock,
            title: "Inconsistent Dispatch Scheduling",
            text: "Ad hoc bookings without a fixed forwarding partner lead to unpredictable loading and departure windows.",
          },
          {
            icon: FiFileText,
            title: "Complex Customs and Documentation",
            text: "Forwarded shipments require accurate paperwork, and errors at the port cause costly delays.",
          },
          {
            icon: FiEye,
            title: "Limited Visibility Once Cargo Leaves Storage",
            text: "Businesses lose track of shipment status once freight moves out of the warehouse.",
          },
        ]}
      />

      <LeftalignedCards
        title="Integrated Freight Solutions for Better Logistics"
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
              "Shipment status is visible from Sharjah storage through arrival at the destination.",
          },
        ]}
      />
      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Freight Forwarding Management Built Around Storage Coordination"
        subtitle="OSS operates a service that combines warehousing with outbound dispatch, so cargo doesn't need to move between unrelated storage and freight vendors before it ships. Inventory can move from an OSS warehouse straight into sea or air freight without added transfer delays, giving businesses freight forwarding that starts at the storage stage rather than after cargo has already left the warehouse. Every contract through OSS is structured around cargo type, shipment frequency, and destination, giving businesses a faster path from storage to dispatch than working with disconnected vendors. This matters most for businesses with recurring multi-destination shipments, where consistent handling and scheduling directly affect delivery reliability."
        description="What businesses get from OSS's freight forwarding:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse storage through dispatch.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained freight coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for outbound shipments.",
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
        eyebrow="Our Services"
        title="Freight Forwarding Offerings"
        services={[
          {
            title: "Cargo Consolidation and Warehousing",
            image: "/images/warehouse.png",
            description:
              "Storage in Sharjah for businesses that need a staging point between inbound cargo and outbound dispatch.",
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
              "Flexible storage and freight capacity so businesses only pay for the space their shipment requires.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/maintenance.jpg",
            description:
              "Digital tracking gives businesses visibility into cargo status from storage through international arrival.",
          },
          {
            title: "Combined Sea and Air Coordination",
            image: "/images/services/ocean-freight.png",
            description:
              "Businesses can pair sea freight for bulk cargo with air freight for urgent shipments under the same provider as part of a single freight forwarding management plan.",
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
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Urgent equipment and parts move quickly to support active project timelines.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Freight Forwarding"
        description="Businesses shipping cargo internationally need customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving businesses duty-efficient handling built directly into the storage and dispatch process rather than managed as a separate step."
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
            subtitle: "Freight Forwarding Experience Built Around Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing freight forwarding capabilities alongside its wider warehousing and sea and air freight services. Fast documentation turnaround, warehouse-to-port coordination, and destination-specific handling are built into how OSS structures every shipment. Clients using OSS for freight forwarding get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating cargo movement across multiple destination countries.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Storage and Dispatch",
            description:
              "OSS freight forwarding operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for shipments moving through Sharjah's ports and airports.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Freight Forwarding"
        faqs={[
          {
            question:
              "Does OSS offer freight forwarding management in Sharjah?",
            answer:
              "Yes. OSS coordinates warehousing alongside its wider sea and air freight services, giving businesses a single partner for storage and dispatch.",
          },
          {
            question:
              "What documentation support is included in the freight forwarding process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the port or airport.",
          },
          {
            question:
              "Can businesses combine sea and air freight under the same forwarding plan?",
            answer:
              "Yes. Bulk cargo can move by sea while urgent portions move by air, under the same provider.",
          },
          {
            question: "Does OSS combine warehousing with freight forwarding?",
            answer:
              "Yes. Storage and freight dispatch are managed under a single contract, removing the need to coordinate separate storage and freight vendors.",
          },
          {
            question:
              "What cargo types can be handled through OSS's freight forwarding service?",
            answer:
              "OSS handles general trading commodities, industrial components, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it leaves storage?",
            answer:
              "A digital tracking system provides visibility into shipment status from storage through arrival at the destination.",
          },
          {
            question:
              "What are the contract terms for freight forwarding clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring storage and freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination as part of freight forwarding?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the storage and shipping process.",
          },
          {
            question:
              "Can freight forwarding capacity scale for businesses with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for freight forwarding?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo with a Coordinated Freight Forwarding Partner"
        description="Whether you need standalone storage in Sharjah or a combined service that pairs warehousing with sea and air freight dispatch, OSS has the infrastructure and experience to support your freight forwarding management needs. Contact the OSS team for a storage and shipping schedule quote."
        buttonText="Contact OSS for a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
