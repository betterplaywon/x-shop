import React, { useState } from "react";
import Button from "@/components/Button";
import Nav from "@/components/Nav";

const NewProduct = () => {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({});

  const handleChange = e => {
    const { name, value, files } = e.target;
    // console.log(files);
    console.log(e.target);
    // const value = e.target.value;
    // const name = e.target.name;

    if (name === "file") {
      setFile(files && files[0]);

      console.log(files[0]);
      return;
    }
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const registProduct = e => {};

  return (
    <section className="w-full text-center">
      <Nav />
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {/* {success && <p className='my-2'>✅ {success}</p>} */}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
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
          placeholder="옵션들(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button buttonText="상품 등록" />
      </form>
    </section>
  );
};

export default NewProduct;
