import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [signIn, setSignIn] = useState(true);

  const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    if (user) {
      setLoading(false);
    } else {
      setSignIn(true);
      setLoading(false);
    }
  }, [user, signIn]);

  return (
    <UserContext.Provider value={{  signIn, setSignIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;