import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="homelayout">
      <Outlet />
    </div>
  );
}
