
import React, { useState } from "react";
import { Camera, Keyboard, ChevronDown, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MathSolver = () => {
  const [expression, setExpression] = useState("");
  const [fullPad, setFullPad] = useState(false);
  const [solution, setSolution] = useState("");
  const [operation, setOperation] = useState("simplify");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleSymbolClick = (symbol: string) => {
    setExpression(prev => prev + symbol);
  };

  const handleAction = (action: string) => {
    setOperation(action);
  };

  const solveMathProblem = (expression: string, operation: string) => {
    // Basic solving functionality for demo purposes
    try {
      if (operation === "simplify") {
        // Handle basic arithmetic
        if (/^[0-9+\-*/().^ ]+$/.test(expression)) {
          // eslint-disable-next-line no-eval
          return eval(expression.replace("^", "**"));
        }
        return "Simplified: " + expression;
      }
      
      if (operation === "solve for") {
        // Handle basic quadratics (ax² + bx + c = 0)
        const quadraticRegex = /^([+-]?\d*)?x\^2\s*([+-]\d*)?x\s*([+-]\d+)?\s*=\s*0$/;
        const match = expression.replace(/\s/g, "").match(quadraticRegex);
        
        if (match) {
          let a = match[1] ? (match[1] === "+" ? 1 : match[1] === "-" ? -1 : parseFloat(match[1])) : 1;
          let b = match[2] ? (match[2] === "+" ? 1 : match[2] === "-" ? -1 : parseFloat(match[2])) : 0;
          let c = match[3] ? parseFloat(match[3]) : 0;
          
          const discriminant = b * b - 4 * a * c;
          
          if (discriminant < 0) {
            return "No real solutions";
          } else if (discriminant === 0) {
            const x = -b / (2 * a);
            return `x = ${x}`;
          } else {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return `x = ${x1} or x = ${x2}`;
          }
        }
        
        // Linear equations (ax + b = 0)
        const linearRegex = /^([+-]?\d*)?x\s*([+-]\d+)?\s*=\s*0$/;
        const linearMatch = expression.replace(/\s/g, "").match(linearRegex);
        
        if (linearMatch) {
          let a = linearMatch[1] ? (linearMatch[1] === "+" ? 1 : linearMatch[1] === "-" ? -1 : parseFloat(linearMatch[1])) : 1;
          let b = linearMatch[2] ? parseFloat(linearMatch[2]) : 0;
          
          return `x = ${-b / a}`;
        }
        
        return "Couldn't solve equation. Format as ax² + bx + c = 0 or ax + b = 0";
      }
      
      if (operation === "inverse") {
        // Handle function inverse for simple functions
        if (expression.includes("f(x)")) {
          return "Inverse: f⁻¹(x)";
        }
        return "Couldn't find inverse. Format as f(x) = ...";
      }
      
      if (operation === "tangent") {
        // Simple tangent equation
        return "Tangent line: y = mx + b";
      }
      
      if (operation === "line") {
        // Simple line equation
        return "Line equation: y = mx + b";
      }
      
      return "Operation not supported yet";
    } catch (error) {
      console.error("Error solving expression:", error);
      return "Error: Could not solve expression";
    }
  };

  const handleSolve = () => {
    if (!expression) {
      toast({
        title: "Error",
        description: "Please enter an expression",
        variant: "destructive",
      });
      return;
    }
    
    const result = solveMathProblem(expression, operation);
    setSolution(result);
  };

  const clearInput = () => {
    setExpression("");
    setSolution("");
  };

  return (
    <div className="calculator-card w-full max-w-3xl mx-auto">
      <div className="p-4 sm:p-6 bg-white/5 rounded-2xl shadow-lg">
        {/* Header with full pad toggle */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-white">Math Solver</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Full pad</span>
            <Switch
              checked={fullPad}
              onCheckedChange={setFullPad}
              className="data-[state=checked]:bg-beige"
            />
          </div>
        </div>

        {/* Math Keypad */}
        <div className="bg-white/5 rounded-xl p-4 mb-4">
          <div className="grid grid-cols-4 sm:grid-cols-11 gap-2 mb-4">
            <Button 
              onClick={() => handleSymbolClick("x²")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              x²
            </Button>
            <Button 
              onClick={() => handleSymbolClick("x^2")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              x<sup>2</sup>
            </Button>
            <Button 
              onClick={() => handleSymbolClick("log")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              log
            </Button>
            <Button 
              onClick={() => handleSymbolClick("√")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              √
            </Button>
            <Button 
              onClick={() => handleSymbolClick("∛")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              ∛
            </Button>
            <Button 
              onClick={() => handleSymbolClick("≤")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              ≤
            </Button>
            <Button 
              onClick={() => handleSymbolClick("≥")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              ≥
            </Button>
            <Button 
              onClick={() => handleSymbolClick("x")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              x
            </Button>
            <Button 
              onClick={() => handleSymbolClick(".")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              .
            </Button>
            <Button 
              onClick={() => handleSymbolClick("=")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              =
            </Button>
            <Button 
              onClick={() => handleSymbolClick("0")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              0
            </Button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-11 gap-2 mb-4">
            <Button 
              onClick={() => handleSymbolClick("+")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              +
            </Button>
            <Button 
              onClick={() => handleSymbolClick("-")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              -
            </Button>
            <Button 
              onClick={() => handleSymbolClick("*")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              ×
            </Button>
            <Button 
              onClick={() => handleSymbolClick("/")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              ÷
            </Button>
            <Button 
              onClick={() => handleSymbolClick("(")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              (
            </Button>
            <Button 
              onClick={() => handleSymbolClick(")")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              )
            </Button>
            <Button 
              onClick={() => handleSymbolClick("1")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              1
            </Button>
            <Button 
              onClick={() => handleSymbolClick("2")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              2
            </Button>
            <Button 
              onClick={() => handleSymbolClick("3")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              3
            </Button>
            <Button 
              onClick={() => handleSymbolClick("4")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              4
            </Button>
            <Button 
              onClick={() => handleSymbolClick("5")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              5
            </Button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-11 gap-2">
            <Button 
              onClick={() => handleSymbolClick("6")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              6
            </Button>
            <Button 
              onClick={() => handleSymbolClick("7")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              7
            </Button>
            <Button 
              onClick={() => handleSymbolClick("8")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              8
            </Button>
            <Button 
              onClick={() => handleSymbolClick("9")} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
            >
              9
            </Button>
            <Button 
              onClick={clearInput} 
              variant="outline" 
              className="p-2 h-10 flex items-center justify-center text-red-500 border-red-500/30 hover:bg-red-500/10"
            >
              Clear
            </Button>
          </div>

          {fullPad && (
            <div className="grid grid-cols-4 sm:grid-cols-11 gap-2 mt-4">
              <Button 
                onClick={() => handleSymbolClick("d/dx")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                d/dx
              </Button>
              <Button 
                onClick={() => handleSymbolClick("∂/∂x")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                ∂/∂x
              </Button>
              <Button 
                onClick={() => handleSymbolClick("∫")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                ∫
              </Button>
              <Button 
                onClick={() => handleSymbolClick("∬")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                ∬
              </Button>
              <Button 
                onClick={() => handleSymbolClick("lim")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                lim
              </Button>
              <Button 
                onClick={() => handleSymbolClick("Σ")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                Σ
              </Button>
              <Button 
                onClick={() => handleSymbolClick("∞")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                ∞
              </Button>
              <Button 
                onClick={() => handleSymbolClick("θ")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                θ
              </Button>
              <Button 
                onClick={() => handleSymbolClick("f(x)")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                f(x)
              </Button>
              <Button 
                onClick={() => handleSymbolClick("π")} 
                variant="outline" 
                className="p-2 h-10 flex items-center justify-center text-beige border-beige/30 hover:bg-beige/10"
              >
                π
              </Button>
            </div>
          )}

          {/* Expand/Collapse button */}
          <div className="flex justify-center mt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setFullPad(!fullPad)} 
              className="text-beige hover:bg-beige/10"
            >
              <ChevronDown className={`h-5 w-5 transition-transform ${fullPad ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-4">
          <Button 
            onClick={() => handleAction("simplify")} 
            variant={operation === "simplify" ? "default" : "outline"}
            className={operation === "simplify" ? "bg-beige text-black hover:bg-beige/90" : "text-beige border-beige/30 hover:bg-beige/10"}
          >
            simplify
          </Button>
          <Button 
            onClick={() => handleAction("solve for")} 
            variant={operation === "solve for" ? "default" : "outline"}
            className={operation === "solve for" ? "bg-beige text-black hover:bg-beige/90" : "text-beige border-beige/30 hover:bg-beige/10"}
          >
            solve for
          </Button>
          <Button 
            onClick={() => handleAction("inverse")} 
            variant={operation === "inverse" ? "default" : "outline"}
            className={operation === "inverse" ? "bg-beige text-black hover:bg-beige/90" : "text-beige border-beige/30 hover:bg-beige/10"}
          >
            inverse
          </Button>
          <Button 
            onClick={() => handleAction("tangent")} 
            variant={operation === "tangent" ? "default" : "outline"}
            className={operation === "tangent" ? "bg-beige text-black hover:bg-beige/90" : "text-beige border-beige/30 hover:bg-beige/10"}
          >
            tangent
          </Button>
          <Button 
            onClick={() => handleAction("line")} 
            variant={operation === "line" ? "default" : "outline"}
            className={operation === "line" ? "bg-beige text-black hover:bg-beige/90" : "text-beige border-beige/30 hover:bg-beige/10"}
          >
            line
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-beige border-beige/30 hover:bg-beige/10">
                See All <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/90 border border-beige/30 text-beige">
              <DropdownMenuItem onClick={() => handleAction("factor")}>
                Factor
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction("expand")}>
                Expand
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction("derivative")}>
                Derivative
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction("integral")}>
                Integral
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction("limit")}>
                Limit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-2 mb-4">
          <Input
            value={expression}
            onChange={handleInputChange}
            placeholder="Enter a problem (e.g., x^2+2x+1=0)"
            className="flex-1 bg-white/5 border-beige/30 text-white placeholder:text-white/60"
          />
          <Button variant="outline" className="bg-gray-100/10 border-beige/30">
            <Camera className="h-5 w-5 text-beige" />
          </Button>
          <Button variant="outline" className="bg-gray-100/10 border-beige/30">
            <Keyboard className="h-5 w-5 text-beige" />
          </Button>
          <Button 
            onClick={handleSolve} 
            className="bg-red-500 hover:bg-red-600 text-white px-6"
          >
            Go
          </Button>
        </div>

        {/* Solution Area */}
        {solution && (
          <div className="bg-white/5 p-4 rounded-xl border border-beige/30">
            <h3 className="text-lg font-medium text-beige mb-2">Solution</h3>
            <div className="text-white">{solution}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathSolver;
