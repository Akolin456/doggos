import Login from "../AuthenticationBox/LoginComponent/Login";
import Styles from "./LoginPage.module.css";
import Button from "../common/Button/Button";
import ButtonStyles from "../common/Button/Button.module.css";
import Image from "next/image";
import logo from "../../public/Assets/OSicon.png";

const LoginPage = () => {
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
        <Login />
        <div className={Styles.signupcontainer}>
          <div className={Styles.signup}>
            {" "}
            New to Doggos?{" "}
            <span className={Styles.signupwithemail}>Sign Up with Email</span>
          </div>

          <Button className={ButtonStyles.signup}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
