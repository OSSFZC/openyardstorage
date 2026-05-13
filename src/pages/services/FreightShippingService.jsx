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

export default function FreightShippingService() {

  useMeta(
    "Reliable Freight Shipping Service | OSS FZC",
    "Streamline your logistics with OSS FZC's top-tier Freight Shipping Service. Experience timely deliveries, unparalleled reliability, and customized solutions designed for your shipping needs. Contact us today!"
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Efficient Freight Solutions for Seamless Logistics"
        title="Revolutionize Your Freight Shipping Service with Unmatched Efficiency"
        subtitle="Discover the Difference—Request Your Free Quote Today!"
        buttonText="Get Started with a Custom Freight Shipping Quote!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/sea.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Facing Shipping Challenges Head-On"
        title="Are Freight Disruptions Hindering Your Business?"
        description="It's common to feel overwhelmed by the unpredictability of freight shipping. Delays, unexpected costs, and complex compliance regulations can create chaos in your supply chain, diminishing trust with your clients."
        description2="Traditional solutions often fall short, leaving you in a constant scramble to manage unexpected situations. Imagine consistently meeting deadlines, ensuring regulatory compliance without headaches, and maintaining a seamless flow in your logistics operations."
        rightTitle="Transform Challenges into Triumphs"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiTrendingUp,
            title: "Say Goodbye to Delays",
            text: "Punctual deliveries are our priority.",
          },
          {
            icon: FiShield,
            title: "Clear Customs, Clear Mind",
            text: "Simplifying compliance for smooth transit.",
          },
          {
            icon: FiDollarSign,
            title: "Cost-Effective Strategies",
            text: "Optimizing routes to save your budget.",
          },
          {
            icon: FiAlertCircle,
            title: "Real-Time Tracking",
            text: "Visibility and control at every moment.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="Your Pathway to Streamlined Shipping Excellence"
        title="Experience Freight Shipping Done Right"
        description="At OSS FZC, our Freight Shipping Service stands out by redefining reliability and efficiency. We leverage cutting-edge technology and decades of industry expertise to create a customized shipping experience tailored to your needs."
        features={[
          {
            image: "/icons/cost.png",
            title: "Innovative Tracking",
            description: "Stay informed and secure with real-time updates.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Customized Solutions",
            description: "Tailored shipping plans for your business.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Delivers on Time",
            description: "Prioritizing speed and reliability.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Strategic Partnerships",
            description: "Benefit from our extensive logistics network.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Freight Services for Your Needs"
        services={[
          {
            title: "Road Freight",
            image: "/images/services/flexible-yard.jpg",
            description: "Flexible, reliable road transport solutions.",
          },
          {
            title: "Air Freight",
            image: "/images/services/custom-storage.jpg",
            description: "Swift delivery services for urgent consignments.",
          },
          {
            title: "Sea Freight",
            image: "/images/services/security.jpg",
            description: "Cost-efficient ocean shipping solutions.",
          },
          {
            title: "Rail Solutions",
            image: "/images/services/logistics.jpg",
            description: "Eco-friendly and budget-conscious transport.",
          },
          {
            title: "End-to-End Logistics",
            image: "/images/services/maintenance.jpg",
            description: "Complete freight management from start to finish.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Empowering Logistics with Measurable Excellence"
        stats={[
          { value: "30%", label: "Reduction in Transit Time" },
          { value: "500+", label: "Freight Shipments Managed" },
          { value: "24/7", label: "Tracking Support" },
          { value: "98%", label: "On-Time Delivery Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Led by seasoned industry veterans, we are committed to elevating freight shipping excellence and ensuring your operations are hassle-free and efficient.",
          },
          {
            title: "Our Team",
            description:
              "Our expert team combines creativity with precision to deliver innovative freight solutions tailored to meet your business needs.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Freight Shipping Service Questions Answered"
        faqs={[
          {
            question: "What is freight shipping?",
            answer:
              "Freight shipping is the transportation of goods by land, air, or sea. OSS FZC provides comprehensive and customized freight solutions for businesses.",
          },
          {
            question: "How do I choose the right freight shipping service?",
            answer:
              "Evaluate transit time, cost efficiency, network reach, and reliability. OSS FZC combines all these with advanced tracking and customer support.",
          },
          {
            question: "What types of freight can be shipped?",
            answer:
              "From small parcels to heavy machinery and bulk goods, our service handles diverse cargo securely.",
          },
          {
            question: "How can I track my freight shipment?",
            answer:
              "We offer state-of-the-art real-time tracking for full shipment visibility.",
          },
          {
            question: "What are the costs involved?",
            answer:
              "Costs vary by weight, size, and destination. We provide competitive and transparent pricing.",
          },
          {
            question: "How does freight differ from regular shipping?",
            answer:
              "Freight involves larger volumes and more complex logistics. We streamline the process for efficiency.",
          },
          {
            question: "What documents are required?",
            answer:
              "Bill of lading, commercial invoice, packing list, and relevant permits are required.",
          },
          {
            question: "Do you handle international freight?",
            answer:
              "Yes, we manage both domestic and international freight shipments.",
          },
          {
            question: "What is the estimated delivery time?",
            answer:
              "Delivery depends on mode and destination, but we prioritize punctuality.",
          },
          {
            question: "How do you ensure safe delivery?",
            answer:
              "We use stringent handling protocols and robust security measures to ensure safe transit.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Freight Operations?"
        buttonText="Get Started with a Custom Freight Shipping Quote!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}