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
  FiCalendar,
  FiShield,
  FiFileText,
  FiDollarSign
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function ContainerLogisticsTransportSharjah() {

  useMeta(
    "Reliable Container Logistics Transport in Sharjah | OSS FZC",
    "Optimize your supply chain with Open Yard Storage's seamless container logistics transport in Sharjah. Discover tailored solutions, real-time tracking, and expert services ensuring efficiency and security for your business."
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Dependable Logistics, Seamless Solutions"
        title="Revolutionizing Container Logistics Transport in Sharjah for Your Business Success"
        subtitle="Experience Hassle-Free Logistics Today – Contact Us Now!"
        buttonText="Contact Us"
        buttonLink="/contact-us"
        backgroundImage="/images/services/containe-certification-ISO-tank-service.jpeg"
      />

      <TrustedSlider />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        subtitle="Navigating the Challenges of Container Logistics"
        title="Overcoming Complexities in Container Logistics Transport in Sharjah"
        description="Managing container logistics in Sharjah can be a daunting task, fraught with challenges at every turn. The complexities of coordinating transport schedules, ensuring container safety, and navigating regulatory requirements often lead to delays and increased costs."
        description2="At Open Yard Storage, we understand the hurdles you face. Our container logistics transport solutions in Sharjah are designed to address these specific issues, offering precision and reliability that streamline your operations."
        rightTitle="Solving Your Logistics Challenges"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiCalendar,
            title: "Complex Coordination",
            text: "Efficient schedule management for seamless operations."
          },
          {
            icon: FiFileText,
            title: "Regulatory Navigation",
            text: "Expert handling of compliance and legal requirements."
          },
          {
            icon: FiShield,
            title: "Container Safety",
            text: "State-of-the-art solutions for secure transport."
          },
          {
            icon: FiDollarSign,
            title: "Cost Overruns",
            text: "Strategies to optimize expenses and increase profitability."
          }
        ]}
      />

      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS FZC Difference"
        title="Elevate Your Logistics Experience"
        description="At OSS FZC, our unique approach to container logistics transport in Sharjah sets us apart. With our in-depth knowledge and cutting-edge technology, we provide comprehensive solutions that ensure efficiency from start to finish."
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Innovative Technology",
            description: "Leveraging the latest tools for optimal logistics coordination."
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Expert Team",
            description: "A seasoned team committed to excellence and client satisfaction."
          },
          {
            image: "/icons/cost.png",
            title: "Tailored Solutions",
            description: "Customized tactics to fit your unique logistics needs."
          },
          {
            image: "/icons/cost.png",
            title: "Proven Results",
            description: "A track record of successful deliveries and satisfied clientele."
          }
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Logistics Services"
        title="Comprehensive Logistics Services Crafted for You"
        services={[
          {
            title: "End-to-End Container Transport",
            image: "/images/services/flexible-yard.jpg",
            description: "Reliable container movement from pickup to final delivery."
          },
          {
            title: "Customs Clearance Services",
            image: "/images/services/custom-storage.jpg",
            description: "Smooth handling of shipping documentation and compliance procedures."
          },
          {
            title: "Real-Time Shipment Tracking",
            image: "/images/services/security.jpg",
            description: "Live container tracking with timely delivery updates."
          },
          {
            title: "Container Handling & Coordination",
            image: "/images/services/logistics.jpg",
            description: "Efficient scheduling, loading, and transport management solutions."
          },
          {
            title: "Warehousing & Storage Solutions",
            image: "/images/services/maintenance.jpg",
            description: "Secure storage facilities to support cargo distribution and transit."
          }
        ]}
      />

      {/* STATS */}
      <StatsSection
        title="Proven Success in Numbers"
        subtitle="Ensuring Excellence in Every Container Delivered"
        stats={[
          { value: "30%", label: "Supply Chain Efficiency Increase" },
          { value: "24/7", label: "Real-Time Tracking Support" },
          { value: "100+", label: "Successful Logistics Projects" },
          { value: "Global", label: "Industry Network Coverage" }
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            description:
              "Our leadership drives Open Yard Storage's commitment to excellence in container logistics services by fostering innovation and consistently delivering outstanding results."
          },
          {
            title: "Our Team",
            description:
              "Our team combines industry expertise and creativity to deliver unparalleled logistics services in Sharjah, ensuring precision and success."
          }
        ]}
      />

      {/* FAQ */}
   
        <FAQSection
        eyebrow="FAQ"
        title="Your Container Logistics Transport Questions Answered"
        faqs={[
            {
            question: "What services do you offer for container logistics transport in Sharjah?",
            answer:
                "At Open Yard Storage, we offer a full suite of services to ensure smooth container logistics transport in Sharjah. From end-to-end container transport and customs clearance to real-time tracking and logistics consulting, our services are designed to address every facet of your logistics needs. Our team provides tailored solutions to ensure your supply chain operates seamlessly and efficiently, minimizing any disruptions or delays."
            },
            {
            question: "How do you ensure the safety of containers during transport?",
            answer:
                "Ensuring container safety during transport is a top priority for us. We use state-of-the-art logistical strategies and security measures to monitor and safeguard your cargo. Our transport vehicles are well-maintained and equipped with GPS tracking for real-time oversight, and our team is trained to handle containers with the utmost care, reducing the risk of damage throughout the journey."
            },
            {
            question: "Can you handle international shipping and customs compliance?",
            answer:
                "Yes, we specialize in both domestic and international shipping. Our extensive knowledge of international logistics and customs regulations allows us to manage and streamline customs compliance effectively, ensuring your containers are processed smoothly and without unnecessary delays or costs."
            },
            {
            question: "How do you manage logistics challenges in Sharjah’s dynamic market?",
            answer:
                "Our approach is to stay proactive and adaptable to tackle the challenges posed by Sharjah’s logistics landscape. We keep abreast of market trends and regulatory updates and employ innovative technology to optimize routes and schedules, keeping your supply chain resilient and efficient even in a dynamic environment."
            },
            {
            question: "What sets Open Yard Storage apart in container logistics transport?",
            answer:
                "What truly sets us apart is our dedication to customer satisfaction and our innovative use of technology in logistics. Our team’s industry expertise and our customized approach enable us to deliver unparalleled service, tailored to the unique needs of your business. This results in enhanced efficiency, cost savings, and reliable delivery of your goods."
            },
            {
            question: "How does real-time tracking benefit my logistics process?",
            answer:
                "Real-time tracking allows you to monitor your container's progress from the moment it leaves the origin until it reaches its destination. This transparency helps in managing expectations, planning operations better, and responding swiftly to any unforeseen circumstances, ultimately leading to a more controlled and efficient logistics process."
            },
            {
            question: "Do you offer logistics consulting services?",
            answer:
                "Yes, our logistics consulting services are designed to help businesses streamline their supply chain and optimize logistics operations. Our experts provide insights and strategies tailored to your company’s needs, ensuring cost containment, improved efficiency, and long-term success in your logistics endeavors."
            },
            {
            question: "How can I start using your container logistics services?",
            answer:
                "Getting started with Open Yard Storage is simple. You can contact our experienced team through our website or via phone to discuss your specific logistics needs. We’ll work closely with you to develop a comprehensive strategy tailored to your requirements, ensuring a smooth integration with your existing supply chain operations."
            },
            {
            question: "What industries do you serve with your logistics services?",
            answer:
                "We cater to a diverse range of industries including manufacturing, retail, automotive, and technology, among others. Our adaptable logistics solutions are designed to meet the distinct needs of each sector, ensuring reliability and efficiency for any business requiring container logistics transport in Sharjah."
            },
            {
            question: "How is your pricing structured for logistics services?",
            answer:
                "Our pricing is competitive and based on the specific logistics services you require. Factors such as the volume and frequency of shipments, as well as the complexity of your logistical needs, are considered during pricing. We ensure transparency and offer a detailed quote upon assessing your requirements, focusing on delivering value and efficiency."
            }
        ]}
        />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Logistics Operations?"
        buttonText="Contact Our Experts Today for a Custom Solution"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}