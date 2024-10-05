import { useState, createContext, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";
import StaffLoginModal from "../components/StaffLoginModal";
import Register from "../components/Register";
import HomeLayout from "../components/HomeLayout";
import { UserContext } from "../components/UserContext";
import SignupSuccess from "../components/SignupSuccess";
import Deposit from "../components/Deposit";
import DeleteWarning from "../components/Deletewarning";
import ViewContainer from "../components/ViewContainer";
import Footer from "../components/Footer";
import $ from "jquery";
export default function MainPage() {
  const [userName, setUserName] = useState();
  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<ViewContainer />}></Route>
          </Route>
        </Routes>
        {/* modal for navbar vv */}
        <LoginModal></LoginModal>
        <StaffLoginModal></StaffLoginModal>
        <Register></Register>
        <SignupSuccess />
        {/* modal for navbar ^^ */}
        <Deposit />
        <DeleteWarning />
        <Footer />
      </UserContext.Provider>
    </>
  );
}
