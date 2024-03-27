import Styles from "./test.module.css";
import Menu from "@/components/HomePageComponents/Menu/Menu";
import Folder from "@/components/common/Folder/Folder.Components";
const Test = () => {
  return (
    <div className={Styles.testContainer}>
      {/* <Menu /> */}
      <Folder />
    </div>
  );
};

export default Test;
