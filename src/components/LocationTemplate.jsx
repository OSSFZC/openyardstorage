import InnerHero from "./InnerHero";
import TrustedSlider from "./TrustedSlider";
import ChallengeSection from "./ChallengeSection";
import FeatureSection from "./FeatureSection";
import ServiceGridSection from "./ServiceGridSection";
import StatsSection from "./StatsSection";
import DualInfoSection from "./DualInfoSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import useMeta from "../hooks/useMeta";
import CardsFeatures from "./CardsFeatures";
import LeftalignedCards from "./LeftalignedCards";

export default function LocationTemplate({ data }) {
  useMeta(data.metaTitle, data.metaDescription);

  return (
    <>
      <InnerHero
        eyebrow={data.hero.eyebrow}
        subtitle={data.hero.subtitle}
        buttonText={data.hero.buttonText}
        buttonLink={data.hero.buttonLink}
        backgroundImage={data.hero.backgroundImage}
        title={data.hero.title}
      />

      <TrustedSlider {...data.trustedSlider} />

      <ChallengeSection {...data.challenge} />

      {/*key benefits section*/}
      {data.keyBenefits && <LeftalignedCards {...data.keyBenefits} />}

      <FeatureSection {...data.features} />

      <ServiceGridSection {...data.services} />

      {/* /Solutions Section */}
      {data.solutions && (
        <CardsFeatures
          {...data.solutions}
          features={data.solutions.features || data.solutions.solutions || []}
        />
      )}

      {/* /Free Zone Storage Section */}
      <FeatureSection {...data.FreeZoneStorage} />

      <StatsSection {...data.stats} />

      <DualInfoSection items={data.about} />

      <FAQSection {...data.faq} />

      <CTASection {...data.cta} />
    </>
  );
}
