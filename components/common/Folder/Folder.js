import Styles from "./Folder.module.css";
// import FileManagerIcon from "../../../public/Assets/FileManagerIcon.png";
import MyPC from "../../../public/Assets/MyPC.png";
import File from "../../../public/Assets/FileManagerIcon.png";
import Exit from "../../../public/Assets/Exit.png";
import Maximize from "../../../public/Assets/Maximize.png";
import Minimize from "../../../public/Assets/Minimize.png";
import Back from "../../../public/Assets/Back.png";
import Forward from "../../../public/Assets/Forward.png";
import ToDesktop from "../../../public/Assets/ToDesktop.png";
import ArrowRight from "../../../public/Assets/arrow-right.png";
import Search from "../../../public/Assets/SearchIcon.png";
import NewIcon from "../../../public/Assets/NewIcon.png";
import ViewArrow from "../../../public/Assets/ViewArrow.png";
import Cut from "../../../public/Assets/Cut.png";
import Copy from "../../../public/Assets/Copy.png";
import Paste from "../../../public/Assets/Paste.png";
import Delete from "../../../public/Assets/Delete.png";
import Home from "../../../public/Assets/home.png";
import Download from "../../../public/Assets/Download.png";
import Document from "../../../public/Assets/Document.png";
import Picture from "../../../public/Assets/Image.png";
import Music from "../../../public/Assets/Music.png";

import MediaPlayer from "../../../public/Assets/MediaPlayer.png";

import Image from "next/image";
import { useHomePageContext } from "@/contexts/HomePageContext";
import { useEffect, useState } from "react";
import { newkindofobj } from "../../../dummy/dummy";

const Folder = () => {
  const categoriesFolderArray = [
    { object: Home, name: "Home" },
    { object: MyPC, name: "Desktop" },
    { object: Download, name: "Downloads" },
    { object: Document, name: "Documents" },
    { object: Picture, name: "Pictures" },
    { object: Music, name: "Music" },
    { object: MediaPlayer, name: "Videos" },
  ];
  const { folderState, SetfolderState } = useHomePageContext();
  const [pathArray, setpathArray] = useState(["Home"]);

  const [selectedCategory, SetselectedCategory] = useState({
    object: Home,
    name: "Home",
  });
  const [selectedCategoryObjects, SetselectedCategoryObjects] = useState();

  const [isBackButtonDisabled, SetisButtonDisabled] = useState(false);

  useEffect(() => {
    handleGetChildren(selectedCategory.name);
  }, [selectedCategory]);

  const handleGetChildren = (name) => {
    if (!newkindofobj[name]) return;
    const selectedObj1 = Object.values(newkindofobj[name].Children);

    SetselectedCategoryObjects(selectedObj1);
  };

  const handleFolderClick = (name) => {
    console.log(pathArray, "folderClick");
    pathArray.push(name);
    setpathArray(pathArray);
    let childObj = newkindofobj;
    pathArray.map((a, i) => {
      console.log(childObj, pathArray, "childobj");
      if (i !== 0) {
        childObj = childObj[a].Children;
      } else {
        childObj = childObj[a].Children;
      }
    });
    const childArray = [];
    Object.keys(childObj).forEach((a) => {
      childArray.push(childObj[a]);
    });
    SetselectedCategoryObjects(childArray);
  };
  const handleCategorySelect = ({ object, name }) => {
    handleGetChildren(name);
    setpathArray([name]);
  };
  const handleBack = () => {
    pathArray.pop();
    setpathArray([...pathArray]);
    let childObj = newkindofobj;
    pathArray.forEach((a, i) => {
      console.log(childObj, pathArray, "childobj");
      childObj = childObj[a].Children;
    });
    const childArray = Object.values(childObj);
    SetselectedCategoryObjects(childArray);

    console.log(pathArray, "handleBack");
  };

  const handleExit = () => {
    SetfolderState(false);
    SetselectedCategory({
      object: Home,
      name: "Home",
    });
  };
  console.log(pathArray, "patharray");
  if (folderState)
    return (
      <div className={Styles.folderDirectory}>
        <div className={Styles.folderBackground}>
          <div className={Styles.navBar}>
            <div className={Styles.folderNameContainer}>
              <Image src={selectedCategory.object} height={30} width={35} />
              <div className={Styles.folderName}>{selectedCategory.name}</div>
            </div>
            <div
              className={Styles.navigation}
              style={{ background: "transparent", cursor: "pointer" }}
            >
              <Image
                src={Minimize}
                height={60}
                style={{ background: "transparent", cursor: "pointer" }}
              />
              <Image
                src={Maximize}
                height={60}
                style={{ background: "transparent", cursor: "pointer" }}
              />
              <Image src={Exit} height={60} onClick={handleExit} />
            </div>
          </div>
          <div className={Styles.folderPathAndNavigation}>
            <div className={Styles.folderNavigation}>
              <Image
                src={Back}
                style={{
                  cursor: "pointer",
                  pointerEvents: pathArray.length > 1 ? "auto" : "none",
                  opacity: pathArray.length > 1 ? "1.3" : "0.3",
                }}
                onClick={handleBack}
              />
              <Image src={Forward} />
              <Image src={ToDesktop} />
            </div>
            <div className={Styles.path}>
              <Image src={selectedCategory.object} height={30} />
              <Image src={ArrowRight} height={30} width={30} />
              <div className={Styles.folderName}>{selectedCategory.name}</div>
            </div>
            <div className={Styles.searchInFolder}>
              <div className={Styles.folderName}>Search</div>
              <Image src={Search} height={30} width={30} />
            </div>
          </div>
        </div>

        <div className={Styles.Content}>
          <div className={Styles.NewFolderNavigation}>
            <div className={Styles.newicon}>
              <Image src={NewIcon} />
            </div>
            <div className={Styles.Newicon}>New</div>
            <div className={Styles.ViewArrow}>
              <Image src={ViewArrow} />
            </div>

            <div className={Styles.Line}></div>
            <div className={Styles.Cuticon}>
              <Image src={Cut} />
            </div>
            <div className={Styles.Copyicon}>
              <Image src={Copy} />
            </div>
            <div className={Styles.Pasteicon}>
              <Image src={Paste} />
            </div>
            <div className={Styles.Deleteicon}>
              <Image src={Delete} />
            </div>
            <div className={Styles.Line}></div>
          </div>
          <div className={Styles.body}>
            <div className={Styles.inFolderNavigations}>
              {categoriesFolderArray.map((category, index) => (
                <div
                  key={index}
                  className={Styles.iconsAndNameContainer}
                  onClick={(e) => {
                    handleCategorySelect(category);
                  }}
                >
                  <Image src={category.object} height={35} width={32} />
                  <div className={Styles.iconname}>{category.name}</div>
                </div>
              ))}
            </div>

            <div className={Styles.mainBody}>
              <div className={Styles.classifier}>
                <div className={Styles.classifierName}>Name</div>
                <div className={Styles.classifierSize}>Size</div>
                <div className={Styles.classifierItemType}>Item Type</div>
                <div className={Styles.classifierDateModified}>
                  Date Modified
                </div>
              </div>
              <div className={Styles.mainContents}>
                {selectedCategoryObjects &&
                selectedCategoryObjects.length > 0 ? (
                  selectedCategoryObjects.map(
                    ({ name, size, type, dateModified }, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          cursor: "pointer",
                        }}
                        onClick={() => handleFolderClick(name)}
                      >
                        <div className={Styles.contentName}>
                          <Image src={File} height={30} width={30} alt="file" />
                          {name}
                        </div>
                        <div className={Styles.contentSize}>{size}</div>
                        <div className={Styles.contentItemType}>{type}</div>
                        <div className={Styles.contentDateModified}>
                          {dateModified}
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div style={{ color: "white" }}>no items</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Folder;

// useEffect(() => {
//   pathArray.push(selectedCategory.name);

//   setPathArray([...pathArray]);
//   handleGetChildren(pathArray);
// }, []);

// const handleCategorySelect = ({ object, name }) => {
//   const newArray1 = [];
//   newArray1.push(name);
//   console.log(pathArray, newArray1, "path2");
//   handleGetChildren(newArray1);
// };

// const handleGetChildren = (newArray1) => {
//   if (!newkindofobj[newArray1[newArray1.length - 1]]) return;
//   const selectedObj1 = Object.values(
//     newkindofobj[newArray1[newArray1.length - 1]].Children
//   );

//   SetselectedCategoryObjects(selectedObj1);
//   setPathArray(newArray1);
// };
