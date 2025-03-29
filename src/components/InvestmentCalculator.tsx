import React, { useState } from "react";
import { BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{ future: string; invested: string; interest: string } | null>(null);
  const [chartData, setChartData] = useState<Array<{
    year: number;
    totalAmount: number;
    investedAmount: number;
    interestEarned: number;
  }> | null>(null);

  const calculateInvestment = () => {
    const p = parseFloat(principal);
    const m = parseFloat(monthlyContribution);
    const r = parseFloat(interestRate) / 100 / 12;
    const t = parseFloat(years) * 12;
    
    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(m)) {
      return;
    }
    
    // Calculate future value of initial principal
    const principalFV = p * Math.pow(1 + r, t);
    
    // Calculate future value of monthly contributions
    let contributionFV = 0;
    if (r > 0) {
      contributionFV = m * ((Math.pow(1 + r, t) - 1) / r);
    } else {
      contributionFV = m * t;
    }
    
    const totalInvestment = p + (m * t);
    const futureValue = principalFV + contributionFV;
    const interestEarned = futureValue - totalInvestment;
    
    setResult({
      future: futureValue.toFixed(2),
      invested: totalInvestment.toFixed(2),
      interest: interestEarned.toFixed(2)
    });

    // Generate data points for the chart
    const data = [];
    for (let year = 0; year <= parseFloat(years); year++) {
      const yearMonths = year * 12;
      const yearPrincipalFV = p * Math.pow(1 + r, yearMonths);
      const yearContributionFV = m * ((Math.pow(1 + r, yearMonths) - 1) / r);
      const yearTotalAmount = yearPrincipalFV + yearContributionFV;
      const yearInvestedAmount = p + (m * yearMonths);
      const yearInterestEarned = yearTotalAmount - yearInvestedAmount;

      data.push({
        year: year,
        totalAmount: Number(yearTotalAmount.toFixed(2)),
        investedAmount: Number(yearInvestedAmount.toFixed(2)),
        interestEarned: Number(yearInterestEarned.toFixed(2))
      });
    }
    setChartData(data);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[800px] text-white">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 size={20} />
        <h3 className="text-xl font-medium">Investment Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-white/70 mb-1 block">Initial Investment ($)</label>
            <input 
              type="number" 
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Starting amount"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Monthly Contribution ($)</label>
            <input 
              type="number" 
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Monthly amount"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Annual Interest Rate (%)</label>
            <input 
              type="number" 
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Expected return rate"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Time Period (years)</label>
            <input 
              type="number" 
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Number of years"
            />
          </div>
          
          <button 
            onClick={calculateInvestment}
            className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
          >
            Calculate
          </button>
          
          {result && (
            <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70">Total Invested:</span>
                <span className="font-medium">${result.invested}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Interest Earned:</span>
                <span className="font-medium">${result.interest}</span>
              </div>
              <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
                <span className="text-white/70">Future Value:</span>
                <span className="font-medium">${result.future}</span>
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
                  dataKey="totalAmount" 
                  stroke="#D6BC8A" 
                  strokeWidth={2}
                  dot={{ fill: '#D6BC8A', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="investedAmount" 
                  stroke="#ffffff60" 
                  strokeWidth={2}
                  dot={{ fill: '#ffffff60', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="interestEarned" 
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

export default InvestmentCalculator;
