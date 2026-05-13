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
  FiFileText,
  FiClock,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function BreakBulkCargoClearance() {

  useMeta(
    "Break Bulk Cargo Clearance Experts | OSS FZC",
    "Discover seamless and efficient break bulk cargo clearance with OSS FZC. Optimize your logistics chain today and ensure every shipment is cleared swiftly."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Experience Seamless Cargo Solutions"
        title="Transforming Break Bulk Cargo Clearance"
        subtitle="Get Started with a Free Consultation"
        buttonText="Contact Us for Expert Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/custom-clerance.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Are Break Bulk Delays Draining Your Resources?"
        title="Is Inefficiency in Cargo Clearance Holding You Back?"
        description="Navigating the complexities of break bulk cargo clearance can be daunting. The journey from dock to destination is often marred by unexpected delays, cumbersome paperwork, and regulatory hurdles."
        description2="Many businesses face these constant challenges and recognize the need for a robust solution that simplifies processes and ensures efficiency."
        rightTitle="Turn Challenges into Triumphs"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiFileText,
            title: "Overcome Administrative Hurdles",
            text: "Simplify and streamline documentation processes.",
          },
          {
            icon: FiClock,
            title: "Minimize Customs Delays",
            text: "Expedite clearance with expert navigation.",
          },
          {
            icon: FiDollarSign,
            title: "Reduce Cost Overruns",
            text: "Implement solutions that curb unexpected expenses.",
          },
          {
            icon: FiTrendingUp,
            title: "Enhance Shipment Reliability",
            text: "Ensure timely deliveries with proactive strategies.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Unlock Optimized Cargo Clearance with OSS FZC"
        title="Efficient Break Bulk Solutions for Your Business"
        description="At OSS FZC, we redefine break bulk cargo clearance. Our tailored approach simplifies traditional challenges by leveraging advanced technology and decades of expertise."
        features={[
          {
            image: "/icons/cost.png",
            title: "Advanced Tech Integration",
            description: "Modern tools for a seamless process.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Expert Team Support",
            description: "Experienced guidance every step of the way.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Localized Industry Knowledge",
            description: "Specialized insights for tailored solutions.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Proven Efficiency",
            description: "Demonstrated track record of timely clearance.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Break Bulk Cargo Clearance Services"
        services={[
          {
            title: "Customs Brokerage",
            image: "/images/services/flexible-yard.jpg",
            description: "Fast and accurate customs clearance for break bulk and project cargo.",
          },
          {
            title: "Port Handling & Coordination",
            image: "/images/services/custom-storage.jpg",
            description: "Efficient vessel discharge, cargo handling, and terminal coordination.",
          },
          {
            title: "Freight Forwarding",
            image: "/images/services/security.jpg",
            description: "Seamless transportation planning for oversized and non-containerized cargo",
          },
          {
            title: "Regulatory Compliance",
            image: "/images/services/logistics.jpg",
            description: "Complete documentation and compliance management for international shipments",
          },
          {
            title: "Project Cargo Logistics",
            image: "/images/services/maintenance.jpg",
            description: "Specialized logistics solutions for heavy, oversized, and complex cargo movements.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Statistics that Speak Volumes"
        stats={[
          { value: "30%", label: "Faster Clearance Times" },
          { value: "500+", label: "Break Bulk Shipments Managed" },
          { value: "24/7", label: "Operational Support" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "With visionary leadership, we are dedicated to excellence in break bulk cargo clearance, driving success through innovation and efficiency.",
          },
          {
            title: "Our Team",
            description:
              "Our skilled team delivers creative and precise solutions tailored for all break bulk logistics needs.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Break Bulk Cargo Clearance Questions Answered"
        faqs={[
          {
            question: "What is break bulk cargo clearance?",
            answer:
              "Break bulk cargo clearance involves clearing goods transported as separate units rather than containers, ensuring proper documentation and regulatory compliance.",
          },
          {
            question: "Why is timely break bulk clearance important?",
            answer:
              "It prevents penalties, reduces storage costs, and ensures supply chain continuity.",
          },
          {
            question: "How does OSS FZC optimize clearance?",
            answer:
              "Through advanced technology, expert handling, and regulatory expertise.",
          },
          {
            question: "What documentation is required?",
            answer:
              "Bills of lading, commercial invoices, packing lists, and customs declarations.",
          },
          {
            question: "Can OSS FZC handle high-volume shipments?",
            answer:
              "Yes, we manage complex and large-scale break bulk shipments efficiently.",
          },
          {
            question: "How does break bulk differ from containerized cargo?",
            answer:
              "Break bulk cargo is transported individually rather than in standardized containers.",
          },
          {
            question: "What common challenges arise?",
            answer:
              "Logistical complexity, damage risks, and clearance delays.",
          },
          {
            question: "Do you provide end-to-end solutions?",
            answer:
              "Yes, from consultation to final delivery.",
          },
          {
            question: "Which industries use break bulk services?",
            answer:
              "Construction, marine, manufacturing, and infrastructure industries.",
          },
          {
            question: "How to ensure regulatory compliance?",
            answer:
              "By adhering to local and international regulations with expert guidance.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Streamline Your Cargo Operations?"
        buttonText="Contact Us for Expert Solutions"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}