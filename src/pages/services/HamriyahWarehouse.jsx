import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import LeftalignedCards from "../../components/LeftalignedCards";
import CardsFeatures from "../../components/CardsFeatures";
import { FiMapPin, FiDollarSign, FiFileText, FiClock } from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function HamriyahWarehouse() {
  useMeta(
    "Hamriyah Free Zone Warehouse for Rent | Openyard Storage FZC",
    "Openyard Storage FZC offers a Hamriyah Free Zone warehouse for rent with flexible leasing, secure storage, and easy port access. Get a quote today!",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Transform Your Storage Needs with Seamless Solutions."
        title="Hamriyah Free Zone Warehouse for Rent"
        subtitle="OSS offers a Hamriyah Free Zone warehouse for rent with secure, duty-efficient storage near Hamriyah Port, helping trading companies, manufacturers, and import-export businesses streamline customs clearance and cargo movement efficiently."
        buttonText="Request a Hamriyah Free Zone Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />

      <TrustedSlider
        title="Used by Businesses Trading Through Hamriyah Free Zone"
        description="Companies renting a Hamriyah free zone warehouse from OSS include commodity trading firms, oil and gas support businesses, industrial equipment suppliers, and import-export operators handling regular customs-cleared shipments."
      />

      {/* PROBLEM SECTION */}
      <ChallengeSection
        // subtitle="Overcoming Storage Challenges, Together."
        title="Why Businesses Struggle When Choosing a Hamriyah Free Zone Warehouse for Rent"
        description="Businesses trading through Hamriyah Free Zone commonly run into four problems."
        // description2="At Open Yard Storage, we alleviate these pain points by offering straightforward, affordable, and customizable rental solutions tailored to your business needs."
        rightTitle="Problem Statement"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Storage located too far from customs points",
            text: "Warehousing outside the free zone adds transfer time between customs clearance and inventory storage.",
          },
          {
            icon: FiDollarSign,
            title: "Non-duty-efficient facilities",
            text: "Standard commercial warehouses don't offer the duty suspension advantages available inside a free zone.",
          },
          {
            icon: FiFileText,
            title: "Rigid lease structures",
            text: "Many providers require long-term commitments that don't suit fluctuating import-export volumes.",
          },
          {
            icon: FiMapPin,
            title: "Limited visibility into customs-cleared stock",
            text: "Manual tracking makes it difficult to confirm which inventory has cleared duty processing.",
          },
        ]}
      />
      <LeftalignedCards
        // eyebrow="The OSS Difference "
        title="Simplifying Free Zone Storage Challenges"
        subtitle="OSS addresses each of these through its Hamriyah free zone warehouse"
        // description="What businesses get from renting small storage with OSS:"
        features={[
          {
            image: "/images/services/pin.png",
            title: "Proximity to customs points ",
            description:
              "storage sits close to Hamriyah Port and its free zone, reducing transfer time after clearance.",
          },
          {
            image: "/images/services/offer.png",
            title: "Duty-efficient storage ",
            description:
              "a Hamriyah free zone warehouse supports tax suspension and simplified customs processing.",
          },
          {
            image: "/images/services/insurance.png",
            title: "Flexible lease terms ",
            description:
              "monthly and multi-year options fit both steady and fluctuating trade volumes.",
          },
          {
            image: "/images/services/online-test.png",
            title: "WMS digital tracking ",
            description:
              "real-time visibility into stock status, including customs-cleared inventory.",
          },
        ]}
      />
      {/* SOLUTIONS */}
      <FeatureSection
        eyebrow="The OSS Difference "
        title="Hamriyah Free Zone Warehouse for Rent with Enterprise-Grade Infrastructure"
        subtitle="OSS operates a Hamriyah free zone warehouse that includes the same security, tracking, and facility standards used across its wider Sharjah storage network. Businesses trading through the free zone don't have to choose between customs efficiency and warehouse quality.
Every Hamriyah free zone warehouse through OSS is set up around cargo type, trade volume, and customs processing needs, so businesses get storage that matches how their shipments actually move.
"
        description="What businesses get from renting free zone warehouse space with OSS:"
        features={[
          {
            image: "/images/services/tracking.png",
            title: "Barcode and RFID Tracking",
            description:
              "Inventory is logged at each handling point, including customs-cleared stock.",
          },
          {
            image: "/images/industries/protection.png",
            title: "24/7 Security",
            description:
              "CCTV monitoring, biometric access, and civil defense-approved fire suppression.",
          },
          {
            image: "/images/services/track.png",
            title: "Highway Access",
            description:
              "Proximity to the E311 and E611 corridors supports fast distribution beyond the free zone.",
          },
          {
            image: "/images/services/logistic.png",
            title: "Trained Logistics Staff",
            description:
              "Coordinators manage transfers between customs clearance and warehouse storage.",
          },
          {
            image: "/icons/Real-time.png",
            title: "End-to-End Coordination",
            description:
              "Inbound port and customs processing connects directly to outbound delivery.",
          },
        ]}
      />

      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Hamriyah Free Zone Warehouse Rental Options"
        services={[
          {
            title: "Duty-Efficient Warehousing",
            image: "/images/services/duty-efficient-warehouse.jpg",
            description:
              "A Hamriyah free zone warehouse for rent built to support duty suspension and simplified customs handling.",
          },
          {
            title: "Short-Term and Long-Term Rental",
            image: "/images/services/short-term.jpg",
            description:
              "Monthly and multi-year lease options to match fluctuating or steady trade volumes.",
          },
          {
            title: "Open Yard Storage",
            image: "/images/services/open-yard.jpg",
            description:
              "Outdoor space for heavy equipment, pipes, and industrial materials tied to free zone trade.",
          },
          {
            title: "Cross-Docking and Customs Coordination",
            image: "/images/services/cross-docking.jpg",
            description:
              "Cargo moves from customs clearance directly to outbound delivery, reducing handling time.",
          },
          {
            title: "Inventory Tracking for Free Zone Stock",
            image: "/images/services/security.jpg",
            description:
              "WMS-based tracking to confirm customs status and stock location in real time.",
          },
          {
            title: "Pallet-Level Storage",
            image: "/images/services/pallet.jpg",
            description:
              "Rent by pallet position for businesses that don't need a full free zone warehouse unit.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Storage Solutions by Industry Section"
        title="Hamriyah Free Zone Warehouse Across Five Business Sectors"
        features={[
          {
            image: "/images/locations/oil.png",
            title: "Oil and Gas Support ",
            description:
              "open yard storage for pipes, equipment, and industrial materials moving through the free zone.",
          },
          {
            image: "/images/services/truck.png",
            title: "General Trading and Import-Export",
            description:
              "duty-efficient storage supports fast-moving international shipments.",
          },
          {
            image: "/images/locations/factory.png",
            title: "Industrial Manufacturing ",
            description:
              "raw materials and machinery are staged close to customs and port access.",
          },
          {
            image: "/images/locations/shipped.png",
            title: "Construction and Infrastructure ",
            description:
              "heavy materials move efficiently between the free zone and project sites.",
          },
          {
            image: "/images/services/small.png",
            title: "FMCG Distribution ",
            description:
              "a Hamriyah free zone warehouse supports faster inventory replenishment cycles.",
          },
        ]}
      />

      <FeatureSection
        // eyebrow="The OSS FZC Difference"
        title="Free Zone Advantages for Hamriyah Trade"
        description="Businesses trading internationally through Hamriyah need storage that keeps pace with customs and duty processing. A Hamriyah free zone warehouse through OSS gives trading firms tax-efficient storage, duty suspension options, and simplified clearance close to the port itself."
      />

      <StatsSection
        title="Strategically Located for Efficient Storage"
        subtitle="Secure warehousing with flexible leasing and easy access to key transport routes."
        stats={[
          {
            value: 8,
            unit: "km",
            label: "Distance from Hamriyah Port",
            description: "Approximately a 13–15 minute drive.",
          },
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Footprint",
            description: "Across the OSS facility network.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Enterprise Client Base",
            description: "Active manufacturing, trading, and retail clients.",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Facility Security",
            description: "Video surveillance with automated fire suppression.",
          },
          {
            value: 2,
            unit: "Lease Options",
            label: "Lease Flexibility",
            description: "Monthly and multi-year rental options available.",
          },
        ]}
      />

      {/* ABOUT + TEAM */}
      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle: "Free Zone Storage Experience Near Hamriyah Port",
            description:
              "OSS has operated as a storage and logistics provider in Sharjah since 2006, offering a Hamriyah free zone warehouse to support businesses trading through the port and its surrounding customs zone. OSS invests in facility infrastructure, digital tracking systems, and trained staff to keep free zone logistics efficient. \n\n Clients renting free zone warehouse space from OSS get dedicated account management, flexible contracts, and a logistics team focused on keeping customs-cleared cargo moving without delay.",
          },
          {
            title: "Our Team",
            subtitle: "Staff Managing Free Zone Cargo Transfers",
            description:
              "OSS storage operations near Hamriyah Free Zone are run by warehouse technicians, dispatch coordinators, and inventory analysts who manage customs coordination, storage placement, and outbound delivery scheduling.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Hamriyah Free Zone Warehouse Rental"
        faqs={[
          {
            question:
              "What is a Hamriyah free zone warehouse for rent used for?",
            answer:
              "It provides duty-efficient storage for businesses trading through Hamriyah Free Zone, allowing cargo to move from customs clearance to storage without added transfer delays.",
          },
          {
            question: "How close is the free zone warehouse to Hamriyah Port?",
            answer:
              "OSS storage is 8km from Hamriyah Port, about a 13-minute drive, keeping transfer times short between the port and warehouse.",
          },
          {
            question:
              "What is the minimum lease term for a Hamriyah free zone warehouse?",
            answer:
              "OSS offers monthly short-term rentals alongside multi-year contracts, so businesses aren't locked into long leases for fluctuating trade volumes.",
          },
          {
            question:
              "What cargo types can be stored in the free zone warehouse?",
            answer:
              "OSS stores general trading commodities, industrial equipment, pipes, machinery, and palletized cargo. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question:
              "Does renting free zone warehouse space reduce customs delays?",
            answer:
              "Yes. Proximity to Hamriyah's customs points and free zone processing simplifies clearance compared to storage located farther away.",
          },
          {
            question:
              "What security measures apply to the free zone warehouse?",
            answer:
              "All units include 24/7 video monitoring, alarm systems, biometric and card-controlled access, and civil defense-approved fire suppression.",
          },
          {
            question:
              "Can businesses scale their free zone storage as trade volume changes?",
            answer:
              "Yes. Businesses can adjust storage footprint or move into larger space within the same facility network as import-export volume changes.",
          },
          {
            question:
              "How is inventory tracked in the Hamriyah free zone warehouse?",
            answer:
              "A cloud-based WMS logs every item by barcode, giving clients visibility into stock status, including customs clearance stage.",
          },
          {
            question:
              "What industries most commonly rent Hamriyah free zone warehouse space?",
            answer:
              "Oil and gas support, general trading, industrial manufacturing, construction, and FMCG distribution businesses are the primary users.",
          },
          {
            question:
              "What operational standards apply to the Hamriyah free zone warehouse?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined health and safety protocols, and routine facility checks.",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Rent Warehouse Space Built for Free Zone Trade"
        description="Whether you need short-term or long-term storage, a Hamriyah free zone warehouse for rent through OSS gives your business duty-efficient space close to the port. Contact the OSS team for a storage layout and quote."
        buttonText="Contact OSS for a Hamriyah Free Zone Warehouse Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
