
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { DollarSign, Percent, TrendingUp, Home, Calculator, Landmark, Layers, Timer, CoinsIcon, PieChart, LineChart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinancialCalculators = () => {
  const calculators = [
    { 
      id: "financial-calculator", 
      name: "Financial Calculator", 
      description: "General financial calculations", 
      icon: <DollarSign size={24} />,
      link: "/financial/financial-calculator"
    },
    { 
      id: "gst", 
      name: "GST Calculator", 
      description: "Calculate GST amounts", 
      icon: <Percent size={24} />,
      link: "/financial/gst"
    },
    { 
      id: "investment", 
      name: "Investment Calculator", 
      description: "Plan your investments", 
      icon: <CoinsIcon size={24} />,
      link: "/financial/investment"
    },
    { 
      id: "compound-interest", 
      name: "Compound Interest Calculator", 
      description: "Calculate compound interest growth", 
      icon: <TrendingUp size={24} />,
      link: "/financial/compound-interest"
    },
    { 
      id: "mortgage", 
      name: "Mortgage Calculator", 
      description: "Calculate mortgage payments", 
      icon: <Home size={24} />,
      link: "/financial/mortgage"
    },
    { 
      id: "loan", 
      name: "Loan Calculator", 
      description: "Calculate loan payments", 
      icon: <Landmark size={24} />,
      link: "/financial/loan"
    },
    { 
      id: "apr", 
      name: "APR Calculator", 
      description: "Calculate annual percentage rate", 
      icon: <Percent size={24} />,
      link: "/financial/apr"
    },
    { 
      id: "future-value", 
      name: "Future Value Calculator", 
      description: "Project future investment value", 
      icon: <LineChart size={24} />,
      link: "/financial/future-value"
    },
    { 
      id: "present-value", 
      name: "Present Value Calculator", 
      description: "Calculate current value of future money", 
      icon: <BarChart3 size={24} />,
      link: "/financial/present-value"
    },
    { 
      id: "roi", 
      name: "ROI Calculator", 
      description: "Measure return on investment", 
      icon: <PieChart size={24} />,
      link: "/financial/roi"
    },
    { 
      id: "inflation", 
      name: "Inflation Calculator", 
      description: "Calculate inflation impact", 
      icon: <TrendingUp size={24} />,
      link: "/financial/inflation"
    },
    { 
      id: "amortization", 
      name: "Amortization Calculator", 
      description: "View loan amortization schedule", 
      icon: <Layers size={24} />,
      link: "/financial/amortization"
    }
  ];

  return (
    <div className="min-h-screen bg-beige text-black overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 section-header">
            <div className="inline-flex items-center justify-center bg-black text-beige h-12 w-12 rounded-full mb-4">
              <DollarSign size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-2 text-black">Financial Calculators</h2>
            <p className="text-black/70 max-w-2xl mx-auto font-roboto">
              Plan your financial future with our comprehensive financial calculators.
            </p>
            <div className="mt-4 flex justify-center">
              <SearchBar />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calculators.map((calc) => (
              <div key={calc.id} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                    {calc.icon}
                  </div>
                  <h3 className="text-xl font-medium">{calc.name}</h3>
                </div>
                <p className="text-black/70 mb-4">{calc.description}</p>
                <Button asChild className="w-full bg-beige text-black hover:bg-beige/80 border border-black">
                  <Link to={calc.link}>Open Calculator</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center gap-4">
            <Button asChild variant="outline" className="bg-black text-beige hover:bg-black/80">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild className="bg-beige text-black hover:bg-beige/80 border border-black">
              <Link to="/health">Health Calculators</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialCalculators;
