import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArithmeticCalculators from "./pages/ArithmeticCalculators";
import FinancialCalculators from "./pages/FinancialCalculators";
import HealthCalculators from "./pages/HealthCalculators";
import PhysicsCalculators from "./pages/PhysicsCalculators";
import NotFound from "./pages/NotFound";

// Arithmetic calculator pages
import BasicCalculatorPage from "./pages/arithmetic/BasicCalculatorPage";
import PercentageCalculatorPage from "./pages/arithmetic/PercentageCalculatorPage";
import PrimeNumberCalculatorPage from "./pages/arithmetic/PrimeNumberCalculatorPage";
import AbsoluteValueCalculatorPage from "./pages/arithmetic/AbsoluteValueCalculatorPage";
import AgeCalculatorPage from "./pages/arithmetic/AgeCalculatorPage";
import TrigonometryCalculatorPage from "./pages/arithmetic/TrigonometryCalculatorPage";
import QuadraticCalculatorPage from "./pages/arithmetic/QuadraticCalculatorPage";
import MathSolverPage from "./pages/arithmetic/MathSolverPage";

// Financial calculator pages
import FinancialCalculatorPage from "./pages/financial/FinancialCalculatorPage";
import GSTCalculatorPage from "./pages/financial/GSTCalculatorPage";
import InvestmentCalculatorPage from "./pages/financial/InvestmentCalculatorPage";
import CompoundInterestCalculatorPage from "./pages/financial/CompoundInterestCalculatorPage";
import MortgageCalculatorPage from "./pages/financial/MortgageCalculatorPage";
import LoanCalculatorPage from "./pages/financial/LoanCalculatorPage";
import APRCalculatorPage from "./pages/financial/APRCalculatorPage";
import FutureValueCalculatorPage from "./pages/financial/FutureValueCalculatorPage";
import PresentValueCalculatorPage from "./pages/financial/PresentValueCalculatorPage";
import ROICalculatorPage from "./pages/financial/ROICalculatorPage";
import InflationCalculatorPage from "./pages/financial/InflationCalculatorPage";
import AmortizationCalculatorPage from "./pages/financial/AmortizationCalculatorPage";

// Health calculator pages
import HealthCalculatorPage from "./pages/health/HealthCalculatorPage";
import HeightCalculatorPage from "./pages/health/HeightCalculatorPage";
import BMICalculatorPage from "./pages/health/BMICalculatorPage";

// Physics calculator pages
import VelocityCalculatorPage from "./pages/physics/VelocityCalculatorPage";
import FreeFallCalculatorPage from "./pages/physics/FreeFallCalculatorPage";
import ProjectileMotionCalculatorPage from "./pages/physics/ProjectileMotionCalculatorPage";

import "./index.css";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .calculator-card {
        display: flex;
        justify-content: center;
        min-height: 450px;
      }
      
      .calc-display {
        height: 80px;
        margin-bottom: 20px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 2.5rem;
        border-radius: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: #000;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .calc-button-number, 
      .calc-button-operation, 
      .calc-button-function {
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .calc-button-operation {
        background: #E6D7C2;
        color: #000;
      }
      
      .calc-button-operation:hover,
      .calc-button-number:hover,
      .calc-button-function:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }
      
      .shadow-calc {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      
      .calculator-input {
        background-color: #000 !important;
        color: white !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
      }
      
      .calculator-input::placeholder {
        color: rgba(255, 255, 255, 0.4) !important;
      }
      
      .calculator-select {
        background-color: #000 !important;
        color: white !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
      }
      
      .calculator-result {
        background-color: #000 !important;
        color: white !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
      }
      
      .rounded-3xl.bg-black\\/90 input,
      .rounded-3xl.bg-black\\/90 select,
      .rounded-3xl.bg-black\\/90 textarea {
        background-color: #000 !important;
        color: white !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/financial" element={<FinancialCalculators />} />
            <Route path="/financial/financial-calculator" element={<FinancialCalculatorPage />} />
            <Route path="/financial/gst" element={<GSTCalculatorPage />} />
            <Route path="/financial/investment" element={<InvestmentCalculatorPage />} />
            <Route path="/financial/compound-interest" element={<CompoundInterestCalculatorPage />} />
            <Route path="/financial/mortgage" element={<MortgageCalculatorPage />} />
            <Route path="/financial/loan" element={<LoanCalculatorPage />} />
            <Route path="/financial/apr" element={<APRCalculatorPage />} />
            <Route path="/financial/future-value" element={<FutureValueCalculatorPage />} />
            <Route path="/financial/present-value" element={<PresentValueCalculatorPage />} />
            <Route path="/financial/roi" element={<ROICalculatorPage />} />
            <Route path="/financial/amortization" element={<AmortizationCalculatorPage />} />
            <Route path="/financial/inflation" element={<InflationCalculatorPage />} />

            <Route path="/arithmetic" element={<ArithmeticCalculators />} />
            <Route path="/arithmetic/calculator" element={<BasicCalculatorPage />} />
            <Route path="/arithmetic/percentage" element={<PercentageCalculatorPage />} />
            <Route path="/arithmetic/prime-number" element={<PrimeNumberCalculatorPage />} />
            <Route path="/arithmetic/absolute-value" element={<AbsoluteValueCalculatorPage />} />
            <Route path="/arithmetic/age" element={<AgeCalculatorPage />} />
            <Route path="/arithmetic/trigonometry" element={<TrigonometryCalculatorPage />} />
            <Route path="/arithmetic/quadratic" element={<QuadraticCalculatorPage />} />
            <Route path="/arithmetic/math-solver" element={<MathSolverPage />} />

            <Route path="/health" element={<HealthCalculators />} />
            <Route path="/health/health-calculator" element={<HealthCalculatorPage />} />
            <Route path="/health/bmi" element={<BMICalculatorPage />} />
            <Route path="/health/height" element={<HeightCalculatorPage />} />

            <Route path="/physics" element={<PhysicsCalculators />} />
            <Route path="/physics/velocity" element={<VelocityCalculatorPage />} />
            <Route path="/physics/free-fall" element={<FreeFallCalculatorPage />} />
            <Route path="/physics/projectile-motion" element={<ProjectileMotionCalculatorPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
