import reactLogo from "../assets/react.svg";
import PaintingsListContainer from "./PaintingsListContainer";
import Carousel from "./Carousel";

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
      <PaintingsListContainer></PaintingsListContainer>
    </div>
  );
}
