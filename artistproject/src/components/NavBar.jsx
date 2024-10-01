import { useEffect } from "react";
import projectLogo from "../assets/LOGO.png";
import $ from "jquery";

export default function NavBar() {
  useEffect(() => {
    $(".nav-link").on("click", function () {
      $(".nav-link").removeClass("active"); // Remove "active" class from all
      $(this).addClass("active"); // Add "active" class to the clicked element
    });
    // Cleanup event listener
    return () => {
      $(".nav-link").off("click");
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <img className="projectLogo" src={projectLogo} alt="Logo"></img>
        {/* <a className="navbar-brand" href="#">
          Artist Project Logo
        </a> */}
        <form className="d-flex position-relative" role="search">
          <input
            className="form-control ms-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <div className="d-flex align-items-center">
            <span className="material-symbols-outlined position-absolute end-0 px-2">
              search
            </span>
          </div>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Artists
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ArtWorks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Auctions
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              type="button"
              className="btn "
              data-bs-toggle="modal"
              data-bs-target="#LoginModal"
            >
              Log_In
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#StaffLoginModal"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
