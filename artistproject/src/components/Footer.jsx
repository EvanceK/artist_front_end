import projectLogo from "../assets/LOGO.png";

export default function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container d-flex">
        <div className="foot w-100 d-flex row p-4">
          <div className=" w-25 d-flex justify-content-center align-items-center col-3">
            <img
              className="projectLogo w-75 h-50 "
              src={projectLogo}
              alt="Logo"
            />
          </div>
          <div className="aboutus w-20 col-3">
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <h1>About Us</h1>
              <span>Chen Chen</span>
              <span>Daniel</span>
              <span>Evance</span>
              <span>Wenyang</span>
            </div>
          </div>
          <div className="Buy-group  w-25 col-3">
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <h1>Buy</h1>
              <span>How to buy</span>
              <span>Buyer terms</span>
              <span>Payment options</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
