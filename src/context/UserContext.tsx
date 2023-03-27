import { useEffect, useState, createContext, useContext } from "react";
import { signIn, signOutFunc, maintainUserData } from "@/pages/api/firebase";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    maintainUserData(user => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        uid: user && user.uid,
        signIn: signIn,
        signOut: signOutFunc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};
