import OrangeImage from "../assets/home/orange.jpg";

function OrderHistory() {
  return (
    <div>
      <div className="h1 underline mt-5">My order</div>
      <div className="border mt-5 mb-5">
        <div className="OrderInfo h4 mt-4 d-flex flex-column justify-content-center align-items-left gap-4 ms-5">
          <div className="d-flex gap-3">
            <label className="me-3">Order Number:</label>
            <label>O202410020001</label>
          </div>
          <div className="d-flex gap-3">
            <label className="me-3">Order Date:</label>
            <label>2024/10/02 00:30</label>
          </div>
          <div className="d-flex gap-3">
            <label className="me-3">Order Stute:</label>
            <label>Finished</label>
          </div>

          <div className="d-flex gap-3">
            <label className="me-3">Payment method:</label>
            <label>Credit Card One-time Payment</label>
          </div>
          <div className="d-flex gap-3">
            <label className="me-3">Reipent Address:</label>
            <label>236 NewTaipeiCity</label>
          </div>
          <div className="d-flex gap-3">
            <label className="me-3">Total:</label>
            <label>$ 137.620</label>
          </div>
        </div>

        <div className="h1 underline mt-5 ms-5 me-5"> </div>
        <div className="mb-5">
        <div className="col-md-11 ms-5">
          <div className="mt-5 d-flex gap-5 align-items-center">
            <img
              src={OrangeImage}
              alt="orange.jpg"
              style={{ width: "300px", height: "auto" }}
            ></img>
            <div>
              <label className="h2">What a cute orange</label>
              <br />
              <label className="h4 grayfont">Orange Chen</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
