
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import PrimeNumberCalculator from "../../components/PrimeNumberCalculator";

const PrimeNumberCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Prime Number Calculator"
      description="Check if a number is prime and find prime numbers in a range."
      backLink="/arithmetic"
      backLinkText="Back to Arithmetic Calculators"
      calculatorComponent={<PrimeNumberCalculator />}
    />
  );
};

export default PrimeNumberCalculatorPage;
