import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/ContextProvider/UserContext";

// import "./App.css";
import Welcome from "./pages/Welcome";
import MainPage from "./pages/MainPage";

import StaffDashboar from "./pages/StaffDashboar";
import PaintingMgn from "./pages/MainPageComponents/StaffDashBoardpages/PaintingMgn";
import StaffLoginModal from "./components/Modal/StaffLoginModal";
import ArtistMng from "./pages/MainPageComponents/StaffDashBoardpages/ArtistMng";
// import MemberLogin from "./components/Modal/MemberLogin";

export default function App() {
  const [userName, setUserName] = useState();
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  return (
    <>
      <UserContext.Provider
        value={{ userName, setUserName, isLogin, setIsLogin }}
      >
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="staffdashboard" element={<StaffDashboar />}>
            <Route index element={<ArtistMng />} />
            <Route path="paintingmgn" element={<PaintingMgn />} />
          </Route>
          <Route path="/home/*" element={<MainPage />}></Route>
          {/*要登入員工才可以看到的 */}
        </Routes>
        <StaffLoginModal />
        {/* <MemberLogin /> */}
      </UserContext.Provider>
    </>
  );
}
