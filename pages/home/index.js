import { useCookies } from "react-cookie";
import HomeComponent from "@/components/HomePageComponents/HomeComponent/HomeComponent";

const HomePage = () => {
  const [cookie] = useCookies(["JWTtoken"]);
  console.log(cookie.name, "homepage cookie");
  return (
    <div>
      <HomeComponent />
      <div>hi</div>
    </div>
  );
};

export default HomePage;
