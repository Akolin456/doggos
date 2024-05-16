import Styles from "./AppSetting.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";

const AppSetting = () => {
  return (
    <div className={Styles.WholeAppSetting}>
      <div className={Styles.AppSettingNav}>
        <div className={Styles.AppSettingNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.AppSettingName}>Setting</div>
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
          <Image src={Exit} height={60} />
        </div>
      </div>
      <div className={Styles.AppSettingMiddleware}>
        <div className={Styles.AppSettingMiddlewareName}>APP</div>
        <div className={Styles.AllAppSettingMiddleware}>
          <div className={Styles.ManageApp}>Manage App</div>
        </div>
      </div>
    </div>
  );
};
export default AppSetting;
