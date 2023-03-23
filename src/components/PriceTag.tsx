import React from "react";

const PriceTag = ({ text, price }) => {
  return (
    <div className="flex flex-col items-center bg-black text-white p-2 rounded-lg mx-5">
      <p className="text-sm font-bold">{text} :</p>
      <p className="text-base">{price}</p>
    </div>
  );
};

export default PriceTag;
