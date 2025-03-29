
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import GSTCalculator from "../../components/GSTCalculator";

const GSTCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="GST Calculator"
      description="Calculate Goods and Services Tax (GST) for your products and services."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<GSTCalculator />}
    />
  );
};

export default GSTCalculatorPage;
