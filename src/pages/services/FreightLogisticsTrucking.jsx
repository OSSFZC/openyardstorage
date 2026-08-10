import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import LeftalignedCards from "../../components/LeftAlignedCards";

import { FiTruck, FiClock, FiFileText, FiEye } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function FreightLogisticsTrucking() {
  useMeta(
    "Freight Logistics Trucking in UAE | Openyard Storage FZC",
    "Openyard Storage FZC powers freight logistics trucking with dependable transport solutions that help businesses move cargo faster and smarter. Contact us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Seamless Solutions for Complex Supply Chains"
        title="Freight Logistics Trucking Services from Sharjah"
        subtitle="OSS provides freight logistics trucking that connects secure Sharjah warehousing with ports, airports, and delivery destinations across the UAE, offering integrated road transport and storage through one reliable logistics solution."
        buttonText="Request a Trucking Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Unraveling the Challenges of Freight Logistics Trucking"
        title="Why Businesses Need a Dedicated Freight Logistics Trucking Partner"
        description="Businesses without a coordinated approach to freight trucking commonly face four problems:"
        // description2="Without clear logistics visibility and efficient planning, companies struggle with missed deadlines and operational inefficiencies. OSS FZC helps transform logistics operations with smart solutions designed for efficiency and reliability."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiTruck,
            title: "Disconnected Storage and Trucking Booking",
            text: "Coordinating separate warehousing and trucking providers adds delays before cargo even leaves the yard.",
          },
          {
            icon: FiClock,
            title: "Inconsistent Delivery Scheduling",
            text: "Ad hoc trucking bookings without a fixed partner lead to unpredictable pickup and delivery windows.",
          },
          {
            icon: FiFileText,
            title: "Complex Routing and Documentation",
            text: "Inland and cross-border trucking requires accurate paperwork, and errors at checkpoints cause costly delays.",
          },
          {
            icon: FiEye,
            title: "Limited Visibility Once Cargo Is on the Road",
            text: "Businesses lose track of shipment status once trucks leave the warehouse.",
          },
        ]}
      />

      <LeftalignedCards
        title="Reliable Road Transport Without the Complexity"
        description="OSS addresses each of these directly."
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined storage and trucking dispatch",
            description:
              "Inventory is stored and dispatched under a single coordinated service.",
          },
          {
            image: "/images/locations/schedule.png",
            title: "Reliable delivery scheduling",
            description:
              "Dedicated trucking coordination reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/offer.png",
            title: "Documentation support",
            description:
              "Routing paperwork and checkpoint requirements are managed as part of the trucking process.",
          },
          {
            image: "/images/services/online-test.png",
            title: "En-route tracking",
            description:
              "Shipment status is visible from warehouse dispatch through final delivery.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="The OSS Difference"
        title="Freight Logistics Trucking Built Around Storage Coordination"
        description="OSS operates a service that combines warehousing with road freight dispatch, so cargo doesn't need to move between unrelated storage and trucking providers before delivery. Inventory can move from an OSS warehouse straight onto a truck without added transfer delays.

Every trucking contract through OSS is structured around cargo type, delivery frequency, and destination, giving businesses a faster path from storage to delivery than working with disconnected vendors. This matters most for businesses with recurring inland deliveries, where consistent handling and scheduling directly affect delivery reliability."
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse dispatch through delivery.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained dispatch coordinators",
            description:
              "Staff manage documentation, loading, and delivery scheduling for road shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway connectivity",
            description:
              "Direct access to major transport corridors supports fast transfer from storage to delivery points across the UAE.",
          },
          {
            image: "/images/services/small.png",
            title: "Flexible shipment sizes",
            description:
              "Small parcels and full truckload cargo are both supported.",
          },
          {
            image: "/images/services/stock.png",
            title: "Consolidated warehousing and dispatch",
            description:
              "Storage and trucking are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Freight Logistics Trucking Offerings"
        services={[
          {
            title: "Inland and Cross-Emirate Trucking",
            image: "/images/services/inland-transport.jpg",
            description:
              "Scheduled road freight services connect warehouses, ports, airports, and commercial locations across the UAE, ensuring dependable cargo movement and timely deliveries.",
          },
          {
            title: "Warehouse-to-Destination Dispatch",
            image: "/images/services/dispatch.jpg",
            description:
              "Integrated warehousing and outbound trucking are managed under one service, simplifying logistics and reducing coordination between multiple providers.",
          },
          {
            title: "Full and Part Truckload Options",
            image: "/images/services/import-export-customs.jpg",
            description:
              "Flexible transport solutions allow businesses to book full truckloads or shared capacity, paying only for the space their cargo requires.",
          },
          {
            title: "Route Documentation Support",
            image: "/images/services/hs-code-classfication.jpg",
            description:
              "Transport documentation, delivery paperwork, and checkpoint requirements are coordinated to minimise delays and keep shipments moving efficiently.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking provides real-time shipment visibility, transit updates, delivery confirmation, and reporting for greater supply chain control.",
          },
          {
            title: "Recurring Delivery Scheduling",
            image: "/images/services/schedule.jpg",
            description:
              "Fixed trucking schedules support businesses with regular delivery routes, improving reliability, planning, and operational efficiency while reducing dependence on ad hoc transport.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Solutions"
        title="Freight Trucking Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Commodity shipments move on scheduled trucking routes between storage and destination.",
          },
          {
            image: "/images/services/truck.png",
            title: "Industrial Manufacturing",
            description:
              "Components and finished goods move by road on fixed delivery schedules.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Time-sensitive shipments benefit from reliable road transport between storage and delivery points.",
          },
          {
            image: "/images/services/engineer.png",
            title: "Retail and E-Commerce",
            description:
              "Fast replenishment during peak sales periods relies on consistent trucking dispatch.",
          },
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Urgent equipment and parts move by road to support active project timelines.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Freight Trucking"
        description="Businesses moving cargo by road between free zones and other destinations need customs processing that keeps pace with their delivery schedule. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving trucking clients duty-efficient handling built directly into the dispatch process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Reliable freight trucking supported by secure infrastructure, efficient routing, and coordinated transport services."
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
              "Trucking lanes connecting Sharjah to ports, airports, and destinations across the UAE.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Freight Trucking Experience Built Around Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing freight logistics trucking capabilities alongside its wider warehousing and sea and air freight services. Fast documentation turnaround, warehouse-to-destination coordination, and route-specific handling are built into how OSS structures every trucking shipment. Clients using OSS for freight trucking get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating road transport across multiple UAE destinations.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Storage and Road Dispatch",
            description:
              "OSS trucking operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage routing paperwork, loading, and delivery scheduling for shipments moving by road across the UAE.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Freight Logistics Questions Answered"
        faqs={[
          {
            question: "Does OSS offer freight logistics trucking in the UAE?",
            answer:
              "Yes. OSS coordinates road dispatch alongside its wider warehousing and sea and air freight services, giving businesses a dependable option for inland and cross-emirate delivery.",
          },
          {
            question:
              "What documentation support is included in the trucking process?",
            answer:
              "Routing paperwork and checkpoint requirements are handled as part of the service, reducing the risk of delays en route.",
          },
          {
            question:
              "Can businesses set up recurring trucking schedules with OSS?",
            answer:
              "Yes. Fixed delivery schedules are available for businesses with regular inland routes, reducing the unpredictability of ad hoc bookings.",
          },
          {
            question: "Does OSS combine warehousing with freight trucking?",
            answer:
              "Yes. Storage and trucking dispatch are managed under a single contract, removing the need to coordinate separate storage and trucking providers.",
          },
          {
            question:
              "What cargo types can be moved through OSS's freight trucking service?",
            answer:
              "OSS moves general trading commodities, industrial components, and palletized commercial goods by road. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it's on the road?",
            answer:
              "A digital tracking system provides visibility into shipment status from warehouse dispatch through final delivery.",
          },
          {
            question:
              "What are the contract terms for freight trucking clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional deliveries and multi-year contracts for businesses with recurring trucking needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for trucking shipments?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the trucking process.",
          },
          {
            question:
              "Can trucking capacity scale for businesses with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods for freight trucking needs.",
          },
          {
            question:
              "What operational standards does OSS follow for freight trucking?",
            answer:
              "OSS follows international supply chain safety standards, using certified drivers, defined documentation protocols, and routine vehicle checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo with a Coordinated Freight Logistics Trucking Partner"
        description="Whether you need standalone trucking or a combined service that pairs warehousing with road freight dispatch, OSS has the infrastructure and experience to support it. Contact the OSS team for a trucking schedule and quote."
        buttonText="Contact OSS for a Trucking Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
