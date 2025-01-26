import React from "react";

const Display = ({ expression, result }) => {
  return (
    <div className="mb-4">
      <div className="text-gray-500 text-right text-lg bg-gray-200 rounded-md p-2">
        {expression || "0"}
      </div>
      <div className="text-black text-right text-2xl font-bold bg-gray-300 rounded-md p-2 mt-2">
        {result}
      </div>
    </div>
  );
};

export {Display};
