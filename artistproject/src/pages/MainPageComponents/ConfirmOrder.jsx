import { useEffect, useState } from "react";
import ConfirmOrderCustomerInfo from "../../components/ConfirmOrderCustomerInfo";
import ConfirmOrderDetial from "../../components/ConfirmOrderDetial";
import CustomerInfo from "../../components/CustomerInfo";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [deliveryOrders, setDeliveryOrders] = useState();
  const [formattedDate, setFormattedDate] = useState();
  const navigate = useNavigate();
  // 取得得標記錄
  const getDeliveryOrders = async () => {
    const DeliveryOrders = JSON.parse(
      localStorage.getItem("DeliveryOrderNumber")
    );

    try {
      const api =
        path +
        `/DeliveryOrderController/selectbydeliveryNumber/${DeliveryOrders}`;

      const result = await axiosInstance.get(api);
      console.log(result);
      localStorage.setItem("DeliveryOrders", JSON.stringify(result.data));
      setDeliveryOrders(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getDeliveryOrders();
  }, []);

  const localStorageCleaning = () => {
    localStorage.removeItem("DeliveryOrderNumber");
    localStorage.removeItem("DeliveryOrders");
    localStorage.removeItem("allfee");
    localStorage.removeItem("deposit");
    localStorage.removeItem("servicefee");
    localStorage.removeItem("subtotal");
    localStorage.removeItem("deliveryfee");
    navigate("/home");
  };

  useEffect(() => {
    const date = new Date(deliveryOrders?.createDate);

    // Get the date parts
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
    const day = String(date.getDate()).padStart(2, "0");

    // Get the time parts
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // Format it to yyyy-mm-dd hh:mm:ss
    setFormattedDate(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  }, [deliveryOrders]);

  return (
    <div className="container mt-5">
      <div className="h1 text-center">Thank You</div>

      <div className="text-center grayfont">
        <div>
          <span className="me-3">Delivery Order number :</span>
          <span>{deliveryOrders?.deliveryNumber}</span>
        </div>
        <div>
          <span className="me-3">Order date :</span>
          <span>{formattedDate}</span>
        </div>
      </div>

      <ConfirmOrderDetial />
      {/* <ConfirmOrderCustomerInfo /> */}

      <div className="d-flex justify-content-center mt-5">
        <div className=" h1 border w-75 mb-5">
          <div className=" mt-5 ms-5 me-5">
            <CustomerInfo />

            {/*Recipient imformation */}
            <div className="h1 underline mt-5">Recipient information </div>
            <div className="mt-5">
              <div className=" flex-column h3">
                <p>Recipient's Name: {deliveryOrders?.attName}</p>
                <p>Phone: {deliveryOrders?.attPhone}</p>
                <p>Address: {deliveryOrders?.deliveryAddress}</p>
                <p>Shipping Method: FOB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-2">
          <div className="btn btn-primary" onClick={localStorageCleaning}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConfirmOrder;
