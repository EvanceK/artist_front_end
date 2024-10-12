import { useContext } from "react";
import projectLogo from "../../assets/LOGO.png";
import { MainContext } from "../ContextProvider/MainContext";
export default function PasswordChanged() {
    const {PasswordChangedRef} = useContext(MainContext);
  return (
    <div
        ref={PasswordChangedRef}
      className="modal fade"
      id="PasswordChanged"
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
          <div className="PasswordChanged">
            <div className="py-5 d-flex justify-content-center">
              <img
                className="projectLogo  w-50 h-100 "
                src={projectLogo}
                alt="Logo"
              ></img>
            </div>
            <div className="px-4 h5 m-3">
              <label className="mt-3">Please enter a new password:</label>
              <input type="password " className="form-control mt-3" style={{backgroundColor: "light"}}></input>
              <label className="mt-3">Please confirm your password:</label>
              <input type="password " className="form-control mt-3" style={{backgroundColor: "light"}}></input>
              </div>

              <div className="row my-5 mx-auto justify-content-center">
                <div
                  className="btn col-3 mx-2"
                  id="OK"
                  data-bs-toggle="modal"
                  data-bs-target="#PassChangedSuccessModal"
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
