
import React, { useState } from "react";
import { TrendingDown } from "lucide-react";

const PresentValueCalculator = () => {
  const [futureValue, setFutureValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{ presentValue: string } | null>(null);

  const calculatePresentValue = () => {
    const fv = parseFloat(futureValue);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(timePeriod);
    
    if (isNaN(fv) || isNaN(rate) || isNaN(time)) {
      return;
    }
    
    // Calculate present value
    const presentValue = fv / Math.pow(1 + rate, time);
    
    setResult({
      presentValue: presentValue.toFixed(2)
    });
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <TrendingDown size={20} />
        <h3 className="text-xl font-medium">Present Value Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Future Value ($)</label>
          <input 
            type="number" 
            value={futureValue}
            onChange={(e) => setFutureValue(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Target future amount"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Interest Rate (% per year)</label>
          <input 
            type="number" 
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Annual interest rate"
            step="0.01"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Time Period (years)</label>
          <input 
            type="number" 
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Investment duration"
          />
        </div>
        
        <button 
          onClick={calculatePresentValue}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate Present Value
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Present Value:</span>
              <span className="font-medium">${result.presentValue}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresentValueCalculator;
