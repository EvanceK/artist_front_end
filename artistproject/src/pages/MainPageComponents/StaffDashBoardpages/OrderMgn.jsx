import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";
import axios from "axios";

export default function OrderMgn() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [orderList, setOrderList] = useState([]); //所有訂單明細 目前for navBar 選單用
  const [inputData,setInputData] = useState();
  const [orderTable, setOrderTable] = useState();
  // methods for loading data
  const getOrderList = async () => {
    const api = path + "/OrderController/selectall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      // console.log(result.data);
      setOrderList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrderList();
  }, []);

  useEffect(() => {
    if (orderList) setOrderTable(buildArtistTable());
  }, [orderList]);

  const editOrder = async(event) =>{
    const id = event.target.id
    console.log(id);
    
    const api = path + "/OrderController/"
    try{
      const result = await axiosInstance.get(`${api}${id}`)
      console.log(result.data);
      
    }catch(error){
      console.log(error);   
    }
  }
  const deleteOrder = async(event) =>{
    const id = event.target.id
    console.log(id);
    
    const api = path + "/OrderController/OR0006"
    try{
      const result = await axios.delete(`${api}`)
      console.log(result.data);
      
    }catch(error){
      console.log(error);   
    }
  }
  const buildArtistTable = () => {
    return orderList.map((a, i) => {
      console.log(a);
      return (
        <tr key={i}>
          <th scope="row">{a.orderNumber}</th>
          <td>{a.customerId}</td>
          <td>{a.status}</td>
          <td className="col-4">
            <div className="row d-flex">
              <div className="btn col-4" id={a.orderNumber} onClick={editOrder}>
                Edit
              </div>
              <div className="btn btn-danger col-4" id={a.orderNumber} onClick={deleteOrder}>
                Delete
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <div className="h1 mt-5">Order Managerment</div>
      <div className="row">
        <form className="col-3">
          <div className="mb-3">
            <label htmlFor="orderNum" className="form-label">
              OrderNum
            </label>
            <input
              type="text"
              className="form-control"
              id="orderNum"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
              Order_Date
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
              CustmerId
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
              Delivery_Address
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
          Att_Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
          Att_Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
          Delivery_Instrictions
            </label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck"
            />
            <label className="form-check-label" htmlFor="exampleCheck">
              Confirmed
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="col"></div>
        <div
          className="table-responsive col-8"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Order_Number</th>
                {/* <th scope="col">Order_Date</th> */}
                <th scope="col">Customer_Id</th>
                <th scope="col">Status</th>
                {/* <th scope="col">Delivery_Address</th>
                <th scope="col">Att_Name</th>
                <th scope="col">Att_Phone</th>
                <th scope="col">Delivery_Instrictions</th> */}
                <th scope="col">Modify</th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "380px", overflowY: "auto" }}>
              {orderTable}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
