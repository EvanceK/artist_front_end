import projectLogo from "../assets/LOGO.png";

export default function NavBar() {
  return (
    <nav className="footer navbar-expand-lg bg-light">
      <div className="container">
        <div>
          <img
            className="projectLogo  w-50 h-100"
            src={projectLogo}
            alt="Logo"
          />
        </div>
        <div className="aboutus">
          <h2>About Us</h2>
        </div>
        <div></div>
      </div>
    </nav>
  );
}
