import React from "react";
import MainSection from "./mainSection";
import FinProtocol from "./finProtocol";
import KeyFeatures from "./keyFeatures";
import Team from "./team";
import RoadMap from "./roadMap";
import Faq from "./faq";
import OverVision from "./overVision";
import TokenMetrics from "./tokenMetrics";

const Index = () => {
  return (
    <>
      <MainSection />
      <div className="three-banner-bg-image">
        <FinProtocol />
        <KeyFeatures />
      </div>
      <OverVision />
      <TokenMetrics />
      <RoadMap />
      <Faq />
      <Team />
    </>
  );
};

export default Index;
