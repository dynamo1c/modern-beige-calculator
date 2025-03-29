
import React, { useState } from "react";
import { Percent } from "lucide-react";

const PercentageCalculator = () => {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [calcType, setCalcType] = useState("percentage");

  const calculatePercentage = () => {
    const num = parseFloat(number);
    const perc = parseFloat(percentage);
    
    if (isNaN(num) || isNaN(perc)) {
      setResult("Please enter valid numbers");
      return;
    }
    
    if (calcType === "percentage") {
      // Calculate X% of Y
      const calcResult = (num * perc) / 100;
      setResult(`${perc}% of ${num} = ${calcResult.toFixed(2)}`);
    } else if (calcType === "increase") {
      // Calculate value after X% increase
      const calcResult = num * (1 + perc / 100);
      setResult(`${num} increased by ${perc}% = ${calcResult.toFixed(2)}`);
    } else if (calcType === "decrease") {
      // Calculate value after X% decrease
      const calcResult = num * (1 - perc / 100);
      setResult(`${num} decreased by ${perc}% = ${calcResult.toFixed(2)}`);
    }
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Percent size={20} />
        <h3 className="text-xl font-medium">Percentage Calculator</h3>
      </div>
      
      <div className="flex rounded-lg bg-white/10 p-1 mb-4">
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'percentage' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('percentage')}
        >
          Find %
        </button>
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'increase' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('increase')}
        >
          Increase
        </button>
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'decrease' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('decrease')}
        >
          Decrease
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Number</label>
          <input 
            type="number" 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter a number"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">
            {calcType === "percentage" ? "Percentage" : "Percentage Change"}
          </label>
          <input 
            type="number" 
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter percentage"
          />
        </div>
        
        <button 
          onClick={calculatePercentage}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-lg font-medium">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageCalculator;
