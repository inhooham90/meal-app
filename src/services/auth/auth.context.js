import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import { loginRequest } from "./auth.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
