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
  FiBox,
  FiShield,
  FiClock,
  FiDollarSign
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function WarehouseStorageSpace() {

  useMeta(
    "Reliable Warehouse Storage Space For Rent | OSS FZC",
    "Find the perfect storage warehouse for rent with OSS FZC Storage. Flexible leases, secure facilities, and tailored solutions for all your storage needs."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Maximize Your Warehousing Efficiency"
        title="Unlock Versatile and Secure Warehouse Storage Space For Rent"
        subtitle="Discover Our Spaces for Your Business Needs"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/warehousing.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Is Your Current Storage Solution Holding You Back?"
        title="Common Challenges in Finding the Perfect Storage Warehouse For Rent"
        description="Many businesses face significant challenges when looking for the perfect warehouse storage space. Space constraints, security concerns, and flexibility needs often complicate efficient inventory management and business operations."
        description2="At OpenYard Storage, we understand these hurdles and offer solutions designed to align with your storage needs. Our warehouse spaces provide superior security measures, flexible lease terms, and a variety of size options."
        rightTitle="Solutions to Your Storage Dilemmas"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiBox,
            title: "Limited Space Limitations",
            text: "Expand your capacity with our diverse range of storage sizes."
          },
          {
            icon: FiShield,
            title: "Security Concerns",
            text: "Top-tier security systems protect your assets 24/7."
          },
          {
            icon: FiClock,
            title: "Rigid Leases",
            text: "Enjoy flexibility with customizable lease terms."
          },
          {
            icon: FiDollarSign,
            title: "High Costs",
            text: "Affordable storage solutions to fit your budget."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Tailored Storage Solutions for Every Business"
        description="At OSS FZC Storage, we redefine warehouse storage space for rent by prioritizing customization and security. Our framework offers unmatched flexibility and scalable storage options to support business growth."
        features={[
          {
            image: "/icons/custom.png",
            title: "Flexibility",
            description: "Custom leases and expansive storage solutions."
          },
          {
            image: "/icons/security.png",
            title: "Security",
            description: "Advanced surveillance and access controls."
          },
          {
            image: "/icons/Real-time.png",
            title: "Scalability",
            description: "Easily expand as your business grows."
          },
          {
            image: "/icons/support.png",
            title: "Support",
            description: "Expert assistance every step of the way."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Storage Services"
        title="Innovative Storage Services Catered to You"
        services={[
          {
            title: "Custom Storage Solutions",
            image: "/images/services/flexible-yard.jpg",
            description: "Tailored spaces that fit your exact business needs."
          },
          {
            title: "Flexible Lease Options",
            image: "/images/services/custom-storage.jpg",
            description: "Adjust your lease terms as your demands change."
          },
          {
            title: "Secure Warehousing",
            image: "/images/services/security.jpg",
            description: "State-of-the-art security to ensure peace of mind."
          },
          {
            title: "E-Commerce Fulfillment Storage",
            image: "/images/services/logistics.jpg",
            description: "Ideal setups for online retail and distribution needs."
          },
          {
            title: "Logistic Support Add-ons",
            image: "/images/services/maintenance.jpg",
            description: "Enhance operations with additional support services."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="See the Impact of Our Services"
        stats={[
          { value: "30%", label: "Operational Efficiency Increase" },
          { value: "24/7", label: "Security Monitoring" },
          { value: "500+", label: "Businesses Served" },
          { value: "100%", label: "Client Satisfaction Focus" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "At OpenYard Storage, our leadership ensures excellence by molding transformative storage solutions that meet industry standards."
          },
          {
            title: "Our Team",
            description:
              "Our team specializes in creativity and precision, delivering unmatched expertise in warehouse storage space solutions."
          }
        ]}
      />

      {/* FAQ (EXACT DOCUMENT TEXT) */}
      {/* FAQ */}
<FAQSection
  eyebrow="FAQ"
  title="Your Warehouse Storage Space For Rent Questions Answered"
  faqs={[
    {
      question: "What types of warehouse storage spaces do you offer for rent?",
      answer:
        "We provide a wide range of warehouse storage spaces for rent, varying in size from small units to large bulk storage areas. Our facilities are equipped with cutting-edge security systems and flexible lease options to suit diverse business requirements. Whether you need space for inventory, machinery, or fulfillment operations, our offerings are designed for optimal functionality and convenience."
    },
    {
      question: "How secure are your warehouse storage facilities?",
      answer:
        "Our storage warehouses for rent are fortified with comprehensive security measures, including 24/7 surveillance, controlled access points, and robust security protocols. This commitment to safety ensures that your assets remain protected, providing you with peace of mind. We prioritize security to ensure that our clients can trust in the integrity of their stored goods."
    },
    {
      question: "Can I customize my lease terms?",
      answer:
        "Yes, at OpenYard Storage, we believe flexibility is key. We offer customizable lease terms to accommodate your unique operational needs. Whether you require short-term storage solutions or long-term commitments, our team is dedicated to crafting lease agreements that provide you with the flexibility necessary for your business to thrive."
    },
    {
      question: "Is climate control available in your storage warehouses?",
      answer:
        "Select storage facilities offer climate-controlled environments to safeguard sensitive items from extreme temperatures and humidity. This specialized service is particularly beneficial for businesses dealing with perishable goods or climate-sensitive products. At OpenYard Storage, we strive to meet all the storage requirements of our clients."
    },
    {
      question: "Are there additional services available for logistics and inventory management?",
      answer:
        "Indeed, we offer a range of ancillary services, including logistics support and inventory management, to enhance your storage solutions. Our goal is to facilitate improved efficiency and effectiveness in your supply chain processes, enabling smooth and seamless operations."
    },
    {
      question: "How do you ensure the scalability of your storage solutions?",
      answer:
        "Our storage solutions are designed with scalability in mind. As your business grows, you can expand your storage capacity effortlessly with our flexible options. This adaptability ensures that your storage resources evolve in lockstep with your business needs, delivering consistent value over time."
    },
    {
      question: "What industries benefit most from your storage warehouse for rent services?",
      answer:
        "Our services cater to a variety of industries, including retail, manufacturing, e-commerce, and distribution. We're equipped to address the unique storage needs of each sector, helping businesses manage their inventory and logistical operations efficiently."
    },
    {
      question: "How do I schedule a tour to view your warehouse storage spaces?",
      answer:
        "Scheduling a tour is simple. Contact us through our website or via phone, and our dedicated team will assist you in arranging a visit at your convenience. We welcome you to experience our facilities and explore the possibilities available to your business."
    },
    {
      question: "Do you accommodate businesses with fluctuating storage needs?",
      answer:
        "Absolutely. With our flexible storage solutions, we can accommodate fluctuations in your storage needs, whether seasonal or long-term changes. Our adaptable facilities and lease terms ensure your business remains agile, regardless of demand shifts."
    },
    {
      question: "How do I start the process of leasing a warehouse storage space?",
      answer:
        "Starting the leasing process is straightforward. Reach out to us through our inquiry form or call our representatives. We'll guide you through a seamless onboarding process, from selecting the right space to signing a lease agreement, ensuring a tailored fit for your business needs."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Redefine Your Storage Strategy?"
        buttonText="Get in Touch with Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}