
import React from "react";
import CalculatorPageTemplate from "../../components/CalculatorPageTemplate";
import ROICalculator from "../../components/ROICalculator";

const ROICalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="ROI Calculator"
      description="Calculate your Return on Investment (ROI) to measure profitability."
      backLink="/financial"
      backLinkText="Back to Financial Calculators"
      calculatorComponent={<ROICalculator />}
    />
  );
};

export default ROICalculatorPage;
