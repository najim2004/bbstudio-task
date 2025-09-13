import React from "react";

function Button({ children, className, onClick }) {
  return (
    <button
      className={`text-gray-800 border border-gray-100 p-2.5 rounded-md font-light bg-[#d2f0a3] hover:bg-[#B6DB7D] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
