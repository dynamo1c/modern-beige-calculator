
import React, { useState } from "react";
import { Calculator as CalcIcon, DollarSign, Percent } from "lucide-react";

const FinancialCalculator = () => {
  const [calcType, setCalcType] = useState("compound");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setResult("Please enter valid numbers");
      return;
    }
    
    const amount = p * Math.pow(1 + r, t);
    setResult(amount.toFixed(2));
  };

  const calculateLoan = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const t = parseFloat(time) * 12;
    
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setResult("Please enter valid numbers");
      return;
    }
    
    const payment = p * r * Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1);
    setResult(payment.toFixed(2));
  };

  const handleCalculate = () => {
    if (calcType === "compound") {
      calculateCompoundInterest();
    } else {
      calculateLoan();
    }
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign size={20} />
        <h3 className="text-xl font-medium">Financial Calculator</h3>
      </div>
      
      <div className="flex rounded-lg bg-black border border-white/20 p-1 mb-4">
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'compound' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('compound')}
        >
          Investment
        </button>
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'loan' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('loan')}
        >
          Loan
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">
            {calcType === 'compound' ? 'Principal Amount' : 'Loan Amount'}
          </label>
          <input 
            type="number" 
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
            placeholder={calcType === 'compound' ? 'Initial investment' : 'Loan amount'}
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">
            Interest Rate (% per year)
          </label>
          <input 
            type="number" 
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
            placeholder="Annual interest rate"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">
            {calcType === 'compound' ? 'Time (years)' : 'Loan Term (years)'}
          </label>
          <input 
            type="number" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
            placeholder="Number of years"
          />
        </div>
        
        <button 
          onClick={handleCalculate}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-black border border-white/20 rounded-lg">
            <p className="text-sm text-white/70 mb-1">
              {calcType === 'compound' ? 'Future Value' : 'Monthly Payment'}
            </p>
            <p className="text-xl font-medium">${result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialCalculator;
