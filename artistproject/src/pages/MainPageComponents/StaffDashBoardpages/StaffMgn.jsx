import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";

export default function StaffMgn() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [staffList, setStaffList] = useState([]); //所有作家名單 目前for navBar 選單用
  const [staffTable, setStaffTable] = useState();
  // methods for loading data
  const getStaffList = async () => {
    const api = path + "/StaffController/findall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      // console.log(result.data);
      setStaffList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStaffList();
  }, []);

  useEffect(() => {
    if (staffList) setStaffTable(buildStaffTable());
  }, [staffList]);

  const buildStaffTable = () => {
    return staffList.map((a, i) => {
      console.log(a);
      return (
        <tr key={i}>
          <th scope="row">{a.staffId}</th>
          <td>{a.staffName}</td>
          <td>{a.staffDepartment}</td>
          <td>{a.staffUsername}</td>
          <td>{a.staffPassword}</td>
          <td className="d-flex align-items-center justify-content-center">
            <div className="row d-flex">
              <div className="btn col-4" id={a}>
                Edit
              </div>
              <div className="btn btn-danger col-4" id={a.staffId}>
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
      <div className="h1 mt-5">Staff Managerment</div>
      <div className="row">
        <form className="col-3">
          <div className="mb-3">
            <label htmlFor="staffId" className="form-label">
              Staff Id
            </label>
            <input
              type="text"
              className="form-control"
              id="staffId"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="staffName" className="form-label">
              Staff Name
            </label>
            <input
              type="text"
              className="form-control"
              id="staffName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="staffDepartment" className="form-label">
              Staff Department
            </label>
            <input
              type="text"
              className="form-control"
              id="staffDepartment"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="staffUserName" className="form-label">
            Staff UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="staffUserName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="staffPassWord" className="form-label">
            Staff PassWord
            </label>
            <input
              type="text"
              className="form-control"
              id="staffPassWord"
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
                <th scope="col">Staff Id</th>
                <th scope="col">Staff Name</th>
                <th scope="col">Staff Department</th>
                <th scope="col">Staff UserName</th>
                <th scope="col">Staff PassWord</th>
                <th scope="col">Modify</th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "380px", overflowY: "auto" }}>
              {staffTable}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
