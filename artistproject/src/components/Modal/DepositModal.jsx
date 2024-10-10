export default function DepositModal(){
    return(
        <div
        className="modal modal-lg fade"
        id="Deposit"
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
            <div className="Deposit ">
              <div className="row d-flex justify-content-center">
                <div className="col-10 border-bottom m-2">
                <h3>Deposit</h3>
                </div>
              <div className="row d-flex flex-column justify-content-center">
                  <div className="word mt-5 col-8 mx-auto align-items-start">To participate in this auction, a refundable deposit is required. This<br/>
                      deposit will be used as a guarantee of your bids and will be refunded if<br/>
                      you do not win any items.The deposit amount is calculated as a<br/>
                      percentage of the current bid. You are required to pay a deposit of 10%<br/>
                      of your current bid amount during the bid.
                  </div>
                <form action="">    
                  <div className="input d-flex flex-column">
                      <div className="row d-flex justify-content-center m-4">
                      <input type="text" className="txtbox col-2"/>—
                      <input type="text" className="txtbox col-2"/>—
                      <input type="text" className="txtbox col-2"/>—
                      <input type="text" className="txtbox col-2"/>
                      <div className="row d-flex justify-content-center  m-3">
                      Expiration Date :<input type="text" className="Date col-2 mx-3"/>cvv: <input type="text" name="cvv" className="col-2 mx-3"/>
                      </div>
                      </div>
                      
                  </div>
                  <div className="place-Bid d-flex justify-content-center m-5 ">
                      <div className="btn">Place Bid</div>
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