import Styles from "./test.module.css";
import ImageViewer from "@/components/common/ImageViewer/ImageViewer";
const Test = () => {
  return (
    <div className={Styles.testContainer}>
      <ImageViewer />
    </div>
  );
};

export default Test;
