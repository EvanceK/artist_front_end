
import projectLogo from "../assets/LOGO.png";

export default function Footer() {

  return (
    <footer className="footer bg-light">
      <div className="container d-flex">
        <div className="foot w-100 d-flex ">
        <div className=" w-25 d-flex justify-content-center align-items-center">
          <img className="projectLogo w-75 h-50 "
              src={projectLogo}
              alt="Logo" />
        </div>
        <div className="aboutus w-20">
          <p className="d-flex flex-column justify-content-center align-items-center">
          <h1>About Us</h1>
          Chen Chen<br/>
          Daniel<br/>
          Evance<br/>
          Wenyang
          </p>
        </div>
        <div className="Buy-group  w-25">
          <p className="d-flex flex-column justify-content-center align-items-center">
          <h1>Buy</h1>
          How to buy<br/>
          Buyer terms<br/>
          Payment options
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}