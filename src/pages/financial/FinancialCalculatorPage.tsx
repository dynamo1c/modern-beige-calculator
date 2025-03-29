
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import FinancialCalculator from "../../components/FinancialCalculator";

const FinancialCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Financial Calculator"
      description="Calculate financial formulas and conversions with ease."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<FinancialCalculator />}
    />
  );
};

export default FinancialCalculatorPage;
