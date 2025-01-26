import React, { useState } from "react";
import { evaluate } from "mathjs";
import {Display} from "./Display";
import {Buttons} from "./Buttons";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(evaluate(expression));
        
      } catch {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Scientific Calculator</h1>
      <div className="w-96 p-5 bg-white rounded-lg shadow-md">
        <Display expression={expression} result={result} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
};

export {Calculator};
