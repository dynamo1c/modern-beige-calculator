import React, { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{ payment: string } | null>(null);
  const [chartData, setChartData] = useState<Array<{
    year: number;
    balance: number;
    interestPaid: number;
    principalPaid: number;
  }> | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTerm) * 12;
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      return;
    }
    
    // Calculate monthly payment
    const payment = principal * (rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    
    setResult({
      payment: payment.toFixed(2)
    });

    // Generate data points for the chart
    const data = [];
    let balance = principal;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;

    for (let year = 0; year <= parseFloat(loanTerm); year++) {
      const yearMonths = year * 12;
      if (yearMonths > time) break;

      for (let month = 0; month < 12 && yearMonths + month < time; month++) {
        const interestPayment = balance * rate;
        const principalPayment = payment - interestPayment;
        balance -= principalPayment;
        totalInterestPaid += interestPayment;
        totalPrincipalPaid += principalPayment;
      }

      data.push({
        year: year,
        balance: Number(balance.toFixed(2)),
        interestPaid: Number(totalInterestPaid.toFixed(2)),
        principalPaid: Number(totalPrincipalPaid.toFixed(2))
      });
    }
    setChartData(data);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[800px] text-white">
      <div className="flex items-center gap-2 mb-4">
        <CalcIcon size={20} />
        <h3 className="text-xl font-medium">Loan Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-white/70 mb-1 block">Loan Amount ($)</label>
            <input 
              type="number" 
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
              placeholder="Enter loan amount"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Interest Rate (% per year)</label>
            <input 
              type="number" 
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
              placeholder="Annual interest rate"
              step="0.01"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Loan Term (years)</label>
            <input 
              type="number" 
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige placeholder:text-white/40"
              placeholder="Loan duration in years"
            />
          </div>
          
          <button 
            onClick={calculateLoan}
            className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
          >
            Calculate
          </button>
          
          {result && (
            <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70">Monthly Payment:</span>
                <span className="font-medium">${result.payment}</span>
              </div>
            </div>
          )}
        </div>

        <div className="h-[300px] bg-white/5 rounded-lg p-4">
          {chartData ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  dataKey="year" 
                  stroke="#ffffff80"
                  label={{ value: 'Years', position: 'bottom', fill: '#ffffff80' }}
                />
                <YAxis 
                  stroke="#ffffff80"
                  label={{ value: 'Amount ($)', angle: -90, position: 'left', fill: '#ffffff80' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, 'Amount']}
                />
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#D6BC8A" 
                  strokeWidth={2}
                  dot={{ fill: '#D6BC8A', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="interestPaid" 
                  stroke="#ffffff60" 
                  strokeWidth={2}
                  dot={{ fill: '#ffffff60', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="principalPaid" 
                  stroke="#ffffff40" 
                  strokeWidth={2}
                  dot={{ fill: '#ffffff40', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-white/40">
              Enter values and click Calculate to see the graph
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
