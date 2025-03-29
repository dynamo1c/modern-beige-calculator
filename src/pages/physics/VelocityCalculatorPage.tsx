
import React from "react";
import CalculatorPageTemplate from "@/components/CalculatorPageTemplate";
import VelocityCalculator from "@/components/physics/VelocityCalculator";

const VelocityCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Velocity Calculator"
      description="Calculate the velocity of an object based on the distance traveled and the time taken."
      backLink="/physics"
      backLinkText="Back to Physics Calculators"
      calculatorComponent={<VelocityCalculator />}
    />
  );
};

export default VelocityCalculatorPage;
