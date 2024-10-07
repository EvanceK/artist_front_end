// import Carousel from "../../components/Carousel";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="homelayout">
      {/* <Carousel></Carousel>
      <br></br> */}
      <Outlet />
    </div>
  );
}
