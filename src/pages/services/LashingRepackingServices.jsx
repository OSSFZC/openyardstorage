import InnerHero from "../../components/InnerHero";
import TrustedSlider from "../../components/TrustedSlider";
import FeatureSection from "../../components/FeatureSection";
import ServiceGridSection from "../../components/ServiceGridSection";
import CTASection from "../../components/CTASection";

import useMeta from "../../hooks/useMeta";

export default function LashingRepackingServices() {
  useMeta(
    "Cargo Lashing & Repacking Services | OSS FZC",
    "OSS Logistics provides professional cargo lashing, securing and repacking services to keep your cargo protected and ready for safe transportation or storage.",
  );

  return (
    <>
      {/* HERO */}
      <InnerHero
        title="Secure Lashing & Professional Repacking Services"
        buttonText="Contact Us"
        buttonLink="/contact-us"
        backgroundImage="/images/services/lashing-repacking.webp"
        backgroundImageAlt="Workers securing heavy oversized cargo with orange lashing straps on a flatbed at the port"
      />

      <TrustedSlider />

      {/* ABOUT */}
      <FeatureSection
        title="Secure Lashing & Professional Repacking Services"
        subtitle="At OSS Logistics, we provide reliable lashing and repacking services to ensure your cargo is properly secured, protected, and ready for safe transportation or storage."
        description="Our experienced team handles cargo of different sizes and types, using suitable lashing and packing methods to minimize movement, damage, and handling risks during transit."
      />

      {/* SERVICES */}
      <ServiceGridSection
        title="Our services include"
        services={[
          {
            title: "Professional cargo lashing and securing",
            image: "/images/services/cargo-lashing-securing.png",
            alt: "OSS Logistics team lashing a wooden crate onto a flatbed truck and wrapping machinery on a pallet",
          },
          {
            title: "Repacking and re-packing of cargo",
            image: "/images/services/secure.jpg",
            alt: "Warehouse team checking packed cartons on shelves",
          },
          {
            title: "Container stuffing and cargo arrangement",
            image: "/images/services/container-cross-stuffing.jpeg",
            alt: "Forklift loading cartons into a shipping container at the port",
          },
          {
            title: "Protection of heavy, oversized, and delicate cargo",
            image: "/images/services/pallet.jpg",
            alt: "Wrapped palletized cargo stored on warehouse racking",
          },
          {
            title: "Secure preparation for transportation and storage",
            image: "/images/services/warehousing.jpeg",
            alt: "Palletized cargo prepared for dispatch in a warehouse",
          },
        ]}
      />

      {/* CTA */}
      <CTASection
        title="Secure Your Cargo with OSS Logistics"
        description="With proper packing and secure lashing, we help ensure your cargo reaches its destination safely and in good condition."
        buttonText="Contact Us"
        buttonLink="/contact-us"
        backgroundImage="/images/services/Explore-More.jpg"
      />
    </>
  );
}
