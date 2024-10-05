import reactLogo from "../assets/react.svg";
import PaintingsListContainer from "./PaintingsListContainer";
import Carousel from "./Carousel";
import ViewContainer from "./ViewContainer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="homelayout">
      <Carousel></Carousel>
      <br></br>
      <Outlet />
    </div>
  );
}
