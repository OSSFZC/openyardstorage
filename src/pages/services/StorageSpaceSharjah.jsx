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

import { FiShield, FiUnlock, FiRepeat, FiDollarSign } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import LeftalignedCards from "../../components/LeftalignedCards";

export default function StorageSpaceSharjah() {
  useMeta(
    "Storage Space in Sharjah | Openyard Storage FZC Logistics UAE",
    "OSS offers professional storage space in Sharjah for businesses requiring reliable warehousing, inventory support & efficient logistics solutions. Contact now!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        // eyebrow="Secure Your Space, Simplify Your Life"
        title="Commercial Storage Space in Sharjah, UAE"
        subtitle="OSS is a 3PL warehousing provider operating 260,000+ square ft of ambient, temperature-controlled, and open-yard storage across Sharjah. OSS serves trading firms, industrial manufacturers, and e-commerce businesses with cloud-based warehouse management system (WMS) tracking, real-time inventory visibility, and multimodal logistics support."
        buttonText="Contact Us Now"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Tired of Clutter? We've Got Solutions!"
        title="Why Traditional Storage Warehouse Falls Short In The Uae"
        description="Businesses using outdated warehouse models in the UAE commonly face four recurring problems"
        // description2="At Open Yard Storage, we recognize these problems and provide seamless solutions that streamline operations and fulfill your storage needs."
        rightTitle="Problem Statement "
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiShield,
            title: "Fixed-lease inflexibility.",
            text: "Long-term lease terms don't adjust for seasonal demand, so businesses pay for unused space during slow periods.",
          },
          {
            icon: FiUnlock,
            title: "No real-time stock visibility.",
            text: "Manual or disconnected tracking systems cause inventory discrepancies, stockouts, and late order fulfillment.",
          },
          {
            icon: FiRepeat,
            title: "Limited security and climate control. ",
            text: "Warehouses without fire suppression, 24/7 monitoring, or temperature regulation put high-value cargo at risk of damage or loss.",
          },
          {
            icon: FiDollarSign,
            title: "Slow turnaround cycles.",
            text: "Inefficient cross-docking and manual outbound processing delay final-mile dispatch.",
          },
        ]}
      />

      {/* Solving Your Storage Challenges */}
      <LeftalignedCards
        // eyebrow="Solving Your Storage Challenges"
        title="Solving Your Storage Challenges"
        description="As GCC trade routes expand, businesses need reliable Freezone Storage Space in Sharjah with high inventory accuracy and constant asset security. OSS addresses each of these four challenges directly:
"
        features={[
          {
            image: "/images/services/stock.png",
            title: "Dynamic footprint allocation ",
            description:
              "pallet positions and square footage scale up or down with stock levels.",
          },
          {
            image: "/images/services/api.png",
            title: "WMS digital integration",
            description:
              "SKU counts, batch numbers, and expiration dates are tracked in real time through a client portal.",
          },
          {
            image: "/images/services/insurance.png",
            title: "Reduced asset risk",
            description:
              "facilities include continuous CCTV, biometric access control, and civil defense-approved fire suppression.",
          },
          {
            image: "/images/services/speed.png",
            title: "Faster freight handling ",
            description:
              "double-deep racking, forklifts, and automated loading docks reduce vehicle turnaround time.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Storage and Logistics Company Sharjah – Industrial Warehousing Built Around Measurable Business Outcomes"
        description="OSS operates contract logistics and storage services in Sharjah that give businesses access to enterprise-grade warehousing without the cost of buying or building their own facility.
        OSS is a storage and logistics company in Sharjah. Each client contract is built around a specific cargo type, storage volume, and shipping timeline."
        features={[
          {
            image: "/images/services/grow.png",
            title: "Scalable pallet allocations",
            description: "storage footage adjusts to match import cycles.",
          },
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking",
            description:
              " reduces manual processing errors in inventory logging.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Highway access",
            description: "facilities sit near the E311 and E611 corridors",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained logistics staff ",
            description:
              "supply chain coordinators, equipment operators, and inventory managers run daily operations.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-end freight management  ",
            description:
              " inbound container destuffing connects directly to outbound last-mile delivery.",
          },
          {
            image: "/images/services/24-7.png",
            title: "24/7 monitoring",
            description:
              "active security teams and continuous video recording protect stored assets.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Storage and 3PL Services Offered by OSS in Sharjah"
        services={[
          {
            title: "Secure Commercial Warehousing",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Storage for raw materials, industrial equipment, and finished goods in facilities with reinforced flooring, high-clearance ceilings, and environmental controls.",
          },
          {
            title: "WMS Inventory Tracking",
            image: "/images/services/custom-storage.jpg",
            description:
              "Real-time stock control through a warehouse management system that tracks batch numbers, supports FIFO/LIFO methods, and sends automatic replenishment alerts.",
          },
          {
            title: "Long-Term Storage",
            image: "/images/services/security.jpg",
            description:
              "Fixed pallet positions for manufacturing components, safety stock, and seasonal overstock that needs extended retention.",
          },
          {
            title: "Short-Term Warehousing",
            image: "/images/services/short-warehouse.jpeg",
            description:
              " Temporary space for sudden inbound shipments, promotional inventory spikes, or cross-border transit drops.",
          },
          {
            title: "Cross-Docking and Distribution Coordination",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from container arrival directly to outbound delivery, cutting storage time to under 24 hours.",
          },
          {
            title: "B2B and E-Commerce Storage",
            image: "/images/services/logistics.jpg",
            description:
              "Dedicated picking zones and sorting stations for high-SKU inventory in fast-moving retail operations.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Warehousing Configured for Five Business Sectors"
        features={[
          {
            image: "/images/services/truck.png",
            title: "FMCG and General Trading",
            description:
              "high-density racking and picking lanes support faster product rotation.",
          },
          {
            image: "/images/services/industrial-park.png",
            title: "Industrial Manufacturing ",
            description:
              "staging areas hold raw materials, production tools, and finished machinery before scheduled distribution.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Retail and E-Commerce Fulfillment",
            description:
              "space scales to handle high order volumes during peak sales periods.",
          },
          {
            image: "/images/services/engineer.png",
            title: "Construction and Infrastructure ",
            description:
              " open-yard and covered storage hold building materials, machinery, and structural components.",
          },
          {
            image: "/images/services/world.png",
            title: "Import and Export Operators ",
            description:
              "cross-docking and customs-compliant processing support fast ocean and air freight transit.",
          },
        ]}
      />

      {/* /Free Zone Storage Section */}
      <FeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone Storage Access for Import-Export Businesses"
        description="Companies handling international trade need reliable Freezone Storage Space in Sharjah that supports duty suspension and simplifies customs processing. OSS facilities are located near the Sharjah International Airport Free Zone (SAIF Zone) and Hamriyah Free Zone, giving trading firms efficient, strategically positioned storage close to major shipping and logistics hubs."
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Thousands of items securely stored and satisfied clients across Sharjah."
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Footprint",
            description: "of industrial storage",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Enterprise Client Base",
            description: "Active manufacturing, trading, and retail clients",
          },
          {
            value: 99.98,
            suffix: "%",
            decimals: 2,
            label: "Inventory Accuracy Rating",
            description: "Maintained via automated WMS barcode processing",
          },
          {
            value: 12000,
            suffix: "+",
            unit: "Pallets",
            label: "Monthly Freight Throughput",
            description: "Processed and dispatched monthly",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Facility Security",
            description: "Video surveillance with automated fire suppression.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Warehousing Experience Based in the UAE",
            description:
              "OSS provides industrial storage and 3PL logistics services across the United Arab Emirates.\n\nOSS invests in facility infrastructure, digital inventory software, and trained operational staff to solve fulfillment problems for growing businesses.\n\nOSS is a storage and logistics company in Sharjah. Clients get dedicated account management, flexible storage contracts, and a logistics team focused on keeping operations running without interruption.",
          },
          {
            title: "Our Team",
            subtitle: "Logistics Staff Managing Daily Warehouse Operations",
            description:
              "OSS warehouses are run by logistics managers, inventory analysts, and warehouse technicians. The team handles inbound container unloading, pallet placement, digital SKU entry, and outbound distribution to keep cargo moving on schedule.",
          },
        ]}
      />

      {/* FULL FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Space Questions Answered"
        faqs={[
          {
            question: "What cargo types can OSS store in Sharjah?",
            answer:
              "OSS stores general trading commodities, retail stock, electronics, dry industrial raw materials, building equipment, and palletized commercial goods. Non-hazardous cargo uses standard high-density racking; specialized items follow separate safety handling.",
          },
          {
            question: "What are the minimum and maximum lease terms at OSS?",
            answer:
              "OSS offers monthly short-term storage for seasonal demand and multi-year contracts for steady, ongoing enterprise storage needs.",
          },
          {
            question:
              "What security measures protect inventory at OSS facilities?",
            answer:
              "OSS facilities use 24/7 video monitoring, alarm systems, biometric and card-controlled access, and civil defense-approved fire suppression systems.",
          },
          {
            question:
              "How does the OSS inventory system sync with client records?",
            answer:
              "OSS uses a cloud-based WMS that logs every item by barcode. Clients get portal access to monitor stock levels, track batch numbers, view dispatch history, and request item pullouts.",
          },
          {
            question:
              "Does OSS handle container transport and last-mile delivery?",
            answer:
              "Yes. OSS handles inbound sea container destuffing, cross-docking, fleet sorting, and regional freight trucking across the GCC.",
          },
          {
            question:
              "How is OSS different from a traditional public warehouse in Sharjah?",
            answer:
              "Traditional public warehouses offer fixed space and manual processing. OSS offers flexible storage allocation, WMS tracking, direct highway access, and full 3PL distribution under one contract.",
          },
          {
            question:
              "Can e-commerce businesses scale pallet space during peak sales periods?",
            answer:
              "Yes. Storage allocation increases during high-volume periods and reduces during slower periods, so businesses only pay for the space they use.",
          },
          {
            question:
              "What free zone storage advantages does OSS offer import-export businesses?",
            answer:
              "OSS storage near the SAIF Zone gives international trading companies tax-efficient storage, duty suspension options, and simplified customs clearance.",
          },
          {
            question: "How does switching to OSS reduce total logistics costs?",
            answer:
              "OSS removes the need for in-house warehouse management, reduces picking errors through automated tracking, and shortens transit time by locating stock near the E311 and E611 highways.",
          },
          {
            question: "What operational standards does OSS follow?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined health and safety protocols, and regular structural safety checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Optimize Your Storage Operations in Sharjah"
        description="Whether you need scalable B2B warehousing, real-time WMS visibility, or free zone storage access, OSS has the facility infrastructure to support it. Contact the OSS logistics team for a warehouse layout plan and quote."
        buttonText="Contact Us Now"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
