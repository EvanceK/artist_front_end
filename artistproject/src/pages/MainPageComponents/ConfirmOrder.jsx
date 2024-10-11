import OrangeImage from "../../assets/home/orange.jpg";

function ConfirmOrder() {
  return (
    <div className="text-center mt-5">
      <div className="h1 ">Thank You</div>
      <div className="h4 ">Please check e-mail for futher information.</div>
      <div className="text-center grayfont">
        <div>
          <label className="me-3">Order number :</label>
          <label>O202410010001</label>
        </div>
        <div>
          <label className="me-3">Order date :</label>
          <label>2024/10/02 00:30</label>
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
  );
}
export default ConfirmOrder;
