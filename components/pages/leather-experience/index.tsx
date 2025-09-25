import CareAndCleaning from "@/components/sections/careAndCleaning";
import HeroSection from "@/components/sections/hero-section";
import LatherCharacteristicsSection from "@/components/sections/leather-characteristics-section";
import LeatherHistorySection from "@/components/sections/leather-history-section";
import LeatherMeaningSection from "@/components/sections/leather-meaning-section";
import LeatherProductionProcessSection from "@/components/sections/leather-production-process-section";
import SustainabilitySection from "@/components/sections/sustainability-section";
import React from "react";

const LeatherExperienceComp = () => {
  return (
    <>
      <HeroSection />
      <LatherCharacteristicsSection />
      <LeatherHistorySection />
      <SustainabilitySection />
      <LeatherMeaningSection />
      <LeatherProductionProcessSection />
      <CareAndCleaning />
    </>
  );
};

export default LeatherExperienceComp;
