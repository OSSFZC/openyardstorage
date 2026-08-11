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
import { FiPackage, FiClock, FiFileText, FiEye} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import CardsFeatures from "../../components/CardsFeatures";

export default function FreightLogisticsServices() {
  useMeta(
    "Freight and Logistics Services in UAE | Openyard Storage FZC",
    "Simplify your supply chain with Openyard Storage FZC. Our freight & logistics services ensure smooth cargo movement & efficient delivery. Get a quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Seamless Freight Solutions to Propel Your Business Forward"
        title="Freight and Logistics Services from Sharjah"
        subtitle="OSS provides freight & logistics for businesses that need dependable cargo movement across sea, air, and road. Combined with the OSS storage network in Sharjah, freight dispatch connects directly to warehousing, so businesses don't need to coordinate separate storage and freight providers for the same shipment"
        buttonText="Request a Freight & Logistics Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Frustrated with Inefficient Logistics?"
        title="Why Businesses Need Coordinated Freight & Logistics Services"
        description="Businesses without a coordinated approach to freight & logistics commonly face four problems:"
        // description2="At OpenYardStorage, we understand the intricacies of freight shipping. Our streamlined freight shipping service ensures timely and cost-effective delivery while providing you with complete visibility and control over your shipments."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "Disconnected storage and freight booking",
            text: "Coordinating separate warehousing and freight providers adds delays before cargo even reaches the port, airport, or road route.",
          },
          {
            icon: FiClock,
            title: "Inconsistent transit scheduling",
            text: "Ad hoc bookings without a fixed logistics partner lead to unpredictable departure and delivery windows.",
          },
          {
            icon: FiFileText,
            title: "Complex customs and documentation",
            text: "Cross-border shipments require accurate paperwork, and errors cause costly delays.",
          },
          {
            icon: FiEye,
            title: "Limited visibility once cargo departs",
            text: "Businesses lose track of shipment status once freight leaves the warehouse.",
          },
        ]}
      />

      <LeftalignedCards
        title="Freight Solutions That Keep Cargo Moving Efficiently"
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
            title: "Reliable transit scheduling",
            description:
              "Dedicated logistics coordination reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation support",
            description:
              "Export paperwork and customs requirements are managed as part of the shipping process.",
          },
          {
            image: "/images/services/online-test.png",
            title: "End-to-end tracking",
            description:
              "Shipment status is visible from storage through arrival at the destination.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference"
        title="Freight & Logistics Services Built Around Storage Coordination"
        description="OSS operates a service that combines warehousing with sea, air, and road freight dispatch, so shipments don't need to move between unrelated storage and freight providers before departure. Inventory can move from an OSS warehouse straight into freight & logistics without added transfer delays.

Every contract through OSS is structured around cargo type, urgency, and destination, giving businesses a faster path from storage to dispatch than working with disconnected vendors. This matters most for businesses with recurring shipments across multiple transport modes, where consistent handling and scheduling directly affect delivery reliability.

What businesses get from OSS's freight & logistics:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse dispatch through delivery.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained freight coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for outbound shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Port, airport, and highway connectivity",
            description:
              "Direct access to major transport corridors supports fast transfer from storage to departure points.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Flexible shipment sizes",
            description:
              "Small parcels and full pallet-level or truckload cargo are all supported.",
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
        title="Freight & Logistics Offerings"
        services={[
          {
            title: "Sea Freight Dispatch",
            image: "/images/services/ocean-freight.png",
            description:
              "Scheduled sea freight for bulk cargo and container shipments moving through UAE ports with dependable transit schedules and cost-effective international transport.",
          },
          {
            title: "Air Freight Dispatch",
            image: "/images/services/air-freight.png",
            description:
              "Fast air freight for urgent, high-value, and time-sensitive cargo requiring efficient airport handling and rapid international delivery.",
          },
          {
            title: "Inland and Cross-Emirate Trucking",
            image: "/images/services/inland-transport.jpg",
            description:
              "Reliable road transport connecting warehouses, ports, airports, and business locations across the UAE through planned delivery schedules.",
          },
          {
            title: "Export Documentation and Customs Support",
            image: "/images/services/bill-of-entry.jpg",
            description:
              "Shipping paperwork and customs clearance managed to minimise delays and support smooth cross-border cargo movement.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking provides real-time visibility into cargo status, transit progress, and delivery updates from dispatch to destination.",
          },
          {
            title: "Combined Multi-Mode Coordination",
            image: "/images/logidtics-inspiration.jpg",
            description:
              "Sea, air, and road freight are coordinated under one provider, allowing businesses to choose the most suitable transport solution for every shipment while simplifying logistics management.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Solutions"
        title="Freight & Logistics Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Commodity shipments move faster with dedicated freight & logistics services covering sea, air, and road.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Components and finished goods move on scheduled freight lanes suited to their urgency.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Time-critical shipments benefit from faster transit options than a single transport mode allows.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Fast replenishment during peak sales periods relies on flexible freight dispatch.",
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
        title="Free Zone Access Supporting Freight & Logistics"
        description="Businesses shipping cargo internationally or across emirates need customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving clients duty-efficient handling built directly into the freight & logistics rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Integrated freight and logistics supported by secure infrastructure, reliable routing, and coordinated transport across multiple modes."
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
            value: 3,
            unit: "Modes",
            label: "Route Coverage",
            description:
              "Sea, air, and road freight lanes connecting the UAE to regional and global destinations.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Freight & Logistics Experience Built Around Speed and Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing freight & logistics that combine warehousing with sea, air, and road dispatch. Fast documentation turnaround, warehouse-to-departure coordination, and destination-specific handling are built into how OSS structures every shipment. Clients using OSS for freight & logistics get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating shipments across multiple transport modes and destination countries.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Freight & Logistics Operations",
            description:
              "OSS freight operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for shipments moving through UAE ports, airports, and road routes.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Freight & Logistics Services Questions Answered"
        faqs={[
          {
            question: "What freight & logistics does OSS offer in the UAE?",
            answer:
              "OSS coordinates sea, air, and road freight alongside its wider warehousing services, giving businesses a single partner for storage and dispatch across all transport modes.",
          },
          {
            question:
              "What documentation support is included in the freight & logistics process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the port, airport, or checkpoint.",
          },
          {
            question:
              "Can businesses combine sea, air, and road freight for the same shipment plan?",
            answer:
              "Yes. Different portions of a shipment can move by sea, air, or road depending on urgency and cost, all under the same provider.",
          },
          {
            question: "Does OSS combine warehousing with freight & logistics?",
            answer:
              "Yes. Storage and freight dispatch are managed under a single contract, removing the need to coordinate separate storage and freight providers.",
          },
          {
            question:
              "What cargo types can be shipped through OSS's freight & logistics?",
            answer:
              "OSS ships general trading commodities, industrial components, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it departs?",
            answer:
              "A digital tracking system provides visibility into shipment status from dispatch through arrival at the destination.",
          },
          {
            question:
              "What are the contract terms for freight & logistics clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for freight & logistics clients?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the shipping process.",
          },
          {
            question:
              "Can freight capacity scale for businesses with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods for freight & logistics services.",
          },
          {
            question:
              "What operational standards does OSS follow for freight & logistics?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility and fleet checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo with a Coordinated Freight & Logistics Partner"
        description="Whether you need standalone sea, air, or road freight, or a combined service that pairs warehousing with dispatch across all three, OSS has the infrastructure and experience to support it. Contact the OSS team for a shipping schedule and quote."
        buttonText="Contact OSS for a Freight & Logistics Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
