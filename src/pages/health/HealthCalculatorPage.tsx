
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import HealthCalculator from "../../components/HealthCalculator";

const HealthCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Health Calculator"
      description="Monitor your health metrics with our specialized health calculator."
      backLink="/health"
      backLinkText="Back to Health Calculators"
      calculatorComponent={<HealthCalculator />}
    />
  );
};

export default HealthCalculatorPage;
