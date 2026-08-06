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

import {
  FiLayers,
  FiCalendar,
  FiDollarSign,
  FiArrowUpRight,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function WarehouseStorageSpace() {
  useMeta(
    "Warehouse Storage Space for Rent Sharjah|Openyard Storage FZC",
    "Openyard Storage FZC provides storage warehouse for rent in Sharjah with temperature-controlled storage,secure facilities & flexible solutions.Contact us today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Maximize Your Warehousing Efficiency"
        title="Warehouse Storage Space for Rent in Sharjah"
        subtitle="OSS offers a storage warehouse for rent with flexible, secure warehouse storage space for startups, traders, and growing businesses. Standard racking and temperature control warehouse storage options scale easily as inventory requirements increase."
        buttonText="Request a Small Storage Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/warehousing.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Is Your Current Storage Solution Holding You Back?"
        title="Why Small Businesses Struggle to Find the Right Storage Fit"
        description="Small and growing businesses commonly run into four storage problems:"
        // description2="At OpenYard Storage, we understand these hurdles and offer solutions designed to align with your storage needs. Our warehouse spaces provide superior security measures, flexible lease terms, and a variety of size options."
        rightTitle="Problem statements"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiLayers,
            title: "Oversized space requirements.",
            text: "Standard industrial warehouses often require minimum footprints too large for small inventory volumes.",
          },
          {
            icon: FiCalendar,
            title: "Rigid long-term contracts.",
            text: "Many warehouse providers require multi-year leases that don't suit early-stage or seasonal businesses.",
          },
          {
            icon: FiDollarSign,
            title: "High overhead for low volume",
            text: "Paying for unused square footage eats into margins for smaller operations.",
          },
          {
            icon: FiArrowUpRight,
            title: "No room to scale.",
            text: "Fixed small units can't expand when a business grows, forcing a disruptive move to a new provider.",
          },
        ]}
      />

      <LeftalignedCards
        // eyebrow="The OSS Difference "
        title="Solutions to Your Storage Dilemmas"
        subtitle="OSS addresses each of these through its premium warehouse storage space"
        // description="What businesses get from renting small storage with OSS:"
        features={[
          {
            image: "/images/services/grow.png",
            title: "Right-sized space ",
            description:
              "units are scaled to small inventory volumes instead of forcing a large minimum footprint.",
          },
          {
            image: "/images/services/offer.png",
            title: "Flexible rental terms",
            description:
              "short-term and month-to-month options suit early-stage and seasonal businesses.",
          },
          {
            image: "/images/locations/money.png",
            title: "Lower overhead",
            description: "businesses pay only for the space they actually use.",
          },
          {
            image: "/images/services/speed.png",
            title: "Built-in scalability ",
            description:
              "a storage warehouse at OSS can expand within the same facility network as the business grows.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Temperature Control Warehouse Storage Without Losing Enterprise-Grade Infrastructure"
        subtitle="OSS offers an adaptable warehouse storage space for rent that still includes the same security, tracking, and facility standards used across its larger industrial storage clients. Small businesses aren't limited to lower-quality infrastructure or denied advanced features like temperature control warehouse storage simply because their footprint is smaller. Every storage warehouse for rent through OSS is set up around actual inventory volume, cargo type, and expected growth, ensuring businesses don't overpay for space they don't need."
        description="What businesses get from renting small storage with OSS"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking ",
            description:
              "even small units benefit from digital inventory logging. ",
          },
          {
            image: "/images/services/24-7.png",
            title: "24/7 security ",
            description:
              "CCTV monitoring and access control apply to all storage sizes, not just large accounts.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway access ",
            description:
              "proximity to the E311 and E611 corridors supports fast distribution regardless of unit size.",
          },
          {
            image: "/images/services/small.png",
            title: "Flexible upgrade path ",
            description:
              "businesses can move into larger space within the same OSS network without switching providers.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained facility staff ",
            description:
              "the same logistics team supporting large clients also manages small storage accounts.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Storage Services"
        title="Warehouse Storage Space for Rent Options"
        services={[
          {
            title: "Compact Unit Storage",
            image: "/images/services/compact-unit.jpg",
            description:
              "storage warehouse in sizes suited to startups, small trading firms, and low-volume inventory.",
          },
          {
            title: "Temperature Control Warehouse Storage",
            image: "/images/services/custom-storage.jpg",
            description:
              "Climate-controlled storage options for pharmaceuticals, cosmetics, food products, electronics, and other temperature-sensitive inventory requiring stable environmental conditions.",
          },
          {
            title: "Inventory Tracking for Small Units",
            image: "/images/services/dispatch.jpg",
            description:
              "WMS-based tracking so small businesses get the same visibility as larger accounts.",
          },
          {
            title: "Scalable Storage Path",
            image: "/images/services/scalable.jpg",
            description:
              "A clear upgrade route from small storage to larger warehouse space as inventory grows.",
          },
          {
            title: "Pallet-Level Storage",
            image: "/images/services/pallet.jpg",
            description:
              "Rent by pallet position for businesses that don't need a full warehouse unit.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Warehouse Storage Space Across Five Business Types"
        features={[
          {
            image: "/images/services/startup.png",
            title: "Startups and New Businesses",
            description:
              "low-commitment storage while inventory volume is still being established.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Small E-Commerce Sellers ",
            description:
              "compact space for fast-moving retail SKUs without large minimum footprints.",
          },
          {
            image: "/images/services/chart.png",
            title: "Independent Trading Firms ",
            description:
              "flexible short-term storage for smaller import-export volumes.",
          },
          {
            image: "/images/services/offer.png",
            title: "Seasonal Retailers ",
            description:
              "storage warehouse for rent during peak seasons without committing to a year-round lease.",
          },
          {
            image: "/images/locations/small-distance.png",
            title: "Service and Contracting Businesses ",
            description:
              "compact space for equipment, spare parts, and project materials between job sites.",
          },
        ]}
      />

      <FeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone-Adjacent Access for Small Businesses"
        description="Small trading businesses handling international shipments still need customs-efficient storage. A storage warehouse for rent through OSS is conveniently located near SAIF Zone and Hamriyah Free Zone, allowing smaller operators to benefit from efficient import, export, and distribution logistics."
      />

      <StatsSection
        title="Flexible Storage Solutions for Every Business"
        subtitle="Scalable warehousing with secure facilities and flexible rental options."
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Footprint",
            description: "Across the OSS facility network.",
          },
          {
            value: 1,
            unit: "Month",
            label: "Minimum Rental Commitment",
            description: "Month-to-month rental options available.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Enterprise Client Base",
            description: "Active manufacturing, trading, and retail clients.",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Facility Security",
            description: "Video surveillance with automated fire suppression.",
          },
          {
            value: 100,
            suffix: "%",
            label: "Scalability",
            description:
              "Direct upgrade path from small units to full warehouse space.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Storage Experience That Scales With Your Business",
            description:
              "OSS has operated as a storage and logistics provider in Sharjah since 2006, supporting businesses from single-pallet accounts to full industrial warehousing. A flexible warehouse storage space for rent through OSS gives smaller businesses access to the same facility standards trusted by larger enterprises. OSS prioritises flexible contracts and predictable pricing, allowing businesses renting small storage today to expand into larger warehouse space tomorrow without changing providers.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Supporting Every Account Size",
            description:
              "OSS storage facilities are managed by experienced logistics managers, inventory analysts, warehouse supervisors, and trained warehouse technicians who maintain consistent handling standards across every account, regardless of storage size.",
          },
        ]}
      />

      {/* FAQ (EXACT DOCUMENT TEXT) */}
      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Warehouse Storage Space For Rent Questions Answered"
        faqs={[
          {
            question:
              "What is the minimum rental term for a small storage warehouse at OSS?",
            answer:
              "OSS offers month-to-month rental options alongside longer-term contracts, allowing businesses to avoid lengthy lease commitments for smaller storage requirements.",
          },
          {
            question: "How small can a storage unit be at OSS?",
            answer:
              "Storage can be rented by pallet position, enabling businesses to pay only for the storage capacity they actually require.",
          },
          {
            question:
              "Does a storage warehouse for rent include the same security as larger units?",
            answer:
              "Yes. Every storage unit includes 24/7 CCTV monitoring, controlled access, and comprehensive security systems regardless of storage size.",
          },
          {
            question:
              "Can a business upgrade from small storage to a larger warehouse later?",
            answer:
              "Yes. Businesses can expand into larger warehouse space within the OSS facility network without relocating to another provider.",
          },
          {
            question:
              "Is small storage tracked the same way as larger inventory accounts?",
            answer:
              "Yes. All storage units utilise the same WMS-based barcode and inventory tracking systems used across larger warehouse operations.",
          },
          {
            question:
              "What businesses typically rent small storage warehouses from OSS?",
            answer:
              "Startups, e-commerce sellers, trading companies, seasonal retailers, distributors, and contracting businesses commonly utilise OSS storage solutions.",
          },
          {
            question: "Is small storage available near free zone areas?",
            answer:
              "Yes. OSS storage facilities are strategically located near SAIF Zone and Hamriyah Free Zone, supporting efficient customs and logistics operations.",
          },
          {
            question:
              "How is pricing structured for small storage warehouse rentals?",
            answer:
              "Pricing is based on the warehouse space or pallet positions utilised, helping businesses avoid paying for unnecessary storage capacity.",
          },
          {
            question:
              "Can seasonal businesses rent storage only during peak periods?",
            answer:
              "Yes. Flexible short-term rental options are available for businesses requiring additional storage during seasonal demand.",
          },
          {
            question:
              "What operational standards apply to small storage units?",
            answer:
              "All storage units follow the same professional warehouse procedures, certified handling practices, inventory controls, safety protocols, and regular facility inspections applied across the OSS warehouse network.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Rent the Right Amount of Storage, Not More Than You Need"
        description="Whether you need a flexible warehouse storage space for rent for a short-term project or temperature control warehouse storage that grows alongside your business, OSS has the infrastructure and flexibility to support your operations."
        buttonText="Contact OSS for a Storage Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
