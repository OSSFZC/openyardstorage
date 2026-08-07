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
import { FiFileText, FiClock, FiDollarSign, FiGlobe } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function InternationalShippingForwarder() {
  useMeta(
    "International Shipping Forwarder UAE | Openyard Storage FZC",
    "Openyard Storage FZC simplifies global trade as your international shipping forwarder, offering reliable freight and logistics solutions. Contact us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Reliable Global Shipping, Reimagined"
        title="International Shipping Forwarder Based in Sharjah"
        subtitle="OSS operates as an international shipping forwarder, connecting Sharjah to global markets through integrated sea and air freight with reliable scheduling, customs support, and end-to-end cargo tracking from origin to destination."
        buttonText="Request a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating Global Shipping Challenges?"
        title="Why Businesses Need an International Shipping Forwarder"
        description="Businesses shipping cargo across borders commonly face four problems"
        // description2="OSS FZC simplifies international logistics by offering structured freight forwarding solutions designed to ensure smooth global transportation."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiFileText,
            title: "Fragmented Booking Across Carriers",
            text: "Managing separate sea and air freight bookings for different destinations creates scheduling gaps and inconsistent transit times.",
          },
          {
            icon: FiClock,
            title: "Complex Customs and Documentation Requirements",
            text: "Each destination country has its own paperwork standards, and errors at any stage cause clearance delays.",
          },
          {
            icon: FiDollarSign,
            title: "Disconnected Handling Between Origin and Destination",
            text: "Cargo passed between unrelated agents in different countries increases the risk of damage, loss, or miscommunication.",
          },
          {
            icon: FiGlobe,
            title: "Limited Visibility Once Cargo Leaves the Region",
            text: "Businesses lose track of shipment status after freight departs the UAE, making it difficult to plan around arrival dates.",
          },
        ]}
      />

      <LeftalignedCards
        title="Simplifying Global Freight Forwarding"
        description="Working with a dedicated freight forwarding partner addresses each of these directly:"
        features={[
          {
            image: "/images/services/cooperation.png",
            title: "Consolidated booking",
            description:
              "Sea and air freight are coordinated together instead of through separate, unrelated carriers.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation support",
            description:
              "Export paperwork and destination-specific customs requirements are managed as part of the shipping process.",
          },
          {
            image: "/images/services/truck.png",
            title: "Consistent handling from origin to destination",
            description:
              "Cargo stays within a coordinated network rather than passing through disconnected agents.",
          },
          {
            image: "/images/services/online-test.png",
            title: "End-to-end tracking",
            description:
              "Shipment status is visible from departure through arrival at the destination port.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference Section"
        title="International Shipping Forwarding Built Around Cross-Border Reliability"
        subtitle="OSS operates as an international shipping forwarder structured around the realities of cross-border trade, customs variation, multi-leg routing, and destination-specific documentation. Rather than treating every shipment as a one-off booking, OSS builds routing plans around each client's regular destination markets.

Every shipment coordinated through OSS is structured around cargo type, destination country, and shipment frequency. Businesses with recurring export volume get a repeatable process instead of renegotiating freight terms for every shipment, while businesses shipping internationally for the first time get documentation guidance built directly into the process."
        description="What businesses get from working with OSS as their freight forwarding partner:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "Shipments are logged at each handling point, from storage through export clearance.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Trained freight coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for cross-border shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway and port connectivity",
            description:
              "Direct access to the E311 and E611 corridors links inland storage to shipping points.",
          },
          {
            image: "/images/services/truck.png",
            title: "Flexible load options",
            description:
              "Full-load, part-load, sea, and air freight scale to shipment size and destination.",
          },
          {
            image: "/images/locations/shipped.png",
            title: "Consolidated warehousing and shipping",
            description:
              "Inventory storage and international freight are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Forwarding Service Offerings"
        title="Freight Forwarding Service Offerings"
        services={[
          {
            title: "Sea Freight Coordination",
            image: "/images/services/sea.jpeg",
            description:
              "Scheduled and on-demand ocean freight connecting Sharjah's ports to international destinations across multiple regions.",
          },
          {
            title: "Air Freight Coordination",
            image: "/images/services/air-freight.png",
            description:
              "Time-sensitive options for urgent or high-value cross-border shipments where transit speed matters more than cost.",
          },
          {
            title: "Export Documentation and Customs Support",
            image: "/images/locations/customer-support.jpg",
            description:
              "Paperwork and clearance handling built into the shipping process to reduce delays at destination ports.",
          },
          {
            title: "Warehouse-to-Port Coordination",
            image: "/images/services/logistics.jpg",
            description:
              "Storage and outbound freight are managed together, removing the need to coordinate separate storage and shipping providers.",
          },
          {
            title: "Full-Load and Part-Load Shipping",
            image: "/images/services/maintenance.jpg",
            description:
              "Flexible freight capacity so businesses only pay for the space their shipment requires.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking gives exporters visibility into cargo status from dispatch through international arrival.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry"
        title="International Freight Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Consistent international routing for commodity shipments moving to multiple markets.",
          },
          {
            image: "/images/services/truck.png",
            title: "Industrial Manufacturing",
            description:
              "Finished machinery and components move on scheduled export freight windows.",
          },
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Heavy equipment and materials coordinated for cross-border project shipments.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Construction and Infrastructure",
            description:
              "Building materials and machinery exported on flexible load schedules.",
          },
          {
            image: "/images/services/engineer.png",
            title: "FMCG and Retail Export",
            description:
              "Consistent freight scheduling supports recurring overseas replenishment cycles.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Export Freight"
        description="Businesses shipping internationally need freight coordination that keeps pace with customs and duty processing at both origin and destination. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving export-focused clients duty-efficient handling built directly into the shipping process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="International freight forwarding supported by secure infrastructure, reliable routing, and global transport coordination."
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
              "Sea and air freight lanes connecting the UAE to regional and global markets.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Freight Forwarding Experience Built Around Export Trade",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing the coordination and documentation experience needed to support export-driven businesses across multiple markets. Multi-leg routing, destination-specific handling, and customs documentation are built into how OSS structures every freight contract. Clients working with OSS get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating shipments across multiple destination countries rather than single-market delivery alone.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Cross-Border Freight",
            description:
              "OSS freight operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling across sea and air routes reaching well beyond the UAE.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About International Shipping Forwarder Questions Answered"
        faqs={[
          {
            question: "What does OSS handle as a freight forwarding provider?",
            answer:
              "OSS coordinates sea and air freight, export documentation, and inland transport into a single service, connecting Sharjah storage to international destinations.",
          },
          {
            question: "Does OSS support multiple destination countries?",
            answer:
              "Yes. Freight routing is built around each client's regular destination markets, supporting businesses shipping to one or several countries.",
          },
          {
            question: "What documentation support is included?",
            answer:
              "Export paperwork and destination-specific customs clearance coordination are built into the service, reducing the risk of delays at destination ports.",
          },
          {
            question: "Can businesses choose between sea and air freight?",
            answer:
              "Yes. Both sea and air freight options are available, allowing businesses to choose based on cost, urgency, and shipment size.",
          },
          {
            question:
              "Does OSS combine warehousing with international freight forwarding?",
            answer:
              "Yes. Storage and export freight are managed under a single contract, removing the need to coordinate separate storage and shipping providers.",
          },
          {
            question:
              "What cargo types can be shipped internationally through OSS?",
            answer:
              "OSS ships general trading commodities, industrial equipment, machinery, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it leaves the UAE?",
            answer:
              "A digital tracking system provides visibility into shipment status from dispatch through arrival at the destination port.",
          },
          {
            question:
              "What are the contract terms for international shipping services?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring export volume.",
          },
          {
            question:
              "Does OSS support free zone coordination for export shipments?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the shipping process.",
          },
          {
            question:
              "What operational standards does OSS follow for international freight?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility and fleet checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ship Internationally with One Coordinated Partner"
        description="Whether you need sea freight, air freight, or a combined service that handles documentation and warehousing together, OSS has the infrastructure and experience to support you as your international shipping forwarder. Contact the OSS team for a shipping schedule and quote."
        buttonText="Contact OSS for a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
