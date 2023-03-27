import React, { useState } from "react";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { useBag } from "@/hooks/useBag";

interface ProductDetailType {
  category?: string;
  description?: string;
  image?: string;
  options?: any;
  price?: string;
  title?: string;
  id?: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const query = router.query;
  const {
    category,
    description,
    image,
    options,
    price,
    title,
    id,
  }: ProductDetailType = query;

  const [selectOption, setSelectOption] = useState(options?.[0]);

  const handleSelect = e => {
    const { value } = e.target;
    setSelectOption(value);
  };

  const { updateOrAddBagQuery } = useBag();

  const handleMyBag = () => {
    const productInfo: any = {
      image,
      option: selectOption,
      price,
      title,
      id,
      quantity: 1,
    };

    // updateOrAddBag(uid || "", productInfo);
    updateOrAddBagQuery.mutate(productInfo);
    alert("쇼핑백에 저장되었습니다");
  };

  return (
    <>
      <Nav />
      <p className="mt- 3 text-gray-600 text-lg">{category}</p>
      <section className="flex flex-col md:flex-row justify-center">
        <img
          className="w-96 mx-auto mb-2"
          src={image}
          alt={title}
          width="300"
          height="300"
        />
        <article className="flex flex-col">
          <h2 className="font-medium text-xl">{title}</h2>
          <p className="font-bold text-sm line-through">KRW {price}</p>
          <p className="my-1 text-sm">detail: {description}</p>
          <label className="text-sm" htmlFor="select">
            Size
          </label>
          <select
            id="select"
            className="my-1"
            onChange={handleSelect}
            value={selectOption}
          >
            {options?.map((opt, idx) => (
              <option key={idx}>{opt}</option>
            ))}
          </select>
          <Button buttonText="BUY" onClick={handleMyBag} disabled={false} />
        </article>
      </section>
    </>
  );
};

export default ProductDetail;
