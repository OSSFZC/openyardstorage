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
import {
  FiDollarSign,
  FiClock,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function InternationalShippingAir() {
  useMeta(
    "Air Freight in UAE | Openyard Storage FZC Logistics",
    "Openyard Storage FZC simplifies global logistics with air freight in UAE and dependable international shipping air services. Talk to us today for a quote!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Fast. Reliable. Global."
        title="International Shipping Air Services from the UAE"
        subtitle="OSS provides air freight in UAE with fast international cargo movement, connecting secure Sharjah warehousing to time-sensitive air shipments through one integrated logistics solution for efficient global distribution."
        buttonText="Request an Air Freight Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/freight.jpeg  "
      />

     <TrustedSlider
        title="Used by Businesses Shipping Time-Sensitive Cargo"
        description="Companies relying on OSS for urgent air cargo include export-focused trading firms, manufacturers with time-critical overseas orders, and import-export operators who need faster transit than sea freight can offer for select shipments."
      />


      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Frustrated with Unpredictable Shipping Delays?"
        title="Why Time-Sensitive Cargo Needs a Dedicated Air Freight Partner in UAE"
        description="Businesses without a coordinated approach to international shipping air commonly face four problems:"
        // description2="Open Yard Storage offers a coherent solution to streamline and simplify air freight operations, ensuring smooth, efficient, and competitive logistics strategies."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiDollarSign,
            title: "Disconnected storage and air freight booking",
            text: " Coordinating separate warehousing and airfreight providers adds delays before cargo even reaches the airport.",
          },
          {
            icon: FiClock,
            title: "Inconsistent transit scheduling",
            text: "Ad hoc air bookings without a fixed partner lead to unpredictable departure and arrival windows.",
          },
          {
            icon: FiFileText,
            title: "Complex customs and documentation",
            text: "Air shipments require accurate export paperwork, and errors at the airport cause costly delays.",
          },
          {
            icon: FiMessageSquare,
            title: "Limited visibility once cargo departs",
            text: "Businesses lose track of shipment status once freight leaves UAE airspace.",
          },
        ]}
      />

      <LeftalignedCards
        title="End-to-End Air Cargo Solutions"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/services/transportation.png",
            title: "Combined Storage and Air Freight",
            description:
              "Inventory is stored and dispatched under a single coordinated service.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Reliable Transit Scheduling",
            description:
              "Dedicated air coordination reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation Support",
            description:
              "Export paperwork and customs requirements are managed as part of the shipping process.",
          },
          {
            image: "/images/industries/product-testing.png",
            title: "End-to-End Tracking",
            description:
              "Shipment status is visible from UAE departure through arrival at the destination airport.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
       
        eyebrow="The OSS Difference"
        title="Air Freight in UAE Built Around Speed and Storage Coordination"
        subtitle="OSS operates a service that combines warehousing with air cargo dispatch, so time-sensitive shipments don't need to move between unrelated storage and air freight providers before dispatch. Inventory can move from an OSS warehouse straight into air freight in UAE without added transfer delays.Every air cargo contract through OSS is structured around cargo type, urgency, and destination, giving businesses a faster path from storage to airport dispatch than working with disconnected vendors. This matters most for businesses with recurring urgent shipments, where consistent handling and scheduling directly affect delivery reliability."
        description="What businesses get from OSS's air freight and warehousing coordination"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse dispatch through airport handover.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained Freight Coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for time-sensitive shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway and Airport Connectivity",
            description:
              "Direct access to major transport corridors supports fast transfer from storage to departure points.",
          },
          {
            image: "/images/industries/boxes.png",
            title: "Flexible Shipment Sizes",
            description:
              "Small parcels and full pallet-level air cargo are both supported.",
          },
          {
            image: "/images/services/transportation.png",
            title: "Consolidated Warehousing and Dispatch",
            description:
              "Storage and air freight are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Air Cargo Offerings"
        services={[
          {
            title: "Time-Sensitive Air Freight Dispatch",
            image: "/images/services/air-freight.png",
            description:
              "Urgent air freight in UAE for shipments where transit speed matters more than cost.",
          },
          {
            title: "Export Documentation and Customs Support",
            image: "/images/services/custom-brokerage.png",
            description:
              "Paperwork and clearance handling built into the shipping process to reduce delays at the destination airport.",
          },
          {
            title: "Warehouse-to-Airport Coordination",
            image: "/images/services/warehouse.png",
            description:
              "Storage and outbound air freight are managed together, removing the need to coordinate separate providers.",
          },
          {
            title: "Full and Part Shipment Options",
            image: "/images/services/logistics.jpg",
            description:
              "Flexible air cargo capacity so businesses only pay for the space their shipment requires.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking gives exporters visibility into cargo status from dispatch through international arrival.",
          },
          {
            title: "Combined Sea and Air Coordination",
            image: "/images/services/ocean-freight.png",
            description:
              "Businesses can pair air freight for urgent shipments with sea freight for larger, less time-sensitive cargo under the same provider.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry"
        title="Air Cargo Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Time-sensitive commodity shipments move faster with dedicated air dispatch.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Urgent spare parts and components move on expedited air freight schedules.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Time-critical shipments benefit from faster transit than sea freight allows.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Fast replenishment during peak sales periods relies on quick air dispatch.",
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
        title="Free Zone Access Supporting Air Freight"
        description="Businesses shipping urgent international cargo need customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving air cargo clients duty-efficient handling built directly into the shipping process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Achievement Stats Section"
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Footprint",
            description: "Square feet of storage capacity.",
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
              "Air freight lanes connecting the UAE to regional and global destinations.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Air Freight Experience Built Around Speed and Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing air cargo capabilities alongside its wider warehousing and sea freight services. Fast documentation turnaround, warehouse-to-airport coordination, and destination-specific handling are built into how OSS structures every urgent shipment. \n\n Clients using OSS for international shipping air get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating time-sensitive shipments across multiple destination countries.",
          },
          {
            title: "Our Team",
            subtitle:
              "Staff Coordinating Time-Sensitive Air Shipments",
            description:
              "OSS air cargo operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for urgent shipments moving through UAE airports.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Air Cargo and International Shipping"
        faqs={[
          {
            question: "Does OSS offer urgent air cargo dispatch in the UAE?",
            answer:
              "Yes. OSS coordinates time-sensitive air dispatch alongside its wider warehousing and sea freight services, giving businesses a faster option when transit speed matters most.",
          },
          {
            question:
              "What documentation support is included in the air shipping process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the destination airport.",
          },
          {
            question:
              "Can businesses combine air freight with sea freight for the same shipment plan?",
            answer:
              "Yes. Urgent portions of a shipment can move by air while larger, less time-sensitive cargo moves by sea, under the same provider.",
          },
          {
            question: "Does OSS combine warehousing with air freight dispatch?",
            answer:
              "Yes. Storage and air freight are managed under a single contract, removing the need to coordinate separate storage and air freight providers.",
          },
          {
            question:
              "What cargo types can be shipped through OSS's air cargo service?",
            answer:
              "OSS ships general trading commodities, industrial components, and palletized commercial goods by air. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it departs by air?",
            answer:
              "A digital tracking system provides visibility into shipment status from dispatch through arrival at the destination airport.",
          },
          {
            question: "What are the contract terms for air cargo clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional urgent shipments and multi-year contracts for businesses with recurring air freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for air-shipped exports?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the air shipping process.",
          },
          {
            question:
              "Can air cargo capacity scale for businesses with seasonal urgent demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting exporters through both steady and high-demand periods for international shipping air needs.",
          },
          {
            question:
              "What operational standards does OSS follow for air freight and international shipping?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Urgent Cargo with a Coordinated Air Freight Partner"
        description="Whether you need standalone air freight in UAE or a combined service that pairs warehousing with air dispatch, OSS has the infrastructure and experience to support it. Contact the OSS team for a shipping schedule and quote."
        buttonText="Contact OSS for an Air Freight Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
