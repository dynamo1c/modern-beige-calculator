
import React, { useState } from "react";
import { RulerIcon } from "lucide-react";

const HeightCalculator = () => {
  const [motherHeight, setMotherHeight] = useState("");
  const [fatherHeight, setFatherHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<{min: number, avg: number, max: number} | null>(null);

  const calculateHeight = () => {
    const motherCm = parseFloat(motherHeight);
    const fatherCm = parseFloat(fatherHeight);
    
    if (isNaN(motherCm) || isNaN(fatherCm)) {
      return;
    }
    
    let avgHeightCm;
    
    // Using Khamis-Roche method for height prediction (simplified)
    if (gender === "male") {
      // For boys: (father's height + (mother's height + 13 cm)) / 2
      avgHeightCm = (fatherCm + (motherCm + 13)) / 2;
    } else {
      // For girls: ((father's height - 13 cm) + mother's height) / 2
      avgHeightCm = ((fatherCm - 13) + motherCm) / 2;
    }
    
    // Typically +/- 10 cm from the predicted height
    const minHeightCm = avgHeightCm - 10;
    const maxHeightCm = avgHeightCm + 10;
    
    setResult({
      min: minHeightCm,
      avg: avgHeightCm,
      max: maxHeightCm
    });
  };

  // Helper to convert cm to feet and inches
  const cmToFeetInches = (cm: number) => {
    const totalInches = cm * 0.393701;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <RulerIcon size={20} />
        <h3 className="text-xl font-medium">Height Predictor</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Mother's Height (cm)</label>
          <input 
            type="number" 
            value={motherHeight}
            onChange={(e) => setMotherHeight(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter height in cm"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Father's Height (cm)</label>
          <input 
            type="number" 
            value={fatherHeight}
            onChange={(e) => setFatherHeight(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter height in cm"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Child's Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                checked={gender === 'female'}
                onChange={() => setGender('female')}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>
        
        <button 
          onClick={calculateHeight}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Predict Adult Height
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-3">
            <div>
              <p className="text-white/70 text-sm mb-1">Estimated Adult Height:</p>
              <p className="font-medium">{result.avg.toFixed(1)} cm ({cmToFeetInches(result.avg)})</p>
            </div>
            <div className="border-t border-white/10 pt-2 text-sm">
              <p className="text-white/70">Height Range:</p>
              <p>{result.min.toFixed(1)} - {result.max.toFixed(1)} cm</p>
              <p>({cmToFeetInches(result.min)} - {cmToFeetInches(result.max)})</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeightCalculator;
