import { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
export default function StaffNavBar() {
  useEffect(() => {
    $(".nav-link").on("click", function () {
      $(".nav-link").removeClass("active"); // Remove "active" class from all
      $(this).addClass("active"); // Add "active" class to the clicked element
    });

    return () => {
      $(".nav-link").off("click");
    };
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-house-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                  </svg>
                  Main page
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/staffdashboard"
                >
                  Artist Managerment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="paintingmgn"
                >
                  Painting Managerment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="ordermgn">
                  Order Managerment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
