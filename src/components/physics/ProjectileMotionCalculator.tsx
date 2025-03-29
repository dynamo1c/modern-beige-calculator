
import React from "react";
import PhysicsCalculatorTemplate from "./PhysicsCalculatorTemplate";

const ProjectileMotionCalculator = () => {
  const calculate = (values: Record<string, number>) => {
    const { initialVelocity, angle, initialHeight } = values;
    const g = 9.81; // Acceleration due to gravity in m/s²
    const angleInRadians = (angle * Math.PI) / 180;
    
    // Horizontal and vertical components of initial velocity
    const v0x = initialVelocity * Math.cos(angleInRadians);
    const v0y = initialVelocity * Math.sin(angleInRadians);
    
    // Calculate time of flight
    // For the quadratic: -0.5*g*t² + v0y*t + h0 = 0
    const a = -0.5 * g;
    const b = v0y;
    const c = initialHeight;
    
    // Quadratic formula: t = (-b ± √(b² - 4ac)) / 2a
    // We want the larger root for time of flight
    const discriminant = b * b - 4 * a * c;
    const timeOfFlight = (-b + Math.sqrt(discriminant)) / (2 * a);
    
    // Calculate range
    const range = v0x * timeOfFlight;
    
    // Calculate maximum height
    // h_max = h0 + v0y²/(2g)
    const maxHeight = initialHeight + (v0y * v0y) / (2 * g);
    
    return {
      range: range.toFixed(2),
      maxHeight: maxHeight.toFixed(2),
      timeOfFlight: timeOfFlight.toFixed(2)
    };
  };

  return (
    <PhysicsCalculatorTemplate
      title="Projectile Motion Calculator"
      description="Calculate the range, maximum height, and time of flight for a projectile."
      inputs={[
        {
          id: "initialVelocity",
          label: "Initial Velocity",
          placeholder: "Enter initial velocity",
          unit: "m/s"
        },
        {
          id: "angle",
          label: "Launch Angle",
          placeholder: "Enter launch angle",
          unit: "degrees"
        },
        {
          id: "initialHeight",
          label: "Initial Height",
          placeholder: "Enter initial height",
          unit: "m"
        }
      ]}
      calculate={calculate}
      results={[
        {
          id: "range",
          label: "Range",
          unit: "m"
        },
        {
          id: "maxHeight",
          label: "Maximum Height",
          unit: "m"
        },
        {
          id: "timeOfFlight",
          label: "Time of Flight",
          unit: "s"
        }
      ]}
    />
  );
};

export default ProjectileMotionCalculator;
