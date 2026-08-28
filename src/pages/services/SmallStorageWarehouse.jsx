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
import FreeZoneFeatureSection from "../../components/FreeZoneFeatureSection";
import {
  FiDollarSign,
  FiCalendar,
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function SmallStorageWarehouse() {
  useMeta(
    "Small Storage Warehouse for Rent Sharjah|Openyard Storage FZC",
    "Searching for a small storage warehouse for rent in Sharjah?Openyard Storage FZC delivers flexible warehouse solutions designed for growing businesses.Call today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Unlock Your Space Potential Today."
        title="Small Storage Warehouse for Rent in Sharjah"
        subtitle="OSS offers a small storage warehouse for rent to businesses that need compact, secure space without committing to a large industrial footprint. Ideal for startups, small trading firms, and businesses testing new inventory lines, OSS scales storage up as demand grows."
        buttonText="Request a Small Storage Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider 
      title="Small Storage Warehouse for Rent for Local and International Businesses"
      description="Businesses renting a small storage warehouse from OSS include startups, independent trading operations, small e-commerce sellers, and companies piloting new product lines before committing to larger storage contracts."/>

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Overwhelmed by Inefficient Storage?"
        title="Why Small Businesses Struggle to Find the Right Storage Fit"
        description="Small and growing businesses commonly run into four storage problems"
        // description2="Often, these frustrations lead to wasted time and money while limiting business growth."
        rightTitle="Problem Statement for Small Storage"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiLayers,
            title: "Oversized space requirements",
            text: "Standard industrial warehouses often require minimum footprints too large for small inventory volumes.",
          },
          {
            icon: FiCalendar,
            title: "Rigid long-term contracts",
            text: "Many warehouse providers require multi-year leases that don't suit early-stage or seasonal businesses.",
          },
          {
            icon: FiDollarSign,
            title: "High overhead for low volume",
            text: "Paying for unused square footage eats into margins for smaller operations.",
          },
          {
            icon: FiArrowUpRight,
            title: "No room to scale",
            text: "Fixed small units can't expand when a business grows, forcing a disruptive move to a new provider.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        title="We Address Your Storage Challenges"
        description="OSS addresses each of these through its small storage warehouse for rent:"
        features={[
          {
            image: "/images/services/grow.png",
            title: "Right-sized space ",
            description:
              "units are scaled to small inventory volumes instead of forcing a large minimum footprint.",
          },
          {
            image: "/images/services/back-in-time.png",
            title: "Flexible rental terms",
            description:
              "short-term and month-to-month options suit early-stage and seasonal businesses.",
          },
          {
            image: "/images/locations/money.png",
            title: "	Lower overhead ",
            description: "businesses pay only for the space they actually use",
          },
          {
            image: "/images/services/warehouseicon.png",
            title: "	Built-in scalability ",
            description:
              "a small storage warehouse for rent at OSS can expand within the same facility network as the business grows.",
          },
        ]}
      />

      <LeftalignedCards
        eyebrow="The OSS Difference "
        title="Small Storage Without Losing Enterprise-Grade Infrastructure"
        subtitle="OSS offers a small storage warehouse for rent that still includes the same security, tracking, and facility standards used across its larger industrial storage clients. Small businesses aren't limited to lower-quality infrastructure just because their footprint is smaller.
Every small storage warehouse for rent through OSS is set up around actual inventory volume, cargo type, and expected growth, so businesses don't overpay for space they don't need."
        description="What businesses get from renting small storage with OSS:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID tracking ",
            description:
              "even small units benefit from digital inventory logging.",
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
            image: "/images/services/speed.png",
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
        eyebrow="Our Storage Services"
        title="Small Storage Warehouse Rental Options"
        services={[
          {
            title: "Compact Unit Storage",
            image: "/images/services/compact-unit.jpg",
            description:
              "Small storage warehouse for rent in sizes suited to startups, small trading firms, and low-volume inventory.",
          },
          {
            title: "Short-Term Rentals",
            image: "/images/services/short-term.jpg",
            description:
              "Month-to-month options for businesses testing new product lines or managing seasonal stock.",
          },
          {
            title: "Secure Small-Scale Warehousing",
            image: "/images/services/secure.jpg",
            description:
              "Reinforced flooring, CCTV monitoring, and access control applied to smaller storage units.",
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
              "Rent by pallet position for businesses that don't need a full unit.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Small Storage Warehouse for Rent Across Five Business Types"
        features={[
          {
            image: "/images/services/startup.png",
            title: "Startups and New Businesses ",
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
            title: "Service and Contracting Businesses ",
            description:
              "compact space for equipment and materials between job sites.",
          },
          {
            image: "/images/services/small.png",
            title: "Seasonal Retailers",
            description:
              "small storage warehouse for rent during peak seasons, without a year-round lease.",
          },
        ]}
      />

      <FreeZoneFeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone-Adjacent Access for Small Businesses"
        description="Small trading businesses handling international shipments still need customs-efficient storage. A small storage warehouse for rent through OSS sits close to the SAIF Zone and Hamriyah Free Zone, giving smaller operators the same duty and customs advantages available to larger clients."
      />

      {/* STATS */}
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
            description: "Month-to-month options available.",
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
              "OSS has operated as a storage and logistics provider in Sharjah since 2006, supporting businesses from single-pallet accounts to full industrial warehousing. A small storage warehouse for rent through OSS gives smaller businesses access to the same facility standards used across the entire client base.\n\n OSS prioritizes flexible contracts and predictable pricing, so businesses renting small storage today can scale into larger space without changing providers.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Supporting Every Account Size",
            description:
              "OSS storage facilities are managed by the same logistics managers, inventory analysts, and warehouse technicians for both small and large accounts, ensuring consistent handling standards regardless of unit size.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title=" Common Questions About Small Storage Warehouse Rental"
        faqs={[
          {
            question:
              "What is the minimum rental term for a small storage warehouse at OSS?",
            answer:
              "OSS offers month-to-month rental options alongside longer-term contracts, so businesses aren't locked into multi-year leases for small storage needs.",
          },
          {
            question: "How small can a storage unit be at OSS?",
            answer:
              "Storage can be rented at the pallet level, allowing businesses to pay only for the exact space their inventory requires.",
          },
          {
            question:
              "Does a small storage warehouse for rent include the same security as larger units?",
            answer:
              "Yes. All storage units, regardless of size, include 24/7 video monitoring, alarm systems, and access control.",
          },
          {
            question:
              "Can a business upgrade from small storage to a larger warehouse later?",
            answer:
              "Yes. OSS allows businesses to move into larger space within the same facility network without switching providers.",
          },
          {
            question:
              "Is small storage tracked the same way as larger inventory accounts?",
            answer:
              "Yes. Small storage warehouse rentals use the same WMS-based barcode tracking available to larger clients.",
          },
          {
            question:
              "What businesses typically rent small storage warehouses from OSS?",
            answer:
              "Startups, small e-commerce sellers, independent trading firms, seasonal retailers, and contracting businesses commonly use small storage warehouse rentals.",
          },
          {
            question: "Is small storage available near free zone areas?",
            answer:
              "Yes. Small storage warehouse rentals are located close to the SAIF Zone and Hamriyah Free Zone for customs-efficient handling.",
          },
          {
            question:
              "How is pricing structured for small storage warehouse rentals?",
            answer:
              "Pricing is based on the space or pallet positions actually used, avoiding the overhead of paying for a larger, unused footprint.",
          },
          {
            question:
              "Can seasonal businesses rent storage only during peak periods?",
            answer:
              "Yes. Short-term rental options support businesses that only need extra storage during specific seasons.",
          },
          {
            question:
              "What operational standards apply to small storage units?",
            answer:
              "The same international supply chain safety standards, certified equipment operators, and routine facility checks apply across all unit sizes.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Rent the Right Amount of Storage, Not More Than You Need"
        description="Whether you need a small storage warehouse for rent short-term, or a scalable unit that grows with your business, OSS has the space and flexibility to support it. Contact the OSS team for a small storage layout and quote."
        buttonText="Contact OSS for a Small Storage Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
