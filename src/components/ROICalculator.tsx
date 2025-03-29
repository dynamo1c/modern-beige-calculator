
import React, { useState } from "react";
import { BarChart } from "lucide-react";

const ROICalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{ roi: string; annualROI: string } | null>(null);

  const calculateROI = () => {
    const initialAmount = parseFloat(initialInvestment);
    const finalAmount = parseFloat(finalValue);
    const years = parseFloat(timePeriod);
    
    if (isNaN(initialAmount) || isNaN(finalAmount) || initialAmount === 0) {
      return;
    }
    
    // Calculate ROI as a percentage
    const roi = ((finalAmount - initialAmount) / initialAmount) * 100;
    
    // Calculate annualized ROI if time period is provided
    let annualROI = 0;
    if (!isNaN(years) && years > 0) {
      annualROI = (Math.pow((finalAmount / initialAmount), 1 / years) - 1) * 100;
    }
    
    setResult({
      roi: roi.toFixed(2),
      annualROI: annualROI.toFixed(2)
    });
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <BarChart size={20} />
        <h3 className="text-xl font-medium">ROI Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Initial Investment ($)</label>
          <input 
            type="number" 
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Amount invested"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Final Value ($)</label>
          <input 
            type="number" 
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Current or final value"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Time Period (years, optional)</label>
          <input 
            type="number" 
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Investment duration"
          />
        </div>
        
        <button 
          onClick={calculateROI}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate ROI
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Total ROI:</span>
              <span className="font-medium">{result.roi}%</span>
            </div>
            {parseFloat(timePeriod) > 0 && (
              <div className="flex justify-between">
                <span className="text-white/70">Annualized ROI:</span>
                <span className="font-medium">{result.annualROI}%</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
