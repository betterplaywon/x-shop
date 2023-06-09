import React from "react";

interface ButtonType {
  buttonText?: string;
  onClick?: () => void;
  disabled: boolean;
}

const Button = ({ buttonText, onClick, disabled }: ButtonType) => {
  return (
    <button
      className="bg-brand px-3 py-2 text-white rounded-sm hover:bg-white hover:text-black hover:border-2 border-solid border-black"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
