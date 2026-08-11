import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import {
  FiFileText,
  FiClock,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import LeftalignedCards from "../../components/LeftalignedCards";
import CardsFeatures from "../../components/CardsFeatures";

export default function LogisticTruckCompanySharjah() {
  useMeta(
    "Logistic Truck Company in Sharjah | Openyard Storage FZC",
    "Openyard Storage FZC is a trusted logistic truck company in Sharjah for reliable truck transport, warehousing, and cargo movement. Get your quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Get Your Cargo Moving with Ease"
        title="Logistic Truck Company in Sharjah"
        subtitle="OSS operates as a logistic truck company in Sharjah, providing reliable road transport between storage, ports, airports, and business locations across the UAE. Combined with the OSS storage network in Sharjah, trucking connects warehousing directly to road dispatch, so businesses don't need to coordinate separate storage and trucking providers for the same shipment."
        buttonText="Request a Trucking Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Facing Delays and Complexities?"
        title="Why Businesses Need a Dedicated Logistic Truck Company in Sharjah"
        description="Businesses without a dedicated logistic truck partner commonly face four problems:"
        // description2="Navigating the logistics landscape in Sharjah can be daunting, with its unique infrastructure challenges and regulatory hurdles. Traditional logistic companies often struggle to deliver on their promises, leaving you frustrated and incurring additional costs."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Disconnected storage and trucking booking",
            text: "Coordinating separate warehousing and trucking providers adds delays before cargo even leaves the yard.",
          },
          {
            icon: FiTrendingUp,
            title: "Inconsistent delivery scheduling",
            text: "Ad hoc trucking bookings without a fixed partner lead to unpredictable pickup and delivery windows.",
          },
          {
            icon: FiFileText,
            title: "Complex routing and documentation",
            text: "Inland and cross-emirate trucking requires accurate paperwork, and errors at checkpoints cause costly delays.",
          },
          {
            icon: FiDollarSign,
            title: "Limited visibility once cargo is on the road",
            text: "Businesses lose track of shipment status once trucks leave the warehouse.",
          },
        ]}
      />

      <LeftalignedCards
        title=""
        description=""
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
      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference Section"
        title="Logistic Truck Company In Sharjah Built Around Storage Coordination"
        description={`OSS operates a service that combines warehousing with road freight dispatch, so cargo doesn't need to move between unrelated storage and trucking providers before delivery. Inventory can move from an OSS warehouse straight onto a truck without added transfer delays, which is what sets OSS apart from a standalone logistic truck company that has no storage of its own.

Every trucking contract through OSS is structured around cargo type, delivery frequency, and destination, giving businesses a faster path from storage to delivery than working with disconnected vendors. This matters most for businesses with recurring inland deliveries, where consistent handling and scheduling directly affect delivery reliability.

What businesses get from OSS's trucking and warehousing coordination:`}
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
            image: "/images/services/truck.png",
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
        eyebrow="Services"
        title="End-to-End Trucking Solutions"
        services={[
          {
            title: "Inland and Cross-Emirate Trucking",
            image: "/images/services/inland-transport.jpg",
            description:
              "Scheduled road transport connecting warehouses, ports, airports, and business locations across the UAE with dependable transit planning and timely deliveries.",
          },
          {
            title: "Warehouse-to-Destination Dispatch",
            image: "/images/services/dispatch.jpg",
            description:
              "Storage and outbound trucking are coordinated under one service, simplifying cargo movement and reducing the need to manage multiple logistics providers.",
          },
          {
            title: "Full and Part Truckload Options",
            image: "/images/services/cross-docking.jpg",
            description:
              "Flexible FTL and LTL solutions allow businesses to move full shipments or smaller loads while paying only for the transport capacity required.",
          },
          {
            title: "Route Documentation Support",
            image: "/images/locations/fleet-reoute.jpg",
            description:
              "Transport paperwork, delivery documentation, and checkpoint requirements are managed to help minimise delays and maintain efficient road freight operations.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking provides real-time visibility into cargo location, transit progress, and delivery confirmation throughout the journey.",
          },
          {
            title: "Recurring Delivery Scheduling",
            image: "/images/services/schedule.jpg",
            description:
              "Fixed trucking schedules support regular distribution routes, ensuring predictable deliveries and reliable transport for ongoing business operations.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Trucking Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Commodity shipments move on scheduled trucking routes between storage and destination.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Components and finished goods move by road on fixed delivery schedules.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Time-sensitive shipments benefit from reliable road transport between storage and delivery points.",
          },
          {
            image: "/images/services/online-store.png",
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
        title="Free Zone Access Supporting Trucking Operations"
        description="Businesses moving cargo by road between free zones and other destinations need customs processing that keeps pace with their delivery schedule. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving trucking clients duty-efficient handling built directly into the dispatch process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Freight trucking supported by secure storage infrastructure, reliable routing, and coordinated road transport across the UAE."
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
            subtitle: "Trucking Experience Built Around Reliability",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, growing into a logistic truck company in Sharjah alongside its wider warehousing and sea and air freight services. Fast documentation turnaround, warehouse-to-destination coordination, and route-specific handling are built into how OSS structures every trucking shipment. Clients using OSS for trucking get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating road transport across multiple UAE destinations.",
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
        title="Common Questions About Trucking in Sharjah"
        faqs={[
          {
            question:
              "Does OSS operate as a logistic truck company in Sharjah?",
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
            question: "Does OSS combine warehousing with trucking dispatch?",
            answer:
              "Yes. Storage and trucking dispatch are managed under a single contract, removing the need to coordinate separate storage and trucking providers.",
          },
          {
            question:
              "What cargo types can be moved through OSS's trucking service?",
            answer:
              "OSS moves general trading commodities, industrial components, and palletized commercial goods by road. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it's on the road?",
            answer:
              "A digital tracking system provides visibility into shipment status from warehouse dispatch through final delivery.",
          },
          {
            question: "What are the contract terms for trucking clients?",
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
              "Yes. Capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow as a logistic truck company?",
            answer:
              "OSS follows international supply chain safety standards, using certified drivers, defined documentation protocols, and routine vehicle checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo with a Coordinated Logistic Truck Company in Sharjah"
        description="Whether you need standalone trucking or a combined service that pairs warehousing with road freight dispatch, OSS has the infrastructure and experience to support it. Contact the OSS team for a trucking schedule and quote."
        buttonText="Contact OSS for a Trucking Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
