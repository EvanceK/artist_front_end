import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";

export default function OrderMgn() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [artistList, setArtisList] = useState([]); //所有作家名單 目前for navBar 選單用
  const [artistTable, setArtistTable] = useState();
  // methods for loading data
  const getArtistList = async () => {
    const api = path + "/ArtController/findall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      // console.log(result.data);
      setArtisList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtistList();
  }, []);

  useEffect(() => {
    if (artistList) setArtistTable(buildArtistTable());
  }, [artistList]);

  const buildArtistTable = () => {
    return artistList.map((a, i) => {
      console.log(a);
      return (
        <tr key={i}>
          <th scope="row">{a.artistId}</th>
          <td>{a.artistName}</td>
          <td className="col-4">
            <div className="row d-flex">
              <div className="btn col-4" id={a.artistId}>
                Edit
              </div>
              <div className="btn btn-danger col-4" id={a.artistId}>
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
              {artistTable}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
