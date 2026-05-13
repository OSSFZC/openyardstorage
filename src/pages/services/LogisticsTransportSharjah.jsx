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

export default function LogisticsTransportSharjah() {

  useMeta(
    "Premier Logistics Transport Service in Sharjah | OSS FZC",
    "Discover top-tier logistics transport services in Sharjah with unmatched efficiency and reliability. Partner with OSS FZC for tailored, dependable solutions."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Your Trusted Partner in Sharjah Logistics"
        title="Transform Your Logistics Experience with Unmatched Transport Services"
        subtitle="Contact Us Now for Customized Solutions that Propel Your Business Forward"
        buttonText="Get Started With Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Open-yard-storage.jpeg"s
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Experiencing Delays and Inefficiencies?"
        title="Overcoming Common Logistics Challenges in Sharjah"
        description="In the bustling hub of Sharjah, ensuring seamless logistics operations can be daunting. Frequent shipment delays, complex regulatory requirements, and inefficient transport methods can impede your business growth. Mismanaged logistics cost time and money, disrupting your operations."
        description2="OSS FZC offers refined solutions for these prevalent issues, providing smooth, reliable logistics transport service in Sharjah tailored to your business needs. Partner with us to streamline your operations and enhance productivity with our expertise and advanced technologies."
        rightTitle="Solve Your Logistics Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiTrendingUp,
            title: "Reduced Delivery Delays",
            text: "Experience fast, reliable delivery.",
          },
          {
            icon: FiShield,
            title: "Regulatory Expertise",
            text: "Navigate complex regulations effortlessly.",
          },
          {
            icon: FiDollarSign,
            title: "Cost Management",
            text: "Optimize your transport budget with precision.",
          },
          {
            icon: FiAlertCircle,
            title: "Custom Solutions",
            text: "Tailored logistics plans for unique needs.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="OSS FZC - Elevating Your Logistics Experience"
        title="Experience Excellence in Logistics"
        description="At OSS FZC, our logistics transport services in Sharjah stand out through our unmatched dedication to efficiency and reliability. We employ state-of-the-art technologies to streamline operations, ensuring your goods are delivered on time, every time. Our comprehensive understanding of regional regulations facilitates smooth cross-border transactions."
        features={[
          {
            image: "/icons/cost.png",
            title: "Advanced Technology",
            description: "Keeping you informed & in control.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Expertise You Can Trust",
            description: "Decades of industry experience.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Tailored Solutions",
            description: "Customized to fit your business needs.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Unwavering Reliability",
            description: "We deliver when it matters most.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Comprehensive Logistics Services"
        services={[
          {
            title: "Freight Management",
            image: "/images/services/flexible-yard.jpg",
            description: "Efficient handling of both local and international shipments.",
          },
          {
            title: "Warehousing Solutions",
            image: "/images/services/custom-storage.jpg",
            description: "Secure storage options to meet diverse warehousing needs.",
          },
          {
            title: "Customs Clearance",
            image: "/images/services/security.jpg",
            description: "Expert navigation of complex customs procedures.",
          },
          {
            title: "Supply Chain Solutions",
            image: "/images/services/logistics.jpg",
            description: "Optimizing entire supply chain operations for efficiency.",
          },
          {
            title: "Fleet Management",
            image: "/images/services/maintenance.jpg",
            description: "Modern, equipped fleets ready to handle your logistics challenges.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Delivering Excellence with Every Shipment"
        stats={[
          { value: "30%", label: "Reduction in Delivery Times" },
          { value: "15+", label: "Years of Logistics Expertise" },
          { value: "500+", label: "Clients Served Across Sharjah" },
          { value: "98%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership’s foresight ensures top-tier logistics services, fostering growth and efficiency for every client.",
          },
          {
            title: "Our Team",
            description:
              "A team of seasoned experts dedicated to delivering logistics solutions with unmatched precision.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Sharjah Logistics Questions Answered"
        faqs={[
          {
            question: "What logistics transport services do you offer in Sharjah?",
            answer:
              "Our services include freight management, customs clearance, warehousing, and tailored logistics solutions ensuring efficient and reliable delivery.",
          },
          {
            question: "How do you ensure timely deliveries?",
            answer:
              "We leverage advanced route planning, real-time tracking systems, and contingency planning to ensure punctual deliveries.",
          },
          {
            question: "Can you handle both local and international logistics?",
            answer:
              "Yes, we provide comprehensive services for both local and international logistics operations.",
          },
          {
            question: "What makes your logistics service distinct?",
            answer:
              "Our integration of technology, analytics, and personalized service sets us apart in Sharjah logistics.",
          },
          {
            question: "Are your logistics services scalable?",
            answer:
              "Yes, our solutions are flexible and scalable to match business growth.",
          },
          {
            question: "How do you ensure cost-effectiveness?",
            answer:
              "Through optimized routes, efficient planning, and strategic logistics execution.",
          },
          {
            question: "What industries do you service?",
            answer:
              "We serve retail, textiles, electronics, and many other industries in Sharjah.",
          },
          {
            question: "Do you provide shipment tracking?",
            answer:
              "Yes, our real-time tracking system ensures full visibility.",
          },
          {
            question: "How do you handle customs?",
            answer:
              "We manage all documentation and regulatory requirements to ensure smooth customs clearance.",
          },
          {
            question: "How can I get started?",
            answer:
              "Contact our team through our website or phone to receive a customized logistics plan.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Revolutionize Your Logistics?"
        buttonText="Get Started With Us Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}