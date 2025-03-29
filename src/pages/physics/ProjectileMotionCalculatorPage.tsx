
import React from "react";
import CalculatorPageTemplate from "@/components/CalculatorPageTemplate";
import ProjectileMotionCalculator from "@/components/physics/ProjectileMotionCalculator";

const ProjectileMotionCalculatorPage = () => {
  return (
    <CalculatorPageTemplate
      title="Projectile Motion Calculator"
      description="Calculate the trajectory, range, and maximum height of a projectile launched at an angle."
      backLink="/physics"
      backLinkText="Back to Physics Calculators"
      calculatorComponent={<ProjectileMotionCalculator />}
    />
  );
};

export default ProjectileMotionCalculatorPage;
