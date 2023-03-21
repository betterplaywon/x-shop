import React from "react";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/firebase";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";

const ProductAll = () => {
  const router = useRouter();
  const { isLoading, error, data: product } = useQuery(["product"], getProduct);

  return (
    <div>
      <Nav />
      {router.pathname === "/" && <Banner />}
      {isLoading && <p>LOADING</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-3">
        {product &&
          product.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};

export default ProductAll;
