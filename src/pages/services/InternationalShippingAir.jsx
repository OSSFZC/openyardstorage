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
  FiClock,
  FiFileText,
  FiMessageSquare
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function InternationalShippingAir() {

  useMeta(
    "Leading International Shipping Air Services | OSS FZC",
    "OSS FZC delivers safe, timely, and cost-effective international air shipping solutions designed for seamless global freight movement."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Fast. Reliable. Global."
        title="Elevate Your Business with Premium International Shipping Air Services"
        subtitle="Experience seamless global transportation—contact us today!"
        buttonText="Contact Us"
        buttonLink="/contact-us"
        backgroundImage="/images/services/freight.jpeg  "
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Frustrated with Unpredictable Shipping Delays?"
        title="Tired of Complicated and Costly Air Freight?"
        description="Businesses face immense challenges when managing international shipping by air. Delays, high costs, and logistical nightmares can hinder operations, stymie growth, and drain resources."
        description2="Open Yard Storage offers a coherent solution to streamline and simplify air freight operations, ensuring smooth, efficient, and competitive logistics strategies."
        rightTitle="Overcoming Your Air Freight Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiDollarSign,
            title: "Cost Overruns",
            text: "Expensive last-minute adjustments."
          },
          {
            icon: FiClock,
            title: "Time Delays",
            text: "Unexpected hold-ups in shipping."
          },
          {
            icon: FiFileText,
            title: "Compliance Issues",
            text: "Navigating complex regulations."
          },
          {
            icon: FiMessageSquare,
            title: "Communication Gaps",
            text: "Lack of real-time updates."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The Open Yard Storage Difference"
        title="Discover the Open Yard Storage Advantage"
        description="Our powerful network, proactive strategies, and cutting-edge technologies ensure efficiency and reliability. By minimizing downtime and optimizing resources, we elevate your logistics process."
        features={[
          {
            image: "/icons/cost.png",
            title: "Cost Efficiency",
            description: "Affordable, competitive pricing models."
          },
          {
            image: "/icons/Real-time.png",
            title: "Timely Delivery",
            description: "Precision-timed logistic strategies."
          },
          {
            image: "/icons/custom.png",
            title: "Regulatory Expertise",
            description: "Navigating complex global requirements seamlessly."
          },
          {
            image: "/icons/support.png",
            title: "Real-Time Tracking",
            description: "Advanced systems for constant updates."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Air Freight Services"
        title="Comprehensive Air Freight Solutions"
        services={[
          {
            title: "Door-to-Door Service",
            image: "/images/services/flexible-yard.jpg",
            description: "Seamless logistics from origin to destination."
          },
          {
            title: "Express Shipping",
            image: "/images/services/custom-storage.jpg",
            description: "Rapid solutions for urgent shipments."
          },
          {
            title: "Customs Clearance",
            image: "/images/services/security.jpg",
            description: "Expertise in navigating global trade regulations."
          },
          {
            title: "Cargo Insurance",
            image: "/images/services/logistics.jpg",
            description: "Protection against unforeseen transit risks."
          },
          {
            title: "Warehousing",
            image: "/images/services/maintenance.jpg",
            description: "Secure storage solutions at strategic locations."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Delivering Excellence Through Expert Logistics"
        stats={[
          { value: "30%", label: "Faster Delivery Times" },
          { value: "24/7", label: "Shipment Monitoring" },
          { value: "500+", label: "Global Shipments Delivered" },
          { value: "100%", label: "Customer Satisfaction Commitment" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership is committed to delivering unparalleled excellence in international shipping air services, prioritizing reliability and customer satisfaction."
          },
          {
            title: "Our Team",
            description:
              "Our dedicated team excels in deploying creative solutions with precision in international air freight logistics."
          }
        ]}
      />

      {/* FAQ */}
<FAQSection
  eyebrow="FAQ"
  title="Your International Shipping Air Questions Answered"
  faqs={[
    {
      question: "What is the fastest way to ship internationally by air?",
      answer:
        "Shipping internationally by air requires a reliable logistics service provider who specializes in expedited global deliveries. At Open Yard Storage, we offer express shipping solutions tailored to meet urgent needs with efficiency and reliability. Utilizing a vast network and advanced logistics tools, we ensure that your freight reaches its destination promptly, minimizing delays and streamlining customs processes. This translates to peace of mind and timely deliveries for businesses aiming to meet critical timelines."
    },
    {
      question: "How do air freight costs compare to other shipping methods?",
      answer:
        "While air freight is typically more expensive than ocean shipping, it offers unmatched speed and reliability, making it ideal for time-sensitive shipments. At Open Yard Storage, we optimize costs through strategic planning and bulk shipping discounts that align with your budgetary needs. The premium cost is offset by reduced delivery times and increased security, ensuring high-value goods reach their destination swiftly and safely. Our team navigates tariffs and customs, further reducing both expenses and logistical burdens for your business."
    },
    {
      question: "What factors affect the cost of international air freight?",
      answer:
        "The cost of international air freight is influenced by several factors, including shipment weight and volume, route, and speed of service. Additional considerations such as fuel surcharges, customs fees, and insurance also impact pricing. Open Yard Storage provides customized solutions with transparent pricing to fit your specific needs. Our specialists analyze all factors, leveraging partnerships and economies of scale to offer competitive rates without compromising on service quality and delivery timelines."
    },
    {
      question: "How can businesses ensure compatibility with international regulations?",
      answer:
        "Navigating the complexities of international shipping regulations can be daunting. Ensuring compliance requires expertise in global standards and practices. Open Yard Storage takes the guesswork out of this process by offering comprehensive regulatory support. Our seasoned professionals stay updated with the latest changes, ensuring your shipments are compliant and avoiding costly fines and delays. This seamless approach allows you to focus on core business operations while we handle the intricacies of international logistics."
    },
    {
      question: "What types of goods are best suited for air freight services?",
      answer:
        "Air freight is ideal for time-sensitive, high-value, or perishable goods that require swift delivery. Electronics, pharmaceuticals, automotive parts, and fashion items often benefit from air shipping due to their need for timely arrival and elements of fragility. Open Yard Storage leverages its expertise in handling various cargo types, providing tailored solutions to meet the specific requirements of diverse industries. Our advanced tracking systems and efficient handling ensure that all goods arrive intact and on time."
    },
    {
      question: "How reliable are real-time tracking services for air freight?",
      answer:
        "Real-time tracking in air freight services offers vital visibility, allowing businesses to monitor shipments throughout the journey. Open Yard Storage uses cutting-edge tracking technology to provide our clients with continuous updates and proactive communication. This transparency builds trust, enabling prompt responses to any potential disruptions. With real-time insights, you can make informed decisions, adjust schedules as needed, and maintain operational efficiency, all while enhancing customer satisfaction."
    },
    {
      question: "What happens if my shipment is delayed or lost?",
      answer:
        "In the rare occurrence of a delay or a misplaced shipment, our dedicated support team at Open Yard Storage promptly investigates and resolves the issue. We understand the urgency and inconvenience such occurrences present, and we work tirelessly to ensure any disruptions are minimal. Our cargo insurance options also provide monetary coverage, protecting your business from potential losses. Continuous feedback loops and proactive communication ensure you are always informed and prepared."
    },
    {
      question: "Can I ship hazardous materials via air freight?",
      answer:
        "Shipping hazardous materials via air freight is subject to strict international regulations for safety. Open Yard Storage is equipped to manage such shipments with compliance certifications, expert handling, and safety protocols. Our team provides step-by-step assistance from documentation to packaging and delivery, ensuring all applicable regulations are followed. We prioritize safety and legal requirements while ensuring your sensitive shipments arrive on time and intact, mitigating potential risks."
    },
    {
      question: "How do customs impact the air shipping process?",
      answer:
        "Customs procedures are a crucial part of international shipping air, impacting cargo transit times. Properly navigating customs involves preparing accurate documentation, understanding tariffs, and ensuring compliance with import-export regulations. Open Yard Storage excels in facilitating smooth customs clearance, reducing delays through expert handling of necessary paperwork and legal requirements. Our experienced team minimizes customs-related obstacles, ensuring swift and efficient cross-border deliveries."
    },
    {
      question: "Why choose Open Yard Storage for international air shipping?",
      answer:
        "Open Yard Storage stands out in international air shipping due to our unwavering commitment to client satisfaction and logistical excellence. We combine industry-leading technology, skilled professionals, and vast network resources to deliver personalized, efficient solutions. Whether optimizing cost structures or guaranteeing swift delivery times, we maintain transparent communication and adaptability. Our track record of reliability and innovation ensures our clients receive top-tier service in every aspect of their air freight needs."
    }
  ]}
/>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Air Freight Experience?"
        buttonText="Contact Us for Tailored Solutions Today!"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}