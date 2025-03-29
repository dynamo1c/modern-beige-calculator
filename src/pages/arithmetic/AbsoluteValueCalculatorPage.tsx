
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import AbsoluteValueCalculator from "../../components/AbsoluteValueCalculator";

const AbsoluteValueCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Absolute Value Calculator"
      description="Calculate the absolute value of any number quickly and easily."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<AbsoluteValueCalculator />}
    />
  );
};

export default AbsoluteValueCalculatorPage;
