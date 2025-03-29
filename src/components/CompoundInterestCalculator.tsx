import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("1");
  const [result, setResult] = useState<{amount: number, interest: number} | null>(null);
  const [chartData, setChartData] = useState<Array<{year: number, amount: number, interest: number}> | null>(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundFrequency);
    
    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n) || p <= 0 || t <= 0 || n <= 0) {
      return;
    }
    
    const amount = p * Math.pow(1 + r/n, n*t);
    const interest = amount - p;
    
    setResult({
      amount: amount,
      interest: interest
    });

    // Generate data points for the chart
    const data = [];
    for (let year = 0; year <= t; year++) {
      const yearAmount = p * Math.pow(1 + r/n, n*year);
      const yearInterest = yearAmount - p;
      data.push({
        year: year,
        amount: Number(yearAmount.toFixed(2)),
        interest: Number(yearInterest.toFixed(2))
      });
    }
    setChartData(data);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[800px] text-white">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={20} />
        <h3 className="text-xl font-medium">Compound Interest</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-white/70 mb-1 block">Principal Amount ($)</label>
            <input 
              type="number" 
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Initial investment"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Annual Interest Rate (%)</label>
            <input 
              type="number" 
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Annual rate"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Time Period (years)</label>
            <input 
              type="number" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Number of years"
            />
          </div>
          
          <div>
            <label className="text-sm text-white/70 mb-1 block">Compounding Frequency</label>
            <select
              value={compoundFrequency}
              onChange={(e) => setCompoundFrequency(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            >
              <option value="1">Annually (1/year)</option>
              <option value="2">Semi-Annually (2/year)</option>
              <option value="4">Quarterly (4/year)</option>
              <option value="12">Monthly (12/year)</option>
              <option value="365">Daily (365/year)</option>
            </select>
          </div>
          
          <button 
            onClick={calculateCompoundInterest}
            className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
          >
            Calculate
          </button>
          
          {result && (
            <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70">Future Value:</span>
                <span className="font-medium">${result.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Interest Earned:</span>
                <span className="font-medium">${result.interest.toFixed(2)}</span>
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
                  dataKey="amount" 
                  stroke="#D6BC8A" 
                  strokeWidth={2}
                  dot={{ fill: '#D6BC8A', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="interest" 
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

export default CompoundInterestCalculator;
