import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteBag, updateOrAddBag } from "@/pages/api/firebase";
import { useUserContext } from "@/context/UserContext";

interface MyBagCard {
  uid?: string;
}

const MyBagCard = ({ product }) => {
  const { uid }: MyBagCard = useUserContext();
  const { id, image, option, price, quantity, title } = product;

  const handlePlus = () => {
    updateOrAddBag(uid || "", { ...product, quantity: quantity + 1 });
  };

  const handleMinus = () => {
    updateOrAddBag(uid || "", { ...product, quantity: quantity - 1 });
  };

  const handleDelete = () => {
    deleteBag(uid, id);
  };

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex flex-3 justify-between ml-4">
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
