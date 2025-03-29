
import React from "react";
import CalculatorPageTemplate from "@/components/CalculatorPageTemplate";
import FreeFallCalculator from "@/components/physics/FreeFallCalculator";

const FreeFallCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Free Fall Calculator"
      description="Calculate the motion of an object in free fall under the influence of gravity."
      backLink="/physics"
      backLinkText="Back to Physics Calculators"
      calculatorComponent={<FreeFallCalculator />}
    />
  );
};

export default FreeFallCalculatorPage;
