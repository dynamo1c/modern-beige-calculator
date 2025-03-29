import React from "react";
import Navbar from "../components/Navbar";
import { Heart, Ruler, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HealthCalculators = () => {
  const calculators = [
    { 
      id: "health-calculator", 
      name: "Health Calculator", 
      description: "Monitor your health metrics", 
      icon: <Heart size={24} />,
      link: "/health/health-calculator"
    },
    { 
      id: "bmi-calculator", 
      name: "BMI Calculator", 
      description: "Calculate body mass index with gender-specific measurements", 
      icon: <Weight size={24} />,
      link: "/health/bmi"
    },
    { 
      id: "height", 
      name: "Height Calculator", 
      description: "Convert between height units", 
      icon: <Ruler size={24} />,
      link: "/health/height"
    }
  ];

  return (
    <div className="min-h-screen bg-beige text-black overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 section-header">
            <div className="inline-flex items-center justify-center bg-black text-beige h-12 w-12 rounded-full mb-4">
              <Heart size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-2 text-black">Health Calculators</h2>
            <p className="text-black/70 max-w-2xl mx-auto font-roboto">
              Monitor your health metrics with our specialized health calculators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calculators.map((calc) => (
              <div key={calc.id} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black text-beige h-10 w-10 rounded-full flex items-center justify-center">
                    {calc.icon}
                  </div>
                  <h3 className="text-xl font-medium">{calc.name}</h3>
                </div>
                <p className="text-black/70 mb-4 flex-grow">{calc.description}</p>
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
              <Link to="/arithmetic">Arithmetic Calculators</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCalculators;
