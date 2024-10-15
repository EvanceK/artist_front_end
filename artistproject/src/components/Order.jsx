import React, { useState } from "react";
import OrangeImage from "../assets/home/orange.jpg";
import { info } from "sass";
import { useContext } from "react"; // 新增 useContext
import { MainContext } from "./ContextProvider/MainContext"; 
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

function Order() {
  //導航到confirmOrder頁面
  const navigate = useNavigate();
  const { recipientInfo, setRecipientInfo, errors, validateForm, paymentInfo} = useContext(MainContext);
 
  //處理表單確認按鈕
  const handleOrderConfirmClick = (e) => {
    e.preventDefault();
    const isValid = validateForm(recipientInfo, paymentInfo);
    if(isValid){
      navigate("/home/cusdashboard/ConfirmOrder");
    } else {
      console.log("form validation failed.");
    }
  };

 

  //處理checkbox的部份
  const [isChecked, setIsChecked] = useState(false);
 

  // 模擬獲取客戶資料的函數
  const getCustomer = async () => {
    const path = import.meta.env.VITE_DATA_HOST_API;
    const api = path + "/customers/initEditData";
    try {
      const result = await axiosInstance.get(api);
      console.log(result.data);

      // 返回獲取到的客戶資料
      return result.data;
    } catch (error) {
      console.error("Error fetching customer data:", error);
      return null;
    }
  };

  //當勾選的時候獲取客戶資料
  const handleCheckboxChange = async (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      // 當勾選時，調用 API 獲取客戶資料並填充表單
      const customer = await getCustomer();
      if (customer) {
        setRecipientInfo({
          name: customer.name,
          phone: customer.phone,
          address: customer.address,
        });
      }
    } else {
      // 如果取消勾選，清空表單資料
      setRecipientInfo({
        name: "",
        phone: "",
        address: "",
      });
    }
  };


  return (
    <div className="orderInfo mt-5 row justify-content-center">
      <div className="h1 underline">Order</div>
      <div className="col-md-11">
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
            <br />
            <label className="h4 grayfont mt-5">$ 120,000</label>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              {/* Recipient Information 標題 */}
              <h1 className="underline mb-4">Recipient Information</h1>

              <form>
                {/* Same as customer information Checkbox */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sameAsCustomer"
                    checked={isChecked}
                    onChange={handleCheckboxChange} // 綁定 onChange 事件
                  />
                  <label
                    className="form-check-label grayfont"
                    htmlFor="sameAsCustomer"
                  >
                    Same as customer information
                  </label>
                </div>

                {/* Name Input */}
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter recipient name"
                    value={recipientInfo.name}
                    onChange={(e) =>
                      setRecipientInfo({ ...recipientInfo, name: e.target.value })
                    }
                  />
                   {/* 顯示名稱的錯誤訊息 */}
                   {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                {/* Phone Input */}
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={recipientInfo.phone}
                    onChange={(e) =>
                      setRecipientInfo({ ...recipientInfo, phone: e.target.value })
                    }
                  />
                   {/* 顯示電話號碼的錯誤訊息 */}
                   {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>

                {/* Address Input */}
                <div className="form-group mb-3">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                    value = {recipientInfo.address}
                    onChange = {(e) => setRecipientInfo({
                      ...recipientInfo, address: e.target.value
                    })
                  }
                  />
                 {/* 顯示地址的錯誤訊息 */}
                 {errors.address && <div className="text-danger">{errors.address}</div>}
                </div>

                {/* Shipping Method */}
                <div className="form-group mb-3">
                  <p>Shipping Method : Delivery</p>
                </div>

                {/* Delivery Instructions */}
                <div className="form-group mb-3">
                  <label htmlFor="instructions">Delivery Instructions:</label>
                  <textarea
                    className="form-control"
                    id="instructions"
                    rows="3"
                  ></textarea>
                </div>

                {/* submit button*/}
                <div className="place-Bid d-flex justify-content-center m-5 ">
                      <div className="btn"
                            onClick={handleOrderConfirmClick}>Confirm</div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
