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
  FiDollarSign,
  FiFileText,
  FiTrendingUp,
  FiTruck,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function InternationalTruckShipping() {
  useMeta(
    "Effortless International Truck Shipping | OSS FZC",
    "Discover seamless international truck shipping with OSS FZC. Enjoy strategic logistics, transparent pricing, and advanced tracking. Get a free quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Global Truck Solutions Tailored For You"
        title="Effortless International Truck Shipping: Your Reliable Global Partner"
        subtitle="Experience Seamless Shipping Today – Get Your Free Quote!"
        buttonText="Get a Personalized Quote Now!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Facing Roadblocks in International Truck Shipping?"
        title="Overwhelmed by Logistical Hassles?"
        description="Managing international truck shipping can be a daunting task. Inconsistent regulations, unexpected delays, and complex documentation make it a challenging field to navigate. Companies often struggle with hidden costs and lack of transparency throughout the shipping journey."
        description2="Often, the choice between efficiency and cost-effectiveness seems like a zero-sum game. At OSS FZC, we understand these pain points and address them head-on. Our comprehensive approach ensures you get both reliability and affordability in your international shipping needs."
        rightTitle="Your Challenges, Solved."
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiFileText,
            title: "Regulatory Complexity",
            text: "Navigating diverse international laws.",
          },
          {
            icon: FiTrendingUp,
            title: "Unpredictable Timelines",
            text: "Reliable scheduling, every time.",
          },
          {
            icon: FiDollarSign,
            title: "Hidden Costs",
            text: "Full transparency in pricing.",
          },
          {
            icon: FiTruck,
            title: "Document Management",
            text: "Simplifying paper trails efficiently.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="OSS FZC: Where Precision Meets Affordability"
        title="Transforming Challenges into Opportunities"
        description="OSS FZC offers a strategic edge in international truck shipping. Our world-class logistics infrastructure, combined with cutting-edge technology, optimizes each phase of the shipping process. From consultation through final delivery, we ensure a seamless experience with real-time tracking and customized shipping strategies."
        features={[
          {
            image: "/icons/cost.png",
            title: "Advanced Tech Integration",
            description: "Real-time tracking and reporting.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Custom Solutions",
            description: "Tailor-made shipping strategies.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Global Expertise",
            description: "Navigating international markets effortlessly.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Cost Efficiency",
            description: "Value-driven pricing models.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive International Shipping Solutions"
        services={[
          {
            title: "Full Truckload (FTL) Services",
            image: "/images/services/flexible-yard.jpg",
            description: "Secure and efficient transport for large shipments.",
          },
          {
            title: "Less than Truckload (LTL) Services",
            image: "/images/services/custom-storage.jpg",
            description: "Cost-effective solutions for smaller shipments.",
          },
          {
            title: "Customs Brokerage",
            image: "/images/services/security.jpg",
            description:
              "Seamless border crossing with professional documentation.",
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/logistics.jpg",
            description: "Secure storage facilities across key locations.",
          },
          {
            title: "Real-time Tracking",
            image: "/images/services/maintenance.jpg",
            description: "Monitor your shipment with precise updates.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Excellence and Innovation in Global Trucking"
        stats={[
          { value: "30%", label: "Reduction in Shipping Time" },
          { value: "500+", label: "International Shipments Managed" },
          { value: "24/7", label: "Real-Time Tracking Support" },
          { value: "98%", label: "On-Time Delivery Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership is dedicated to redefining excellence in International Truck Shipping through innovation and integrity.",
          },
          {
            title: "Our Team",
            description:
              "Meet our expert team driving creative and precise International Truck Shipping solutions for you.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your International Truck Shipping Questions Answered"
        faqs={[
          {
            question: "What is international truck shipping?",
            answer:
              "International truck shipping refers to transporting goods via trucks across international borders, involving customs, documentation, and regulatory compliance.",
          },
          {
            question: "How long does international truck shipping take?",
            answer:
              "Delivery time depends on origin, destination, and customs procedures. OSS FZC provides reliable timelines and real-time updates.",
          },
          {
            question: "What documents are needed?",
            answer:
              "Documents include bill of lading, commercial invoice, packing list, and certificates of origin. We manage documentation for you.",
          },
          {
            question: "How do you handle customs clearance?",
            answer:
              "We prepare documentation, liaise with authorities, and ensure compliance for smooth border clearance.",
          },
          {
            question: "What costs are involved?",
            answer:
              "Costs vary by shipment size and services required. We ensure transparent pricing with no hidden fees.",
          },
          {
            question: "Can I track my shipment?",
            answer:
              "Yes, we provide real-time tracking for full shipment visibility.",
          },
          {
            question: "What security measures are in place?",
            answer:
              "We use tamper-proof seals, tracking systems, and vetted logistics partners.",
          },
          {
            question: "How do you handle unexpected delays?",
            answer:
              "We communicate proactively and execute contingency plans to minimize impact.",
          },
          {
            question: "Do you provide insurance?",
            answer:
              "Yes, comprehensive insurance coverage options are available.",
          },
          {
            question: "Can you handle oversized cargo?",
            answer:
              "Yes, we specialize in oversized and special cargo with tailored logistics planning.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Simplify Your Shipping?"
        buttonText="Get a Personalized Quote Now!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
