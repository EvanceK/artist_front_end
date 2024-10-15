import { Outlet } from "react-router-dom";
import StaffNavBar from "./MainPageComponents/StaffDashBoardpages/StaffNavBar";

export default function StaffDashboar() {
  return (
    <>
      <div className="staffDashboard">
        <div className="h1">Staff Dashboard</div>
        <div className="row">
          <div className="col-3">
            <StaffNavBar />
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
