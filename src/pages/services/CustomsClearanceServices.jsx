import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import ChallengeSection from "../../components/ChallengeSection";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import StatsSection from "../../components/StatsSection";
import DualInfoSection from "../../components/DualInfoSection";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import CardsFeatures from "../../components/CardsFeatures";
import LeftalignedCards from "../../components/LeftAlignedCards";
import {
  FiClock,
  FiMessageSquare,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

import useMeta from "../../hooks/useMeta";

export default function CustomsClearanceServices() {
  useMeta(
    "Customs Clearance Services | OSS FZC",
    "OSS FZC delivers fast, reliable customs clearance solutions tailored to your import and export logistics needs across the UAE.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        eyebrow="Streamlining Success in Forwarding Freight Companies"
        title="Customs Clearance Services"
        subtitle="At OSS Logistics, we provide fast, reliable, and hassle-free customs clearance solutions for import and export shipments across the UAE. Our experienced team ensures that your cargo complies with all customs regulations, minimizing delays and keeping your supply chain moving efficiently. Whether your shipment arrives by sea, air, or land, we manage the entire customs clearance process with accuracy and professionalism."
        buttonText="Request a Freight Forwarding Quote"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
      <TrustedSlider />
      {/* <ChallengeSection
        // subtitle="Facing Freight Management Challenges?"
        title="Why Forwarding Freight Companies Need a Coordinated Storage Partner"
        description="Forwarding freight operating without a dedicated storage partner commonly face four problems:"
        // description2="OSS FZC simplifies logistics management with structured processes and smart coordination tools that ensure timely deliveries and seamless supply chain management."
        rightTitle="Solutions at Your Fingertips"
        rightBg="#C5F7FF"
        cards={[
          {
            icon: FiClock,
            title: "Disconnected Storage and Freight Booking",
            text: "Coordinating separate warehousing and freight providers adds delays before client cargo reaches the port or airport.",
          },
          {
            icon: FiMessageSquare,
            title: "Inconsistent Dispatch Scheduling",
            text: "Ad hoc bookings without a fixed storage partner lead to unpredictable loading and departure windows.",
          },
          {
            icon: FiDollarSign,
            title: "Complex Customs and Documentation",
            text: "Forwarded shipments require accurate paperwork, and errors at the port cause costly delays for downstream clients.",
          },
          {
            icon: FiUsers,
            title: "Limited Visibility Once Cargo Leaves Storage",
            text: "Forwarders lose track of shipment status once freight moves out of the warehouse, making client updates harder to manage.",
          },
        ]}
      /> */}
      {/* <LeftalignedCards
        title="End-to-End Freight Management Made Simple"
        description="OSS addresses each of these directly:"
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Combined storage and freight dispatch",
            description:
              "inventory is stored and dispatched under a single coordinated service.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Reliable dispatch scheduling",
            description:
              "dedicated freight coordination reduces the unpredictability of ad hoc bookings.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Documentation support",
            description:
              "export paperwork and customs requirements are managed as part of the shipping process.",
          },
          {
            image: "/icons/cost.png",
            title: "End-to-end tracking",
            description:
              "shipment status is visible from Sharjah storage through arrival at the destination.",
          },
        ]}
      /> */}
      {/* SOLUTIONS */}
      {/* <FeatureSection
        eyebrow="The OSS Difference "
        title="Storage Built Around the Needs of Forwarding Freight Companies"
        subtitle="OSS operates a warehousing network built to support forwarding freight, so client cargo doesn't need to move between unrelated storage and freight vendors before dispatch. Inventory can move from an OSS warehouse straight into sea or air freight without added transfer delays.

Every storage contract through OSS is structured around cargo type, shipment frequency, and destination, giving forwarding freight a faster path from storage to dispatch than working with disconnected vendors. This matters most for operators managing multiple client accounts, where consistent handling and scheduling directly affect delivery reliability and client trust."
        description="What forwarding freight get from OSS's storage and freight coordination:"
        features={[
          {
            image: "/icons/Real-time.png",
            title: "Barcode and RFID tracking",
            description:
              "cargo status is logged at each handling point, from warehouse storage through dispatch.",
          },
          {
            image: "/icons/timely-Delivery.png",
            title: "Trained freight coordinators",
            description:
              "staff manage documentation, loading, and dispatch scheduling for consolidated shipments.",
          },
          {
            image: "/icons/Regulatory-exper.png",
            title: "Port and airport connectivity",
            description:
              "direct access to major transport corridors supports fast transfer from storage to departure points.",
          },
          {
            image: "/icons/Real-time.png",
            title: "Flexible shipment sizes",
            description:
              "small parcels and full pallet-level cargo are both supported.",
          },
          {
            image: "/icons/cost.png",
            title: "Consolidated warehousing and dispatch",
            description:
              "storage and freight are managed under a single contract.",
          },
        ]}
      /> */}
      {/* SERVICES */}
      <ServiceGridSection
        eyebrow="Our Services"
        title="Customs Clearance Services"
        services={[
          {
            title: "Import & Export Customs Clearance",
            image: "/images/services/import-export-customs.jpg",
            description:
              "Efficient customs clearance support for import and export shipments across the UAE.",
          },
          {
            title: "Free Zone & Mainland Customs Documentation",
            image: "/images/services/freezone-mainland.jpg",
            description:
              "Accurate documentation support for shipments moving through UAE free zones and mainland customs.",
          },
          {
            title: "Bill of Entry (BOE) Processing",
            image: "/images/services/bill-of-entry.jpg",
            description:
              "Professional BOE processing to support accurate customs declarations and efficient cargo clearance.",
          },
          {
            title: "Duty & Tax Coordination",
            image: "/images/services/duty-tax-coordination.jpg",
            description:
              "Clear coordination of applicable customs duties and taxes to help keep shipments moving without unnecessary delays.",
          },
          {
            title: "Customs Inspection Support",
            image: "/images/services/customs-inspection.jpg",
            description:
              "Support throughout customs inspections to help ensure cargo and documentation meet clearance requirements.",
          },
          {
            title: "Transit & Re-export Clearance",
            image: "/images/services/transit-reexport.jpg",
            description:
              "Clearance coordination for transit shipments and re-export cargo moving through the UAE.",
          },
          {
            title: "Temporary Import & Export Documentation",
            image: "/images/services/temporary-import-export.jpg",
            description:
              "Documentation assistance for shipments entering or leaving the UAE under temporary import and export arrangements.",
          },
          {
            title: "HS Code Classification Assistance",
            image: "/images/services/hs-code-classfication.jpg",
            description:
              "Classification assistance to help businesses identify the appropriate HS codes for their cargo.",
          },
          {
            title: "Cargo Release & Delivery Coordination",
            image: "/images/services/cargo-release.jpg",
            description:
              "Coordination from customs release through final delivery, connecting clearance with transportation and logistics support.",
          },
        ]}
      />
      <CardsFeatures
        eyebrow="Why Choose OSS Logistics?"
        title="Reliable Customs Clearance Support"
        features={[
          {
            image: "/images/services/professional-services.png",
            title: "Experienced Customs Clearance Specialists",
            description:
              "Experienced professionals manage customs procedures with accuracy and attention to compliance requirements.",
          },
          {
            image: "/images/services/data-processing.png",
            title: "Quick Documentation and Processing",
            description:
              "Efficient documentation and processing help reduce unnecessary delays and keep cargo moving.",
          },
          {
            image: "/images/services/rule.png",
            title: "Strong Knowledge of UAE Customs Regulations",
            description:
              "In-depth knowledge of UAE customs requirements supports compliant and efficient shipment clearance.",
          },
          {
            image: "/images/services/transportation.png",
            title:
              "Clearance Support for All Major UAE Ports, Airports, and Free Zones",
            description:
              "Customs clearance support is available across major UAE logistics gateways and free zone locations.",
          },
          {
            image: "/images/services/support.png",
            title: "Transparent Communication and Timely Updates",
            description:
              "Clear communication keeps clients informed throughout the customs clearance process.",
          },
          {
            image: "/icons/Real-time.png",
            title:
              "End-to-End Logistics Support, Including Transportation and Storage",
            description:
              "Customs clearance connects with transportation and storage services for a coordinated logistics process.",
          },
        ]}
      />
      {/*       
      <FeatureSection
        eyebrow="Free Zone Storage "
        title="Free Zone Access Supporting Forwarding Freight"
        description="Forwarding freight moving client cargo internationally needs customs processing that moves as fast as their freight. OSS storage sits close to the SAIF Zone and Hamriyah Free Zone, giving forwarders duty-efficient handling built directly into the storage and dispatch process rather than managed as a separate step."
      />
      {/* STATS */}
      {/* <StatsSection
        title="Proven Success in Numbers"
        subtitle="Demonstrating Our Impact in Freight Forwarding"
        stats={[
          {
            value: 260000,
            suffix: "+",
            unit: "sq ft",
            label: "Total Managed Footprint",
            description: "Of storage capacity.",
          },
          {
            value: 140,
            suffix: "+",
            unit: "Clients",
            label: "Enterprise Client Base",
            description:
              "Active manufacturing, trading, and forwarding clients.",
          },
          {
            value: 12000,
            suffix: "+",
            unit: "Pallets",
            label: "Monthly Freight Throughput",
            description: "Processed and dispatched monthly.",
          },
          {
            value: 24,
            suffix: "/7",
            label: "Facility Security",
            description: "Video surveillance with automated fire suppression.",
          },
          {
            value: 2,
            unit: "Modes",
            label: "Route Coverage",
            description:
              "Sea and air freight lanes connecting Sharjah to regional and global destinations.",
          },
        ]}
      />

      <DualInfoSection
        items={[
          {
            title: "About Us",
            subtitle:
              "Storage and Freight Experience Built for Forwarding Freight",
            description:
              "OSS has operated as a storage and logistics provider in the UAE since 2006, developing warehousing capabilities that support forwarding freight alongside its wider sea and air freight services. Fast documentation turnaround, warehouse-to-port coordination, and destination-specific handling are built into how OSS structures every shipment for its forwarding clients. Forwarding freight using OSS for storage in Sharjah gets dedicated account management, flexible scheduling, and a logistics team experienced in coordinating consolidated cargo movement across multiple destination countries.",
          },
          {
            title: "Our Team",
            subtitle:
              "Staff Coordinating Storage and Dispatch for Forwarding Companies",
            description:
              "OSS storage operations for forwarding freight are run by dispatch coordinators, documentation specialists, and warehouse technicians who manage export paperwork, loading, and scheduling for cargo moving through Sharjah's ports and airports.",
          },
        ]}
      />

      <FAQSection
        eyebrow="FAQ"
        title="Common Questions About Storage for Forwarding Freight "
        faqs={[
          {
            question: "Does OSS offer storage support for forwarding freight?",
            answer:
              "Yes. OSS coordinates warehousing alongside its wider sea and air freight services, giving forwarding freight a single partner for storage and dispatch.",
          },
          {
            question:
              "What documentation support is included in the forwarding and shipping process?",
            answer:
              "Export paperwork and customs clearance coordination are built into the service, reducing the risk of delays at the port or airport.",
          },
          {
            question:
              "Can forwarding freight companies combine sea and air freight for the same client shipment?",
            answer:
              "Yes. Bulk cargo can move by sea while urgent portions move by air, under the same provider.",
          },
          {
            question:
              "Does OSS support cargo consolidation for forwarding freight?",
            answer:
              "Yes. OSS provides warehousing that forwarding freight use to consolidate multi-client cargo before onward dispatch.",
          },
          {
            question: "What cargo types can be stored and shipped through OSS?",
            answer:
              "OSS stores and ships general trading commodities, industrial components, and palletized commercial goods. Non-hazardous cargo follows standard handling; specialized items follow separate safety procedures.",
          },
          {
            question: "How is cargo tracked once it leaves storage?",
            answer:
              "A digital tracking system provides visibility into shipment status from storage through arrival at the destination, which forwarders can pass on to their own clients.",
          },
          {
            question:
              "What are the contract terms for forwarding freight company clients?",
            answer:
              "OSS offers monthly short-term agreements for occasional shipments and multi-year contracts for businesses with recurring storage and freight needs.",
          },
          {
            question:
              "Does OSS support free zone coordination for forwarding freight?",
            answer:
              "Yes. Storage near the SAIF Zone and Hamriyah Free Zone supports duty-efficient handling as part of the storage and shipping process.",
          },
          {
            question:
              "Can storage capacity scale for forwarding freight with seasonal demand?",
            answer:
              "Yes. Capacity adjusts to shipment volume, supporting forwarding freight through both steady and high-demand periods.",
          },
          {
            question:
              "What operational standards does OSS follow for storage and freight forwarding support?",
            answer:
              "OSS follows international supply chain safety standards, using certified equipment operators, defined documentation protocols, and routine facility checks.",
          },
        ]}
      /> */}
      {/* CTA */}
      <CTASection
        title="Move Your Cargo Through Customs with Confidence"
        description="At OSS Logistics, we are committed to delivering efficient customs clearance services that help your shipments move smoothly while ensuring full compliance with UAE customs requirements."
        buttonText="Request Customs Clearance Support."
        buttonLink="/contact-us"
        backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
      />
    </>
  );
}
