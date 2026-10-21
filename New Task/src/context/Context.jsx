import { createContext, useState } from "react";

export const Context = createContext();

export const AppProvider = ({ children }) => {
  const [marks, setMarks] = useState([]);
  return (
    <Context.Provider value={{ marks, setMarks }}>{children}</Context.Provider>
  );
};
