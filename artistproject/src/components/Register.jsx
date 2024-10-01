import projectLogo from "../assets/LOGO.png";
export default function Register() {
  return (
    <div
      className="modal fade"
      id="registerModel"
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

          <div className="h2 my-3 "></div>
          <div className="logo d-flex justify-content-center">
            <img
              className="projectLogo  w-50 h-100"
              src={projectLogo}
              alt="Logo"
            ></img>
          </div>
          <form action="">
            <div className="input">
              <div className="d-block mt-5 m-2">
                <div className="row m-2 d-flex justify-content-center">
                  <label
                    className="col-3 d-flex justify-content-start"
                    htmlFor="name"
                  >
                    Name :
                  </label>
                  <input
                    id="name"
                    className="txtbox col-7"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="row m-2 d-flex justify-content-center">
                  <label
                    className="col-3 d-flex justify-content-start"
                    htmlFor="nickname"
                  >
                    NickName :
                  </label>
                  <input
                    id="nickname"
                    className="txtbox col-7"
                    name="NickName"
                    type="text"
                    placeholder="NickName"
                  />
                </div>

                <div className="row m-2 d-flex justify-content-center">
                  <label
                    className="col-3 d-flex justify-content-start"
                    htmlFor="Email"
                  >
                    Email :
                  </label>
                  <input
                    id="Email"
                    className="txtbox col-7"
                    name="Email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="row m-2 d-flex justify-content-center">
                  <label
                    className="col-3 d-flex justify-content-start"
                    htmlFor="Password"
                  >
                    Password :
                  </label>
                  <input
                    id="Password"
                    className="txtbox col-7"
                    name="Password"
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="row m-2 d-flex justify-content-center">
                  <label
                    className="col-3 d-flex justify-content-start"
                    htmlFor="Phone"
                  >
                    Phone :
                  </label>
                  {/* <span class="col-1 px-0" >:</span> */}
                  <input
                    id="Phone"
                    className="txtbox col-7"
                    name="Phone"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="row m-2 d-flex justify-content-center">
                  <label
                    className="col-3 d-flex justify-content-start"
                    htmlFor="Address"
                  >
                    Address :
                  </label>
                  <textarea
                    id="Address"
                    className="txtbox col-7 overflow-scroll"
                    name="Address"
                    type="text"
                    placeholder="Address"
                    row="3"
                  />
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center m-5">
              <div className="btn col-3 btn-primary" data-bs-dismiss="modal">
                SIGN UP
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
