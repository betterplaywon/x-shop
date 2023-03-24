import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { deleteBag, updateOrAddBag } from "@/pages/api/firebase";
// import { useUserContext } from "@/context/UserContext";
import { useBag } from "@/hooks/useBag";

interface MyBagCard {
  uid?: string;
}

const MyBagCard = ({ product }) => {
  // const { uid }: MyBagCard = useUserContext();
  const { id, image, option, price, quantity, title } = product;

  //230323 수정 전 코드. firebase 로직을 직접 이용해 데이터를 변경하고 있다.
  //use-query와 커스텀 훅을 사용해 깔끔하게 정리해보도록 하겠다.
  // const handlePlus = () => {
  //   updateOrAddBag(uid || "", { ...product, quantity: quantity + 1 });
  // };

  // const handleMinus = () => {
  //   updateOrAddBag(uid || "", { ...product, quantity: quantity - 1 });
  // };

  // const handleDelete = () => {
  //   deleteBag(uid, id);
  // };

  //수정 후 코드. 통신 코드를 분리해 view로서의 역할만 수행하게 만들어줬다.
  //uid는 커스텀훅에서 제공,
  const { updateOrAddBagQuery, deleteBagQuery } = useBag();

  const handlePlus = () => {
    // updateOrAddBag(uid || "", { ...product, quantity: quantity + 1 });
    updateOrAddBagQuery.mutate({ ...product, quantity: quantity + 1 });
  };

  const handleMinus = () => {
    // updateOrAddBag(uid || "", { ...product, quantity: quantity - 1 });
    updateOrAddBagQuery.mutate({ ...product, quantity: quantity - 1 });
  };

  const handleDelete = () => {
    // deleteBag(uid, id);
    deleteBagQuery.mutate(id);
  };

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-sm">{title}</p>
          <p className="text-sm font-medium text-brand">{option}</p>
          <p className="text-sm">KRW {price}</p>
        </div>
        <div className="text-base flex items-center">
          <AiOutlineMinusSquare
            className="transition-all cursor-pointer hover:text-red-600 hover:scale-110 mr-2"
            onClick={handleMinus}
          />
          <p className="text-lg font-medium">{quantity}</p>
          <BsPlusSquare
            className="transition-all cursor-pointer hover:text-red-600 hover:scale-110 ml-2"
            onClick={handlePlus}
          />
          <RiDeleteBin6Line
            className="transition-all cursor-pointer hover:text-red-600 hover:scale-110 ml-2"
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
};

export default MyBagCard;
