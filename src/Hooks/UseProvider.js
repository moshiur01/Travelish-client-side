import { useContext } from "react";
import { ProviderContext } from "./Provider";

const UseProvider = () => {
  const auth = useContext(ProviderContext);
  return auth;
};

export default UseProvider;
