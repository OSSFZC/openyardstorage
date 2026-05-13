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
  FiEye,
  FiDollarSign,
  FiFileText,
  FiClock
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function FreightLogisticsTrucking() {

  useMeta(
    "Efficient Freight Logistics Trucking | OSS FZC",
    "OSS FZC provides efficient freight logistics trucking solutions designed to streamline supply chains, reduce costs, and ensure on-time deliveries."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Seamless Solutions for Complex Supply Chains"
        title="Transcend Your Freight Logistics Trucking Needs"
        subtitle="Discover Efficiency. Get a Custom Quote Now!"
        buttonText="Get a Custom Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Unraveling the Challenges of Freight Logistics Trucking"
        title="Are Freight Logistics Holding You Back?"
        description="In today’s competitive market, businesses face disruptions in supply chains, rising transportation costs, and complex regulatory requirements."
        description2="Without clear logistics visibility and efficient planning, companies struggle with missed deadlines and operational inefficiencies. OSS FZC helps transform logistics operations with smart solutions designed for efficiency and reliability."
        rightTitle="Tailored Solutions for Every Challenge"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiEye,
            title: "Visibility Boost",
            text: "Real-time shipment tracking for complete transparency."
          },
          {
            icon: FiDollarSign,
            title: "Cost Optimization",
            text: "Reduce transportation costs with smarter logistics."
          },
          {
            icon: FiFileText,
            title: "Regulatory Navigation",
            text: "Simplify compliance with expert guidance."
          },
          {
            icon: FiClock,
            title: "On-Time Deliveries",
            text: "Ensure reliable and punctual freight movement."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Advantage"
        title="Where Freight Logistics Meets Innovation"
        description="OSS FZC integrates advanced technology with strategic logistics expertise to deliver efficient freight trucking solutions. Our systems ensure precise tracking, cost optimization, and operational transparency."
        features={[
          {
            image: "/icons/cost.png",
            title: "Tech-Driven Efficiency",
            description: "Leverage data insights to improve logistics performance."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Customer-Centric Strategy",
            description: "Solutions tailored to your specific logistics needs."
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Proven Track Record",
            description: "Trusted results through successful shipments."
          },
          {
            image: "/icons/Real-time.png",
            title: "Tailored Solutions",
            description: "Custom logistics plans for businesses of all sizes."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Our Comprehensive Logistics Services"
        services={[
          {
            title: "Full Truckload (FTL) Shipping",
            image: "/images/services/flexible-yard.jpg",
            description: "Dedicated truckload solutions for large-volume freight transportation."
          },
          {
            title: "Less-Than-Truckload (LTL) Solutions",
            image: "/images/services/custom-storage.jpg",
            description: "Cost-effective shipping options for smaller freight consignments."
          },
          {
            title: "Freight Management",
            image: "/images/services/security.jpg",
            description: "Efficient coordination and handling of cargo movement operations."
          },
          {
            title: "Route Optimization & Dispatch",
            image: "/images/services/logistics.jpg",
            description: "Smart route planning for timely and fuel-efficient deliveries."
          },
          {
            title: "Real-Time Shipment Tracking",
            image: "/images/services/maintenance.jpg",
            description: "Live tracking systems for complete shipment visibility and updates."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Achievements That Define Our Logistics Excellence"
        stats={[
          { value: "30%", label: "Delivery Efficiency Improvement" },
          { value: "500+", label: "Successful Shipments Managed" },
          { value: "24/7", label: "Tracking & Support" },
          { value: "99%", label: "Client Satisfaction" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership drives excellence in freight logistics trucking with a focus on innovation, reliability, and customer success."
          },
          {
            title: "Our Team",
            description:
              "Our logistics experts combine strategy and technology to deliver precise and efficient freight trucking solutions."
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Freight Logistics Questions Answered"
        faqs={[
          {
            question: "What are freight logistics?",
            answer: "Freight logistics involves managing the transportation, storage, and delivery of goods efficiently."
          },
          {
            question: "How can freight logistics trucking be optimized?",
            answer: "Optimization involves route planning, data analytics, and real-time tracking technology."
          },
          {
            question: "What role does technology play in freight logistics?",
            answer: "Technology enables shipment tracking, automation, and improved decision-making."
          },
          {
            question: "Why is real-time tracking important?",
            answer: "It provides transparency, allowing businesses to monitor deliveries and manage delays effectively."
          },
          {
            question: "How can transportation costs be reduced?",
            answer: "Efficient route planning and shipment consolidation help lower logistics costs."
          },
          {
            question: "What are common logistics challenges?",
            answer: "Regulatory compliance, unpredictable demand, and supply chain disruptions."
          },
          {
            question: "How does sustainability impact logistics?",
            answer: "Green logistics reduces environmental impact through optimized routes and eco-friendly vehicles."
          },
          {
            question: "What is inventory management in logistics?",
            answer: "It involves tracking and controlling stock to ensure availability and efficiency."
          },
          {
            question: "How do regulations affect freight logistics trucking?",
            answer: "Regulations ensure safety and environmental compliance but require expertise to manage."
          },
          {
            question: "What is the future of freight logistics trucking?",
            answer: "Automation, smart logistics technologies, and sustainable transportation practices."
          }
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Freight Logistics Trucking?"
        buttonText="Contact Us Now to Get Started!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}