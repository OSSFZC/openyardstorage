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
  FiDroplet,
  FiLayers,
  FiThermometer,
  FiTrendingUp,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ChillerStorageWarehouse() {
  useMeta(
    "Premium Chiller Storage Warehouse Solutions | OSS FZC",
    "OSS FZC offers reliable chiller and temperature-controlled warehouse solutions to enhance storage efficiency and maintain optimal conditions for your goods.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Precision Storage for Optimal Quality"
        title="Discover the Perfect Chiller Storage Warehouse Solution for Your Needs"
        subtitle="Secure Your Space Today – Reach Out for a Customized Quote!"
        buttonText="Get a Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Tired of Compromised Storage Conditions?"
        title="Challenges in Maintaining Temperature-Controlled Environments"
        description="Chiller storage requires precise temperature management to prevent spoilage and maintain product quality. Many businesses struggle with inconsistent cooling, inefficient storage layouts, and unreliable systems."
        description2="OSS FZC provides advanced temperature-controlled warehouse solutions designed to maintain ideal storage conditions while optimizing space and operational efficiency."
        rightTitle="Solutions to Common Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiDroplet,
            title: "Humidity Management",
            text: "Precision moisture control prevents spoilage.",
          },
          {
            icon: FiLayers,
            title: "Space Optimization",
            text: "Maximize storage efficiency while maintaining accessibility.",
          },
          {
            icon: FiThermometer,
            title: "Consistent Cooling",
            text: "Reliable systems maintain stable temperatures.",
          },
          {
            icon: FiTrendingUp,
            title: "Scalable Solutions",
            text: "Flexible storage options that grow with demand.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Tailored Temperature Control Solutions"
        description="OSS FZC delivers cutting-edge temperature-controlled warehouses designed specifically for chiller storage needs. Our facilities ensure precise environmental conditions, protecting sensitive goods while optimizing operational efficiency."
        features={[
          {
            image: "/icons/cost.png",
            title: "Advanced Monitoring",
            description: "Continuous tracking ensures product integrity.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Custom Configurations",
            description: "Flexible layouts tailored to your requirements.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Energy Efficiency",
            description:
              "Reduce operational costs with sustainable technology.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Integrated Systems",
            description: "Smart systems for efficient warehouse management.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Transformative Temperature Control Solutions"
        services={[
          {
            title: "Dynamic Temperature Control",
            image: "/images/services/flexible-yard.jpg",
            description: "Maintain optimal conditions for sensitive goods.",
          },
          {
            title: "Energy-Efficient Designs",
            image: "/images/services/custom-storage.jpg",
            description: "Reduce energy costs with advanced cooling systems.",
          },
          {
            title: "24/7 Monitoring & Support",
            image: "/images/services/security.jpg",
            description:
              "Round-the-clock supervision for uninterrupted storage.",
          },
          {
            title: "Modular Storage Options",
            image: "/images/services/logistics.jpg",
            description: "Flexible layouts for different storage needs.",
          },
          {
            title: "Compliance-Ready Facilities",
            image: "/images/services/maintenance.jpg",
            description: "Meet strict industry and safety regulations.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="See the Impact of Our Temperature-Controlled Solutions"
        stats={[
          { value: "30%", label: "Reduction in Spoilage Costs" },
          { value: "24/7", label: "Monitoring & Support" },
          { value: "500+", label: "Satisfied Clients" },
          { value: "99%", label: "Temperature Stability Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Trusted leaders in chiller storage, we provide advanced temperature-controlled warehouse solutions designed to maintain the highest standards of quality.",
          },
          {
            title: "Our Team",
            description:
              "Our experts combine technical knowledge with logistics expertise to deliver innovative temperature-controlled storage solutions.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Chiller Storage Questions Answered"
        faqs={[
          {
            question: "What is a chiller storage warehouse?",
            answer:
              "A chiller storage warehouse maintains goods at low controlled temperatures to preserve quality and extend shelf life.",
          },
          {
            question:
              "How is temperature-controlled storage different from regular storage?",
            answer:
              "Temperature-controlled warehouses regulate temperature and humidity levels to protect sensitive goods.",
          },
          {
            question: "Why is humidity control important?",
            answer:
              "Proper humidity prevents condensation, mold growth, and packaging damage.",
          },
          {
            question: "Which industries benefit from chiller storage?",
            answer:
              "Food, pharmaceuticals, biotechnology, and electronics industries rely on temperature-controlled storage.",
          },
          {
            question: "Can storage solutions be customized?",
            answer:
              "Yes, we provide customizable layouts, temperature ranges, and storage configurations.",
          },
          {
            question: "How do you maintain consistent cooling?",
            answer:
              "We use advanced HVAC systems and real-time monitoring technology.",
          },
          {
            question: "Is energy efficiency important in cold storage?",
            answer:
              "Yes, energy-efficient systems reduce operational costs and environmental impact.",
          },
          {
            question: "Do you offer monitoring and support?",
            answer:
              "Yes, our facilities are monitored 24/7 to ensure stable storage conditions.",
          },
          {
            question: "Are facilities compliant with regulations?",
            answer:
              "All our storage facilities meet strict industry and safety compliance standards.",
          },
          {
            question: "Are your storage solutions scalable?",
            answer:
              "Yes, our storage capacity can expand based on seasonal or business growth needs.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Elevate Your Storage Strategy"
        buttonText="Contact Us for Tailored Solutions Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
