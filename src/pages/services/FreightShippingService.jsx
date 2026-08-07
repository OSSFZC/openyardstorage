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
import LeftalignedCards from "../../components/LeftAlignedCards";

import { FiTruck, FiShield, FiTrendingUp, FiDollarSign } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function FreightShippingService() {
  useMeta(
    "International Freight Shipping Service | Openyard Storage FZC",
    "Reliable freight shipping service with sea and air freight, export documentation, customs clearance, warehousing, and global cargo tracking.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Efficient Freight Solutions for Seamless Logistics"
        subtitle="OSS provides freight shipping services connecting Sharjah to global markets through integrated sea and air freight, helping businesses manage international cargo with reliable scheduling, customs support, and end-to-end shipment visibility."
        title="Freight Shipping Service Connecting Sharjah to Global Trade Routes"
        buttonText="Request a Freight Shipping Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/sea.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Facing Shipping Challenges Head-On"
        title="Why Cross-Border Freight Shipping Service Creates Bottlenecks"
        description="Businesses shipping cargo beyond the UAE commonly face four problems."
        // description2="Traditional solutions often fall short, leaving you in a constant scramble to manage unexpected situations. Imagine consistently meeting deadlines, ensuring regulatory compliance without headaches, and maintaining a seamless flow in your logistics operations."
        rightTitle="Problem statment"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiTrendingUp,
            title: "Inconsistent International Scheduling",
            text: "Coordinating freight across multiple countries without a fixed shipping partner leads to unpredictable transit times and missed delivery windows.",
          },
          {
            icon: FiShield,
            title: "Complex Customs and Documentation",
            text: "Cross-border shipments require accurate paperwork at each port of entry, and small errors cause costly clearance delays.",
          },
          {
            icon: FiDollarSign,
            title: "Fragmented Handling Across Regions",
            text: "Cargo passed between unrelated freight agents in different countries increases the risk of damage, loss, or miscommunication over shipment status.",
          },
          {
            icon: FiTruck,
            title: "Limited Visibility Beyond the UAE",
            text: "Businesses lose track of shipment status once freight moves beyond domestic borders, making it hard to plan around arrival dates.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        // eyebrow="Your Pathway to Streamlined Shipping Excellence"
        title="Simplifying International Freight Shipping"
        description="OSS's freight shipping addresses each of these directly"
        features={[
          {
            image: "/images/services/time-manager.png",
            title: "Innovative Tracking",
            description: "Stay informed and secure with real-time updates.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Customized Solutions",
            description: "Tailored shipping plans for your business.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Delivers on Time",
            description: "Prioritizing speed and reliability.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Strategic Partnerships",
            description: "Benefit from our extensive logistics network.",
          },
        ]}
      />

      <LeftalignedCards
        eyebrow="The OSS Difference "
        title="What businesses get from OSS's freight shipping:"
        subtitle="OSS operates freight shipping services designed around the realities of moving cargo across international borders, customs variation, documentation requirements, and multi-leg transit. Rather than treating export shipments the same as domestic freight, OSS builds each route around the destination country's clearance and handling requirements.
Every freight shipping contract through OSS is structured around cargo type, destination, and shipment frequency, giving exporters a consistent process instead of a one-off booking each time cargo needs to move. Businesses with recurring shipments to the same markets get a repeatable routing plan; businesses with occasional or first-time export needs get documentation guidance built into the process rather than left to figure out on their own.
"
        description="What businesses get from OSS's freight shipping"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Shipments are logged at each handling point, from Sharjah storage through export clearance.",
          },
          {
            image: "/images/services/truck.png",
            title: "Trained Freight Coordinators",
            description:
              "Staff manage documentation, loading, and dispatch scheduling for cross-border shipments.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway and Port Connectivity",
            description:
              "Direct access to the E311 and E611 corridors links inland storage to shipping points.",
          },
          {
            image: "/images/services/transportation.png",
            title: "Flexible Load Options",
            description:
              "Full-load, part-load, sea, and air freight services scale to shipment size and destination.",
          },
          {
            image: "/images/services/stock.png",
            title: "Consolidated Warehousing and Shipping",
            description:
              "Inventory storage and international freight are managed under a single contract, so businesses aren't coordinating separate storage and shipping vendors.",
          },
        ]}
      />
      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Freight Shipping Offerings"
        services={[
          {
            title: "Sea Freight Coordination",
            image: "/images/locations/sea-freight.jpg",
            description:
              "Scheduled and on-demand ocean freight connecting Sharjah's ports to international destinations across multiple regions.",
          },
          {
            title: "Air Freight Coordination",
            image: "/images/locations/planes-runway.jpg",
            description:
              "Time-sensitive freight shipping options for urgent or high-value cross-border shipments where transit speed matters more than cost.",
          },
          {
            title: "Export Documentation and Customs Support",
            image: "/images/locations/customer-support.jpg",
            description:
              "Paperwork and clearance handling built into the freight shipping process to reduce delays at destination ports.",
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
              "Flexible freight capacity so businesses only pay for the space their shipment requires, whether that's a full container or a smaller consignment.",
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
        title="Freight Shipping Across Five Business Sectors"
        features={[
          {
            image: "/images/services/warehouseicon.png",
            title: "General Trading and Export",
            description:
              "Freight shipping built around consistent international routing for commodity shipments moving to multiple markets.",
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
              "Heavy equipment and materials are coordinated for cross-border project shipments.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Construction and Infrastructure",
            description:
              "Building materials and machinery are exported on flexible load schedules.",
          },
          {
            image: "/images/services/world.png",
            title: "FMCG and Retail Export",
            description:
              "Consistent freight shipping scheduling supports recurring overseas replenishment cycles.",
          },
        ]}
      />

      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Export Freight"
        description="Businesses shipping internationally need freight coordination that keeps pace with customs and duty processing at both origin and destination. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving export-focused clients duty-efficient handling built directly into their freight shipping rather than managed as a separate step outside the shipping process."
      />

      {/* STATS */}
      <StatsSection
        title="Reliable Container Freight Performance"
        subtitle="Integrated container freight logistics supported by secure warehousing and regional transport connectivity."
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
            subtitle: "Freight Shipping Experience Built Around Export Trade",
            description:
              "OSS has delivered storage and logistics solutions across the UAE since 2006, offering freight shipping services that support international cargo movement with export documentation, customs coordination, and multi-country routing. Clients benefit from dedicated account management, flexible scheduling, and experienced logistics professionals who manage cross-border shipments efficiently from origin to destination.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Coordinating Export and Cross-Border Freight",
            description:
              "OSS freight shipping operations are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling across sea and air routes reaching well beyond the UAE.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Freight Shipping"
        faqs={[
          {
            question:
              "Does OSS's freight shipping cover destinations outside the UAE?",
            answer:
              "Yes. OSS coordinates sea and air freight lanes connecting Sharjah to regional and international destinations, built around each shipment's origin and destination requirements.",
          },
          {
            question:
              "What documentation support is included in the freight shipping service?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at destination ports.",
          },
          {
            question: "Can businesses choose between sea and air freight?",
            answer:
              "Yes. The freight shipping service includes both sea and air options, allowing businesses to choose based on cost, urgency, and shipment size.",
          },
          {
            question:
              "Does OSS combine warehousing with international freight shipping?",
            answer:
              "Yes. Storage and export freight are managed under a single contract, removing the need to coordinate separate storage and shipping providers.",
          },
          {
            question:
              "What cargo types can be shipped through OSS's freight service?",
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
              "What are the contract terms for freight shipping clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring export volume across multiple markets.",
          },
          {
            question:
              "Does OSS support free zone coordination for export shipments?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the freight shipping process.",
          },
          {
            question:
              "Can shipment volume scale for exporters with seasonal demand?",
            answer:
              "Yes. Freight capacity adjusts to order volume, supporting exporters through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for its freight shipping?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility and fleet checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ship Freight Beyond the UAE with One Coordinated Partner"
        description="Whether you need sea freight, air freight, or a combined freight shipping that handles documentation and warehousing together, OSS has the infrastructure and experience to support it. Contact the OSS team for a shipping schedule and quote."
        buttonText="Contact OSS for a Freight Shipping Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
