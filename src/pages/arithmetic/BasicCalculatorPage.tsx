
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import Calculator from "../../components/Calculator";

const BasicCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Basic Calculator"
      description="Perform basic arithmetic operations with our intuitive calculator."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<Calculator />}
    />
  );
};

export default BasicCalculatorPage;
