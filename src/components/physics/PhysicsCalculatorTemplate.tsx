
import React, { useState } from "react";
import { Atom } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PhysicsCalculatorProps {
  title: string;
  description: string;
  inputs: {
    id: string;
    label: string;
    placeholder: string;
    unit?: string;
  }[];
  calculate: (values: Record<string, number>) => Record<string, number | string>;
  results: {
    id: string;
    label: string;
    unit?: string;
  }[];
}

const PhysicsCalculatorTemplate: React.FC<PhysicsCalculatorProps> = ({
  title,
  description,
  inputs,
  calculate,
  results,
}) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [calculationResult, setCalculationResult] = useState<Record<string, number | string> | null>(null);

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleCalculate = () => {
    // Convert all input values to numbers
    const numericValues: Record<string, number> = {};
    for (const input of inputs) {
      const value = parseFloat(values[input.id] || "0");
      if (isNaN(value)) {
        return; // Invalid input
      }
      numericValues[input.id] = value;
    }

    const result = calculate(numericValues);
    setCalculationResult(result);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[380px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Atom size={20} />
        <h3 className="text-xl font-medium">{title}</h3>
      </div>

      <p className="text-white/70 text-sm mb-4">{description}</p>
      
      <div className="space-y-4">
        {inputs.map((input) => (
          <div key={input.id}>
            <Label className="text-sm text-white/70 mb-1 block">{input.label}{input.unit ? ` (${input.unit})` : ''}</Label>
            <Input 
              type="number" 
              value={values[input.id] || ""}
              onChange={(e) => handleChange(input.id, e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
              placeholder={input.placeholder}
            />
          </div>
        ))}
        
        <button 
          onClick={handleCalculate}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate
        </button>
        
        {calculationResult && (
          <div className="mt-4 p-4 bg-black border border-white/20 rounded-lg space-y-2">
            {results.map((result) => (
              <div key={result.id} className="flex justify-between">
                <span className="text-white/70">{result.label}:</span>
                <span className="font-medium">
                  {calculationResult[result.id]}
                  {result.unit ? ` ${result.unit}` : ''}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhysicsCalculatorTemplate;
