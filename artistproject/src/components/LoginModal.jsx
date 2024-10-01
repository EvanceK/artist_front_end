export default function LoginModal() {
  return (
    <div
      className="modal fade"
      id="LoginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <div className="login row">
            <div className="h2 ">Artis LOGO</div>
            <form>
              <div className="input">
                <h2>Sign Up or Log In</h2>
                <div className="inputcontainer">
                  <div className="labelgroup">
                    <label for="email">Email:</label>
                    <label for="password">Password:</label>
                  </div>
                  <div className="inputgroup">
                    <input
                      id="email"
                      className="txtbox"
                      name="email"
                      type="text"
                      placeholder="email"
                    />
                    <input
                      id="password"
                      className="txtbox"
                      name="password"
                      type="text"
                      placeholder="password"
                    />
                  </div>
                </div>
              </div>
              <div className="btngroup">
                <div className="btn" data-bs-dismiss="modal">
                  LOG IN
                </div>
                <div className="btn btn-primary">SIGN UP</div>
              </div>
            </form>
          </div> */}
          <div className="login row">
            <div className="h2 my-3 ">Artis LOGO</div>
            <form>
              <div className="input m-x-3">
                <h2 className="d-flex m-5 ">Sign Up or Log In</h2>
                <div className="d-block">
                  <div className="row mt-5 m-2">
                    <label className="col-3" htmlFor="email">
                      Email:
                    </label>
                    <input
                      id="email"
                      className="col-8"
                      name="email"
                      type="text"
                      placeholder="email"
                    />
                  </div>
                  <div className="row m-2">
                    <label className="col-3" htmlFor="password">
                      Password:
                    </label>
                    <input
                      id="password"
                      className="col-8"
                      name="password"
                      type="text"
                      placeholder="password"
                    />
                  </div>
                </div>
              </div>
              <div className="row my-5 mx-auto justify-content-center">
                <div className="btn col-3 mx-2" data-bs-dismiss="modal">
                  LOG IN
                </div>
                <div className="btn btn-primary col-3 mx-2">SIGN UP</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
