import Login from "../AuthenticationBox/LoginComponent/Login";
import Styles from "./LandingPage.module.css";
import Image from "next/image";
import logo from "../../public/Assets/OSicon.png";
import SignUpPage from "../SignupPageComponents/SignupPageComponents";
import UserLogo from "../UserLogoComponemts/UserLogoComponents";
const LandingPage = () => {
  return (
    <div className={Styles.LoginPage}>
      <div className={Styles.textcontainer}>
        <div className={Styles.osdescription}>
          A friendly and intuitive operating system designed for a paws-itively
          delightful user experience.
        </div>
        <div className={Styles.title}>DoGGos</div>
      </div>
      <div className={Styles.logosandAuthboxContainer}>
        <Image className={Styles.logo} src={logo} alt="logo" />
        <div className={Styles.doogos}>Sign in to Doggos</div>
        {/* <Login /> */}
        {/* <SignUpPage /> */}
        <UserLogo />
      </div>
    </div>
  );
};

export default LandingPage;
