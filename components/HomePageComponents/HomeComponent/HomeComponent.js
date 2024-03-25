import { useCookies } from "react-cookie";
import Styles from "./HomeComponents.module.css";
import RecycleBin from "../../../public/Assets/RecycleBin.png";
import FileManagerIcon from "../../../public/Assets/FileManagerIcon.png";
import MyPC from "../../../public/Assets/MyPC.png";
import OSiconblack from "../../../public/Assets/OSiconblack.png";
import Settings from "../../../public/Assets/Settings.png";
import Image from "next/image";
const HomePage = () => {
  const [cookie] = useCookies(["JWTtoken"]);

  console.log(cookie.name, "homepage cookie");
  return (
    <div className={Styles.HomePage}>
      <div className={Styles.menubar}>
        <div
          className={Styles.menubariconcointainer}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
          }}
        >
          <Image className={Styles.RecycleBin} src={RecycleBin} alt="logo" />
        </div>
        <div
          className={Styles.menubariconcointainer}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
          }}
        >
          <Image
            className={Styles.FileManagerIcon}
            src={FileManagerIcon}
            alt="logo1"
          />
        </div>
        <div
          className={Styles.menubariconcointainer}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
          }}
        >
          <Image className={Styles.OSiconblack} src={OSiconblack} alt="logo3" />
        </div>
        <div
          className={Styles.menubariconcointainer}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
          }}
        >
          <Image className={Styles.MyPC} src={MyPC} alt="logo2" />
        </div>
        <div
          className={Styles.menubariconcointainer}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#00000063";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#c48f8f63";
          }}
        >
          <Image className={Styles.Settings} src={Settings} alt="logo4" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
