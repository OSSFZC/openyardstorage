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
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import { FiCalendar, FiShield, FiFileText, FiTruck } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import LeftalignedCards from "../../components/LeftalignedCards";

export default function ContainerLogisticsTransportSharjah() {
  useMeta(
    "Container Logistics Transport in Sharjah | Openyard Storage FZC",
    "From port to destination, Openyard Storage FZC provides container shipping services in Sharjah with dependable freight solutions. Request a quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Dependable Logistics, Seamless Solutions"
        title="Container Logistics Transport in Sharjah"
        subtitle="OSS provides container logistics transport in Sharjah, integrating port handling, warehousing, and inland delivery into one coordinated solution, helping businesses move cargo efficiently from vessel arrival to final destination."
        buttonText="Request a Container Logistics Transport Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/containe-certification-ISO-tank-service.jpeg"
      />

     <TrustedSlider
        title="Used by Businesses Moving Containers Through Sharjah's Ports"
        description="Companies relying on OSS for container logistics transport include commodity trading firms, industrial manufacturers, oil and gas support businesses, and import-export operators managing regular container shipments through the Emirates."
      />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Navigating the Challenges of Container Logistics"
        title="Why Businesses Struggle with Container Shipping Services in Sharjah"
        description="Businesses handling containers through Sharjah's ports commonly face four problems:"
        // description2="At Open Yard Storage, we understand the hurdles you face. Our container logistics transport solutions in Sharjah are designed to address these specific issues, offering precision and reliability that streamline your operations."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiCalendar,
            title: "Disconnected handling between port and storage",
            text: "Working with separate providers for port handling and inland transport creates delays at every handoff.",
          },
          {
            icon: FiFileText,
            title: "Unreliable Container De-Stuffing Schedules",
            text: "Without dedicated coordination, container unloading can be delayed, pushing back downstream storage and delivery.",
          },
          {
            icon: FiShield,
            title: "Limited Visibility After Port Arrival",
            text: "Businesses lose track of container status once cargo leaves the vessel and enters inland transport.",
          },
          {
            icon: FiTruck,
            title: "Inconsistent Handling Standards",
            text: "Containers moving through multiple unrelated agents increase the risk of damage or misplaced cargo.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <LeftalignedCards
        // eyebrow="The OSS FZC Difference"
        title="Streamlining Container Logistics from Port to Delivery"
        description="OSS addresses each of these through coordinated container logistics transport:"
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Single-Provider Coordination",
            description:
              "Port handling, storage, and inland delivery are managed under one service instead of separate vendors.",
          },
          {
            image: "/images/locations/schedule.png",
            title: "Scheduled De-Stuffing",
            description:
              "Containers are unloaded on a set timeline, keeping downstream storage and delivery on schedule.",
          },
          {
            image: "/images/services/track.png",
            title: "Continuous Tracking",
            description:
              "WMS-based visibility into container status from port arrival through inland delivery.",
          },
          {
            image: "/images/locations/shipped.png",
            title: "Consistent Handling Standards",
            description:
              "Containers stay within the OSS network from the port to the final destination.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference"
        title="Container Logistics Transport in Sharjah Built Around Port-to-Door Coordination"
        subtitle="OSS operates container shipping services in Sharjah that combine port-side handling with inland storage and transport under a single contract. Businesses working with OSS don't need to separately manage port agents, warehouse providers, and inland freight carriers for the same shipment.

Every container logistics transport contract in Sharjah is structured around cargo type, container volume, and delivery timeline, giving businesses a repeatable process instead of coordinating each shipment from scratch. This matters most for businesses moving containers on a recurring basis, where consistency in handling and scheduling directly affects downstream production or retail timelines."
        description="What businesses get from OSS's container logistics transport"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Container contents are logged at each handling point, from port arrival through inland delivery.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Trained Port and Logistics Staff",
            description:
              "Coordinators manage destuffing, storage placement, and outbound delivery scheduling.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway Connectivity",
            description:
              "Direct access to the E311 and E611 corridors supports fast inland distribution after port arrival.",
          },
          {
            image: "/images/services/truck.png",
            title: "Flexible Container Handling",
            description:
              "Full-container-load and part-container-load services scale to shipment size.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-End Coordination",
            description:
              "Inbound container handling connects directly to outbound delivery without added transfer points.",
          },
        ]}
      />

      <ServiceGridSection
        eyebrow="Our Services"
        title="Container Logistics Transport Offerings in Sharjah"
        services={[
          {
            title: "Container Destuffing and Cross-Docking",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from container arrival directly to outbound delivery, reducing storage and handling time.",
          },
          {
            title: "Inland Transport and Distribution",
            image: "/images/services/open-yard.jpg",
            description:
              "Container logistics transport in Sharjah extends beyond the port into regional inland delivery routes.",
          },
          {
            title: "Warehouse-to-Port Coordination",
            image: "/images/services/security.jpg",
            description:
              "Storage and container handling are managed together, removing the need for businesses to coordinate separate providers.",
          },
          {
            title: "Full-Container and Part-Container Load Services",
            image: "/images/cargo2.jpg",
            description:
              "Flexible container shipping services in Sharjah for businesses of varying shipment volumes.",
          },
          {
            title: "Customs and Documentation Support",
            image: "/images/locations/customer-support.jpg",
            description:
              "Coordinated processing reduces delays between container clearance and inland delivery.",
          },
          {
            title: "Shipment Tracking and Reporting",
            image: "/images/services/shipment-tracking.jpg",
            description:
              "Digital tracking gives clients visibility into container status from port arrival through final delivery.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry"
        title="Container Logistics Transport Across Five Business Sectors"
        features={[
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Heavy equipment and industrial materials moved through container shipping services tied to energy sector projects.",
          },
          {
            image: "/images/services/truck.png",
            title: "General Trading and Import-Export",
            description:
              "Container logistics transport supports consistent international shipment routing.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing",
            description:
              "Raw materials and machinery move on scheduled container delivery windows.",
          },
          {
            image: "/images/locations/construction.png",
            title: "Construction and Infrastructure",
            description:
              "Heavy materials are transported efficiently between the port and project sites.",
          },
          {
            image: "/images/industries/product-testing.png",
            title: "FMCG Distribution",
            description:
              "Reliable container handling supports consistent inventory replenishment cycles.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Container Transport"
        description="Businesses trading internationally through Sharjah need container logistics transport that accounts for customs and duty processing. OSS coordinates container shipping services in Sharjah close to the SAIF Zone and Hamriyah Free Zone, keeping duty-efficient handling built into the same process rather than managed as a separate step."
      />

      {/* STATS */}
      <StatsSection
        title="Operational Performance That Businesses Trust"
        subtitle="Integrated container logistics backed by secure infrastructure and reliable transport coordination."
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
            value: 3,
            unit: "Services",
            label: "Service Scope",
            description:
              "Combined port handling, storage, and inland container transport.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Container Handling Experience Rooted in Sharjah",
            description:
              "OSS has operated as a storage and logistics provider in Sharjah since 2006, developing container shipping services in Sharjah that connect port-side handling directly to inland storage and delivery. OSS invests in port coordination, digital tracking systems, and trained dispatch staff to keep container movement predictable. \n\n Clients using OSS for container logistics transport get dedicated account management, flexible contracts, and a logistics team focused on keeping containers moving from arrival to final delivery without added delays.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Every Stage of Container Movement",
            description:
              "OSS container logistics transport operations in Sharjah are run by port coordinators, warehouse technicians, and dispatch staff who manage de-stuffing, storage placement, and inland delivery scheduling as part of one coordinated process.",
          },
        ]}
      />

      {/* FAQ */}

      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Container Logistics Transport in Sharjah"
        faqs={[
          {
            question: "What does OSS's container logistics transport include?",
            answer:
              "It combines container de-stuffing, warehousing, customs support, and inland delivery scheduling under one service, instead of requiring businesses to manage separate port and transport providers.",
          },
          {
            question:
              "Are container shipping services in Sharjah available for both full and part loads?",
            answer:
              "Yes. Container handling scales from full-container loads to smaller part-container shipments depending on cargo volume.",
          },
          {
            question:
              "How does OSS track containers from port arrival to delivery?",
            answer:
              "A cloud-based WMS logs container contents at each handling point, giving clients visibility from port arrival through inland delivery.",
          },
          {
            question:
              "What cargo types can move through OSS's container logistics transport?",
            answer:
              "OSS manages general trading commodities, industrial equipment, machinery, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "Does OSS combine warehousing with container transport?",
            answer:
              "Yes. Storage and inland container transport are managed under a single contract, removing the need to coordinate separate storage and transport providers.",
          },
          {
            question:
              "What are the contract terms for container logistics transport?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring container volume.",
          },
          {
            question:
              "Does OSS support free zone coordination for container shipments?",
            answer:
              "Yes. Storage and container handling near the SAIF Zone and Hamriyah Free Zone support duty-efficient processing as part of the same service.",
          },
          {
            question:
              "How is OSS different from using separate port agents and inland carriers?",
            answer:
              "A single coordinated service manages the full container journey, reducing the handoff delays and communication gaps common when using multiple unrelated providers.",
          },
          {
            question:
              "Can container volume scale for businesses with seasonal demand?",
            answer:
              "Yes. Container handling capacity adjusts to shipment volume, supporting businesses through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for container logistics transport?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined handling protocols, and routine facility and fleet checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Containers Through Sharjah with One Coordinated Partner"
        description="Whether you need port-side de-stuffing, inland transport, or full container logistics transport in Sharjah from arrival to delivery, OSS has the infrastructure and team to support it. Contact the OSS team for a container logistics plan and quote."
        buttonText="Contact OSS for a Container Logistics Transport Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
