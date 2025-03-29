
import React from "react";
import PhysicsCalculatorTemplate from "./PhysicsCalculatorTemplate";

const FreeFallCalculator = () => {
  const calculate = (values: Record<string, number>) => {
    const { initialHeight, initialVelocity, time } = values;
    const g = 9.81; // Acceleration due to gravity in m/s²
    
    // Calculate distance fallen: h = h₀ + v₀t - 0.5gt²
    const height = initialHeight + (initialVelocity * time) - (0.5 * g * time * time);
    
    // Calculate final velocity: v = v₀ - gt
    const finalVelocity = initialVelocity - (g * time);
    
    return { 
      height: Math.max(0, height).toFixed(2),
      finalVelocity: finalVelocity.toFixed(2) 
    };
  };

  return (
    <PhysicsCalculatorTemplate
      title="Free Fall Calculator"
      description="Calculate the motion of an object falling freely under the influence of gravity."
      inputs={[
        {
          id: "initialHeight",
          label: "Initial Height",
          placeholder: "Enter initial height",
          unit: "m"
        },
        {
          id: "initialVelocity",
          label: "Initial Velocity",
          placeholder: "Enter initial vertical velocity (downward negative)",
          unit: "m/s"
        },
        {
          id: "time",
          label: "Time",
          placeholder: "Enter time of fall",
          unit: "s"
        }
      ]}
      calculate={calculate}
      results={[
        {
          id: "height",
          label: "Height",
          unit: "m"
        },
        {
          id: "finalVelocity",
          label: "Final Velocity",
          unit: "m/s"
        }
      ]}
    />
  );
};

export default FreeFallCalculator;
