import React from "react";
import Nav from "@/components/Nav";
import { getBag } from "./api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "@/context/UserContext";
import MyBagCard from "@/components/MyBagCard";
import PriceTag from "@/components/PriceTag";
import Button from "@/components/Button";

interface MyBagType {
  user?: object;
  uid?: string;
}

const MyBag = () => {
  const { user, uid }: MyBagType = useUserContext();
  const { isLoading, data: products }: any = useQuery(["bag"], () =>
    getBag(uid),
  );
  const shippingPrice = 3000;
  const totalPrice = products
    ? products?.reduce(
        (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
        0,
      )
    : null;

  const handleOrder = () => {
    console.log("주문완료");
  };

  if (isLoading) return <p>Loading</p>;

  const productCount = products?.length > 0;
  console.log(products);
  return (
    <>
      <Nav />
      <section>
        <p className="my-3 text-gray-600 text-lg text-center pb-2 border-b border-gray-300 ">
          MY BAG
        </p>
        {!productCount && <p>Its Empty</p>}
        {productCount && (
          <div className="p-7 flex flex-col">
            <ul className="mb-4 border-b border-gray-300">
              {products?.map(product => (
                <MyBagCard key={product.id} product={product} />
              ))}
            </ul>

            <article className="flex justify-between items-center mb-5 md:px-7">
              <PriceTag text="ALL PRODUCT PRICE" price={totalPrice} />
              <p className="text-xl font-bold">+</p>
              <PriceTag text="DELIVERY PRICE" price={shippingPrice} />
              <p className="text-xl font-bold">=</p>
              <PriceTag text="TOTAL PRICE" price={totalPrice + shippingPrice} />
            </article>
            <Button buttonText="ORDER" onClick={handleOrder} disabled={false} />
          </div>
        )}
      </section>
    </>
  );
};

export default MyBag;
