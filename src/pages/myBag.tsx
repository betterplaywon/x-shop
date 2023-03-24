import React from "react";
import Nav from "@/components/Nav";

import MyBagCard from "@/components/MyBagCard";
import PriceTag from "@/components/PriceTag";
import Button from "@/components/Button";
import { useBag } from "@/hooks/useBag";

const MyBag = () => {
  const {
    getBagQuery: { isLoading, data: products },
  }: any = useBag();

  console.log(products);

  const shippingPrice = 3000;

  const totalPrice = products?.reduce(
    (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
    0,
  );

  const handleOrder = () => {
    console.log("주문완료");
  };

  if (isLoading) return <p>Loading</p>;

  const productCount = products?.length > 0;

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
