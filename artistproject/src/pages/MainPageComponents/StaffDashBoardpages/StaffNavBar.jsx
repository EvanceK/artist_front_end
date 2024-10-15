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
                  Plaiting Managerment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="ordermgn"
                >
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
