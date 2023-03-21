import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, id, description, category, image } = product;
  return (
    <li className="cursor-pointer overflow-hidden ">
      <img className="" src={image} />
      <div className="flex flex-col items-center">
        <p className="text-sm mt-3 ">{title}</p>
        <p className="text-sm">KRW {price}</p>
        <p className="mb-2 px-2 text-gray-600">{category}</p>
      </div>
    </li>
  );
};

export default ProductCard;
