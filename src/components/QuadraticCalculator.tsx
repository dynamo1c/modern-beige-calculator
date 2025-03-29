
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const QuadraticCalculator = () => {
  const [coeffA, setCoefficientA] = useState<string>("");
  const [coeffB, setCoefficientB] = useState<string>("");
  const [coeffC, setCoefficientC] = useState<string>("");
  const [results, setResults] = useState<{x1: string, x2: string}>({ x1: "", x2: "" });
  const [error, setError] = useState<string>("");

  const calculateRoots = () => {
    setError("");
    
    // Validate inputs
    if (!coeffA || !coeffB || !coeffC) {
      setError("Please enter all coefficients");
      return;
    }

    const a = parseFloat(coeffA);
    const b = parseFloat(coeffB);
    const c = parseFloat(coeffC);

    // Check if a is zero (not a quadratic equation)
    if (a === 0) {
      setError("Coefficient 'a' cannot be zero (not a quadratic equation)");
      return;
    }

    // Calculate discriminant
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      // Complex roots
      const realPart = (-b / (2 * a)).toFixed(4);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
      
      setResults({
        x1: `${realPart} + ${imaginaryPart}i`,
        x2: `${realPart} - ${imaginaryPart}i`
      });
    } else if (discriminant === 0) {
      // One real root (repeated)
      const root = (-b / (2 * a)).toFixed(4);
      setResults({
        x1: root,
        x2: root
      });
    } else {
      // Two distinct real roots
      const x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(4);
      const x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(4);
      
      setResults({ x1, x2 });
    }
  };

  const handleClear = () => {
    setCoefficientA("");
    setCoefficientB("");
    setCoefficientC("");
    setResults({ x1: "", x2: "" });
    setError("");
  };

  return (
    <Card className="w-full max-w-md p-6 bg-white shadow-md rounded-xl">
      <div className="space-y-4">
        <div className="mb-4 text-center">
          <div className="text-lg font-medium">Quadratic Equation: ax² + bx + c = 0</div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="coeffA">Coefficient a</Label>
          <Input
            id="coeffA"
            type="number"
            value={coeffA}
            onChange={(e) => setCoefficientA(e.target.value)}
            placeholder="Enter coefficient a"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coeffB">Coefficient b</Label>
          <Input
            id="coeffB"
            type="number"
            value={coeffB}
            onChange={(e) => setCoefficientB(e.target.value)}
            placeholder="Enter coefficient b"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coeffC">Coefficient c</Label>
          <Input
            id="coeffC"
            type="number"
            value={coeffC}
            onChange={(e) => setCoefficientC(e.target.value)}
            placeholder="Enter coefficient c"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <div className="space-y-2">
          <Label>Results</Label>
          <div className="bg-gray-100 rounded-md p-3 space-y-2">
            <div className="flex justify-between">
              <span>x₁ =</span>
              <span className="font-medium">{results.x1 || "—"}</span>
            </div>
            <div className="flex justify-between">
              <span>x₂ =</span>
              <span className="font-medium">{results.x2 || "—"}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            onClick={calculateRoots}
            className="flex-1 bg-black text-beige hover:bg-black/80"
          >
            Calculate
          </Button>
          <Button 
            onClick={handleClear}
            variant="outline" 
            className="flex-1 border-black"
          >
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuadraticCalculator;
