import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Define the working calculators only
const calculators = [
  // Financial calculators
  { name: "Financial Calculator", path: "/financial/financial-calculator", category: "Financial" },
  { name: "GST Calculator", path: "/financial/gst", category: "Financial" },
  { name: "Investment Calculator", path: "/financial/investment", category: "Financial" },
  { name: "Compound Interest Calculator", path: "/financial/compound-interest", category: "Financial" },
  { name: "Mortgage Calculator", path: "/financial/mortgage", category: "Financial" },
  { name: "Loan Calculator", path: "/financial/loan", category: "Financial" },
  { name: "APR Calculator", path: "/financial/apr", category: "Financial" },
  { name: "Future Value Calculator", path: "/financial/future-value", category: "Financial" },
  { name: "Present Value Calculator", path: "/financial/present-value", category: "Financial" },
  { name: "ROI Calculator", path: "/financial/roi", category: "Financial" },
  { name: "Amortization Calculator", path: "/financial/amortization", category: "Financial" },
  { name: "Inflation Calculator", path: "/financial/inflation", category: "Financial" },
  
  // Arithmetic calculators
  { name: "Basic Calculator", path: "/arithmetic/calculator", category: "Arithmetic" },
  { name: "Percentage Calculator", path: "/arithmetic/percentage", category: "Arithmetic" },
  { name: "Prime Number Calculator", path: "/arithmetic/prime-number", category: "Arithmetic" },
  { name: "Absolute Value Calculator", path: "/arithmetic/absolute-value", category: "Arithmetic" },
  { name: "Age Calculator", path: "/arithmetic/age", category: "Arithmetic" },
  { name: "Trigonometry Calculator", path: "/arithmetic/trigonometry", category: "Arithmetic" },
  { name: "Quadratic Equation Calculator", path: "/arithmetic/quadratic", category: "Arithmetic" },
  { name: "Math Solver", path: "/arithmetic/math-solver", category: "Arithmetic" },
  
  // Health calculators
  { name: "Health Calculator", path: "/health/health-calculator", category: "Health" },
  { name: "BMI Calculator", path: "/health/bmi", category: "Health" },
  { name: "Height Calculator", path: "/health/height", category: "Health" },
  
  // Physics calculators (only include implemented ones)
  { name: "Velocity Calculator", path: "/physics/velocity", category: "Physics" },
  { name: "Free Fall Calculator", path: "/physics/free-fall", category: "Physics" },
  { name: "Projectile Motion Calculator", path: "/physics/projectile-motion", category: "Physics" },
];

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (calculator: { name: string; path: string }) => {
    navigate(calculator.path);
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center">
        <Button
          variant="outline"
          className="inline-flex items-center rounded-lg border border-white/20 bg-black/80 backdrop-blur-sm px-4 py-2 text-sm text-white shadow-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Search calculators...</span>
        </Button>
      </div>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Type a calculator name..." 
          className="bg-black/80 text-white border-b border-white/20" 
        />
        <CommandList className="bg-black/80 text-white">
          <CommandEmpty>No calculators found.</CommandEmpty>
          <CommandGroup heading="Financial Calculators">
            {calculators
              .filter(calc => calc.category === "Financial")
              .map(calculator => (
                <CommandItem
                  key={calculator.name}
                  onSelect={() => handleSelect(calculator)}
                  className="text-white hover:bg-white/10"
                >
                  {calculator.name}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Arithmetic Calculators">
            {calculators
              .filter(calc => calc.category === "Arithmetic")
              .map(calculator => (
                <CommandItem
                  key={calculator.name}
                  onSelect={() => handleSelect(calculator)}
                  className="text-white hover:bg-white/10"
                >
                  {calculator.name}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Health Calculators">
            {calculators
              .filter(calc => calc.category === "Health")
              .map(calculator => (
                <CommandItem
                  key={calculator.name}
                  onSelect={() => handleSelect(calculator)}
                  className="text-white hover:bg-white/10"
                >
                  {calculator.name}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Physics Calculators">
            {calculators
              .filter(calc => calc.category === "Physics")
              .map(calculator => (
                <CommandItem
                  key={calculator.name}
                  onSelect={() => handleSelect(calculator)}
                  className="text-white hover:bg-white/10"
                >
                  {calculator.name}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
