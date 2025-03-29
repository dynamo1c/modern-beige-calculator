
import React, { useState, useMemo } from "react";
import { Hash } from "lucide-react";

const PrimeNumberCalculator = () => {
  const [limit, setLimit] = useState("100");
  const [primes, setPrimes] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const generatePrimes = () => {
    const max = parseInt(limit);
    if (isNaN(max) || max < 2 || max > 10000) {
      return;
    }

    setIsCalculating(true);
    
    // Using setTimeout to prevent UI blocking for large calculations
    setTimeout(() => {
      const sieve = Array(max + 1).fill(true);
      sieve[0] = sieve[1] = false;
      
      for (let i = 2; i * i <= max; i++) {
        if (sieve[i]) {
          for (let j = i * i; j <= max; j += i) {
            sieve[j] = false;
          }
        }
      }
      
      const primeNumbers: number[] = [];
      for (let i = 2; i <= max; i++) {
        if (sieve[i]) {
          primeNumbers.push(i);
        }
      }
      
      setPrimes(primeNumbers);
      setIsCalculating(false);
    }, 0);
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Hash size={20} />
        <h3 className="text-xl font-medium">Prime Number Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Find all primes up to:</label>
          <input 
            type="number" 
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter a limit (max: 10000)"
            min="2"
            max="10000"
          />
        </div>
        
        <button 
          onClick={generatePrimes}
          disabled={isCalculating}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors disabled:opacity-50"
        >
          {isCalculating ? "Calculating..." : "Generate Primes"}
        </button>
        
        {primes.length > 0 && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/70 mb-2">Found {primes.length} prime numbers:</p>
            <div className="max-h-[200px] overflow-y-auto">
              <div className="grid grid-cols-5 gap-2 text-center">
                {primes.map((prime, index) => (
                  <span key={prime} className="text-sm">
                    {prime}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimeNumberCalculator;
