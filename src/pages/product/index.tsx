import React from "react";
import { useRouter } from "next/router";
import Nav from "@/components/Nav";
// import { useQuery } from "@tanstack/react-query";
// import { getProduct } from "../api/firebase";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import { useProducts } from "@/hooks/useProducts";

const ProductAll = () => {
  const router = useRouter();
  // const { isLoading, error, data: product } = useQuery(["product"], getProduct);
  const {
    // getProducts를 함수로 착각할 수 있지만 이건 쿼리를 가지고 있는 객체다.
    productsQuery: { isLoading, error, data: product },
  } = useProducts();

  return (
    <div>
      <Nav />
      {router.pathname === "/" && <Banner />}
      {isLoading && <p>LOADING</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-3">
        {product &&
          product?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};

export default ProductAll;
