import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import { FiSettings, FiClock, FiTrendingUp, FiEye } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import LeftalignedCards from "../../components/LeftalignedCards";
import CardsFeatures from "../../components/CardsFeatures";

export default function LogisticsTransportSharjah() {
  useMeta(
    "Logistics Transport Service in Sharjah|Openyard Storage FZC",
    "Your reliable logistics transport service in Sharjah starts with Openyard Storage FZC.Efficient transport, dependable support & competitive quotes. Call us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Your Trusted Partner in Sharjah Logistics"
        title="Logistics and Transport Service in Sharjah"
        subtitle="OSS delivers a dependable logistics transport service in Sharjah for businesses that need warehousing and distribution moved under one coordinated operation. Combined with the OSS storage network, transport fleets connect inventory directly to inbound and outbound delivery, so businesses don't need to manage separate warehousing and trucking providers for the same shipment"
        buttonText="Request a Logistics Transport Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Open-yard-storage.jpeg"
        s
      />

      <TrustedSlider
      title="Used by Businesses Moving Goods Across the UAE"
      description="Companies relying on OSS for transport and distribution include manufacturers with regular production output, retailers managing multi-location stock transfers, and trading firms that need scheduled inland delivery across the Emirates." />
      
      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Experiencing Delays and Inefficiencies?"
        title="Why Distribution Needs a Reliable Logistics Transport Service in Sharjah"
        description="Businesses without a coordinated approach to inland freight movement commonly face four problems:"
        // description2="OSS FZC offers refined solutions for these prevalent issues, providing smooth, reliable logistics transport service in Sharjah tailored to your business needs. Partner with us to streamline your operations and enhance productivity with our expertise and advanced technologies."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiTrendingUp,
            title: "Disconnected Storage and Transport Booking",
            text: "Coordinating separate warehousing and trucking providers adds handling steps before goods even leave the facility.",
          },
          {
            icon: FiClock,
            title: "Inconsistent Delivery Scheduling",
            text: "Ad hoc transport bookings without a fixed fleet partner lead to unpredictable pickup and drop-off windows.",
          },
          {
            icon: FiSettings,
            title: "Limited Fleet Flexibility",
            text: "Businesses with mixed cargo, from pallets to full loads, struggle to find a single provider that can handle both.",
          },
          {
            icon: FiEye,
            title: "Poor Visibility During Transit",
            text: "Once goods leave the warehouse, businesses often lose track of delivery status until arrival.",
          },
        ]}
      />

      <LeftalignedCards
        title="Transport Solutions That Keep Your Deliveries Moving"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined storage and transport",
            description:
              "Inventory is stored and dispatched under a single coordinated operation.",
          },
          {
            image: "/images/locations/schedule.png",
            title: "Reliable delivery scheduling",
            description:
              "A dedicated fleet reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/images/services/truck.png",
            title: "Flexible vehicle capacity",
            description:
              "Small consignments and full truckloads are both supported from the same facility.",
          },
          {
            image: "/images/services/online-test.png",
            title: "In-transit tracking",
            description:
              "Delivery status is visible from warehouse dispatch through final drop-off.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference"
        title="Logistics Transport Service in Sharjah Built Around Warehousing Coordination"
        subtitle="OSS operates a logistics transport service in Sharjah that integrates warehousing with inland distribution, allowing cargo to move directly from storage to delivery without relying on separate storage and trucking providers. This reduces handling, improves efficiency, and keeps shipments moving on schedule. Transport solutions are planned around cargo type, delivery frequency, and destination, helping businesses maintain reliable distribution across the UAE.

Fleet capacity is aligned with each client's shipping patterns, ensuring vehicles are available when inventory is ready for dispatch instead of relying on last-minute bookings. For businesses managing deliveries to multiple locations, OSS provides a single point of coordination for both storage and transport, simplifying logistics management, reducing administrative effort, and creating a more efficient supply chain from warehouse to final destination."
description="What businesses get from OSS's transport and warehousing coordination:"       
features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse dispatch through delivery confirmation.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained Dispatch Coordinators",
            description:
              "Staff manage loading, routing, and scheduling for recurring and one-off deliveries.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway Connectivity",
            description:
              "Direct access to major transport corridors supports fast movement across Sharjah and neighboring Emirates.",
          },
          {
            image: "/images/services/truck.png",
            title: "Flexible Fleet Options",
            description:
              "Small vans, mid-size trucks, and full trailers are all available depending on load size.",
          },
          {
            image: "/images/industries/product-testing.png",
            title: "Consolidated Warehousing and Dispatch",
            description:
              "Storage and transport are managed under a single contract.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Services"
        title="Transport and Distribution Offerings"
        services={[
          {
            title: "Scheduled Inland Distribution",
            image: "/images/services/inland-transport.jpg",
            description:
              "Planned delivery routes connecting Sharjah warehouses with destinations across the UAE, providing dependable transport for businesses with recurring distribution requirements.",
          },
          {
            title: "On-Demand Freight Movement",
            image: "/images/services/land-transportation.png",
            description:
              "Flexible transport services for urgent deliveries, one-off shipments, and time-sensitive stock transfers between warehouses, customers, and commercial locations.",
          },
          {
            title: "Warehouse-to-Delivery Coordination",
            image: "/images/services/security.jpg",
            description:
              "Storage and outbound transport are managed under one coordinated service, reducing handling, simplifying logistics, and removing the need for multiple providers.",
          },
          {
            title: "Full and Part Load Options",
            image: "/images/services/customs-inspection.jpg",
            description:
              "Flexible vehicle capacity allows businesses to transport full or smaller loads while paying only for the space their cargo requires.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking provides real-time visibility into shipment location, delivery progress, and proof of delivery.",
          },
          {
            title: "Multi-Location Distribution Support",
            image: "/images/services/Open-yard-storage.jpeg",
            description:
              "Coordinated transport for businesses delivering to multiple retail outlets, warehouses, production facilities, or customer locations across Sharjah and the UAE.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow=""
        title="Transport Support Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Inland distribution keeps commodity stock moving between storage and buyers.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Components and finished goods move on scheduled delivery routes to production sites.",
          },
          {
            image: "/images/industries/protection.png",
            title: "Healthcare and Pharmaceutical",
            description:
              "Controlled, scheduled transport supports time-sensitive stock movement.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce",
            description:
              "Regular replenishment runs keep shelves and fulfillment centers stocked.",
          },
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Equipment and parts move reliably to support active project timelines.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Transport Operations"
        description="Businesses moving goods across the UAE need customs processing that keeps pace with delivery schedules. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving transport clients duty-efficient handling built directly into the distribution process rather than managed as a separate step."
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
            value: 3,
            unit: "Routes",
            label: "Route Coverage",
            description:
              "Transport lanes connecting Sharjah to Dubai, Abu Dhabi, and the wider UAE.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Transport Experience Built Around Reliability and Coordination",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing its transport fleet alongside its wider warehousing and freight services. Predictable scheduling, warehouse-to-delivery coordination, and route-specific handling are built into how OSS structures every distribution arrangement. \n\n Clients using OSS for a logistics transport service in Sharjah get dedicated account management, flexible scheduling, and a logistics team experienced in coordinating recurring and one-off deliveries across the Emirates. Over nearly two decades of operation, OSS has built the vehicle capacity, driver expertise, and warehouse-to-road processes needed to keep delivery windows consistent even as client volumes grow.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Distribution and Delivery",
            description:
              "OSS transport operations are run by dispatch coordinators, route planners, and warehouse technicians who manage loading, scheduling, and delivery confirmation for goods moving through Sharjah and across the UAE.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Logistics and Transport in Sharjah"
        faqs={[
          {
            question:
              "Does OSS offer a logistics transport service in Sharjah?",
            answer:
              "Yes. OSS coordinates inland transport alongside its wider warehousing and freight services, giving businesses a dependable option for scheduled and on-demand distribution.",
          },
          {
            question: "Does OSS combine warehousing with transport dispatch?",
            answer:
              "Yes. Storage and transport are managed under a single contract, removing the need to coordinate separate storage and trucking providers.",
          },
          {
            question: "Can businesses schedule recurring deliveries with OSS?",
            answer:
              "Yes. Recurring inland routes can be set up for businesses that need predictable pickup and delivery windows across Sharjah and the wider UAE.",
          },
          {
            question:
              "What vehicle sizes are available for transport bookings?",
            answer:
              "OSS offers small vans, mid-size trucks, and full trailers, so shipments of any size can be matched to the right vehicle.",
          },
          {
            question: "How is cargo tracked once it leaves the warehouse?",
            answer:
              "A digital tracking system provides visibility into delivery status from dispatch through drop-off confirmation.",
          },
          {
            question:
              "What cargo types can be moved through OSS's transport service?",
            answer:
              "OSS moves general trading commodities, industrial components, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "What are the contract terms for transport clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional deliveries and multi-year contracts for businesses with recurring distribution needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for transport clients?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the distribution process.",
          },
          {
            question:
              "Can transport capacity scale for businesses with seasonal demand?",
            answer:
              "Yes. Fleet capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for logistics and transport?",
            answer:
              "OSS follows international supply chain safety standards, using certified drivers and equipment operators, defined loading protocols, and routine vehicle checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Goods with a Coordinated Transport Partner"
        description="Whether you need standalone inland transport or a combined service that pairs warehousing with distribution, OSS has the infrastructure and experience to support it. Contact the OSS team for a delivery schedule and quote."
        buttonText="Contact OSS for a Logistics Transport Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
