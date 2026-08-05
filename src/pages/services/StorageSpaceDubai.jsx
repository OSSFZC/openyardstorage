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

import { FiDollarSign, FiShield, FiClock, FiBox } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";
import CardsFeatures from "../../components/CardsFeatures";

export default function StorageSpaceDubai() {
  useMeta(
    "Secure Storage Space for Rent in Dubai | OSS FZC",
    "OSS FZC offers flexible, secure storage spaces in Dubai, tailored to your needs. Rent reliable storage solutions today.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Maximizing Your Space Needs in Dubai"
        title="Storage Space for Rent in Dubai"
        subtitle="OSS provides storage space for rent in Dubai with flexible leasing, secure facilities, and scalable solutions for trading, retail, manufacturing, e-commerce, and logistics businesses, supporting both short-term and long-term storage requirements."
        buttonText="Request a Storage Space Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Struggling with Limited Space? We Feel You."
        title="Common Challenges When Looking for Storage Spaces in Dubai"
        description="Choosing the right storage facility is often more complicated than simply finding available warehouse space. Businesses frequently encounter challenges that affect efficiency, operating costs, and future growth."
        // description2="Concerns about security, accessibility, and cost make the decision even more challenging. OSS FZC provides secure and flexible storage solutions designed to remove these challenges and give you peace of mind."
        rightTitle="Problem Statement "
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiDollarSign,
            title: "Paying for More Space Than Necessary",
            text: "Many warehouse providers only offer large industrial units, forcing businesses to lease space they don't fully utilise.",
          },
          {
            icon: FiShield,
            title: "Limited Flexibility",
            text: "Long-term contracts make it difficult for seasonal businesses, importers, and expanding companies to adjust storage requirements.",
          },
          {
            icon: FiClock,
            title: "Security Concerns",
            text: "Poorly managed facilities increase the risk of inventory loss, damage, and unauthorised access.",
          },
          {
            icon: FiBox,
            title: "Operational Limitations",
            text: "Some storage providers offer only empty warehouse space without inventory management, handling equipment, or logistics support.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Flexible Storage Solutions Built for Modern Businesses"
        subtitle="OSS solves these challenges by offering storage space for rent in Dubai that combines flexibility, security, and operational efficiency."
        features={[
          {
            image: "/icons/cost.png",
            title: "Flexible storage options ",
            description: "rent only the amount of space your inventory requires.",
          },
          {
            image: "/icons/cost.png",
            title: "Short and long-term agreements.",
            description: "suitable for changing business demands.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Secure warehouse environment ",
            description:
              "monitored facilities with controlled access and modern safety systems.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Scalable storage solutions ",
            description:
              "expand your storage capacity without changing providers.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Integrated logistics support ",
            description:
              "inventory handling, loading, unloading, and warehouse management available when required.",
          },
        ]}
      />

      <LeftalignedCards
        // eyebrow="The OSS Difference "
        title="Rent Storage in Dubai with Flexible Solutions for Every Business"
        subtitle="OSS goes beyond providing warehouse space. Every client receives a storage solution tailored to inventory type, business volume, operational workflow, and future expansion plans.Businesses looking to rent storage in Dubai benefit from facilities that maintain enterprise-level standards regardless of storage size."
        description="Why Businesses Choose OSS"
        features={[
          {
            image: "/images/services/stock.png",
            title: "Large outdoor storage areas ",
            description:
              "Warehouse Management System (WMS) with barcode and RFID inventory tracking.",
          },
          {
            image: "/images/services/stock.png",
            title: "Large outdoor storage areas ",
            description:
              "24/7 CCTV surveillance with controlled facility access.",
          },
          {
            image: "/images/services/stock.png",
            title: "Large outdoor storage areas ",
            description:
              "Experienced warehouse professionals handling inventory safely and efficiently.",
          },
          {
            image: "/images/services/stock.png",
            title: "Large outdoor storage areas ",
            description:
              "Strategic Dubai location with convenient access to major highways, ports, and airports.",
          },
          {
            image: "/images/services/api.png",
            title: "Flexible rental terms ",
            description:
              "Flexible warehouse configurations suitable for pallet storage, bulk goods, cartons, machinery, and commercial inventory.",
          },
          {
            image: "/images/services/insurance.png",
            title: "Secure storage environment ",
            description:
              "Every solution is designed to help businesses reduce storage costs while improving inventory visibility and operational efficiency.",
          },
          {
            image: "/images/services/speed.png",
            title: "Excellent transport connectivity ",
            description:
              "Easy scalability as storage requirements increase over time.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Storage Space Rental Services"
        services={[
          {
            title: "General Warehouse Storage",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Secure storage space suitable for commercial inventory, trading stock, equipment, and packaged goods.",
          },
          {
            title: "Short-Term Storage",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Flexible rental periods for seasonal demand, temporary projects, promotions, or business expansion.",
          },
          {
            title: "Long-Term Warehouse Rental",
            image: "/images/services/custom-storage.jpg",
            description:
              "Reliable storage for businesses requiring permanent inventory management and distribution support.",
          },
          {
            title: "Inventory Management",
            image: "/images/services/security.jpg",
            description:
              "Warehouse Management System (WMS), barcode scanning, and inventory tracking improve stock accuracy and visibility.",
          },
          {
            title: "Pallet Storage",
            image: "/images/services/logistics.jpg",
            description:
              "Cost-effective storage charged by pallet position for businesses with lower inventory volumes.",
          },
          {
            title: "Distribution Support",
            image: "/images/services/maintenance.jpg",
            description:
              "Receiving, dispatch, loading, unloading, and inventory movement managed by experienced warehouse staff.",
          },
        ]}
      />

      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Storage Spaces in Dubai for Every Industry"
        description="OSS supports businesses across multiple industries with storage solutions tailored to operational requirements."
        features={[
          {
            image: "/images/services/industrial-park.png",
            title: "Trading Companies",
            description:
              "Secure inventory storage supporting online order fulfilment and seasonal demand fluctuations.",
          },
          {
            image: "/images/services/online-store.png",
            title: "Manufacturing Companies",
            description:
              "Storage for raw materials, finished products, spare parts, and production inventory.",
          },
          {
            image: "/images/services/engineer.png",
            title: "Retail Businesses",
            description:
              "Warehouse space that supports stock replenishment, promotional inventory, and seasonal merchandise.",
          },
          {
            image: "/images/services/world.png",
            title: "Logistics and Distribution",
            description:
              "Reliable storage facilities supporting freight consolidation, cross-docking, and supply chain operations.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Operational Excellence You Can Depend On"
        subtitle="Secure, flexible, and scalable warehouse solutions backed by years of industry experience."
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Storage Infrastructure",
            description: "Of managed storage facilities.",
          },
          {
            value: 2006,
            label: "Industry Experience",
            description: "Operating since 2006.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Active Business Clients",
            description: "Companies across multiple industries.",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Warehouse Security",
            description:
              "CCTV, controlled access, and fire protection systems.",
          },
          {
            value: 2,
            unit: "Lease Options",
            label: "Flexible Leasing",
            description: "Short-term and long-term rental options available.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Reliable Warehouse Storage Since 2006",
            description:
              "OSS has been delivering professional warehouse and logistics solutions across the UAE since 2006. Businesses that need to rent storage in Dubai benefit from modern facilities, experienced warehouse teams, flexible rental structures, and inventory management systems that simplify daily operations. Every storage solution is designed around the client's operational requirements rather than offering a one-size-fits-all warehouse. Whether storing a few pallet positions or managing large commercial inventories, OSS delivers consistent service, security, and scalability.",
          },
          {
            title: "Our Team",
            subtitle: "Warehouse Professionals Focused on Inventory Excellence",
            description:
              "Behind every successful storage operation is an experienced logistics team. OSS warehouse supervisors, inventory controllers, forklift operators, and logistics specialists ensure every shipment is handled safely, accurately, and efficiently. From inbound receiving to outbound dispatch, each process follows established warehouse procedures that minimise errors and maximise operational performance.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Frequently Asked Questions About Storage Space Rental in Dubai"
        faqs={[
          {
            question: "What types of businesses use OSS storage facilities?",
            answer:
              "Trading companies, manufacturers, retailers, e-commerce businesses, importers, exporters, and logistics providers regularly use our warehouse facilities for inventory storage and distribution.",
          },
          {
            question: "Can I rent storage for a short period?",
            answer:
              "Yes. OSS offers flexible rental agreements that include both short-term and long-term storage depending on your operational requirements.",
          },
          {
            question: "How secure are your warehouse facilities?",
            answer:
              "Every facility includes 24/7 CCTV monitoring, controlled entry systems, perimeter security, and fire protection systems to safeguard stored inventory.",
          },
          {
            question: "Can I increase my storage space later?",
            answer:
              "Yes. Businesses can expand their storage allocation as inventory grows without moving to another warehouse provider.",
          },
          {
            question: "Do you provide inventory management services?",
            answer:
              "Yes. Our Warehouse Management System (WMS) supports barcode scanning, inventory tracking, stock visibility, and reporting.",
          },
          {
            question: "Can I store palletised goods only?",
            answer:
              "Yes. OSS offers pallet storage for businesses that require smaller storage volumes instead of leasing an entire warehouse unit.",
          },
          {
            question: "Are loading and unloading services available?",
            answer:
              "Yes. Warehouse staff and material handling equipment assist with receiving, loading, unloading, and inventory movement.",
          },
          {
            question: "What products can be stored?",
            answer:
              "Businesses commonly store commercial inventory, retail products, packaged goods, machinery, spare parts, raw materials, and finished products, subject to storage suitability.",
          },
          {
            question: "Why should businesses choose OSS over other providers?",
            answer:
              "OSS combines flexible leasing, professional warehouse management, modern inventory tracking, secure facilities, experienced logistics teams, and scalable storage solutions within one integrated service.",
          },
          {
            question: "How do I get a quotation for storage space?",
            answer:
              "Simply contact the OSS team with your inventory details, storage duration, and estimated space requirements. We will recommend the most suitable storage solution and provide a customised quotation.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Secure the Right Storage Solution for Your Business"
        description="Whether you need additional warehouse capacity for seasonal demand or a long-term logistics partner, OSS provides flexible storage spaces in Dubai that grow with your business. Contact our team today to discuss your storage requirements and receive a customised quotation."
        buttonText="Request Your Storage Space Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
