import reactLogo from "../assets/react.svg";
import PaintingsListContainer from "./PaintingsListContainer";
import Carousel from "./Carousel";
import ViewContainer from "./ViewContainer";

export default function HomeLayout() {
  return (
    <div className="homelayout">
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Carousel></Carousel>
      <h1>Artis Project</h1>
      <ViewContainer></ViewContainer>
      <hr></hr>
      <hr></hr>
      {/* <PaintingsListContainer></PaintingsListContainer> */}
    </div>
  );
}
