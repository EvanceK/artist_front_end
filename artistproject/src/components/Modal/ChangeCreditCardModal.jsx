import { MainContext } from "../ContextProvider/MainContext";
import { useContext, useState, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import axiosInstance from "../../axiosConfig";
import axios from "axios";
import jsondata from "../../placeholderData/bank_data.json";

export default function ChangeCreditCardModal() {

 

  //讀取後端api
  const path = import.meta.env.VITE_DATA_HOST_API;
  const Authorization = localStorage.getItem("token");
  const api = path + "/customers/editcreditcard";

  //API 寫入信用卡資訊
  const [creditcardInfo, setCreditcardInfo] = useState({
    creditCardNo: "4111111111111111",
    bankAccount: "1234567890",
  });

  //先存我的信用卡資訊
  const [creditCardNoInfo, setcreditCardNoInfo] = useState({
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    bankAccount: "",
  });


  // 輸入信用卡號時更新卡號
  const handleCreditNumberChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCreditcardInfo({ ...creditcardInfo, [name]: value });
    console.log(creditcardInfo);
  };

   //當使用者選擇某個銀行時更新selectedBank
   const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
    setSelectedBank(selectedBank);
    setCreditcardInfo({
      ...creditcardInfo, // 保留其他信息不變
      bankAccount: selectedBank, // 更新銀行信息
    });
  };
  console.log("line50 bankAccount :" , creditcardInfo.bankAccount);
  
  

  

  //送出表單
  const submit = async () => {
    try {
       // 合併四個部分的信用卡號
    const fullCardNumber = `${creditCardNoInfo.cardNumber1}${creditCardNoInfo.cardNumber2}${creditCardNoInfo.cardNumber3}${creditCardNoInfo.cardNumber4}`;

    // 構建要提交的數據，將合併後的信用卡號放入
    const dataToSubmit = {
      ...creditcardInfo,
      creditCardNo: fullCardNumber, // 合併後的信用卡號
    };
      console.log("line65", dataToSubmit);
      
      const result = await axios.put(api, dataToSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const ChangeCreditCardModalRef = useRef(null);

  const {
    cardNumber2Ref,
    cardNumber3Ref,
    cardNumber4Ref,
    handleCardNumberChange,
    handleExpirationDateChange,
    handleCvvChange,
    errors,
    paymentInfo,
    validateForm,
  } = useContext(MainContext);

  //存放從bankcode.json讀出來的銀行資料
  const [banks, setBanks] = useState(jsondata);

  //用來記錄選中的資料
  const [selectedBank, setSelectedBank] = useState("");

  //處理表單確認按鈕
  const handleConfirmClick = (e) => {
    e.preventDefault();
    const isValid = validateForm(null, paymentInfo);
    if (isValid) {
      submit();
      const model = new bootstrap.Modal(ChangeCreditCardModalRef.current);
      model.hide();
    } else {
      console.log("form validation failed.");
    }
  };

 

  return (
    <div
      ref={ChangeCreditCardModalRef}
      className="modal modal-lg fade"
      id="ChangeCreditCardModal"
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
          <div className="ChangeCreditCardModal ">
            <div className="row d-flex justify-content-center">
              <div className="col-10  m-2 h3 mt-3 underline">
                Change credit card information
              </div>
              <div className="row d-flex flex-column justify-content-center">
                <form className="px-5 mt-4 mb-5" action="">
                  <div className="h5  gap-3 ">Bank :</div>
                  <select
                    className="form-select"
                    name="bankAccount"
                    value={selectedBank}
                    onChange={handleBankChange}
                    // onClick={handleBankClick}
                  >
                    <option value="">Select a bank</option>
                    {banks.map((bank) => (
                      <option key={bank.code} value={bank.code}>
                        {bank.code}
                        {bank.name}
                      </option>
                    ))}
                  </select>

                  <div className="h5  mt-4">Credit card number :</div>

                  <div className="row d-flex justify-content-center m-4 gap-2">
                    <input
                      type="text"
                      className="txtbox col-2 text-center"
                      name="cardNumber1"
                      value={paymentInfo.cardNumber1}
                      onChange={(e) =>{
                        handleCardNumberChange(e, "cardNumber1", cardNumber2Ref);
                        handleCreditNumberChange(e);
                      }}
                      maxLength="4"
                    />{" "}
                    —
                    <input
                      type="text"
                      className="txtbox col-2 text-center"
                      name="cardNumber2"
                      value={paymentInfo.cardNumber2}
                      ref={cardNumber2Ref}
                      onChange={(e) =>{
                        handleCardNumberChange(e, "cardNumber2", cardNumber3Ref);
                        handleCreditNumberChange(e);
                      }}
                    />{" "}
                    —
                    <input
                      type="text"
                      className="txtbox col-2 text-center"
                      name="cardNumber3"
                      value={paymentInfo.cardNumber3}
                      ref={cardNumber3Ref}
                      onChange={(e) =>{
                        handleCardNumberChange(e, "cardNumber3", cardNumber4Ref);
                        handleCreditNumberChange(e);
                      }}
                    />{" "}
                    —
                    <input
                      type="text"
                      className="txtbox col-2 text-center"
                      name="cardNumber4"
                      value={paymentInfo.cardNumber4}
                      ref={cardNumber4Ref}
                      onChange={(e) =>{
                        handleCardNumberChange(e, "cardNumber4", null);
                        handleCreditNumberChange(e);
                      }}
                      maxLength="4"
                    />
                    <div className="row d-flex justify-content-center  m-3 ">
                      Expiration Date :
                      <input
                        type="text"
                        className="Date col-2 mx-3 text-center"
                        placeholder="MM/YY"
                        value={paymentInfo.expirationDate}
                        onChange={handleExpirationDateChange}
                      />
                      cvv:
                      <input
                        type="text"
                        name="cvv"
                        className="col-2 mx-3 text-center"
                        value={paymentInfo.cvv}
                        onChange={handleCvvChange}
                        maxLength="3"
                      />
                    </div>
                  </div>
                  <div>
                    {/* 顯示卡號的錯誤訊息 */}
                    {errors.cardNumber && (
                      <div className="text-danger">{errors.cardNumber}</div>
                    )}
                    {/* 顯示過期日期的錯誤訊息 */}
                    {errors.expirationDate && (
                      <div className="text-danger">{errors.expirationDate}</div>
                    )}
                    {/* 顯示 CVC 的錯誤訊息 */}
                    {errors.cvv && (
                      <div className="text-danger">{errors.cvv}</div>
                    )}
                  </div>

                  <div className=" d-flex justify-content-center m-5 ">
                    <div className="btn" onClick={handleConfirmClick}>
                      Confirm
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
