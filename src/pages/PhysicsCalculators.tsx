
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ChevronRight, Atom } from "lucide-react";

const PhysicsCalculators = () => {
  // Only show calculators that are fully implemented
  const calculators = [
    { name: "Velocity Calculator", path: "/physics/velocity" },
    { name: "Free Fall Calculator", path: "/physics/free-fall" },
    { name: "Projectile Motion Calculator", path: "/physics/projectile-motion" },
  ];

  return (
    <div className="min-h-screen bg-beige text-black overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4 text-black">Physics Calculators</h2>
            <p className="text-black/70 max-w-2xl mx-auto font-roboto">
              Explore our collection of physics calculators for motion, velocity, and projectile analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {calculators.map((calculator) => (
              <Link
                key={calculator.path}
                to={calculator.path}
                className="p-4 bg-black text-white rounded-xl flex items-center justify-between hover:bg-black/90 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-beige text-black h-10 w-10 rounded-lg flex items-center justify-center">
                    <Atom size={18} />
                  </div>
                  <span className="font-medium">{calculator.name}</span>
                </div>
                <ChevronRight size={18} className="text-beige" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicsCalculators;
