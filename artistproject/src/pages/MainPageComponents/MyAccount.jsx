import { useState } from "react";


export default function MyAccount() {
  //1.先回傳customerID
  //2.接收customer資料
  //3.要帶入costomer的資料
  //const path=import.meta.env.VITE_DATA_HOST_API;
  //const api= path + "/costomer/";
  
  const [customer,setCustomer]=useState({
    name:"aaa",
    nickName:"aaa",
    email:"aaa",
    phone:"aaa",
    address:"aaa",
    password:"aaa"
  });
  // const getdata = async ()=>{
  //   try{
  //     const result =await axios.get(
  //       `${api}`
  //     );
  //     console.log(result);
  //     setCustomer(result.data);
  //   }catch (error) {
  //     console.log(error);
  //   }
  // }
  

  return (
      <div className="container">
        <h2 className="my-5 py-5 border-bottom">My Account</h2>
        <div className="row">
          <div className="d-flex flex-column justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Name:</h4></div>
              <div className="col-4"><h4>{customer.name}</h4></div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Nikename:</h4></div>
              <div className="col-4"><h4>{customer.nickName}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>E-mail:</h4></div>
              <div className="col-4"><h4>{customer.email}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Phone:</h4></div>
              <div className="col-4"><h4>{customer.phone}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Address:</h4></div>
              <div className="col-4"><h4>{customer.address}</h4></div>
            </div> 
            <div className="row d-flex justify-content-center">
              <div className="col-2"><h4>Password:</h4></div>
              <div className="col-4"><h4>{customer.password}</h4></div>
            </div>
            <div className="row d-flex justify-content-center ">
              <div className="btn m-4 col-1 " 
                   id="edit"
                   data-bs-toggle="modal"
                   data-bs-target="#editAccount">
                    Edit
              </div>        
              <div className="col-1"></div>
              <div className="btn btn-danger m-4 col-1" 
                   id="delete"
                   data-bs-toggle="modal"
                   data-bs-target="#DeleteAccount">
                   Delete
              </div>      
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
  );
}
