
import React from "react";
import Navbar from "../components/Navbar";
import { Calculator as CalcIcon, Percent, DollarSign, Heart, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-beige text-black overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 px-6 md:px-12 black-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-sm font-medium bg-black text-beige px-4 py-1.5 rounded-full inline-block mb-4">Calcify App</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium leading-tight mb-6 text-black">
              All the calculators you need, in one place.
            </h1>
            <p className="text-black/70 text-lg mb-4 max-w-xl mx-auto font-roboto">
              From basic arithmetic to financial planning, health metrics, and physics calculations. Experience calculation in its purest form.
            </p>
            <div className="mt-6 flex justify-center">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
      
      {/* Calculator Categories Section */}
      <section className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Arithmetic Card */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center bg-beige text-black h-16 w-16 rounded-full mb-4">
                <CalcIcon size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-3 text-beige">Arithmetic Calculators</h3>
              <p className="text-beige/70 mb-6 font-roboto">
                Basic calculations and percentage operations for everyday use.
              </p>
              <Button asChild className="bg-beige text-black hover:bg-beige/80">
                <Link to="/arithmetic">View Calculators</Link>
              </Button>
            </div>
            
            {/* Financial Card */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center bg-beige text-black h-16 w-16 rounded-full mb-4">
                <DollarSign size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-3 text-beige">Financial Calculators</h3>
              <p className="text-beige/70 mb-6 font-roboto">
                Investment, loan, and tax calculators for your financial planning.
              </p>
              <Button asChild className="bg-beige text-black hover:bg-beige/80">
                <Link to="/financial">View Calculators</Link>
              </Button>
            </div>
            
            {/* Health Card */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center bg-beige text-black h-16 w-16 rounded-full mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-3 text-beige">Health Calculators</h3>
              <p className="text-beige/70 mb-6 font-roboto">
                BMI, BMR, and other health metrics calculators.
              </p>
              <Button asChild className="bg-beige text-black hover:bg-beige/80">
                <Link to="/health">View Calculators</Link>
              </Button>
            </div>
            
            {/* Physics Card */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center bg-beige text-black h-16 w-16 rounded-full mb-4">
                <Atom size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-3 text-beige">Physics Calculators</h3>
              <p className="text-beige/70 mb-6 font-roboto">
                Motion, force, and mechanics calculators for physics problems.
              </p>
              <Button asChild className="bg-beige text-black hover:bg-beige/80">
                <Link to="/physics">View Calculators</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-8 px-6 md:px-12 text-beige/90 border-t border-beige/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="bg-beige text-black h-8 w-8 rounded-md flex items-center justify-center mr-2">
              <CalcIcon size={18} />
            </span>
            <span className="text-beige text-xl font-playfair font-medium">Calcify</span>
          </div>
          <p className="text-sm font-roboto">
            © {new Date().getFullYear()} Calcify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
