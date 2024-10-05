
import projectLogo from "../assets/LOGO.png";

export default function NavBar() {

  return (
    <footer className="footer bg-light">
      <div className="container d-flex">
        <div className="btn btn-primary w-100 d-flex justify-content-start">
        <div>
          <img className="projectLogo border-0"
              src={projectLogo}
              alt="Logo" />
        </div>
        <div className="aboutus w-25">
          <p>
          <h2>About Us</h2>
          Chen Chen<br/>
          Daniel<br/>
          Evance<br/>
          Wenyang
          </p>
        </div>
        <div className="Buy-group d-flex flex-column w-25">
          <p>
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
