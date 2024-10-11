import OrangeImage from "../assets/home/orange.jpg";
function ConfirmOrderDetial(){
    return(
        
      <div className="d-flex justify-content-center mt-5">
      <div className=" h1 border w-75 mb-5">
        <div className=" d-flex gap-5 m-5">
          <img
            src={OrangeImage}
            alt="orange.jpg"
            style={{ width: "300px", height: "auto" }}
          ></img>
          <div>
            <span className="h2">What a cute orange</span>
            <br />
            <span className="h4 grayfont">Orange Chen</span>
            <br />
            <span className="h4 grayfont mt-5">
              $<span>125,000</span>
            </span>
          </div>
        </div>

        <div className="h1 underline ms-5 me-5"></div>

      <div className=" d-flex justify-content-between align-items-star mb-5">
        {/*左邊的 delivery instructions */}
        <div className="d-block w-100">
          <label className="h3 grayfont text-star ms-5">Delivery Instructions:</label>
          <textarea
            className="form-control ms-5 mt-2 w-75"
            rows="10"
            cols="5"
          ></textarea>
        </div>

        {/*右邊的total */}
        <div className="row d-flex justify-content-end ms-2 me-5 mt-5  w-100">
          <div className="col-8">
            <div className="d-flex justify-content-between row">
              <div className="col-4">
                <h4>Subtotal</h4>
              </div>
              <div className="col-1">
                <h4>NT$</h4>
              </div>
              <div className="col-4">
                <h4>125,000</h4>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between row">
                <div className="col-4">
                  <h4>Delivery fee</h4>
                </div>
                <div className="col-1">
                  <h4>NT$</h4>
                </div>
                <div className="col-4">
                  <h4>120</h4>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-between row">
                <div className="col-4">
                  <h4>Service fee</h4>
                </div>
                <div className="col-1">
                  <h4>NT$</h4>
                </div>
                <div className="col-4">
                  <h4>12,500</h4>
                </div>
              </div>
            </div>
            <div className="h1 underline me-3"></div>

            <div className="d-flex justify-content-between row">
              <div className="col-4">
                <h3>Total</h3>
              </div>
              <div className="col-1">
                <h3>NT$</h3>
              </div>
              <div className="col-4">
                <h3>137,620</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )

}
export default ConfirmOrderDetial