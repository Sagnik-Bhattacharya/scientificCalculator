import React from "react";

const Buttons = ({ handleClick }) => {
  const buttons = [
    "AC", "(", ")", "/", "e",
    "9", "8", "7","6", "*",
     "5", "4", "3", "2","-",
    "1", "0", "+",
    "0", ".", "^", "=",
    "sin(", "cos(", "tan(", "sqrt(",
    "nthRoot(", "log(", "ln(",
    "!"
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(button)}
          className="bg-blue-500 text-white rounded-lg py-2 px-4 font-semibold text-lg hover:bg-blue-600"
        >
          {button === "nthRoot(" ? "Root(": ""}
          {button === "!"? "n": ""}
          {button}
        </button>
      ))}
    </div>
  );
};

export {Buttons};
