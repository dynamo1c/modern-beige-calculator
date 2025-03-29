
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import CompoundInterestCalculator from "../../components/CompoundInterestCalculator";

const CompoundInterestCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Compound Interest Calculator"
      description="Calculate how your investments grow over time with compound interest."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<CompoundInterestCalculator />}
    />
  );
};

export default CompoundInterestCalculatorPage;
