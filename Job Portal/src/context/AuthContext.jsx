// import React from 'react'

import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        contact,
        setContact,
        password,
        setPassword,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
