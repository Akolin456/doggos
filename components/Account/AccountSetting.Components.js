import Styles from "./AccountSetting.module.css";
import Image from "next/image";
import Settings from "../../public/Assets/Settings.png";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";

const AccountSetting = () => {
  return (
    <div className={Styles.WholeAccountSetting}>
      <div className={Styles.AccountSettingNav}>
        <div className={Styles.AccountSettingNameContainer}>
          <Image src={Settings} height={30} width={35} />
          <div className={Styles.AccountSettingName}>Setting</div>
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
      <div className={Styles.AccountSettingMiddleware}>
        <div className={Styles.AccountSettingMiddlewareName}>Account</div>
        <div className={Styles.AllAccountSettingMiddleware}>
          <div className={Styles.Profiles}>Profile</div>
          <div className={Styles.Securitys}>Security</div>
        </div>
      </div>
    </div>
  );
};
export default AccountSetting;
