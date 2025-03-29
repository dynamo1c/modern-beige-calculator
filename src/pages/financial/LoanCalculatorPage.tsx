
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import LoanCalculator from "../../components/LoanCalculator";

const LoanCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Loan Calculator"
      description="Calculate your monthly loan payments with our easy-to-use loan calculator."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<LoanCalculator />}
    />
  );
};

export default LoanCalculatorPage;
