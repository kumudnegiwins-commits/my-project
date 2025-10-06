import React from "react";

const Button = ({ text = "View All Products", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-12 h-[56px] bg-[#DB4444] hover:bg-green-600 text-white font-semibold rounded-sm shadow flex items-center justify-center transition-colors duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
