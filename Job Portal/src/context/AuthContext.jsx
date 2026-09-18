import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};