
import React from "react";
import PhysicsCalculatorTemplate from "./PhysicsCalculatorTemplate";

const VelocityCalculator = () => {
  const calculate = (values: Record<string, number>) => {
    const { distance, time } = values;
    const velocity = distance / time;
    return { velocity };
  };

  return (
    <PhysicsCalculatorTemplate
      title="Velocity Calculator"
      description="Calculate the velocity of an object based on distance traveled and time."
      inputs={[
        {
          id: "distance",
          label: "Distance",
          placeholder: "Enter distance",
          unit: "m"
        },
        {
          id: "time",
          label: "Time",
          placeholder: "Enter time",
          unit: "s"
        }
      ]}
      calculate={calculate}
      results={[
        {
          id: "velocity",
          label: "Velocity",
          unit: "m/s"
        }
      ]}
    />
  );
};

export default VelocityCalculator;
