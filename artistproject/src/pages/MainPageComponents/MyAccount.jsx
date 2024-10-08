import { useState } from "react";


export default function MyAccount(costomer) {
  //要帶入costomer的資料
  return (
      <div className="container">
        <h2 className="my-5 py-5 border-bottom">My Account</h2>
        <div className="row">
          <div className="d-flex flex-column justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Name:</h4></div>
              <div className="col-4"><h4>{costomer.name}</h4></div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Nikename:</h4></div>
              <div className="col-4"><h4>{costomer.nick_name}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>E-mail:</h4></div>
              <div className="col-4"><h4>{costomer.email}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Phone:</h4></div>
              <div className="col-4"><h4>{costomer.phone}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Address:</h4></div>
              <div className="col-4"><h4>{costomer.address}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Password:</h4></div>
              <div className="col-4"><h4>{costomer.password}</h4></div>
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
  );
}
