
import ConfirmOrderCustomerInfo from "../../components/ConfirmOrderCustomerInfo";
import ConfirmOrderDetial from "../../components/ConfirmOrderDetial";

function ConfirmOrder() {
  return (
    <div className=" mt-5">
      <div className="h1 text-center">Thank You</div>
      <div className="h4 text-center ">
        Please check e-mail for futher information.
      </div>
      <div className="text-center grayfont">
        <div>
          <span className="me-3">Order number :</span>
          <span>O202410010001</span>
        </div>
        <div>
          <span className="me-3">Order date :</span>
          <span>2024/10/02 00:30</span>
        </div>
      </div>

      <ConfirmOrderDetial/>
      <ConfirmOrderCustomerInfo />
    </div>
  );
}
export default ConfirmOrder;
