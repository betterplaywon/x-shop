import React from "react";

interface ButtonType {
  buttonText?: string;
  onClick?: () => void;
}

const Button = ({ buttonText, onClick }: ButtonType) => {
  return (
    <button
      className="bg-brand px-3 py-2 text-white rounded-sm hover:bg-yellow-400"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
