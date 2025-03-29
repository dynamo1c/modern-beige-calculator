
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import PresentValueCalculator from "../../components/PresentValueCalculator";

const PresentValueCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Present Value Calculator"
      description="Calculate how much a future sum of money is worth today."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<PresentValueCalculator />}
    />
  );
};

export default PresentValueCalculatorPage;
