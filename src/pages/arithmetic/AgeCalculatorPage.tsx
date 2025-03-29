
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import AgeCalculator from "../../components/AgeCalculator";

const AgeCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Age Calculator"
      description="Calculate exact age in years, months, and days between two dates."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<AgeCalculator />}
    />
  );
};

export default AgeCalculatorPage;
