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
import NewIcon from "../../../public/Assets/NewIcon.png";
import ViewArrow from "../../../public/Assets/ViewArrow.png";
import Cut from "../../../public/Assets/Cut.png";
import Copy from "../../../public/Assets/Copy.png";
import Paste from "../../../public/Assets/Paste.png";
import Delete from "../../../public/Assets/Delete.png";
import Home from "../../../public/Assets/Home.png";
import Download from "../../../public/Assets/Download.png";
import Document from "../../../public/Assets/Document.png";
import Picture from "../../../public/Assets/Image.png";
import Music from "../../../public/Assets/Music.png";
import Image1 from "../../../public/Assets/image1.jpg";
import MediaPlayer from "../../../public/Assets/MediaPlayer.png";
import Image2 from "../../../public/Assets/image2.jpeg";
import Image from "next/image";
import { useHomePageContext } from "@/contexts/HomePageContext";
import { StyleRegistry } from "styled-jsx";

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
            <div className={Styles.Line1}></div>
          </div>
          <div className={Styles.NewHomeNavigation}>
            <div className={Styles.homeicon}>
              <Image src={Home} height={30} width={30} />
            </div>
            <div className={Styles.Hometext}>Home</div>
            <div className={Styles.HomeBottomLine}></div>
            <div className={Styles.Line2}></div>
            <div className={Styles.NameNavigation}>
              <div className={Styles.Namenavigation}>
                <div className={Styles.NameNavigationname}>Name</div>
              </div>
              <div className={Styles.Line3}></div>
              <div className={Styles.SizeNavigation}>Size</div>
              <div className={Styles.Line4}></div>
              <div className={Styles.ItemNavigation}>Item Type</div>
              <div className={Styles.Line5}></div>
              <div className={Styles.DateModified}>Date Modified</div>
            </div>
          </div>
          <div className={Styles.Homeiconstext}>
            <div className={Styles.ThisPC}>
              <Image src={MyPC} height={35} width={35} />
            </div>
            <div className={Styles.iconname}>Desktop</div>
            <div className={Styles.download}>
              <Image src={Download} height={25} width={25} />
            </div>
            <div className={Styles.downloadiconname}>Download</div>
            <div className={Styles.iconname1}>
              <Image src={Document} height={32} width={32} />
            </div>
            <div className={Styles.Document}>Document</div>
            <div className={Styles.iconname2}>
              <Image src={Picture} height={32} width={32} />
            </div>
            <div className={Styles.picture}>Pictures</div>
            <div className={Styles.iconname3}>
              <Image src={Music} height={32} width={32} />
            </div>
            <div className={Styles.Music}>Music</div>
            <div className={Styles.iconname4}>
              <Image src={MediaPlayer} height={32} width={32} />
            </div>
            <div className={Styles.MediaPlayer}>Videos</div>
          </div>
          {/* <div className={Styles.inFolderNavigations}>
            <div className={Styles.infolderNameContainer}>
              <Image src={File} height={30} width={35} />
              <div className={Styles.folderName}>Documents</div>
            </div>
          </div> */}
          {/* <div className={Styles.mainBody}>
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
          </div> */}
        </div>
      </div>
    );
};

export default Folder;
