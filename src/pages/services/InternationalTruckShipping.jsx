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
import { FiPackage, FiFileText, FiEye, FiClock } from "react-icons/fi";
import CardsFeatures from "../../components/CardsFeatures";
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import useMeta from "../../hooks/useMeta";

export default function InternationalTruckShipping() {
  useMeta(
    "International Truck Shipping in UAE | Openyard Storage FZC",
    "Expand your reach with Openyard Storage FZC for reliable international truck shipping. Secure cross-border freight with timely deliveries. Get a quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Global Truck Solutions Tailored For You"
        title="International Truck Shipping from the UAE"
        subtitle="OSS provides international truck shipping for businesses that need cross-border cargo movement to regional destinations by road. Combined with the OSS storage network in Sharjah, truck shipping connects warehousing directly to outbound cross-border dispatch, so businesses don't need to coordinate separate storage and trucking providers for the same shipment."
        buttonText="Request a Truck Shipping Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
      title="Used by Businesses Shipping Cargo Across Borders"
      description="Companies relying on OSS for international truck shipping include export-focused trading firms, manufacturers supplying regional markets, and import-export operators who need reliable road transit to neighboring GCC countries." />
      
      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Facing Roadblocks in International Truck Shipping?"
        title="Why Cross-Border Cargo Needs a Dedicated International Truck Shipping Partner"
        description="Businesses without a coordinated approach to cross-border truck freight commonly face four problems:"
        // description2="Often, the choice between efficiency and cost-effectiveness seems like a zero-sum game. At OSS FZC, we understand these pain points and address them head-on. Our comprehensive approach ensures you get both reliability and affordability in your international shipping needs."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "Disconnected Storage and Truck Booking",
            text: "Coordinating separate warehousing and trucking providers adds delays before cargo even reaches the border.",
          },
          {
            icon: FiClock,
            title: "Inconsistent Transit Scheduling",
            text: "Ad hoc truck bookings without a fixed fleet partner lead to unpredictable departure and arrival windows.",
          },
          {
            icon: FiFileText,
            title: "Complex Border and Customs Documentation",
            text: "Cross-border shipments require accurate export paperwork, and errors at checkpoints cause costly delays.",
          },
          {
            icon: FiEye,
            title: "Limited Visibility Once Cargo Departs",
            text: "Businesses lose track of shipment status once trucks leave UAE territory.",
          },
        ]}
      />

      <LeftalignedCards
        title="Cross-Border Trucking Without the Logistics Complexity"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined storage and truck dispatch",
            description:
              "Inventory is stored and dispatched under a single coordinated service.",
          },
          {
            image: "/images/locations/schedule.png",
            title: "Reliable transit scheduling",
            description:
              "A dedicated fleet reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation support",
            description:
              "Export paperwork and border requirements are managed as part of the shipping process.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end tracking",
            description:
              "Shipment status is visible from UAE departure through arrival at the destination country.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FreeZoneFeatureSection
        eyebrow="The OSS Difference Section"
        title="International Truck Shipping Built Around Reliability and Storage Coordination"
        subtitle={`OSS operates a cross-border truck freight service that integrates warehousing with regional road transport, allowing cargo to move directly from storage to departing trucks without relying on separate logistics providers. This reduces handling, improves efficiency, and creates a smoother path from warehouse to international delivery. Every shipment is planned around cargo type, destination, border requirements, and delivery schedules to support reliable cross-border transport.

Route planning includes documentation and checkpoint requirements specific to each destination, helping minimise delays during transit. For businesses with recurring regional shipments, consistent scheduling and coordinated freight management improve delivery reliability while reducing administrative effort. By managing storage and trucking under one service, OSS simplifies cross-border logistics and provides businesses with a more predictable supply chain across the GCC and neighbouring international markets.`}
        description="What businesses get from OSS's truck shipping and warehousing coordination:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse dispatch through border crossing.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained freight coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for cross-border shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway and border connectivity",
            description:
              "Direct access to major transport corridors supports fast transfer from storage to departure points.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Flexible shipment sizes",
            description:
              "Part loads and full truckload cargo are both supported.",
          },
          {
            image: "/images/services/stock.png",
            title: "Consolidated warehousing and dispatch",
            description:
              "Storage and truck shipping are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Services"
        title="Cross-Border Truck Freight Offerings"
        services={[
          {
            title: "Cross-Border Truck Dispatch",
            image: "/images/services/cross-border.jpg",
            description:
              "Scheduled international truck shipping for cargo moving from the UAE to GCC countries and neighbouring regional markets with dependable transit planning.",
          },
          {
            title: "Export Documentation and Border Support",
            image: "/images/services/bill-of-entry.jpg",
            description:
              "Export paperwork, customs documentation, and border checkpoint requirements are managed to support efficient cross-border freight movement.",
          },
          {
            title: "Warehouse-to-Border Coordination",
            image: "/images/services/cargo-release.jpg",
            description:
              "Storage and outbound truck shipping are coordinated under one service, reducing handling and eliminating the need for multiple logistics providers.",
          },
          {
            title: "Full and Part Truckload Options",
            image: "/images/services/customs-inspection.jpg",
            description:
              "Flexible FTL and LTL transport solutions allow businesses to ship full loads or smaller consignments while paying only for the capacity required.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/maintenance.jpg",
            description:
              "Digital tracking provides real-time visibility into shipment status from warehouse dispatch through border crossings and final delivery.",
          },
          {
            title: "Regional and Domestic Transport Integration",
            image: "/images/services/import-export-customs.jpg",
            description:
              "International truck shipping can be combined with domestic transport, creating a seamless logistics solution from warehouse to destination.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow=""
        title="Truck Shipping Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Regional commodity shipments move reliably with dedicated cross-border dispatch.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Spare parts and components move on scheduled truck shipping routes to regional plants.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Time-critical shipments benefit from planned, documented cross-border transit.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Regional replenishment during peak sales periods relies on consistent truck dispatch.",
          },
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Equipment and parts move reliably across borders to support active project timelines.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Truck Shipping"
        description="Businesses shipping cargo across regional borders need customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving cross-border truck freight clients duty-efficient handling built directly into the shipping process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Cross-border truck shipping supported by secure storage infrastructure, reliable routing, and coordinated regional transport."
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
            value: 1,
            unit: "Network",
            label: "Route Coverage",
            description:
              "Truck shipping lanes connecting the UAE to regional and neighboring destinations.",
          },
        ]}
      />
      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Truck Shipping Experience Built Around Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, building cross-border truck freight capabilities alongside its warehousing and shipping services. Warehouse-to-border coordination, documentation support, and destination-specific planning are integrated into every shipment. Clients benefit from dedicated account management, flexible scheduling, and an experienced logistics team that coordinates reliable cross-border deliveries across GCC and regional markets with predictable transit times.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Cross-Border Truck Shipments",
            description:
              "OSS truck shipping operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for cross-border shipments moving through regional checkpoints.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Cross-Border Truck Freight"
        faqs={[
          {
            question:
              "Does OSS offer cross-border truck shipping from the UAE?",
            answer:
              "Yes. OSS coordinates cross-border truck dispatch alongside its wider warehousing and freight services, giving businesses a reliable option for regional road transit.",
          },
          {
            question:
              "What documentation support is included in the truck shipping process?",
            answer:
              "Export paperwork and border clearance coordination are built into the service, reducing the risk of delays at checkpoints.",
          },
          {
            question:
              "Can businesses combine cross-border truck freight with domestic distribution?",
            answer:
              "Yes. Cross-border portions of a shipment can move by truck while local distribution continues under the same provider.",
          },
          {
            question:
              "Does OSS combine warehousing with truck shipping dispatch?",
            answer:
              "Yes. Storage and truck shipping are managed under a single contract, removing the need to coordinate separate storage and trucking providers.",
          },
          {
            question:
              "What cargo types can be shipped through OSS's truck shipping service?",
            answer:
              "OSS ships general trading commodities, industrial components, and palletized commercial goods by truck. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it departs by truck?",
            answer:
              "A digital tracking system provides visibility into shipment status from dispatch through arrival at the destination country.",
          },
          {
            question: "What are the contract terms for truck shipping clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional cross-border shipments and multi-year contracts for businesses with recurring truck shipping needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for truck-shipped exports?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the truck shipping process.",
          },
          {
            question:
              "Can truck shipping capacity scale for businesses with seasonal demand?",
            answer:
              "Yes. Fleet capacity adjusts to shipment volume, supporting exporters through both steady and high-demand periods for cross-border freight needs.",
          },
          {
            question:
              "What operational standards does OSS follow for truck shipping and international freight?",
            answer:
              "OSS follows international supply chain safety standards, using certified drivers and equipment operators, defined documentation protocols, and routine vehicle checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo with a Coordinated Truck Shipping Partner"
        description="Whether you need standalone cross-border truck freight or a combined service that pairs warehousing with regional dispatch, OSS has the infrastructure and experience to support it. Contact the OSS team for a shipping schedule and quote."
        buttonText="Contact OSS for a Truck Shipping Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
