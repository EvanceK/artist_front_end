export default function LoginModal() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
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
          <div className="login">
            <div className="logo">Artis LOGO</div>
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
                <div className="btn btn-secondary" data-bs-dismiss="modal">
                  LOG IN
                </div>
                <div className="btn btn-primary">SIGN UP</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
