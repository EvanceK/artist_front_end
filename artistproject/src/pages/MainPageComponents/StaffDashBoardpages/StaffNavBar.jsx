import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { UserContext } from "../../../components/ContextProvider/UserContext";
export default function StaffNavBar() {
  const { setIsLogin, } = useContext(UserContext);
  const navigate = useNavigate();
  const roleId = localStorage.getItem("roleId");
  useEffect(() => {
    $(".nav-link").on("click", function () {
      $(".nav-link").removeClass("active"); // Remove "active" class from all
      $(this).addClass("active"); // Add "active" class to the clicked element
    });

    return () => {
      $(".nav-link").off("click");
    };
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("staffName");
    localStorage.removeItem("roleId");
    setIsLogin(false);
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

            <div className="col-2"></div>
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
              <ul className="nav nav-underline">
                <li className="nav-item ">
                  <Link className="nav-link active bs-primary" aria-current="page" to="/">&nbsp;
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
                    </svg>&nbsp;
                    Main page
                  </Link>
                </li>
                {roleId === '1' && (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link " aria-current="page" to="/staffdashboard">&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                      <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
                    </svg>&nbsp;
                      Artist Management
                    </Link>&nbsp;
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="paintingfindAll">&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
                    </svg>&nbsp;
                      Painting Management
                    </Link>&nbsp;
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="staffmgn">&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                    </svg>&nbsp;
                      Staff Management
                    </Link>
                  </li>
                </>
              )}
                {/* <li className="nav-item">
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
                    to="paintingfindAll"
                  >
                    Painting Managerment
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="ordermgn">&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-x" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0"/>
                  </svg>&nbsp;
                  DeliveryOrders Managerment
                  </Link>&nbsp;
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="staffmgn">
                    Staff Managerment
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="col-2">
            <div className="nav-item dropdown me-5">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hi! {localStorage.getItem("staffName")}
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item" onClick={logout}>
                    Log out
                  </span>
                </li>
              </ul>
            </div>
            </div>
        </div>
      </nav>
    </>
  );
}
