
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import MortgageCalculator from "../../components/MortgageCalculator";

const MortgageCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Mortgage Calculator"
      description="Calculate your monthly mortgage payments and view amortization schedule."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<MortgageCalculator />}
    />
  );
};

export default MortgageCalculatorPage;
