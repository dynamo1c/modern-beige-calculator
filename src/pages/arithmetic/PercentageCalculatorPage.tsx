
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import PercentageCalculator from "../../components/PercentageCalculator";

const PercentageCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Percentage Calculator"
      description="Calculate percentages easily with our percentage calculator."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<PercentageCalculator />}
    />
  );
};

export default PercentageCalculatorPage;
