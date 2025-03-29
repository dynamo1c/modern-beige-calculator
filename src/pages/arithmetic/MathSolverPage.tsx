
import React from "react";
import MathSolver from "@/components/MathSolver";
import CalculatorPageTemplate from "@/components/CalculatorPageTemplate";

const MathSolverPage = () => {
  return (
    <CalculatorPageTemplate
      title="Math Solver"
      description="Advanced symbolic math solver that can handle algebra, calculus, trigonometry and more."
      backLink="/arithmetic"
      backLinkText="Arithmetic Calculators"
      calculatorComponent={
        <div className="w-full max-w-3xl">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-3 text-beige font-playfair">
              Advanced Math Solver
            </h2>
            <p className="text-white/90 mb-6">
              This solver can handle a wide range of mathematical problems, from basic algebra to advanced calculus. 
              Enter your equation or expression using the keypad or keyboard and select an operation to perform.
            </p>
          </div>
          
          <div className="mt-8 bg-black/50 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-medium mb-3 text-beige font-playfair">How to Use</h3>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Type or build your mathematical expression using the symbol buttons</li>
              <li>Select an operation (simplify, solve, etc.) to apply to your expression</li>
              <li>Click the "Go" button to see the solution</li>
              <li>For more complex expressions, toggle "Full pad" to access additional symbols</li>
              <li>Use the camera button to scan a written equation (OCR feature)</li>
            </ul>
          </div>
          
          <MathSolver />
        </div>
      }
    />
  );
};

export default MathSolverPage;
