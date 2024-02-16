import Styles from "../UserLogoComponemts/UserLogo.module.css";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import { useLandingPageContext } from "@/contexts/LandingPageContext";
import { useRouter } from "next/router";

const UserLogo = () => {
  const { SetSignUpBoxState, SetUserLogoBoxState } = useLandingPageContext();
  const router = useRouter();

  const handleNext = () => {
    router.push("/home");
  };

  const handleCancel = () => {
    SetUserLogoBoxState(false);
    SetSignUpBoxState(true);
  };
  return (
    <>
      <div className={Styles.UserLogoContainer}>
        <div className={Styles.Setuserlogo}> Upload Your Picture</div>
        <div className={Styles.Userlogo}></div>
        <div className={Styles.Username}>User Name</div>
        <Input placeholder="enter Username" />
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
};

export default UserLogo;
