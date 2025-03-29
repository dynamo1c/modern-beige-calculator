
import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [prevResult, setPrevResult] = useState(null);

  const handleNumber = (num) => {
    if (display === "0" || display === "Error") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op) => {
    if (display === "Error") return;
    
    setEquation(equation + display + op);
    setDisplay("0");
  };

  const handleFunction = (func) => {
    if (func === "AC") {
      setDisplay("0");
      setEquation("");
      setPrevResult(null);
    } else if (func === "+/-") {
      setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);
    } else if (func === "%") {
      setDisplay((parseFloat(display) / 100).toString());
    }
  };

  const handleEquals = () => {
    try {
      const finalEquation = equation + display;
      const sanitizedEquation = finalEquation
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
      
      // Using Function instead of eval for better security
      const result = new Function('return ' + sanitizedEquation)();
      
      setDisplay(result.toString());
      setEquation("");
      setPrevResult(result);
    } catch (e) {
      setDisplay("Error");
      setEquation("");
    }
  };

  const handleDecimal = () => {
    if (display.includes(".")) return;
    setDisplay(display + ".");
  };

  return (
    <div className="rounded-3xl bg-black/90 backdrop-blur-lg p-6 shadow-calc transition-transform duration-500 hover:scale-[1.02] w-full max-w-[320px] h-full">
      <div className="calc-display bg-black/30 text-white">{display}</div>
      
      <div className="grid grid-cols-4 gap-3">
        <button className="calc-button-function bg-beige text-black" onClick={() => handleFunction("AC")}>AC</button>
        <button className="calc-button-function bg-beige text-black" onClick={() => handleFunction("+/-")}>+/-</button>
        <button className="calc-button-function bg-beige text-black" onClick={() => handleFunction("%")}>%</button>
        <button className="calc-button-operation" onClick={() => handleOperation("÷")}>÷</button>
        
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("7")}>7</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("8")}>8</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("9")}>9</button>
        <button className="calc-button-operation" onClick={() => handleOperation("×")}>×</button>
        
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("4")}>4</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("5")}>5</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("6")}>6</button>
        <button className="calc-button-operation" onClick={() => handleOperation("-")}>-</button>
        
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("1")}>1</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("2")}>2</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={() => handleNumber("3")}>3</button>
        <button className="calc-button-operation" onClick={() => handleOperation("+")}>+</button>
        
        <button className="calc-button-number col-span-2 bg-black/30 text-white" onClick={() => handleNumber("0")}>0</button>
        <button className="calc-button-number bg-black/30 text-white" onClick={handleDecimal}>.</button>
        <button className="calc-button-operation" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
