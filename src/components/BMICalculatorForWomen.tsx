
import React, { useState } from "react";
import { Users } from "lucide-react";

const BMICalculatorForWomen = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState<{bmi: number, category: string, recommendation: string} | null>(null);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseFloat(age);
    
    if (isNaN(weightKg) || isNaN(heightCm) || isNaN(ageYears) || weightKg <= 0 || heightCm <= 0 || ageYears <= 0) {
      return;
    }
    
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    
    let category = "";
    let recommendation = "";
    
    // Special BMI categorization for women (slightly adjusted)
    if (bmi < 18.5) {
      category = "Underweight";
      recommendation = "Consider increasing caloric intake with nutrient-dense foods. Consult a healthcare provider.";
    } else if (bmi < 24) {
      category = "Normal weight";
      recommendation = "Maintain your healthy weight with balanced nutrition and regular exercise.";
    } else if (bmi < 30) {
      category = "Overweight";
      recommendation = "Consider moderate calorie reduction and increased physical activity.";
    } else {
      category = "Obesity";
      recommendation = "Please consult a healthcare provider for a personalized weight management plan.";
    }
    
    setResult({bmi, category, recommendation});
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Users size={20} />
        <h3 className="text-xl font-medium">BMI for Women</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/70 mb-1 block">Weight (kg)</label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter weight in kg"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Height (cm)</label>
          <input 
            type="number" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter height in cm"
          />
        </div>
        
        <div>
          <label className="text-sm text-white/70 mb-1 block">Age (years)</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-white/10 rounded-lg p-3 text-white outline-none focus:ring-1 focus:ring-beige"
            placeholder="Enter age in years"
          />
        </div>
        
        <button 
          onClick={calculateBMI}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate BMI
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Your BMI:</span>
              <span className="font-medium">{result.bmi.toFixed(1)}</span>
            </div>
            <div className="border-t border-white/10 pt-2 mt-2">
              <p className="text-white/70">Category: <span className="text-white font-medium">{result.category}</span></p>
              <p className="text-white/70 text-sm mt-2">{result.recommendation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculatorForWomen;
