import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import BMICalculator from "../../components/BMICalculator";

const BMICalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="BMI Calculator"
      description="Calculate your Body Mass Index (BMI) with gender-specific measurements and recommendations."
      backLink="/health"
      backLinkText="Back to Health Calculators"
      calculatorComponent={<BMICalculator />}
    />
  );
};

export default BMICalculatorPage; 