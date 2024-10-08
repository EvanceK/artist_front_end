export default function MyAccount() {
  return (
    <>
      <div className="container">
        <h2 className="my-5 py-5 border-bottom">My Account</h2>
        <div className="row">
          <div className="d-flex flex-column justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Name:</h4></div>
              <div className="col-4"><h4>Chan Yo Yo</h4></div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Nikename:</h4></div>
              <div className="col-4"><h4>YoYoYo</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>E-mail:</h4></div>
              <div className="col-4"><h4>YoYoYo@gmail.com</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Phone:</h4></div>
              <div className="col-4"><h4>0937***182</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Address:</h4></div>
              <div className="col-4"><h4>236 NewTaipeiCity</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Password:</h4></div>
              <div className="col-4"><h4>chen24010812</h4></div>
            </div>
            <div className="row d-flex justify-content-center ">
              <div className="btn m-4 col-1 " id="edit">Edit</div>        
              <div className="col-1"></div>
              <div className="btn btn-danger m-4 col-1" id="delete">Delete</div>      
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
