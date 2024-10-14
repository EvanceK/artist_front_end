import React, { useState,useContext } from "react";
import { MainContext } from "./ContextProvider/MainContext";


function PaymentMethod() {
  const [paymentmethod, setPaymentMethod] = useState("CreditCard");
  const [paymentOption, setPaymentOption] = useState("one-time");
  const [installmentOption, setInstallmentOption] = useState("");

  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    setCardNumber1,
    setCardNumber2,
    setCardNumber3,
    setCardNumber4,
    cardNumber2Ref,
    cardNumber3Ref,
    cardNumber4Ref,
    handleCardNumberChange,
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
                <input type="text" 
                className="txtbox col-2 text-center" 
                value={cardNumber1}
                onChange={(e) =>
                  handleCardNumberChange(
                    e,
                    setCardNumber1,
                    cardNumber2Ref
                  )
                }
                maxLength="4"/> —
                <input type="text" className="txtbox col-2 text-center" value={cardNumber2}
                 ref={cardNumber2Ref}
                onChange={(e) =>
                  handleCardNumberChange(
                    e,
                    setCardNumber2,
                    cardNumber3Ref
                  )
                }/> —
                <input type="text" className="txtbox col-2 text-center" value={cardNumber3}
                 ref={cardNumber3Ref}
                onChange={(e) =>
                  handleCardNumberChange(
                    e,
                    setCardNumber3,
                    cardNumber4Ref
                  )
                }/> —
                <input type="text" className="txtbox col-2 text-center" value={cardNumber4}
                 ref={cardNumber4Ref}
                onChange={(e) =>
                  handleCardNumberChange(
                    e,
                    setCardNumber4,
                    null
                  )
                }/>
                <div className="row d-flex justify-content-center  m-3 ">
                  Expiration Date :
                  <input type="text" className="Date col-2 mx-3 text-center" />
                  cvv: <input type="text" name="cvv" className="col-2 mx-3 text-center" />
                </div>
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
