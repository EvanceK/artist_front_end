import React, { useState, useContext } from "react";
import { MainContext } from "./ContextProvider/MainContext";

function PaymentMethod() {
  const [paymentmethod, setPaymentMethod] = useState("CreditCard");
  const [paymentOption, setPaymentOption] = useState("One-time");
  const [installmentOption, setInstallmentOption] = useState("");

  const {
    cardNumber2Ref,
    cardNumber3Ref,
    cardNumber4Ref,
    handleCardNumberChange,
    handleExpirationDateChange,
    handleCvvChange,
    errors,
    paymentInfo
  } = useContext(MainContext);

  const handelPaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handelPaymentOptiondChange = (e) => {
    setPaymentOption(e.target.value);
  };
  const handelInstallmentOptiondChange = (e) => {
    setInstallmentOption(e.target.value);
  };

  return (
    <div className="payment-method mt-5">
      <div className="h1 underline">Payment</div>
      <div className="">
        <form>
          <div>
            <label className="form-label mt-4">
              <input
                type="radio"
                name="paymentMethod"
                value="ATM"
                checked={paymentmethod === "ATM"}
                onChange={handelPaymentMethodChange}
              ></input>
              ATM
            </label>
          </div>
          <div>
            <label className="form-label">
              <input
                type="radio"
                name="paymentMethod"
                value="CreditCard"
                checked={paymentmethod === "CreditCard"}
                onChange={handelPaymentMethodChange}
              ></input>
              CreditCard
            </label>
          </div>

          {/* Credit Card Information */}

          <div className="row d-flex justify-content-center m-4 gap-2">
            <input
              type="text"
              className="txtbox col-2 text-center"
              onChange={(e) =>
                handleCardNumberChange(e, "cardNumber1", cardNumber2Ref)
              }
              maxLength="4"
            />{" "}
            —
            <input
              type="text"
              className="txtbox col-2 text-center"
              ref={cardNumber2Ref}
              onChange={(e) =>
                handleCardNumberChange(e, "cardNumber2", cardNumber3Ref)
              }
            />{" "}
            —
            <input
              type="text"
              className="txtbox col-2 text-center"
              ref={cardNumber3Ref}
              onChange={(e) =>
                handleCardNumberChange(e, "cardNumber3", cardNumber4Ref)
              }
            />{" "}
            —
            <input
              type="text"
              className="txtbox col-2 text-center"
              ref={cardNumber4Ref}
              onChange={(e) => handleCardNumberChange(e, "cardNumber4", null)}
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
            {errors.cvv && <div className="text-danger">{errors.cvv}</div>}
          </div>

          <div className="mb-3">
            <div>
              <label className="form-label">
                <input
                  type="radio"
                  name="paymentOption"
                  value="One-time"
                  checked={paymentOption === "One-time"}
                  onChange={handelPaymentOptiondChange}
                ></input>
                One-Time Payment
              </label>
            </div>

            <div>
              <label className="form-label">
                <input
                  type="radio"
                  name="paymentOption"
                  value="installment"
                  checked={paymentOption === "installment"}
                  onChange={handelPaymentOptiondChange}
                ></input>
                Credit Card Installments
              </label>
            </div>

            {/*分期選項*/}
            <div className="d-flex gap-3">
              <label>
                <input
                  type="radio"
                  name="installmentOption"
                  value="3months"
                  checked={installmentOption === "3months"}
                  onChange={handelInstallmentOptiondChange}
                ></input>
                3 Months
              </label>

              <label>
                <input
                  type="radio"
                  name="installmentOption"
                  value="6months"
                  checked={installmentOption === "6months"}
                  onChange={handelInstallmentOptiondChange}
                ></input>
                6 Months
              </label>

              <label>
                <input
                  type="radio"
                  name="installmentOption"
                  value="12months"
                  checked={installmentOption === "12months"}
                  onChange={handelInstallmentOptiondChange}
                ></input>
                12 Months
              </label>

              <label>
                <input
                  type="radio"
                  name="installmentOption"
                  value="24months"
                  checked={installmentOption === "24months"}
                  onChange={handelInstallmentOptiondChange}
                ></input>
                24 Months
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentMethod;
