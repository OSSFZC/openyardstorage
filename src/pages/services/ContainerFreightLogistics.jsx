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
import { FiClock, FiMapPin, FiPackage, FiSettings } from "react-icons/fi";
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import useMeta from "../../hooks/useMeta";

export default function ContainerFreightLogistics() {
  useMeta(
    "Container Freight Logistics in Sharjah | Openyard Storage FZC",
    "Openyard Storage FZC delivers container freight logistics with seamless sea air cargo & logistics solutions, ensuring efficient global shipments. Enquire today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Reliable Freight, Seamless Solutions"
        title="Container Freight Logistics in Sharjah"
        subtitle="OSS is a container freight logistics provider offering integrated sea air cargo, warehousing, and inland transport, connecting Sharjah's ports with regional and international shipping routes through one streamlined logistics solution."
        buttonText="Request a Container Freight Logistics Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
        title="Used by Businesses Managing International Container Shipments"
        description="Companies relying on OSS for container freight logistics include commodity trading firms, industrial manufacturers, oil and gas support businesses, and import-export operators who need dependable cargo transportation and logistics across sea and inland routes."
      />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="When Challenges Pile Up, We Clear the Path"
        title="Why Poor Freight Coordination Increases Delays for Cargo Freight Forwarders"
        description="Businesses without a dedicated container freight logistics partner commonly run into four problems"
        // description2="Are you tired of dealing with unpredictable timelines, cargo handling errors, or poor communication from logistics providers? These issues not only hinder your business operations but also affect your bottom line. Open Yard Storage understands these challenges and offers optimized logistics solutions designed to overcome them."
        rightTitle="Problem statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Disconnected Freight Forwarders",
            text: "Working with multiple cargo freight forwarders across different legs of a shipment creates communication gaps and delays.",
          },
          {
            icon: FiMapPin,
            title: "No Integrated Sea and Air Coordination",
            text: "Businesses managing sea air cargo & logistics separately from inland transport lose time at every handoff point.",
          },
          {
            icon: FiPackage,
            title: "Inconsistent Container Handling",
            text: "Cargo moving through several third parties increases the risk of damage, misplacement, or documentation errors.",
          },
          {
            icon: FiSettings,
            title: "Limited Port-Side Visibility",
            text: "Without a dedicated carrier in shipping and logistics, businesses can't confirm container status until it reaches the final destination.",
          },
        ]}
      />
      <LeftalignedCards
        // eyebrow="OSS Container Freight Logistics"
        title="Integrated Solutions for Container Freight Challenges"
        description="OSS addresses each of these through integrated container freight logistics:"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "Single-Provider Coordination",
            description:
              "One carrier in shipping and logistics manages the full container journey from port to warehouse to delivery.",
          },
          {
            image: "/images/services/transportation.png",
            title: "Combined Sea Air Cargo & Logistics",
            description:
              "Ocean and air freight are coordinated together instead of through separate vendors.",
          },
          {
            image: "/images/services/risk-management.png",
            title: "Consistent Handling Standards",
            description:
              "Containers stay within the OSS network, reducing the risk of loss or damage.",
          },
          {
            image: "/images/services/time-manager.png",
            title: "Real-Time Tracking",
            description:
              "WMS-based visibility into container status from arrival through final delivery.",
          },
        ]}
      />
      {/* SOLUTIONS */}
      <FreeZoneFeatureSection
        eyebrow="The OSS FZC Difference"
        title="A Full-Service Approach to Marine Logistics Services in Sharjah"
        subtitle="OSS operates as one of the marine logistics companies in Sharjah offering container freight logistics that combines port handling, warehousing, and inland transport under one contract. Businesses don't need to separately manage cargo freight forwarders, customs agents, and inland carriers.
As a logistic shipping service built around container-based trade, OSS coordinates every step of cargo transportation and logistics, from vessel arrival to final delivery, through a single point of contact.
"
        description="What businesses get from OSS's container freight logistics"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Container contents are logged at each handling point.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained Port and Logistics Staff",
            description:
              "Coordinators manage container de-stuffing, storage, and outbound delivery.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway Access",
            description:
              "Proximity to the E311 and E611 corridors supports fast inland distribution after port arrival.",
          },
          {
            image: "/images/services/truck.png",
            title: "Flexible Freight Options",
            description:
              "Full-container-load and part-container-load services scale to shipment size.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-End Coordination",
            description:
              "Inbound container handling connects directly to outbound cargo transportation and logistics.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Freight Services"
        title="Container Freight Logistics Offerings"
        services={[
          {
            title: "Container Destuffing and Cross-Docking",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from container arrival directly to outbound delivery, reducing storage and handling time.",
          },
          {
            title: "Sea Air Cargo & Logistics Coordination",
            image: "/images/locations/sea-freight.jpg",
            description:
              "Combined ocean and air freight management under a single logistic shipping service.",
          },
          {
            title: "Inland Transport and Distribution",
            image: "/images/services/inland-transport.jpg",
            description:
              "Container freight logistics extends beyond the port into regional inland delivery routes.",
          },
          {
            title: "Customs and Documentation Support",
            image: "/images/locations/customer-support.jpg",
            description:
              "Coordinated processing reduces delays between container clearance and delivery.",
          },
          {
            title: "Full-Container and Part-Container Load Services",
            image: "/images/services/maintenance.jpg",
            description:
              "Flexible freight options for businesses of varying shipment volumes.",
          },
          {
            title: "Marine Logistics Services in Sharjah",
            image: "/images/locations/marine-logistic.jpg",
            description:
              "Port-side coordination connecting vessel arrival to warehouse and delivery scheduling.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry"
        title="Container Freight Logistics Across Five Business Sectors"
        features={[
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support",
            description:
              "Cargo transportation and logistics for heavy equipment and pipes moving through Sharjah's ports.",
          },
          {
            image: "/images/services/truck.png",
            title: "General Trading and Import-Export",
            description:
              "Cargo freight forwarders coordinate international shipments through container freight logistics.",
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
              "Heavy materials transported through combined sea air cargo & logistics.",
          },
          {
            image: "/images/locations/shipped.png",
            title: "FMCG Distribution",
            description:
              "Marine logistics services in Sharjah support consistent inventory replenishment cycles.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Coordination for Container Freight"
        description="Businesses trading internationally need container freight logistics that accounts for customs and duty processing. OSS coordinates cargo transportation and logistics close to the SAIF Zone and Hamriyah Free Zone, keeping duty-efficient handling built into the same shipping process rather than managed separately."
      />

      {/* STATS */}
      <StatsSection
        title="Trusted Performance Across Every Shipment"
        subtitle="Integrated container freight logistics supported by secure warehousing and reliable transportation."
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
            value: 2,
            unit: "Transport Modes",
            label: "Service Scope",
            description:
              "Combined sea air cargo & logistics and inland transport.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Marine and Container Logistics Experience in Sharjah",
            description:
              "OSS has operated as a storage and logistics provider in Sharjah since 2006, growing into one of the established marine logistics companies in Sharjah offering container freight logistics alongside warehousing and inland transport. OSS invests in port coordination, digital tracking systems, and trained dispatch staff to keep container shipments moving without gaps.\n\n Clients working with OSS as their carrier in shipping and logistics get dedicated account management, flexible contracts, and a team focused on coordination across every step of the shipment.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Every Stage of Container Freight",
            description:
              "OSS container freight logistics operations are run by port coordinators, warehouse technicians, and dispatch staff who manage container de-stuffing, storage placement, and inland delivery scheduling as part of a single logistic shipping service.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Container Freight Logistics"
        faqs={[
          {
            question:
              "What does OSS's container freight logistics service include?",
            answer:
              "It combines container de-stuffing, warehousing, customs support, and inland delivery scheduling under one carrier in shipping and logistics, instead of requiring businesses to manage separate cargo freight forwarders.",
          },
          {
            question: "Does OSS handle both sea and air freight coordination?",
            answer:
              "Yes. OSS manages sea air cargo & logistics together, rather than routing ocean and air shipments through separate providers.",
          },
          {
            question:
              "Is OSS considered one of the marine logistics companies in Sharjah?",
            answer:
              "Yes. OSS provides marine logistics services in Sharjah, including port-side container handling, cross-docking, and coordination with inland transport.",
          },
          {
            question:
              "What cargo types does OSS handle within its container freight logistics?",
            answer:
              "OSS manages general trading commodities, industrial equipment, machinery, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question:
              "Does OSS offer full-container and part-container load options?",
            answer:
              "Yes. Container freight logistics services scale from full-container loads to smaller part-container shipments.",
          },
          {
            question:
              "How does OSS track containers from port arrival to delivery?",
            answer:
              "A cloud-based WMS logs container contents at each handling point, giving clients visibility from port arrival through final delivery.",
          },
          {
            question:
              "What are the contract terms for container freight logistics services?",
            answer:
              "OSS offers monthly short-term agreements for seasonal demand and multi-year contracts for steady, ongoing cargo transportation and logistics needs.",
          },
          {
            question:
              "Does OSS support customs and free zone coordination for container shipments?",
            answer:
              "Yes. Storage and freight near the SAIF Zone and Hamriyah Free Zone are coordinated within the same logistic shipping service to reduce customs delays.",
          },
          {
            question:
              "How is OSS different from using separate cargo freight forwarders?",
            answer:
              "A single carrier in shipping and logistics manages the full container journey, reducing the communication gaps and handoff delays common when using multiple freight forwarders.",
          },
          {
            question:
              "What operational standards does OSS follow across its container freight logistics?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined health and safety protocols, and routine facility and fleet checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Move Containers Through One Coordinated Logistics Partner"
        description="Whether you need marine logistics services in Sharjah, combined sea air cargo & logistics, or full container freight logistics from port to delivery, OSS has the infrastructure and team to support it. Contact the OSS team for a logistics plan and quote."
        buttonText="Contact OSS for a Container Freight Logistics Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
