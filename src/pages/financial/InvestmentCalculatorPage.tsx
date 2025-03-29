
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import InvestmentCalculator from "../../components/InvestmentCalculator";

const InvestmentCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Investment Calculator"
      description="Plan your investments and calculate returns with our investment calculator."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<InvestmentCalculator />}
    />
  );
};

export default InvestmentCalculatorPage;
