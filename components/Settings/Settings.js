import Styles from "./SettingsComponents.module.css";
import Image from "next/image";
import Minimize from "../../public/Assets/Minimize.png";
import Maximize from "../../public/Assets/Maximize.png";
import Exit from "../../public/Assets/Exit.png";
import Settingsimg from "../../public/Assets/Settings.png";
import Account from "../../public/Assets/Account.png";
import App from "../../public/Assets/App.png";
import Time from "../../public/Assets/Time.png";
import Personilaztion from "../../public/Assets/Personilaztion.png";

const Settings = () => {
  return (
    <>
      <div className={Styles.Settingnavigation}>
        <div className={Styles.settingNameContainer}>
          <Image src={Settingsimg} height={30} width={35} />
          <div className={Styles.settingName}>Setting</div>
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
      <div className={Styles.Settingmiddleware}>
        <div className={Styles.SettingAllapp}>
          <div className={Styles.Accounts}>
            <Image className={Styles.account} src={Account} />
          </div>
          <div className={Styles.Apps}>
            <Image className={Styles.app} src={App} />
          </div>
          <div className={Styles.Times}>
            <Image className={Styles.time} src={Time} />
          </div>
          <div className={Styles.Personilaztions}>
            <Image className={Styles.personilaztion} src={Personilaztion} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
