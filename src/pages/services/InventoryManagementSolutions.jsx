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
  FiAlertCircle,
  FiShield,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function InventoryManagementSolutions() {

  useMeta(
    "Elevate Your Inventory Management Solutions | OSS FZC",
    "Discover top-notch inventory management with OSS FZC. Optimize your operations with expert solutions tailored to drive efficiency and growth."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Optimize and Organize Your Inventory Seamlessly"
        title="Transform Your Operations with Expert Inventory Management Solutions"
        subtitle="Revolutionize how you manage your inventory. Get started today!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating Challenges in Inventory Management?"
        title="Overwhelmed by Inventory Complexities?"
        description="In the fast-paced world of inventory management, you're likely facing issues like inefficiencies, high operational costs, and accuracy concerns. Without an effective system in place, errors creep in, impacting your bottom line and customer satisfaction."
        description2="It's not just about stock-keeping; it's about optimizing your entire supply chain to meet demands swiftly and accurately. OSS FZC understands these pain points and offers streamlined solutions to tackle them head-on, restoring control and efficiency to your operations."
        rightTitle="Streamline Your Processes Immediately"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiAlertCircle,
            title: "Inaccurate Stock Levels",
            text: "Tired of discrepancies? We've got precise tracking.",
          },
          {
            icon: FiDollarSign,
            title: "High Operational Costs",
            text: "Reduce needless expenses with enhanced efficiency.",
          },
          {
            icon: FiTrendingUp,
            title: "Slow Turnover",
            text: "Accelerate your inventory flow with optimized processes.",
          },
          {
            icon: FiShield,
            title: "Ineffective Forecasting",
            text: "Gain actionable insights and predict with precision.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Reinvent Your Inventory System with Our Proven Approach"
        title="Experience Unmatched Inventory Management Excellence"
        description="At OSS FZC, we don't just offer inventory management; we redefine it. Through our bespoke solutions tailored to your unique needs, we ensure your inventory is managed with precision and care. Our framework combines cutting-edge technology with industry expertise to mitigate errors and maximize efficiency."
        features={[
          {
            image: "/icons/cost.png",
            title: "Real-Time Tracking",
            description: "Instantly update and access data with live feed.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Cost Reduction",
            description: "Streamline operations to minimize unnecessary expenses.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Custom Solutions",
            description: "Tailor-made management aligns with specific industry demands.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Predictive Analysis",
            description: "Leverage data-driven forecasts for better decision-making.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Leading the Charge in Inventory Management Solutions"
        services={[
          {
            title: "Inventory Optimization",
            image: "/images/services/flexible-yard.jpg",
            description: "Smart strategies for perfect balance and efficiency.",
          },
          {
            title: "Supply Chain Integration",
            image: "/images/services/custom-storage.jpg",
            description: "Streamlined coordination across procurement, storage, and distribution.",
          },
          {
            title: "Real-Time Inventory Monitoring",
            image: "/images/services/security.jpg",
            description: "Live inventory tracking for improved visibility and control.",
          },
          {
            title: "Data-Driven Analytics",
            image: "/images/services/logistics.jpg",
            description: "Actionable insights to support smarter inventory decisions..",
          },
          {
            title: "Custom System Implementation",
            image: "/images/services/maintenance.jpg",
            description: "Tailored inventory management solutions designed for your business needs.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Exceeding Industry Standards with Outstanding Results"
        stats={[
          { value: "35%", label: "Operational Cost Reduction" },
          { value: "99%", label: "Inventory Accuracy Rate" },
          { value: "20%", label: "Faster Inventory Turnover" },
          { value: "500+", label: "Businesses Optimized" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership is committed to delivering exceptional inventory management services, guiding team efforts towards operational excellence.",
          },
          {
            title: "Our Team",
            description:
              "Equipped with extensive expertise, our team offers innovative and precise delivery in all aspects of inventory management.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Inventory Management Questions Answered"
        faqs={[
          {
            question: "Why is inventory management important?",
            answer:
              "Inventory management prevents overstock and shortages, improves cash flow, and enhances operational efficiency.",
          },
          {
            question: "How does real-time inventory tracking work?",
            answer:
              "It uses technologies like barcodes and RFID to update stock levels instantly after every transaction.",
          },
          {
            question: "What are the benefits of predictive inventory management?",
            answer:
              "It forecasts demand using historical data, minimizing stockouts and overstock situations.",
          },
          {
            question: "How can inventory management reduce costs?",
            answer:
              "Optimized stock levels reduce holding costs and prevent capital from being tied up in excess inventory.",
          },
          {
            question: "What technology is essential for inventory management?",
            answer:
              "ERP systems, barcoding, and RFID technologies are essential for modern inventory control.",
          },
          {
            question: "What is the best approach to inventory forecasting?",
            answer:
              "Combining historical sales data with predictive analytics ensures accurate projections.",
          },
          {
            question: "How does inventory management impact customer satisfaction?",
            answer:
              "Ensures product availability, reduces delays, and improves delivery performance.",
          },
          {
            question: "Can inventory management solutions be customized?",
            answer:
              "Yes, solutions can be tailored to industry-specific and operational requirements.",
          },
          {
            question: "What is the role of data in inventory management?",
            answer:
              "Data provides insights into trends and stock levels for better decision-making.",
          },
          {
            question: "How do I start improving inventory management?",
            answer:
              "Assess current practices and implement advanced systems like ERP with expert guidance.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Inventory Management?"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}