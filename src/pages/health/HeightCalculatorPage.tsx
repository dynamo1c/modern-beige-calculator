
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import HeightCalculator from "../../components/HeightCalculator";

const HeightCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Height Calculator"
      description="Convert between different height units and calculate ideal height range."
      backLink="/health"
      backLinkText="Back to Health Calculators"
      calculatorComponent={<HeightCalculator />}
    />
  );
};

export default HeightCalculatorPage;
