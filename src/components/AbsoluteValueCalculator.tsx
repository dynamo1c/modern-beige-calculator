
import React, { useState } from "react";
import { MoveHorizontal } from "lucide-react";

const AbsoluteValueCalculator = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateAbsoluteValue = () => {
    const num = parseFloat(number);
    if (isNaN(num)) {
      return;
    }
    
    setResult(Math.abs(num));
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <MoveHorizontal size={20} />
        <h3 className="text-xl font-medium">Absolute Value Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Enter a number</label>
          <input 
            type="number" 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter a number (positive or negative)"
          />
        </div>
        
        <button 
          onClick={calculateAbsoluteValue}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate |x|
        </button>
        
        {result !== null && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-lg font-medium">|{number}| = {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbsoluteValueCalculator;
