
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import TrigonometryCalculator from "../../components/TrigonometryCalculator";

const TrigonometryCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Trigonometry Calculator"
      description="Calculate sine, cosine, tangent and other trigonometric functions."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<TrigonometryCalculator />}
    />
  );
};

export default TrigonometryCalculatorPage;
