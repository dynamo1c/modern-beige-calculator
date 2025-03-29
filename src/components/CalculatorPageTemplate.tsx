
import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CalculatorPageTemplateProps {
  title: string;
  description: string;
  backLink: string;
  backLinkText: string;
  calculatorComponent: React.ReactNode;
}

const CalculatorPageTemplate: React.FC<CalculatorPageTemplateProps> = ({
  title,
  description,
  backLink,
  backLinkText,
  calculatorComponent
}) => {
  return (
    <div className="min-h-screen bg-beige text-black overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link to={backLink} className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-black/70 transition-colors">
            <ArrowLeft size={16} />
            {backLinkText}
          </Link>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4 text-black">{title}</h2>
            <p className="text-black/70 max-w-2xl mx-auto font-roboto">
              {description}
            </p>
          </div>
          
          <div className="flex justify-center">
            {calculatorComponent}
          </div>
          
          <div className="mt-12 flex justify-center gap-4">
            <Button asChild variant="outline" className="bg-black text-beige hover:bg-black/80">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild className="bg-beige text-black hover:bg-beige/80 border border-black">
              <Link to={backLink}>{backLinkText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPageTemplate;
