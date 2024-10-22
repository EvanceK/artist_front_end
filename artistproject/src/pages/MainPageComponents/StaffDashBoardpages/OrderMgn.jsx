import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function OrderMgn() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [orderList, setOrderList] = useState([]); //所有訂單明細 目前for navBar 選單用
  const [inputData,setInputData] = useState();
  const [orderTable, setOrderTable] = useState();
  const [readData, setReadData] = useState();
  const [uploadToggle, setUploadToggle] = useState(false);
  const {
    register, //Form state
    handleSubmit, //submit action
    reset,
    setValue, //set value from watched control
  } = useForm();
  const [deliverySelectionList,setDeliverySelectionList]=useState();
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
  const buildDeliverySelectionList = () => {
    return artistList?.map((a, i) => {
      return (
        <option key={i} value={a.artistId}>
          {a.artistName}
        </option>
      );
    });
  };
  // methods for loading data
  const getOrderList = async () => {
    const api = path + "/OrderController/selectall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      console.log(result.data);
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
  }, [orderList,uploadToggle]);

  const editOrder = async(event) =>{
    const id = event.target.id
    console.log(id);
    
    const api = path + "/OrderController/{ordernumber}?ordernumber="
    try{
      const result = await axiosInstance.get(`${api}${id}`)
      console.log(result.data);
      setReadData(result.data)
    }catch(error){
      console.log(error);   
    }
  }
  useEffect(() => {
    if (readData) {
      document.getElementById("orderNumber").value = readData.orderNumber;
      setValue("orderNumber", readData.orderNumber);
      document.getElementById("orderDate").value = readData.orderDate;
      setValue("orderDate", readData.orderDate);
      document.getElementById("customerId").value = readData.customerId;
      setValue("customerId", readData.customerId);
      document.getElementById("status").value = readData.status;
      setValue("status", readData.status);
      document.getElementById("deliveryAdress").value = readData.deliveryAdress;
      setValue("deliveryAdress", readData.deliveryAdress);
      document.getElementById("attName").value = readData.attName;
      setValue("attName", readData.attName);
      document.getElementById("attPhone").value = readData.attPhone;
      setValue("attPhone", readData.attPhone);
      document.getElementById("deliveryInstrictions").value = readData.deliveryInstrictions;
      setValue("deliveryInstrictions", readData.deliveryInstrictions);
    } 
  }, [readData]);
  const deleteOrder = async(event) =>{
    const id = event.target.id
    console.log(id);
    const api = path + "/OrderController/"
    const yes = confirm('你確定要刪除嗎？');
    if (yes) {
      try{
        const result = await axios.delete(`${api}${id}`)
        console.log(result.data);
        setUploadToggle(!uploadToggle);
        alert('成功刪除');
      }catch(error){
        console.log(error);   
      }
    } else {
      alert('你按了取消按鈕');
    }
    
  }
  const updataArtist = async()=>{
    const api = path + "/OrderController/editOrder";
    try{
      const result = await axiosInstance.put(`${api}`, inputData);
      //刷新頁面用
      setUploadToggle(!uploadToggle)
      //清空input
      reset();
      alert("修改成功")
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    if(inputData)
    try {
        updataArtist();
    } catch (error) {
      console.log(error);
    }
  }, [inputData]);
  const onSubmit = (data)=>{
    console.log(data);
    //確認資料
    if (data.confirmed) {
    setInputData(data);
    } else {
    alert("Please Confirmed");
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
      <div className="h1 mt-5">DeliveryOrders Managerment</div>
      <div className="row">
        <form className="col-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="delivery_number" className="form-label">
            Delivery_number
            </label>

            <select
              className="form-select"
              aria-label="Default select example"
              {...register("delivery_number")}
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option defaultValue={0}>select an artist ...</option>
              {deliverySelectionList}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="orderNumber" className="form-label">
              OrderNum
            </label>
            <input
              type="text"
              className="form-control"
              id="orderNumber"
              aria-describedby="emailHelp"
              {...register("orderNumber")}
              readOnly
            />
          </div>
          <div className="mb-3">
          <label htmlFor="orderDate" className="form-label">
              Order_Date
            </label>
            <input
              type="text"
              className="form-control"
              id="orderDate"
              aria-describedby="emailHelp"
              {...register("orderDate")}
              readOnly
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
              {...register("customerId")}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="status"
              {...register("status")}
              // value={selectedOption}
              // onChange={handleSelectChange}
            >
              <option defaultValue={0}>Pending Final Payment</option>
              <option defaultValue={1}>select an status1</option>
              <option defaultValue={2}>select an status2 </option>
              <option defaultValue={3}>select an status3 </option>
              <option defaultValue={4}>select an status4 </option>
              {/* {artistSelectionList} */}
            </select>
          </div>
          {/* <div className="mb-3">
          <label htmlFor="status" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control"
              id="status"
              aria-describedby="emailHelp"
              {...register("status")}
            />
          </div> */}
          <div className="mb-3">
          <label htmlFor="deliveryAdress" className="form-label">
              Delivery_Address
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryAdress"
              aria-describedby="emailHelp"
              {...register("deliveryAdress")}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="attName" className="form-label">
          Att_Name
            </label>
            <input
              type="text"
              className="form-control"
              id="attName"
              aria-describedby="emailHelp"
              {...register("attName")}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="attPhone" className="form-label">
          Att_Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="attPhone"
              aria-describedby="emailHelp"
              {...register("attPhone")}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="deliveryInstrictions" className="form-label">
          Delivery_Instrictions
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryInstrictions"
              aria-describedby="emailHelp"
              {...register("deliveryInstrictions")}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="confirmed"
              {...register("confirmed")}
            />
            <label className="form-check-label" htmlFor="confirmed">
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
