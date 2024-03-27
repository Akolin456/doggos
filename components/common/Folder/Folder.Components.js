import Styles from "./Folder.module.css";
import FileManagerIcon from "../../../public/Assets/FileManagerIcon.png";
import MyPC from "../../../public/Assets/MyPC.png";

import Image from "next/image";

const Folder = () => {
  return (
    <div className={Styles.FolderComponents}>
      <div className={Styles.viewfolder}>
        <Image
          className={Styles.FileManagerIcon}
          src={FileManagerIcon}
          alt="logo2"
        />
        <div className={Styles.iconName}>Documents</div>
      </div>
      <div className={Styles.documentpage}>
        <div className={Styles.home}>Home</div>
      </div>

      <div className={Styles.documentpath}>
        <Image className={Styles.documentpathicon} src={MyPC} alt="logo2" />
        <div className={Styles.documentspathname}>Documents</div>
      </div>
    </div>
  );
};

export default Folder;
