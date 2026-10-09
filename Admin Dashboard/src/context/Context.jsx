import { createContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useContext = () => useContext(AppContext);
