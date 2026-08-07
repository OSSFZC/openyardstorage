import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import { FiFileText, FiClock, FiDollarSign, FiGlobe } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function InternationalShippingForwarder() {
  useMeta(
    "Top International Shipping Forwarder Services | OSS FZC",
    "OSS FZC provides reliable international shipping forwarder services with seamless global logistics, customs handling, and efficient freight management.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Reliable Global Shipping, Reimagined"
        title="Unlock Seamless International Trade with Our Pioneer Shipping Forwarder Services"
        subtitle="Get Started Today and Move Your Cargo With Unmatched Efficiency."
        buttonText="Get Started"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating Global Shipping Challenges?"
        title="Discover Solutions to Unyielding Freight Barriers"
        description="Global trade often comes with complex logistics challenges. Businesses struggle with customs regulations, shipping delays, fluctuating costs, and shipment security concerns."
        description2="OSS FZC simplifies international logistics by offering structured freight forwarding solutions designed to ensure smooth global transportation."
        rightTitle="Your Challenges, Transformed"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiFileText,
            title: "Complex Regulations",
            text: "Navigate international customs requirements effortlessly.",
          },
          {
            icon: FiClock,
            title: "Delayed Deliveries",
            text: "Ensure timely cargo arrivals across global routes.",
          },
          {
            icon: FiDollarSign,
            title: "Cost Fluctuations",
            text: "Transparent pricing helps control logistics costs.",
          },
          {
            icon: FiGlobe,
            title: "Security Protection",
            text: "Protect shipments through secure logistics networks.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Where Expertise Meets Excellence"
        description="OSS FZC provides advanced international shipping forwarder solutions backed by technology, logistics expertise, and a global network. Our customized logistics strategies ensure seamless cargo movement across borders."
        features={[
          {
            image: "/icons/custom.png",
            title: "Customized Solutions",
            description: "Shipping strategies tailored for your business.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Advanced Technologies",
            description: "Real-time shipment tracking and logistics systems.",
          },
          {
            image: "/icons/global.png",
            title: "Global Reach",
            description: "Extensive international logistics network.",
          },
          {
            image: "/icons/support.png",
            title: "Client-Centric Approach",
            description: "Solutions built around your logistics needs.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Shipping Forwarding Services"
        title="Discover Our Comprehensive Logistics Services"
        services={[
          {
            title: "Customs Brokerage",
            image: "/images/services/security.jpg",
            description: "Efficient customs clearance and documentation.",
          },
          {
            title: "Freight Management",
            image: "/images/services/logistics.jpg",
            description: "End-to-end cargo transportation management.",
          },
          {
            title: "Logistics Consulting",
            image: "/images/services/maintenance.jpg",
            description: "Expert strategies to improve logistics efficiency.",
          },
          {
            title: "Project Cargo",
            image: "/images/services/custom-storage.jpg",
            description: "Specialized logistics for oversized shipments.",
          },
          {
            title: "Supply Chain Management",
            image: "/images/services/flexible-yard.jpg",
            description: "Integrated logistics planning and operations.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Reaching New Heights in Global Logistics"
        stats={[
          { value: "30%", label: "Reduced Logistics Costs" },
          { value: "500+", label: "International Shipments Managed" },
          { value: "24/7", label: "Cargo Monitoring Support" },
          { value: "99%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership ensures Open Yard Storage delivers world-class international shipping forwarder services with reliability and expertise.",
          },
          {
            title: "Our Team",
            description:
              "Our experienced logistics professionals provide innovative shipping solutions designed to meet global business needs.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your International Shipping Forwarder Questions Answered"
        faqs={[
          {
            question: "What is an International Shipping Forwarder?",
            answer:
              "An international shipping forwarder manages global cargo transportation including documentation, customs clearance, and shipment coordination.",
          },
          {
            question: "How does a shipping forwarder help businesses?",
            answer:
              "They simplify global trade logistics, manage compliance, and provide efficient shipping routes.",
          },
          {
            question: "What documents are required for international shipping?",
            answer:
              "Common documents include commercial invoices, packing lists, bills of lading, and customs declarations.",
          },
          {
            question: "What costs are involved in international shipping?",
            answer:
              "Costs include freight charges, customs duties, taxes, insurance, and handling fees.",
          },
          {
            question: "How do I choose the right shipping forwarder?",
            answer:
              "Look for experience, global network coverage, reliable tracking technology, and strong customer support.",
          },
          {
            question: "How does technology improve shipping forwarding?",
            answer:
              "Technology enables shipment tracking, automated documentation, and improved logistics coordination.",
          },
          {
            question: "How do shipping forwarders manage customs clearance?",
            answer:
              "They ensure proper documentation and compliance with international regulations.",
          },
          {
            question:
              "What is the difference between a shipping agent and a forwarder?",
            answer:
              "A shipping forwarder manages the entire logistics chain including customs and documentation.",
          },
          {
            question: "Can shipping forwarders handle logistics changes?",
            answer:
              "Yes, experienced forwarders quickly adapt to route changes, delays, or shipment adjustments.",
          },
          {
            question: "How can I start shipping with OSS FZC?",
            answer:
              "Contact our logistics experts to discuss your shipping requirements and receive a customized logistics plan.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Global Shipping?"
        buttonText="Discover Your Shipping Advantage Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
