
import React, { useState } from "react";
import { DollarSign } from "lucide-react";

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [calcType, setCalcType] = useState("exclusive");
  const [result, setResult] = useState<{ gst: string; total: string; net: string } | null>(null);

  const calculateGST = () => {
    const amountValue = parseFloat(amount);
    const rateValue = parseFloat(gstRate);
    
    if (isNaN(amountValue) || isNaN(rateValue)) {
      return;
    }

    if (calcType === "exclusive") {
      // GST is added to the amount (exclusive)
      const gstAmount = (amountValue * rateValue) / 100;
      const totalAmount = amountValue + gstAmount;
      
      setResult({
        net: amountValue.toFixed(2),
        gst: gstAmount.toFixed(2),
        total: totalAmount.toFixed(2)
      });
    } else {
      // GST is included in the amount (inclusive)
      const divisionFactor = 1 + (rateValue / 100);
      const netAmount = amountValue / divisionFactor;
      const gstAmount = amountValue - netAmount;
      
      setResult({
        net: netAmount.toFixed(2),
        gst: gstAmount.toFixed(2),
        total: amountValue.toFixed(2)
      });
    }
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign size={20} />
        <h3 className="text-xl font-medium">GST Calculator</h3>
      </div>
      
      <div className="flex rounded-lg bg-white/10 p-1 mb-4">
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'exclusive' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('exclusive')}
        >
          Add GST
        </button>
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'inclusive' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('inclusive')}
        >
          Remove GST
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">
            {calcType === 'exclusive' ? 'Amount (Exclusive of GST)' : 'Amount (Inclusive of GST)'}
          </label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter amount"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">GST Rate (%)</label>
          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
          >
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>
        
        <button 
          onClick={calculateGST}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Net Amount:</span>
              <span className="font-medium">${result.net}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">GST ({gstRate}%):</span>
              <span className="font-medium">${result.gst}</span>
            </div>
            <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
              <span className="text-white/70">Total Amount:</span>
              <span className="font-medium">${result.total}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GSTCalculator;
