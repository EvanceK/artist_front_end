import reactLogo from "../assets/react.svg";
import PaintingsListContainer from "./PaintingsListContainer";
import Carousel from "./Carousel";
import ViewContainer from "./ViewContainer";

export default function HomeLayout() {
  return (
    <div className="homelayout">
      <Carousel></Carousel>
      <h1>Artis Project</h1>
      <ViewContainer></ViewContainer>
      <hr></hr>
      <hr></hr>
      {/* <PaintingsListContainer></PaintingsListContainer> */}
    </div>
  );
}
