
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import AmortizationCalculator from "../../components/AmortizationCalculator";

const AmortizationCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Amortization Calculator"
      description="View a detailed amortization schedule for your loan or mortgage."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<AmortizationCalculator />}
    />
  );
};

export default AmortizationCalculatorPage;
