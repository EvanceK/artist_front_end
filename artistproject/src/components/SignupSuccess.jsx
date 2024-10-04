import projectLogo from "../assets/LOGO.png";
export default function SignupSuccess() {
  return (
    <div
      className="modal fade"
      id="SignupSuccess"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="Signupsuccess">
            <div class="logo my-3">
              <img
                className="projectLogo  w-50 h-100 "
                src={projectLogo}
                alt="Logo"
              ></img>
            </div>
            <div class="">
              <h2 class="h2">Sign Up Successful.</h2>
              <h2 class="h2">Click the Button to log in.</h2>
            </div>
            <div class="login-btn d-flex justify-content-center m-5">
              <div
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#LoginModal"
              >
                LOG IN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
