import { useCookies } from "react-cookie";
import Styles from "./HomeComponents.module.css";
import RecycleBin from "../../../public/Assets/RecycleBin.png";
import FileManagerIcon from "../../../public/Assets/FileManagerIcon.png";
import MyPC from "../../../public/Assets/MyPC.png";
import OSiconblack from "../../../public/Assets/OSiconblack.png";
import Settings from "../../../public/Assets/Settings.png";
import Image from "next/image";
import Menu from "../Menu/Menu";
import { useHomePageContext } from "@/contexts/HomePageContext";
import Folder from "@/components/common/Folder/Folder";
import ImageViewer from "@/components/common/ImageViewer/ImageViewer";

const HomePage = () => {
  const { SetmenuState, SetfolderState } = useHomePageContext();

  const handleMenuClick = () => {
    SetmenuState(true);
  };
  const handleFolderClick = () => {
    SetfolderState(true);
  };

  const [cookie] = useCookies(["JWTtoken"]);

  // console.log(cookie.name, "homepage cookie");
  return (
    <div className={Styles.HomePage}>
      <Folder />
      <ImageViewer />
      <Menu />
      <div className={Styles.menubar}>
        <Image
          className={Styles.RecycleBin}
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          src={RecycleBin}
          alt="logo"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
        />

        <Image
          className={Styles.FileManagerIcon}
          src={FileManagerIcon}
          alt="logo1"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
          onClick={handleFolderClick}
        />

        <Image
          className={Styles.OSiconblack}
          src={OSiconblack}
          alt="logo3"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
          onClick={handleMenuClick}
        />

        <Image
          className={Styles.MyPC}
          src={MyPC}
          alt="logo2"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
        />

        <Image
          className={Styles.Settings}
          src={Settings}
          alt="logo4"
          style={{
            background: "transparent",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
            e.target.style.background = "transparent";
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
