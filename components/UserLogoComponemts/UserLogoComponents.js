import Styles from "../UserLogoComponemts/UserLogo.module.css";

const UserLogo = () => {
  return (
    <>
      <div className={Styles.UserLogoContainer}>
        <div className={Styles.Setuserlogo}> Upload Your Picture</div>
        <div className={Styles.Userlogo}></div>
        <div className={Styles.Username}>User Name</div>
      </div>
    </>
  );
};

export default UserLogo;
