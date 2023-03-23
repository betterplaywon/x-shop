import Link from "next/link";
import UserProfile from "./UserProfile";
import Button from "./Button";

import { useUserContext } from "@/context/UserContext";
import BagStatus from "./BagStatus";

interface NavType {
  user?: object;
  signIn?: () => void;
  signOut?: () => void;
}

const Nav = () => {
  const { user, signIn, signOut }: NavType = useUserContext();

  return (
    <header className="flex justify-between items-center mt-3 p-3">
      <nav className="flex items-center gap-5 font-normal text-xs">
        <Link
          className="flex items-center text-base text-logoColor shrink-0 mr-5"
          href="/"
        >
          <h1 className="text-2xl font-bold">X - SHOP</h1>
        </Link>

        <Link href="/product">Product</Link>
        {user?.includeAdminUid && <Link href="/product/new">New Product</Link>}
        <Link href="/myBag">my Bag</Link>
      </nav>
      <nav className="flex items-center gap-3 font-medium text-sm">
        <Link href="/myBag">
          <BagStatus />
        </Link>
        <UserProfile user={user} />
        {!user && (
          <Button buttonText={"sign In"} onClick={signIn} disabled={false} />
        )}
        {user && (
          <Button buttonText={"sign Out"} onClick={signOut} disabled={false} />
        )}
      </nav>
    </header>
  );
};

export default Nav;
