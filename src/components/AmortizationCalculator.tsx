
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator } from "lucide-react";

const AmortizationCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [schedule, setSchedule] = useState<Array<{
    period: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>>([]);

  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTerm) * 12;
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      return;
    }
    
    // Calculate monthly payment
    const payment = principal * (rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    
    // Calculate amortization schedule (showing first 12 periods only)
    const newSchedule = [];
    let balance = principal;
    
    // Calculate the first 12 months for display purposes
    for (let period = 1; period <= Math.min(12, time); period++) {
      const interestPayment = balance * rate;
      const principalPayment = payment - interestPayment;
      balance -= principalPayment;
      
      newSchedule.push({
        period,
        payment: Number(payment.toFixed(2)),
        principal: Number(principalPayment.toFixed(2)),
        interest: Number(interestPayment.toFixed(2)),
        balance: Number(balance.toFixed(2))
      });
    }
    
    setSchedule(newSchedule);
    setShowTable(true);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={20} />
        <h3 className="text-xl font-medium">Amortization Calculator</h3>
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
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Loan duration in years"
          />
        </div>
        
        <button 
          onClick={calculateAmortization}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Generate Schedule
        </button>
        
        {showTable && schedule.length > 0 && (
          <div className="mt-4 bg-white/10 rounded-lg overflow-x-auto">
            <Table className="w-full text-white text-xs">
              <TableHeader>
                <TableRow className="bg-white/5">
                  <TableHead className="text-beige">Month</TableHead>
                  <TableHead className="text-beige">Payment</TableHead>
                  <TableHead className="text-beige">Principal</TableHead>
                  <TableHead className="text-beige">Interest</TableHead>
                  <TableHead className="text-beige">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((row) => (
                  <TableRow key={row.period}>
                    <TableCell>{row.period}</TableCell>
                    <TableCell>${row.payment}</TableCell>
                    <TableCell>${row.principal}</TableCell>
                    <TableCell>${row.interest}</TableCell>
                    <TableCell>${row.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmortizationCalculator;
