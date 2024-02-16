import { useCookies } from "react-cookie";

const HomePage = () => {
  const [cookie] = useCookies(["JWTtoken"]);
  console.log(cookie.name, "homepage cookie");
  return <div>Hi this is HomePage</div>;
};

export default HomePage;
