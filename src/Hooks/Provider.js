import React, { createContext } from "react";
import Data from "./Data";
export const ProviderContext = createContext(null);
const Provider = ({ children }) => {
  const allContext = Data();
  return (
    <ProviderContext.Provider value={allContext}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
