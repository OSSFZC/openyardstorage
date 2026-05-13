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
  FiClock,
  FiShield,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ContainerCrossStuffing() {

  useMeta(
    "Seamless Container Cross Stuffing Services | OSS FZC",
    "Discover how OSS FZC's expert container cross stuffing services optimize logistics, minimize downtime, and enhance supply chain efficiency. Contact us today!"
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Efficient, Reliable, and Hassle-Free"
        title="Elevate Your Logistics with Premium Container Cross Stuffing Services"
        subtitle="Unlock streamlined solutions for your cargo today. Contact us now!"
        buttonText="Contact Us for Tailored Solutions Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/container-cross-stuffing.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Transforming Complexities into Seamless Operations"
        title="Frustrated with Ineffective Cargo Handling?"
        description="Container cross stuffing often turns into a logistical nightmare for many businesses, creating bottlenecks and hindering operations."
        description2="Handling containerized goods across different routes and methods can lead to delays, damages, and mismanagement, posing significant risks to your supply chain efficiency."
        rightTitle="We Solve Your Logistical Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Time Wastage",
            text: "Minimize delays with our efficient processes.",
          },
          {
            icon: FiShield,
            title: "Cargo Damage",
            text: "Reduce risk with expert handling and care.",
          },
          {
            icon: FiDollarSign,
            title: "Increased Costs",
            text: "Optimize expenses through tailored solutions.",
          },
          {
            icon: FiTrendingUp,
            title: "Operational Inefficiency",
            text: "Streamline processes for maximum efficiency.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Revolutionizing Container Handling for Better Outcomes"
        title="Your Efficiency, Our Expertise"
        description="At OSS FZC, we pioneer solutions with our unrivaled expertise in container cross stuffing. Our approach maximizes cargo efficiency, minimizes disruptions, and ensures cost-effectiveness."
        features={[
          {
            image: "/icons/cost.png",
            title: "Tailored Solutions",
            description: "Customized to meet your unique logistics needs.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Advanced Technology",
            description: "Leveraging innovation for superior handling.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Expert Team",
            description: "Skilled professionals dedicated to perfection.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Cost-Effective Operations",
            description: "Delivering value without compromise.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Container Cross Stuffing Solutions"
        services={[
          {
            title: "Container Cross Stuffing",
            image: "/images/services/flexible-yard.jpg",
            description:
              "Safe and efficient cargo transfer between containers.",
          },
          {
            title: "Cargo Consolidation & Deconsolidation",
            image: "/images/services/custom-storage.jpg",
            description:
              "Optimized handling for mixed and bulk shipments.",
          },
          {
            title: "Customs Coordination Support",
            image: "/images/services/security.jpg",
            description:
              "Smooth documentation and compliance assistance for cargo movement.",
          },
          {
            title: "Warehouse & Storage Support",
            image: "/images/services/logistics.jpg",
            description:
              "Secure temporary storage during cross stuffing operations.",
          },
          {
            title: "Cargo Inspection & Securing",
            image: "/images/services/maintenance.jpg",
            description:
              "Professional cargo checking, palletizing, and load stabilization services.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Elevating Your Logistics Experience"
        stats={[
          { value: "40%", label: "Delay Reduction" },
          { value: "500+", label: "Successful Projects" },
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
              "Our leadership team is passionate about pioneering logistic excellence, ensuring your container cross stuffing needs are met with precision.",
          },
          {
            title: "Our Team",
            description:
              "Our experts bring experience and innovation, ensuring peak performance in every logistics project.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Container Cross Stuffing Questions Answered"
        faqs={[
          {
            question: "What is container cross stuffing?",
            answer:
              "Container cross stuffing refers to transferring cargo from one container to another to optimize space and logistics efficiency.",
          },
          {
            question: "Why is container cross stuffing important?",
            answer:
              "It improves container utilization, reduces costs, and enhances supply chain flexibility.",
          },
          {
            question: "What challenges can arise?",
            answer:
              "Cargo damage, regulatory compliance issues, delays, and documentation complexities.",
          },
          {
            question: "How does OSS FZC handle it efficiently?",
            answer:
              "We use advanced tracking systems, skilled professionals, and specialized equipment.",
          },
          {
            question: "Which industries benefit most?",
            answer:
              "Manufacturing, retail, and logistics industries benefit significantly.",
          },
          {
            question: "Can cross stuffing reduce shipping costs?",
            answer:
              "Yes, by optimizing container loads and minimizing storage requirements.",
          },
          {
            question: "Is it suitable for all cargo?",
            answer:
              "Most dry and general cargo types are suitable; sensitive goods require evaluation.",
          },
          {
            question: "How is cargo safety ensured?",
            answer:
              "Through skilled handlers, advanced equipment, and systematic safety procedures.",
          },
          {
            question: "What technologies improve efficiency?",
            answer:
              "IoT monitoring, automation tools, and real-time tracking systems.",
          },
          {
            question: "How does customs brokerage impact cross stuffing?",
            answer:
              "Proper brokerage ensures compliance, prevents delays, and enhances efficiency.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Logistics Operations?"
        buttonText="Contact Us for Tailored Solutions Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}