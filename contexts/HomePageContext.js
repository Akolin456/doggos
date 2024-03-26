import { useContext, createContext, useState } from "react";

const HomePageContext = createContext();

export const HomePageContextProvider = ({ children }) => {
  const [searchText, SetsearchText] = useState();
  const [filteredArray, SetfilteredArray] = useState([]);
  return (
    <HomePageContext.Provider
      value={{ searchText, SetsearchText, filteredArray, SetfilteredArray }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
