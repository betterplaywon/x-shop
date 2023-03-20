import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOutFunc, maintainUserData } from "@/pages/api/firebase";
import UserProfile from "./UserProfile";
import Button from "./Button";
import { HiOutlineHome } from "react-icons/hi";

const Nav = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    maintainUserData(user => {
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between items-center mt-3 p-3">
      <nav className="flex items-center gap-5 font-medium text-sm">
        <Link
          className="flex items-center text-base text-logoColor shrink-0 mr-5"
          href="/"
        >
          <h1 className="text-xl">X - SHOP</h1>
        </Link>

        <Link href='"/product"'>Product</Link>
        <Link href="/product/new">New Product</Link>
        <Link href="/myBag">mybag</Link>
      </nav>
      <nav className="flex items-center gap-3 font-medium text-sm">
        <UserProfile user={user} />
        {!user && <Button buttonText={"sign In"} onClick={signIn} />}
        {user && <Button buttonText={"sign Out"} onClick={signOutFunc} />}
      </nav>
    </header>
  );
};

export default Nav;
