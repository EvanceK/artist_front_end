import { MainContext } from "../ContextProvider/MainContext";
import { useContext } from "react";
import * as bootstrap from "bootstrap";

export default function ChangeCreditCardModal() {
  const {
    ChangeCreditCardModalRef,
    cardNumber2Ref,
    cardNumber3Ref,
    cardNumber4Ref,
    handleCardNumberChange,
    handleExpirationDateChange,
    handleCvvChange,
    errors,
    paymentInfo,
    validateForm
  } = useContext(MainContext);

  //處理表單確認按鈕
  const handleConfirmClick = (e) => {
    e.preventDefault();
    const isValid = validateForm(null,paymentInfo);
    if(isValid){
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
                  <div>
                    <input
                      type="text"
                      className="form-control  "
                      id="bank"
                    ></input>
                  </div>

                  <div className="h5  mt-4">Credit card number :</div>

                  <div className="row d-flex justify-content-center m-4 gap-2">
            <input
              type="text"
              className="txtbox col-2 text-center"
              value={paymentInfo.cardNumber1}
              onChange={(e) =>
                handleCardNumberChange(e, "cardNumber1", cardNumber2Ref)
              }
              maxLength="4"
            />{" "}
            —
            <input
              type="text"
              className="txtbox col-2 text-center"
              value={paymentInfo.cardNumber2}
              ref={cardNumber2Ref}
              onChange={(e) =>
                handleCardNumberChange(e, "cardNumber2", cardNumber3Ref)
              }
            />{" "}
            —
            <input
              type="text"
              className="txtbox col-2 text-center"
              value={paymentInfo.cardNumber3}
              ref={cardNumber3Ref}
              onChange={(e) =>
                handleCardNumberChange(e, "cardNumber3", cardNumber4Ref)
              }
            />{" "}
            —
            <input
              type="text"
              className="txtbox col-2 text-center"
              value={paymentInfo.cardNumber4}
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

                    
                 
                  <div className=" d-flex justify-content-center m-5 ">
                    <div className="btn" 
                     onClick={handleConfirmClick}>
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
