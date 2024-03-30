import { useContext, createContext, useState } from "react";

const HomePageContext = createContext();

export const HomePageContextProvider = ({ children }) => {
  const [searchText, SetsearchText] = useState();
  const [filteredArray, SetfilteredArray] = useState([]);
  const [menuState, SetmenuState] = useState(false);
  const [folderState, SetfolderState] = useState(false);
  const [imageViewerState, SetimageViewerState] = useState(false);
  const [imageObj, SetimageObj] = useState();
  const [imageName, SetImageName] = useState();
  return (
    <HomePageContext.Provider
      value={{
        searchText,
        SetsearchText,
        filteredArray,
        SetfilteredArray,
        menuState,
        SetmenuState,
        folderState,
        SetfolderState,
        imageViewerState,
        SetimageViewerState,
        imageObj,
        SetimageObj,
        imageName,
        SetImageName,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
