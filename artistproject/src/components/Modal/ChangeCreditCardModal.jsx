import { MainContext } from "../ContextProvider/MainContext";
import { useContext } from "react";

export default function ChangeCreditCardModal() {
  const {
    ChangeCreditCardModalRef,
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

                  <div className="input d-flex flex-column">
                    <div className=" d-flex m-3">
                      <input
                        type="text"
                        className="form-control "
                        value={cardNumber1}
                        onChange={(e) =>
                          handleCardNumberChange(
                            e,
                            setCardNumber1,
                            cardNumber2Ref
                          )
                        }
                        maxLength="4"
                      />
                      <span className="align-self-center ms-1 me-1"> — </span>
                      <input
                        type="text"
                        className="form-control "
                        value={cardNumber2}
                        ref={cardNumber2Ref}
                        onChange={(e) =>
                          handleCardNumberChange(
                            e,
                            setCardNumber2,
                            cardNumber3Ref
                          )
                        }
                        maxLength="4"
                      />
                      <span className="align-self-center ms-1 me-1"> — </span>
                      <input
                        type="text"
                        className="form-control "
                        value={cardNumber3}
                        ref={cardNumber3Ref}
                        onChange={(e) =>
                          handleCardNumberChange(
                            e,
                            setCardNumber3,
                            cardNumber4Ref
                          )
                        }
                        maxLength="4"
                      />
                      <span className="align-self-center ms-1 me-1"> — </span>
                      <input
                        type="text"
                        className="form-control "
                        value={cardNumber4}
                        ref={cardNumber4Ref}
                        onChange={(e) =>
                          handleCardNumberChange(e, setCardNumber4, null)
                        }
                        maxLength="4"
                      />
                    </div>

                    <div className="input d-flex flex-column">
                      <div className=" d-flex m-3 justify-content-center">
                        <span className="align-self-center ms-1 me-1 w-75">
                          {" "}
                          Expiration Date :{" "}
                        </span>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="MM/YY"
                        />
                        <span className="align-self-center ms-1 me-1 w-25">
                          {" "}
                          CVV :{" "}
                        </span>
                        <input type="text" className="form-control " />
                      </div>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center m-5 ">
                    <div className="btn" data-bs-dismiss="modal">
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
