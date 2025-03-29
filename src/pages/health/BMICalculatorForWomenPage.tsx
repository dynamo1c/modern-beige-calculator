
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import BMICalculatorForWomen from "../../components/BMICalculatorForWomen";

const BMICalculatorForWomenPage = () => {
  return (
    <CalculatorPageTemplate
      title="BMI Calculator for Women"
      description="Calculate your Body Mass Index (BMI) with our specialized calculator for women."
      backLink="/health"
      backLinkText="Back to Health Calculators"
      calculatorComponent={<BMICalculatorForWomen />}
    />
  );
};

export default BMICalculatorForWomenPage;
