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

export default function IndustryTemplate({ data }) {

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

      <TrustedSlider />

      <ChallengeSection {...data.challenge} />

      <LeftalignedCards {...data.leftAlignedCards} />

      <FeatureSection {...data.features} />

      <ServiceGridSection {...data.services} />

      {/* /Free Zone Storage Section */}
      <FeatureSection {...data.FreeZoneStorage} />

      <CardsFeatures {...data.cardsFeature} />

      <StatsSection {...data.stats} />

      <DualInfoSection items={data.about} />

      <FAQSection {...data.faq} />

      <CTASection {...data.cta} />
    </>
  );
}