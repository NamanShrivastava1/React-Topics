import { createContext } from "react";

export const AppContext = createContext();

const Context = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default Context;
