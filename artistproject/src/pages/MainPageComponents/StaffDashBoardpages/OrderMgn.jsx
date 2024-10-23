import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function OrderMgn() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [deliveryList, setDeliveryList] = useState([]); //所有訂單明細 目前for navBar 選單用
  const [inputData,setInputData] = useState();
  const [orderTable, setOrderTable] = useState();
  const [readData, setReadData] = useState();
  const [uploadToggle, setUploadToggle] = useState(false);
  // const [findByStatus,setFindByStatus] =useState();
  const {
    register, //Form state
    handleSubmit, //submit action
    reset,
    setValue, //set value from watched control
  } = useForm();
  const [deliverySelectionList,setDeliverySelectionList]=useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [deliveryOption,setDeliveryOption] =useState("");
  const handleSelectChange = (event) => {
    setDeliveryOption(event.target.value);
    console.log(event.target.value);
  };
  const handleStatusChange =(event) =>{
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  }
  //取得status的data
  const getdata = useCallback(async () => {
    const api = path + "/DeliveryOrderController/status";
    if (!selectedOption) return; // Prevent call if artistId is not available

    try {
      const result = await axiosInstance.get(
        `${api}?status=${selectedOption}`
      );
      console.log(result.data);
      // setFindByStatus(result.data)
      setDeliveryList(result.data)
      // setPaintingData(result.data.paintingsList);

    } catch (error) {
      console.log(error);
    }
  }, [selectedOption]);

  // const getDeliverydata = useCallback(async () => {
  //   const api = path + "/DeliveryOrderController/status";
  //   if (!selectedOption) return; // Prevent call if artistId is not available

  //   try {
  //     const result = await axiosInstance.get(
  //       `${api}?status=${selectedOption}`
  //     );
  //     console.log(result.data);
  //     // setFindByStatus(result.data)
  //     setDeliveryList(result.data)
  //     // setPaintingData(result.data.paintingsList);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // // }, [selectedOption]);
  // useEffect(() => {
  //   getDeliverydata();
  //   setValue("deliveryNumber",selectedOption)
  // }, [deliveryOption]);

  useEffect(() => {
    getdata();
    setValue("status",selectedOption)
  }, [selectedOption,uploadToggle,]);

  const buildDeliverySelectionList = () => {
    return deliveryList?.map((a, i) => {
      return (
        <option key={i} value={a.deliveryNumber}>
          {a.deliveryNumber}
        </option>
      );
    });
  };
  // methods for loading data
  const getDeliveryList = async () => {
    const api = path + "/DeliveryOrderController/selectall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      console.log(result.data);
      setDeliveryList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDeliveryList();
  }, []);

  useEffect(() => {
    if (deliveryList) setOrderTable(buildDeliveryTable());
    setDeliverySelectionList(buildDeliverySelectionList());
  }, [deliveryList,uploadToggle]);

  const editDelivery = async(event) =>{
    const id = event.target.id
    console.log(id);
    
    const api = path + "/DeliveryOrderController/"
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
      document.getElementById("deliveryNumber").value = readData.deliveryNumber;
      setValue("deliveryNumber", readData.deliveryNumber);
      document.getElementById("deliveryInstrictions").value = readData.deliveryInstrictions;
      setValue("deliveryInstrictions", readData.deliveryInstrictions);
      document.getElementById("packageStaff").value = readData.packageStaff;
      setValue("packageStaff", readData.packageStaff);
      document.getElementById("deliveryAddress").value = readData.deliveryAddress;
      setValue("deliveryAddress", readData.deliveryAddress);
      document.getElementById("attName").value = readData.attName;
      setValue("attName", readData.attName);
      document.getElementById("attPhone").value = readData.attPhone;
      setValue("attPhone", readData.attPhone);
      document.getElementById("deliveryStaff").value = readData.deliveryStaff;
      setValue("deliveryStaff", readData.deliveryStaff);
    } 
  }, [readData]);
  const updataDelivery = async()=>{
    const api = path + "/DeliveryOrderController/editDeliveryOrders";
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
      updataDelivery();
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
  const buildDeliveryTable = () => {
    return deliveryList.map((a, i) => {
      console.log(a);
      return (
        <tr key={i}>
          <th scope="row">{a.deliveryNumber}</th>
          <td>{a.createDate}</td>
          <td>{a.status}</td>
          <td className="col-4">
            <div className="row d-flex">
              <div className="btn col-4" id={a.deliveryNumber} onClick={editDelivery}>
                Edit
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
            <label htmlFor="deliveryNumber" className="form-label">
            Delivery_number
            </label>

            <select
              className="form-select"
              aria-label="Default select example"
              id="deliveryNumber"
              {...register("deliveryNumber")}
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option defaultValue={0}></option>
              {deliverySelectionList}
            </select>
          </div>
          {/* <div className="mb-3">
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
          </div> */}
          <div className="mb-3">
          <label htmlFor="packageStaff" className="form-label">
          PackageStaff
            </label>
            <input
              type="text"
              className="form-control"
              id="packageStaff"
              aria-describedby="emailHelp"
              {...register("packageStaff")}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="deliveryStaff" className="form-label">
          DeliveryStaff
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryStaff"
              aria-describedby="emailHelp"
              {...register("deliveryStaff")}
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
              onChange={handleStatusChange}
            >
              <option defaultValue={0}>待處理</option>
              <option defaultValue={1}>已包裝</option>
              <option defaultValue={2}>已出貨</option>
              <option defaultValue={3}>已送達</option>
              <option defaultValue={4}>已取貨</option>
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
          <label htmlFor="deliveryAddress" className="form-label">
              Delivery_Address
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryAddress"
              aria-describedby="emailHelp"
              {...register("deliveryAddress")}
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
                <th scope="col">DeliveryNumber</th>
                {/* <th scope="col">Order_Date</th> */}
                <th scope="col">CreateDate</th>
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
