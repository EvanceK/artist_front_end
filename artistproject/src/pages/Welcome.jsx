import { Link } from "react-router-dom";
import GoldenCource from "../components/GoldenCource";
export default function Welcome() {
  return (
    <div className="welcome">
      <GoldenCource />
      <div className="bg">
        <img src="./src/assets/background1.webp" alt="background1" />
      </div>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 8 }}>
          <div className="model">
            <img src="./src/assets/LOGO11.png" alt="Cirle Logo" />{" "}
          </div>
          <div className="item" style={{ "--position": 1 }}>
            <img src="./src/assets/home/chen.jpg" alt="Chen's photo" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="./src/assets/home/dogg.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="./src/assets/home/Photo1.jpg" alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src="./src/assets/home/orange.jpg" alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src="./src/assets/home/yang.webp" alt="WenYang's photo" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src="./src/assets/home/Photo2.jpg" alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src="./src/assets/home/Daniel.png" alt="Danail's photo" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="./src/assets/home/the-virgin-and-child-the-madonna-of-the-rose.jpg!Large.jpg"
              alt="The virgin and child the madonna of the rose"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Transforming Passion into Possession</h3>
        <h2>Artist</h2>
      </div>
      <div className="btngroup d-flex justify-content-between">
        <div className="btn btn-primary ">MEMBER</div>
        <div className="btn btn-primary">
          <Link to="/home">EXPLORE</Link>
        </div>
        <div className="btn btn-primary ">for STAFF</div>
      </div>
    </div>
  );
}
