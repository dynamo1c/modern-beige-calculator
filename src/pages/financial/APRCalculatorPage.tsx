
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import APRCalculator from "../../components/APRCalculator";

const APRCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="APR Calculator"
      description="Calculate the Annual Percentage Rate (APR) for loans including all fees."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<APRCalculator />}
    />
  );
};

export default APRCalculatorPage;
