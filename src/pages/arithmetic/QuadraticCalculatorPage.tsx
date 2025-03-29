
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import QuadraticCalculator from "../../components/QuadraticCalculator";

const QuadraticCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Quadratic Equation Calculator"
      description="Solve quadratic equations and find the values of x."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<QuadraticCalculator />}
    />
  );
};

export default QuadraticCalculatorPage;
