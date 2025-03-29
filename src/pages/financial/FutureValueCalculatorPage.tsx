
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import FutureValueCalculator from "../../components/FutureValueCalculator";

const FutureValueCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Future Value Calculator"
      description="Calculate the future value of your investments or savings over time."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<FutureValueCalculator />}
    />
  );
};

export default FutureValueCalculatorPage;
