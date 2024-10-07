export default function MyAccount() {
  return (
    <>
      <div className="container">
        <h2 className="my-5 py-5">My Account</h2>
        <div className="row d-flex">
          <div className="col-3"></div>
          <div className="information col-3 d-flex ali">
            <div className="d-flex flex-column justify-content-"> 
              <h4>Name:</h4>
              <h4>Nikename:</h4>
              <h4>E-mail:</h4>
              <h4>Phone:</h4>
              <h4>Address:</h4>
              <h4>Password:</h4>
              <div className="btn m-4 w-100" id="edit">Edit</div>
            </div>
            </div>
            <div className="col-3">
              <div>
              <h4>Chan Yo Yo</h4>
              <h4>YoYoYo</h4>
              <h4>YoYoYo@gmail.com</h4>
              <h4>0937***182</h4>
              <h4>236 NewTaipeiCity</h4>
              <h4>chen24010812</h4>
              <div className="btn m-4" id="delete">Delete</div>
              </div>
            </div>      
        </div>
      </div>
    </>
  );
}
