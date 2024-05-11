import Styles from "./test.module.css";
import Menu from "@/components/HomePageComponents/Menu/Menu";
import Folder from "@/components/common/Folder/Folder";
import ImageViewer from "@/components/common/ImageViewer/ImageViewer";
const Test = () => {
  return (
    <div className={Styles.testContainer}>
      <div
        style={{
          width: "100%",
          height: "900px",
          border: "1px solid white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{ width: "100%", height: "50px", border: "1px solid white" }}
        >
          div 1
        </div>
        <div
          style={{ width: "100%", height: "50px", border: "1px solid white" }}
        >
          div 2
        </div>
        <div
          style={{ width: "100%", height: "100vh", border: "1px solid white" }}
        >
          div 3
        </div>
      </div>
    </div>
  );
};

export default Test;
