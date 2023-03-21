import React, { useState } from "react";
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import { uploadImage } from "../api/upload";
import Image from "next/image";
import { addNewProduct } from "../api/firebase";

const NewProduct = () => {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFile(files && files[0]);
    }
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const registProduct = e => {
    e.preventDefault();
    setIsLoading(true);
    uploadImage(file).then(res => {
      console.log(res);
      addNewProduct(product, res).then(() => alert("상품 등록 완료"));
      setIsLoading(false);
      setProduct({});
    });
  };

  return (
    <section className="w-full text-center">
      <Nav />
      <h2 className="text-2xl font-bold my-4">NEW PRODUCT REGIST</h2>

      {file && (
        <Image
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
          width="300"
          height="300"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={registProduct}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          placeholder="사이즈 작성 시 콤마 사용"
          required
          onChange={handleChange}
        />
        <Button
          buttonText={isLoading ? "upload" : "regist"}
          disabled={isLoading}
        />
      </form>
    </section>
  );
};

export default NewProduct;
