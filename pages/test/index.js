import Styles from "./test.module.css";
import Menu from "@/components/HomePageComponents/Menu/Menu";
import Folder from "@/components/common/Folder/Folder";
import ImageViewer from "@/components/common/ImageViewer/ImageViewer";
const Test = () => {
  return (
    <div className={Styles.testContainer}>
      {/* <Menu /> */}
      <Folder />
      {/* <ImageViewer /> */}
    </div>
  );
};

export default Test;
