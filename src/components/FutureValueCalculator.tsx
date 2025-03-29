import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FutureValueCalculator = () => {
  const [presentValue, setPresentValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{ futureValue: string } | null>(null);
  const [chartData, setChartData] = useState<Array<{
    year: number;
    value: number;
    interestEarned: number;
  }> | null>(null);

  const calculateFutureValue = () => {
    const principal = parseFloat(presentValue);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(timePeriod);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      return;
    }
    
    // Calculate future value using compound interest formula
    const futureValue = principal * Math.pow(1 + rate, time);
    
    setResult({
      futureValue: futureValue.toFixed(2)
    });

    // Generate data points for the chart
    const data = [];
    for (let year = 0; year <= time; year++) {
      const yearValue = principal * Math.pow(1 + rate, year);
      const interestEarned = yearValue - principal;
      data.push({
        year: year,
        value: Number(yearValue.toFixed(2)),
        interestEarned: Number(interestEarned.toFixed(2))
      });
    }
    setChartData(data);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[800px] text-white">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={20} />
        <h3 className="text-xl font-medium">Future Value Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-white/70 mb-1 block">Present Value ($)</label>
            <input 
              type="number" 
              value={presentValue}
              onChange={(e) => setPresentValue(e.target.value)}
              className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
              placeholder="Current investment amount"
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
            onClick={calculateFutureValue}
            className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
          >
            Calculate Future Value
          </button>
          
          {result && (
            <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70">Future Value:</span>
                <span className="font-medium">${result.futureValue}</span>
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
                  dataKey="value" 
                  stroke="#D6BC8A" 
                  strokeWidth={2}
                  dot={{ fill: '#D6BC8A', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="interestEarned" 
                  stroke="#ffffff60" 
                  strokeWidth={2}
                  dot={{ fill: '#ffffff60', strokeWidth: 2 }}
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

export default FutureValueCalculator;
