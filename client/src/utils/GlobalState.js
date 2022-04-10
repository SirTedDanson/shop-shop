import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

console.log("StoreContext: ", StoreContext)

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
  });
  // use this to confirm it works!
  console.log("state: ", state);
  console.log("dispatch: ", dispatch);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };