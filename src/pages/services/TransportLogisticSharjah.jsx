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
import { FiClock, FiDollarSign, FiFileText, FiTruck } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function TransportLogisticSharjah() {
  useMeta(
    "Transport Logistic Service in Sharjah | Openyard Storage FZC",
    "Openyard Storage FZC delivers trusted transport logistic service in Sharjah with secure freight, warehousing & timely deliveries. Get your custom quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Seamless Logistics in Sharjah"
        title="Transport Logistic Service in Sharjah"
        subtitle="OSS operates a transport logistic service in Sharjah that connects warehousing, container handling, and inland freight under one coordinated provider. Trading firms, manufacturers, and import-export operators use OSS to move cargo from storage to final delivery without coordinating separate transport and warehousing vendors."
        buttonText="Request a Transport Logistics Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
        title="Used by Businesses Moving Cargo Across the UAE"
        description="Companies relying on OSS for transport and logistics support include commodity trading firms, industrial manufacturers, oil and gas support businesses, and import-export operators who need dependable freight movement across Sharjah and the wider UAE."
      />


      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating the Complexities of Transport Logistics"
        title="Why Fragmented Transport Logistic Service in Sharjah Slows Down Supply Chains"
        description="Businesses without coordinated storage and transport commonly run into four problems"
        // description2="Our dedicated logistics team delivers personalized solutions that align perfectly with your business needs. By focusing on transparency and reliability, we help mitigate risks, ensuring a seamless flow of goods while saving you time and stress."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Disconnected Storage and Transport",
            text: "Working with separate providers for warehousing and freight creates communication gaps and scheduling delays.",
          },
          {
            icon: FiDollarSign,
            title: "Unreliable Delivery Scheduling",
            text: "Ad hoc freight bookings cause inconsistent transit times and missed delivery windows.",
          },
          {
            icon: FiFileText,
            title: "No Real-Time Shipment Visibility",
            text: "Manual tracking systems make it difficult to confirm cargo location or estimated arrival time.",
          },
          {
            icon: FiTruck,
            title: "Inconsistent Handling Standards",
            text: "Cargo passed between multiple unrelated transport providers increases the risk of damage or delay.",
          },
        ]}
      />

      <LeftalignedCards
        title="Complete Logistics Solutions for Growing Businesses"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Combined Storage and Transport",
            description:
              "Warehousing and freight are managed under one contract instead of separate providers.",
          },
          {
            image: "/images/industries/product-testing.png",
            title: "Scheduled and On-Demand Dispatch",
            description:
              "Fixed routing handles recurring shipments while additional capacity covers urgent freight.",
          },
          {
            image: "/images/services/time-manager.png",
            title: "Real-Time Tracking",
            description:
              "WMS-based visibility into shipment status from storage through final delivery.",
          },
          {
            image: "/images/services/truck.png",
            title: "Consistent Handling Standards",
            description:
              "Cargo stays within a single coordinated network from origin to destination.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference"
        title="A Transport Logistic Service in Sharjah Built Around Storage-to-Delivery Coordination"
        subtitle="OSS operates a transport logistic service in Sharjah that combines warehousing with inland freight movement, so businesses don't need to separately manage a storage provider and a transport company for the same shipment. Every delivery route connects directly back to the same facility network where inventory is stored.

Each transport contract through OSS is structured around cargo type, delivery frequency, and destination, giving businesses a repeatable process instead of coordinating each shipment from scratch. This matters most for businesses moving cargo on a recurring basis, where consistency in scheduling and handling directly affects downstream production or retail timelines."
        description="What businesses get from OSS's storage and transport coordination in Sharjah:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Shipment status is logged at each handling point, from warehouse dispatch through delivery confirmation.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Trained Dispatch Staff",
            description:
              "Coordinators and drivers manage loading, routing, and delivery scheduling.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway Connectivity",
            description:
              "Direct access to the E311 and E611 corridors supports fast regional distribution.",
          },
          {
            image: "/images/services/truck.png",
            title: "Flexible Load Options",
            description:
              "Full-truckload, part-load, and pallet-level delivery scale to shipment size.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-End Coordination",
            description:
              "Inbound storage connects directly to outbound delivery without added transfer points.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Transport and Logistics Offerings in Sharjah"
        services={[
          {
            title: "Scheduled Freight Dispatch",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Regular freight services operating on fixed schedules, helping businesses maintain reliable delivery timelines and consistent transport for recurring shipments across the UAE.",
          },
          {
            title: "On-Demand Freight Movement",
            image: "/images/services/custom-storage.jpg",
            description:
              "Flexible transport solutions for urgent deliveries, one-off shipments, and time-sensitive stock transfers that require fast and dependable dispatch.",
          },
          {
            title: "Warehouse-to-Delivery Coordination",
            image: "/images/services/security.jpg",
            description:
              "Integrated warehousing and freight services managed under one contract, simplifying logistics by connecting storage, handling, and final delivery.",
          },
          {
            title: "Cross-Docking and Distribution",
            image: "/images/services/cross-docking.jpg",
            description:
              "Efficient cargo transfers from inbound shipments directly to outbound vehicles, reducing storage time, minimising handling, and accelerating distribution.",
          },
          {
            title: "Full-Load and Part-Load Transport",
            image: "/images/services/maintenance.jpg",
            description:
              "Scalable freight options for both full truckloads and shared-load shipments, allowing businesses to optimise transport costs.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking provides real-time shipment visibility, transit updates, inventory status, delivery confirmation, and detailed reporting for improved supply chain control.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry"
        title="Transport and Logistics Support Across Five Business Sectors"
        features={[
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Heavy equipment and materials moved on scheduled and on-demand transport routes.",
          },
          {
            image: "/images/services/truck.png",
            title: "General Trading and Import-Export",
            description:
              "Coordinated storage and transport support fast-moving shipment volumes.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Raw materials and finished machinery move on scheduled delivery windows.",
          },
          {
            image: "/images/locations/construction.png",
            title: "Construction and Infrastructure",
            description:
              "Heavy materials transported efficiently between storage and project sites.",
          },
          {
            image: "/images/services/transportation.png",
            title: "FMCG Distribution",
            description:
              "Reliable transport scheduling supports consistent inventory replenishment cycles.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Transport Coordination"
        description="Businesses trading internationally need transport that keeps pace with customs and duty processing. OSS coordinates storage and freight close to the SAIF Zone and Hamriyah Free Zone, keeping duty-efficient handling built into the same transport process rather than managed as a separate step."
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
            description: "Active manufacturing, trading, and retail clients.",
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
            unit: "Fleet",
            label: "Fleet Availability",
            description:
              "Dedicated vehicles for scheduled and on-demand dispatch.",
          },
        ]}
      />
      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Transport and Logistics Experience Rooted in Sharjah",
            description:
              "OSS has operated as a storage and logistics provider in Sharjah since 2006, developing a transport logistic service in Sharjah that connects warehousing directly to inland freight movement. OSS invests in fleet management, digital tracking systems, and trained dispatch staff to keep deliveries predictable. \n\n Clients working with OSS get dedicated account management, flexible scheduling, and a logistics team focused on keeping storage and transport coordinated rather than managed as separate functions.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Every Stage of Transport",
            description:
              "OSS transport operations are run by dispatch coordinators, drivers, and warehouse technicians who manage load planning, route scheduling, and delivery confirmation across every shipment.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Transport and Logistics in Sharjah"
        faqs={[
          {
            question:
              "What does OSS's combined transport and warehousing service in Sharjah include?",
            answer:
              "It combines warehousing, container handling, and inland freight dispatch under one contract, removing the need to coordinate separate storage and transport providers.",
          },
          {
            question: "Does OSS offer scheduled or on-demand transport?",
            answer:
              "Both. OSS runs fixed-schedule freight for recurring shipments and on-demand dispatch for urgent or one-off cargo movement.",
          },
          {
            question: "What cargo types can OSS transport?",
            answer:
              "OSS moves general trading commodities, industrial equipment, machinery, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is inventory and shipment status tracked?",
            answer:
              "A cloud-based WMS logs cargo at each handling point, giving clients visibility from warehouse dispatch through delivery confirmation.",
          },
          {
            question:
              "Can businesses book part-load transport instead of full-truckload freight?",
            answer:
              "Yes. Full-load and part-load options are available, so smaller consignments don't require booking full freight capacity.",
          },
          {
            question:
              "What are the contract terms for transport and logistics services?",
            answer:
              "OSS offers monthly short-term agreements for seasonal demand and multi-year contracts for steady, ongoing transport needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for transported goods?",
            answer:
              "Yes. Storage and transport near the SAIF Zone and Hamriyah Free Zone support duty-efficient handling as part of the same service.",
          },
          {
            question:
              "Can transport capacity scale during peak demand periods?",
            answer:
              "Yes. Freight capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods.",
          },
          {
            question: "How does OSS reduce total transport costs?",
            answer:
              "Combining storage and transport under one contract, along with direct highway access via the E311 and E611, reduces per-shipment costs compared to using separate providers.",
          },
          {
            question:
              "What operational standards does OSS follow for its transport logistic service?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined load handling procedures, and routine vehicle safety checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Cargo With One Coordinated Transport Partner"
        description="Whether you need scheduled freight runs, on-demand dispatch, or a combined transport logistic service that includes warehousing, OSS has the fleet and facility network to support it. Contact the OSS team for a transport plan and quote."
        buttonText="Contact OSS for a Transport Logistics Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
