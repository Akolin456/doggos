import Input from "../common/Input/Input";
import InputStyles from "../common/Input/Input.module.css";
import Styles from "./SignupPage.module.css";
import Button from "../common/Button/Button";
import ButtonStyles from "../common/Button/Button.module.css";
import { useLandingPageContext } from "@/contexts/LandingPageContext";

const SignUpPage = () => {
  const { SetLoginBoxState, SetSignUpBoxState, SetUserLogoBoxState } =
    useLandingPageContext();

  const handleSubmit = () => {
    SetSignUpBoxState(false);
    SetUserLogoBoxState(true);
  };
  const handleCancel = () => {
    SetSignUpBoxState(false);
    SetLoginBoxState(true);
  };

  return (
    <>
      <div className={Styles.signupcontainer}>
        <div className={Styles.namecontainer}>Enter Your Name</div>
        <Input className={InputStyles.userinput} type="text" />
        <div className={Styles.emailcontainer}>Enter Your Email Address</div>
        <Input className={InputStyles.userinput} type="text" />

        <div className={Styles.passwordcontainer}>Password </div>
        <Input className={InputStyles.userinput} type="text" />
        <div className={Styles.confirmpasswordcontainer}>Confirm Password </div>
        <Input className={InputStyles.userinput} type="text" />
        <div className={Styles.submitcancelbottoncontainer}>
          <Button className={ButtonStyles.submit} onClick={handleSubmit}>
            Submit
          </Button>
          <Button className={ButtonStyles.cancel} onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
