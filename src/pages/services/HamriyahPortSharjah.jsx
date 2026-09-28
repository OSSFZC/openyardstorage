import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import { FiPackage, FiClock, FiShield, FiDollarSign } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function HamriyahPortSharjah() {
  useMeta(
    "Top-tier Storage Solutions at Hamriyah Port Sharjah | OSS FZC",
    "OSS FZC provides secure, efficient, and innovative storage solutions at Hamriyah Port Sharjah to optimize your operations. Contact us today.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Secure & Effortless Storage at Hamriyah Port Sharjah"
        title="Revolutionize Your Storage Needs with Innovative Solutions"
        subtitle="Unlock the Potential of Seamless Storage Today"
        buttonText="Get Consultation"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Frustrated with Inefficient Storage and Logistic Challenges?"
        title="Navigating Storage Pitfalls at Hamriyah Port Sharjah"
        description="At Hamriyah Port Sharjah, operational challenges can stifle your growth. Are complex logistics, inadequate security, and inefficient storage facilities holding you back?"
        description2="Many businesses face downtime and costly delays because they lack the right infrastructure. This doesn't just impede growth; it affects your bottom line."
        rightTitle="Transform Your Challenges into Opportunities"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiPackage,
            title: "Suboptimal Storage Solutions",
            text: "Amplify efficiency with tailored storage facilities.",
          },
          {
            icon: FiClock,
            title: "Logistical Delays",
            text: "Overcome operational delays with strategic planning.",
          },
          {
            icon: FiShield,
            title: "Inadequate Security",
            text: "Experience peace of mind with top-tier security measures.",
          },
          {
            icon: FiDollarSign,
            title: "Rising Costs",
            text: "Reduce overhead with cost-efficient solutions.",
          },
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Advantage"
        title="Discover the OSS FZC Advantage"
        description="Open Yard Storage redefines the conventional approach at Hamriyah Port Sharjah. Our state-of-the-art facilities offer unmatched security, accessibility, and cost-effectiveness."
        features={[
          {
            image: "/icons/security.png",
            alt: "Hamriyah Port Sharjah by Open Yard Storage FZC",
            title: "Advanced Surveillance Systems",
            description: "Ensuring maximum security for stored goods.",
          },
          {
            image: "/icons/custom.png",
            alt: "International Shipping Forwarder by Open Yard Storage FZC",
            title: "Customizable Storage Options",
            description: "Flexible storage plans tailored to your needs.",
          },
          {
            image: "/icons/location.png",
            alt: "Hamriyah Port Sharjah by Open Yard Storage FZC",
            title: "Strategic Location Proximity",
            description: "Prime location enabling faster logistics.",
          },
          {
            image: "/icons/cost.png",
            alt: "Open Yard Storage LOGO for International Logistics and Transport",
            title: "Cost-Effective Storage Solutions",
            description: "Reduce operational costs with efficient storage.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Storage Services"
        title="Elevate Your Storage Experience"
        services={[
          {
            title: "Comprehensive Storage Solutions",
            image: "/images/services/flexible-yard.jpg",
            alt: "Freezone Storage Space in Sharjah by Open Yard Storage FZC",
            description: "Tailored to your unique logistical needs.",
          },
          {
            title: "Secure Warehouse Facilities",
            image: "/images/services/custom-storage.jpg",
            alt: "Storage Space in Sharjah by Open Yard Storage FZC",
            description: "Ensuring safety for your valuable goods.",
          },
          {
            title: "On-Demand Access",
            image: "/images/services/security.jpg",
            alt: "Storage Space in Sharjah by Open Yard Storage FZC",
            description: "Flexible access tailored to your schedule.",
          },
          {
            title: "Inventory Management",
            image: "/images/services/logistics.jpg",
            alt: "Storage & Logistics Company Sharjah by Open Yard Storage FZC",
            description: "Streamline operations with integrated solutions.",
          },
          {
            title: "Cost Optimization Services",
            image: "/images/services/maintenance.jpg",
            alt: "Storage Space in Sharjah by Open Yard Storage FZC",
            description: "Enhance profitability by minimizing expenses.",
          },
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Leading the Way with Proven Success"
        subtitle="Numbers That Speak for Themselves"
        stats={[
          { value: "40%", label: "Operational Efficiency Increase" },
          { value: "24/7", label: "Security Monitoring" },
          { value: "500+", label: "Clients Served" },
          { value: "100%", label: "Secure Storage Facilities" },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "At the heart of our service delivery is industry-leading expertise and a commitment to maintaining standards of excellence in storage solutions.",
          },
          {
            title: "Our Team",
            description:
              "Our dedicated team excels in providing innovative storage solutions with precision and creativity, ensuring client satisfaction.",
          },
        ]}
      />

      {/* FAQ */}
      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Your Storage Questions Answered"
        faqs={[
          {
            question:
              "What makes Hamriyah Port Sharjah a strategic location for storage?",
            answer:
              "Hamriyah Port Sharjah is ideal due to its strategic location at the crossroads of major shipping routes. This makes it a key logistical hub, ensuring quick and efficient transportation. Businesses benefit from reduced shipping times and better access to markets in the Middle East and beyond, critical for growth and competitiveness.",
          },
          {
            question:
              "How can Open Yard Storage enhance security at Hamriyah Port Sharjah?",
            answer:
              "Security is crucial in logistics, especially at bustling locations like Hamriyah Port Sharjah. Our facilities are equipped with cutting-edge surveillance technology, 24/7 security personnel, and meticulously managed access controls. These features collectively minimize risk and ensure that your assets remain uncompromised, providing peace of mind.",
          },
          {
            question:
              "What types of goods can be stored at your Hamriyah Port Sharjah facilities?",
            answer:
              "Our versatile warehousing solutions at Hamriyah Port Sharjah accommodate a diverse range of goods. From bulk materials and industrial equipment to delicate items needing controlled environments, our facilities are designed to cater to varied needs while maintaining strict standards of safety and quality.",
          },
          {
            question:
              "How do you ensure efficiency in logistics operations at Hamriyah Port Sharjah?",
            answer:
              "Efficiency is streamlined at Hamriyah Port Sharjah through our strategic facility design and advanced inventory management systems. These tools reduce handling times, optimize space usage, and enable quick retrieval, translating into faster service and happier customers.",
          },
          {
            question:
              "What are the cost benefits of using your storage solutions at Hamriyah Port Sharjah?",
            answer:
              "Utilizing our facilities at Hamriyah Port Sharjah offers significant cost benefits. Efficient logistics reduce travel times, thereby lowering fuel and labor costs. Additionally, our competitive pricing on comprehensive services results in substantial savings, making your operations more profitable.",
          },
          {
            question:
              "Is your storage solution scalable for growing businesses at Hamriyah Port Sharjah?",
            answer:
              "Absolutely. Our storage solutions at Hamriyah Port Sharjah are designed for scalability. Whether you're expanding quickly or steadily, our customizable storage options grow with your needs, ensuring that your operational requirements are consistently met without disruption.",
          },
          {
            question:
              "Do you offer customizable storage plans at Hamriyah Port Sharjah?",
            answer:
              "Yes, customization is a cornerstone of our offerings. We understand that each business has unique needs, so we provide tailored storage plans at Hamriyah Port Sharjah, ensuring that solutions align with your operational goals for maximum efficiency and value.",
          },
          {
            question:
              "How do your services compare to other storage solutions in Hamriyah Port Sharjah?",
            answer:
              "Our competitive edge lies in our comprehensive approach. At Hamriyah Port Sharjah, we offer superior security, flexibility, and advanced technology, culminating in a unique value proposition not easily matched by other providers, delivering exceptional client satisfaction.",
          },
          {
            question:
              "What kind of technology supports your operations at Hamriyah Port Sharjah?",
            answer:
              "We employ state-of-the-art technology, including AI-driven inventory systems and automated reporting, ensuring our facilities at Hamriyah Port Sharjah deliver unparalleled efficiency. This technology helps optimize logistics, reduce errors, and provide real-time data for better decision-making.",
          },
          {
            question:
              "Can your location at Hamriyah Port Sharjah handle urgent storage requests?",
            answer:
              "Certainly. Due to our strategic positioning and advanced readiness at Hamriyah Port Sharjah, we excel in managing urgent storage needs. Our dedicated team and resources ensure rapid response times, meeting unexpected demands effectively and reliably.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Revolutionize Your Storage Experience?"
        buttonText="Contact Us for Tailored Solutions Today"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
