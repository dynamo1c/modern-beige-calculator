import React, { useState } from "react";
import { Heart, Activity, Weight } from "lucide-react";

const HealthCalculator = () => {
  const [calcType, setCalcType] = useState("bmi");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);
  const [interpretation, setInterpretation] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100; // convert cm to m
    
    if (isNaN(weightKg) || isNaN(heightM) || heightM === 0) {
      setResult("Please enter valid numbers");
      setInterpretation("");
      setRecommendation("");
      return;
    }
    
    const bmi = weightKg / (heightM * heightM);
    setResult(bmi.toFixed(1));
    
    // Gender-specific BMI interpretation
    if (gender === "male") {
      if (bmi < 18.5) {
        setInterpretation("Underweight");
        setRecommendation("Consider increasing caloric intake with nutrient-dense foods. Focus on strength training to build muscle mass.");
      } else if (bmi < 25) {
        setInterpretation("Normal weight");
        setRecommendation("Maintain your healthy weight with balanced nutrition and regular exercise.");
      } else if (bmi < 30) {
        setInterpretation("Overweight");
        setRecommendation("Consider moderate calorie reduction and increased physical activity. Focus on cardio and strength training.");
      } else {
        setInterpretation("Obesity");
        setRecommendation("Please consult a healthcare provider for a personalized weight management plan. Focus on gradual weight loss through diet and exercise.");
      }
    } else {
      if (bmi < 18.5) {
        setInterpretation("Underweight");
        setRecommendation("Consider increasing caloric intake with nutrient-dense foods. Focus on strength training to build muscle mass.");
      } else if (bmi < 24) {
        setInterpretation("Normal weight");
        setRecommendation("Maintain your healthy weight with balanced nutrition and regular exercise.");
      } else if (bmi < 30) {
        setInterpretation("Overweight");
        setRecommendation("Consider moderate calorie reduction and increased physical activity. Focus on cardio and strength training.");
      } else {
        setInterpretation("Obesity");
        setRecommendation("Please consult a healthcare provider for a personalized weight management plan. Focus on gradual weight loss through diet and exercise.");
      }
    }
  };

  const calculateBMR = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseFloat(age);
    
    if (isNaN(weightKg) || isNaN(heightCm) || isNaN(ageYears)) {
      setResult("Please enter valid numbers");
      setInterpretation("");
      setRecommendation("");
      return;
    }
    
    let bmr;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * ageYears);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * ageYears);
    }
    
    setResult(Math.round(bmr));
    setInterpretation("Calories needed at rest");
    setRecommendation("This is your estimated daily calorie needs at rest. For weight maintenance, multiply by 1.2-1.5 based on activity level.");
  };

  const handleCalculate = () => {
    if (calcType === "bmi") {
      calculateBMI();
    } else {
      calculateBMR();
    }
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-all duration-500 hover:scale-[1.02] w-full max-w-[320px] text-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Heart size={20} />
        <h3 className="text-xl font-medium">Health Calculator</h3>
      </div>
      
      <div className="flex rounded-lg bg-white/10 p-1 mb-4">
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'bmi' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('bmi')}
        >
          BMI
        </button>
        <button 
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${calcType === 'bmr' ? 'bg-beige text-black' : ''}`}
          onClick={() => setCalcType('bmr')}
        >
          BMR
        </button>
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
          <label className="text-sm text-white/70 mb-1 block">Gender</label>
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
        
        {calcType === 'bmr' && (
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
        )}
        
        <button 
          onClick={handleCalculate}
          className="w-full bg-beige text-black font-medium p-3 rounded-lg hover:bg-beige/90 transition-colors"
        >
          Calculate
        </button>
        
        {result && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/70 mb-1">
              {calcType === 'bmi' ? 'Body Mass Index (BMI)' : 'Basal Metabolic Rate (BMR)'}
            </p>
            <p className="text-xl font-medium">
              {calcType === 'bmi' ? result : `${result} calories/day`}
            </p>
            {interpretation && (
              <p className="text-sm text-white/70 mt-2">{interpretation}</p>
            )}
            {recommendation && (
              <p className="text-sm text-white/70 mt-2">{recommendation}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthCalculator;
