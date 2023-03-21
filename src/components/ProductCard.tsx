import React from "react";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const { title, price, id, description, category, image } = product;

  const routeToDetail = () => {
    router.push({ pathname: `/product/${id}`, query: product });
  };

  return (
    <li className="cursor-pointer overflow-hidden" onClick={routeToDetail}>
      <img className="" src={image} />
      <div className="flex flex-col items-center">
        <p className="text-sm mt-3 ">{title}</p>
        <p className="text-sm line-through">KRW {price}</p>
        <p className="mb-2 px-2 text-gray-600">{category}</p>
      </div>
    </li>
  );
};

export default ProductCard;
