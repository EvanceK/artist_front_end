import { Outlet } from "react-router-dom";

export default function CusDashboard() {
  return (
    <>
      <div className="cusdash">
        <Outlet />
      </div>
    </>
  );
}
