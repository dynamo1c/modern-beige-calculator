
import React, { useState } from "react";
import { Home } from "lucide-react";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [downPayment, setDownPayment] = useState("0");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment || "0");
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;
    
    if (isNaN(principal) || isNaN(interest) || isNaN(payments) || principal <= 0 || payments <= 0) {
      return;
    }
    
    // Calculate monthly payment using the formula: M = P [r(1+r)^n] / [(1+r)^n-1]
    const monthlyPayment = principal * (interest * Math.pow(1 + interest, payments)) / (Math.pow(1 + interest, payments) - 1);
    
    // Calculate total payment over the life of the loan
    const totalPayment = monthlyPayment * payments;
    
    // Calculate total interest paid
    const totalInterest = totalPayment - principal;
    
    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest
    });
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Home size={20} />
        <h3 className="text-xl font-medium">Mortgage Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Loan Amount ($)</label>
          <input 
            type="number" 
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Home purchase price"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Down Payment ($)</label>
          <input 
            type="number" 
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Down payment amount"
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
          <label className="text-sm text-white/70 mb-1 block">Loan Term (years)</label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
          >
            <option value="">Select term</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
        
        <button 
          onClick={calculateMortgage}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Monthly Payment:</span>
              <span className="font-medium">${result.monthlyPayment.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Total Payment:</span>
              <span className="font-medium">${result.totalPayment.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Total Interest:</span>
              <span className="font-medium">${result.totalInterest.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
