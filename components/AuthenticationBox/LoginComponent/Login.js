import Button from "../../common/Button/Button";
import ButtonStyles from "../../common/Button/Button.module.css";
import Styles from "./Login.module.css";
import Input from "../../common/Input/Input";
import InputStyles from "../../common/Input/Input.module.css";
import { useState } from "react";
import { credential } from "../../../dummy/dummy";
import { useLandingPageContext } from "@/contexts/LandingPageContext";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const { SetLoginBoxState, SetSignUpBoxState } = useLandingPageContext();
  const [usernameValue, SetusernameValue] = useState("");
  const [passwordValue, SetpasswordValue] = useState("");

  const { username, password } = credential;

  const handleSignUp = () => {
    SetLoginBoxState(false);
    SetSignUpBoxState(true);
  };

  const handleClick = () => {
    if (username == usernameValue && password == passwordValue) {
      router.push("/home");
    } else {
      alert("login failed");
    }
  };

  return (
    <>
      <div className={Styles.Login}>
        <div className={Styles.usernamecontainer}>
          Username or email address
        </div>
        <Input
          className={InputStyles.userinput}
          type="text"
          onChange={(e) => {
            SetusernameValue(e.target.value);
          }}
          value={usernameValue}
        />
        <div className={Styles.passwordcontainer}>Password </div>
        <Input
          className={InputStyles.userinput}
          type="password"
          onChange={(e) => {
            SetpasswordValue(e.target.value);
          }}
          value={passwordValue}
        />
        <div className={Styles.forgotpasswordcontainer}>
          <div className={Styles.forgotpassword}>forgot password</div>
        </div>

        <Button onClick={handleClick} className={ButtonStyles.login}>
          Log In
        </Button>
      </div>
      <div className={Styles.signupcontainer}>
        <div className={Styles.signup}>
          {" "}
          New to Doggos?{" "}
          <span className={Styles.signupwithemail}>Sign Up with Email</span>
        </div>

        <Button className={ButtonStyles.signup} onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </>
  );
};

export default SignIn;
