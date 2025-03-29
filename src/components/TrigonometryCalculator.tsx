
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TrigonometryCalculator = () => {
  const [angle, setAngle] = useState<string>("");
  const [unit, setUnit] = useState<string>("degrees");
  const [operation, setOperation] = useState<string>("sin");
  const [result, setResult] = useState<string>("");

  const calculateResult = () => {
    if (!angle || isNaN(Number(angle))) {
      setResult("Please enter a valid number");
      return;
    }

    const angleValue = parseFloat(angle);
    let radians = angleValue;
    
    // Convert to radians if in degrees
    if (unit === "degrees") {
      radians = (angleValue * Math.PI) / 180;
    }

    let calculatedResult: number;
    
    switch (operation) {
      case "sin":
        calculatedResult = Math.sin(radians);
        break;
      case "cos":
        calculatedResult = Math.cos(radians);
        break;
      case "tan":
        calculatedResult = Math.tan(radians);
        break;
      case "cot":
        calculatedResult = 1 / Math.tan(radians);
        break;
      case "sec":
        calculatedResult = 1 / Math.cos(radians);
        break;
      case "csc":
        calculatedResult = 1 / Math.sin(radians);
        break;
      default:
        calculatedResult = 0;
    }

    setResult(calculatedResult.toFixed(6));
  };

  const handleClear = () => {
    setAngle("");
    setResult("");
  };

  return (
    <Card className="w-full max-w-md p-6 bg-black text-white shadow-md rounded-xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="operation" className="text-white">Trigonometric Function</Label>
          <Select 
            value={operation} 
            onValueChange={(value) => setOperation(value)}
          >
            <SelectTrigger className="w-full bg-black/80 border-white/20 text-white">
              <SelectValue placeholder="Select function" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectItem value="sin">Sine (sin)</SelectItem>
              <SelectItem value="cos">Cosine (cos)</SelectItem>
              <SelectItem value="tan">Tangent (tan)</SelectItem>
              <SelectItem value="cot">Cotangent (cot)</SelectItem>
              <SelectItem value="sec">Secant (sec)</SelectItem>
              <SelectItem value="csc">Cosecant (csc)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="angle" className="text-white">Angle</Label>
          <Input
            id="angle"
            type="number"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            placeholder="Enter angle"
            className="bg-black/80 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit" className="text-white">Unit</Label>
          <Select 
            value={unit} 
            onValueChange={(value) => setUnit(value)}
          >
            <SelectTrigger className="w-full bg-black/80 border-white/20 text-white">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectItem value="degrees">Degrees (°)</SelectItem>
              <SelectItem value="radians">Radians (rad)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="result" className="text-white">Result</Label>
          <div className="calc-display bg-black/80 border border-white/20 w-full rounded-md h-16 px-4 flex items-center justify-end text-xl font-medium overflow-auto text-white">
            {result || "0"}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            onClick={calculateResult}
            className="flex-1 bg-beige text-black hover:bg-beige/80"
          >
            Calculate
          </Button>
          <Button 
            onClick={handleClear}
            variant="outline" 
            className="flex-1 border-white/20 text-white hover:bg-white/10"
          >
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TrigonometryCalculator;
