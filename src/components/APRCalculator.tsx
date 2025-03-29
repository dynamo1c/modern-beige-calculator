
import React, { useState } from "react";
import { Percent } from "lucide-react";

const APRCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [fees, setFees] = useState("");
  const [result, setResult] = useState<{ apr: string } | null>(null);

  const calculateAPR = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(loanTerm);
    const additionalFees = parseFloat(fees);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(additionalFees)) {
      return;
    }
    
    // Calculate simple APR (this is simplified)
    const interest = principal * rate * time;
    const totalCost = interest + additionalFees;
    const apr = (totalCost / principal / time) * 100;
    
    setResult({
      apr: apr.toFixed(2)
    });
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Percent size={20} />
        <h3 className="text-xl font-medium">APR Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Loan Amount ($)</label>
          <input 
            type="number" 
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter loan amount"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Interest Rate (% per year)</label>
          <input 
            type="number" 
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Nominal interest rate"
            step="0.01"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Loan Term (years)</label>
          <input 
            type="number" 
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Loan duration in years"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Additional Fees ($)</label>
          <input 
            type="number" 
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Origination fees, etc."
          />
        </div>
        
        <button 
          onClick={calculateAPR}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate APR
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Annual Percentage Rate:</span>
              <span className="font-medium">{result.apr}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default APRCalculator;
