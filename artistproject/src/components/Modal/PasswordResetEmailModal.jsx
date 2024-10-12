import projectLogo from "../../assets/LOGO.png";
export default function PasswordResetEmailModel() {
  return (
    <div
      className="modal fade"
      id="PasswordResetEmailModel"
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
          <div className="PasswordResetEmailModel">
            <div className="py-5 d-flex justify-content-center">
              <img
                className="projectLogo  w-50 h-100 "
                src={projectLogo}
                alt="Logo"
              ></img>
            </div>
            <div className="px-4 text-center h5">
              <p>
                We have sent a password reset link to your email, please check
                and follow the instructions
              </p>

              <p className="grayfont">E-mail : yoyoyo123@gmail.com</p>
            </div>

            <div className="login-btn d-flex justify-content-center m-5">
              <div
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#LoginModal"
              >
                OK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
