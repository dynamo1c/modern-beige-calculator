
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import InflationCalculator from "../../components/InflationCalculator";

const InflationCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Inflation Calculator"
      description="Calculate how inflation affects the purchasing power of your money."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<InflationCalculator />}
    />
  );
};

export default InflationCalculatorPage;
