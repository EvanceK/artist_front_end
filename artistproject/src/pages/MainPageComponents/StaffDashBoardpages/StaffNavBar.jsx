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
      <nav className="nav flex-column">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/staffdashboard"
        >
          Artist Managerment
        </Link>
        <Link className="nav-link " aria-current="page" to="paintingmgn">
          Plaiting Managerment
        </Link>
      </nav>
    </>
  );
}
