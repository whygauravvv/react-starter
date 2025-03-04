import { createContext, useContext, useState, ReactNode } from "react";

const StateContext = createContext<any>(null);

const StateContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isAuthInitialized,
        setIsAuthInitialized,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => {
  return useContext(StateContext);
};

export { StateContextProvider, useStateContext };
