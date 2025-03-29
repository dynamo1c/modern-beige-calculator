import React from "react";
import { Link } from "react-router-dom";
import { Calculator, Percent, Calculator as CalcIcon, Pi, Sigma, FunctionSquare, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";

const ArithmeticCalculators = () => {
  return (
    <div className="min-h-screen bg-beige text-black overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 section-header">
            <div className="inline-flex items-center justify-center bg-black text-beige h-12 w-12 rounded-full mb-4">
              <CalcIcon size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-2 text-black">Arithmetic Calculators</h2>
            <p className="text-black/70 max-w-2xl mx-auto font-roboto">
              From basic math to complex calculations, our arithmetic calculators make your calculations easier and more accurate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <CalcIcon size={20} />
                </div>
                <h3 className="text-xl font-medium">Basic Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Perform basic arithmetic operations like addition, subtraction, multiplication, and division.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/calculator">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Percentage Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <Percent size={20} />
                </div>
                <h3 className="text-xl font-medium">Percentage Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Calculate percentages, percentage changes, and percentage differences.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/percentage">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Prime Number Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <Pi size={20} />
                </div>
                <h3 className="text-xl font-medium">Prime Number Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Check if a number is prime and find prime factors of any number.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/prime-number">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Absolute Value Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <Sigma size={20} />
                </div>
                <h3 className="text-xl font-medium">Absolute Value Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Calculate the absolute value of any number or expression.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/absolute-value">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Age Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <CalcIcon size={20} />
                </div>
                <h3 className="text-xl font-medium">Age Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Calculate exact age in years, months, days, hours, and minutes.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/age">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Trigonometry Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <FunctionSquare size={20} />
                </div>
                <h3 className="text-xl font-medium">Trigonometry Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Calculate sine, cosine, tangent, and other trigonometric functions.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/trigonometry">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Quadratic Equation Calculator */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <FunctionSquare size={20} />
                </div>
                <h3 className="text-xl font-medium">Quadratic Equation Calculator</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Solve quadratic equations and find roots, vertex, and discriminant.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/quadratic">Open Calculator</Link>
              </Button>
            </div>
            
            {/* Math Solver */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                  <Brain size={20} />
                </div>
                <h3 className="text-xl font-medium">Math Solver</h3>
              </div>
              <p className="text-black/70 mb-4 flex-grow">Advanced symbolic math solver for algebra, calculus, and more complex problems.</p>
              <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                <Link to="/arithmetic/math-solver">Open Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <Features />
    </div>
  );
};

export default ArithmeticCalculators;
