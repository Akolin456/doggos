import Styles from "./Folder.module.css";
import FileManagerIcon from "../../../public/Assets/FileManagerIcon.png";
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
import Image1 from "../../../public/Assets/image1.jpg";
import Image2 from "../../../public/Assets/image2.jpeg";
import Image from "next/image";
import { useHomePageContext } from "@/contexts/HomePageContext";

const Folder = () => {
  const imageArray = [
    { object: Image1, name: "Image1" },
    { object: Image2, name: "Image2" },
  ];

  const {
    folderState,
    SetfolderState,
    SetimageObj,
    SetimageViewerState,
    SetImageName,
  } = useHomePageContext();

  const handleExit = () => {
    SetfolderState(false);
  };
  const handleImageClick = (imageobj, imageName) => {
    SetimageObj(imageobj);
    SetImageName(imageName);
    SetimageViewerState(true);
    SetfolderState(false);
  };

  if (folderState)
    return (
      <div className={Styles.folderBackground}>
        <div className={Styles.navBar}>
          <div className={Styles.folderNameContainer}>
            <Image src={File} height={30} width={35} />
            <div className={Styles.folderName}>Documents</div>
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
            <Image src={Back} />
            <Image src={Forward} />
            <Image src={ToDesktop} />
          </div>
          <div className={Styles.path}>
            <Image src={MyPC} height={30} />
            <Image src={ArrowRight} height={30} width={30} />
            <div className={Styles.folderName}>Documents</div>
          </div>
          <div className={Styles.searchInFolder}>
            <div className={Styles.folderName}>Search Documents</div>
            <Image src={Search} height={30} width={30} />
          </div>
        </div>
        <div className={Styles.body}>
          <div className={Styles.inFolderNavigations}>
            <div className={Styles.infolderNameContainer}>
              <Image src={File} height={30} width={35} />
              <div className={Styles.folderName}>Documents</div>
            </div>
          </div>
          <div className={Styles.mainBody}>
            {imageArray.map((image) => (
              <div
                className={Styles.folderIconsContainer}
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick(image.object, image.name)}
              >
                <Image src={image.object} height={50} width={70} />
                <div className={Styles.folderName}>{image.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Folder;
