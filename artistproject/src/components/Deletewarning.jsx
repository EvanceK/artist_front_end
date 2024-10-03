export default function  DeleteWarning(){
    return(
        <div
        className="modal modal-lg fade"
        id="DeleteWarning"
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
            <div className="DeleteWarning">
                <div className=" my-3"> 
                    <h2>Do you want to remove the winning item?</h2>
                </div>
                <div className="icon">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                </div>
                <div className="">
                    <h5>Doing so may result in additional fees 
                    and restiriction of future participation</h5>
                </div>
                <div className="row  d-flex justify-content-center m-5">
                    <div className="border border-dark col-2 py-2 ">DELETE</div>
                </div>
            </div>
              
          </div>
        </div>
        </div>
        
    );
}