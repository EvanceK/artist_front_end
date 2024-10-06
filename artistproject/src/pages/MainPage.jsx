import { useState, createContext, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";
import StaffLoginModal from "../components/StaffLoginModal";
import Register from "../components/Register";
import HomeLayout from "../components/HomeLayout";
import SignupSuccess from "../components/SignupSuccess";
import Deposit from "../components/Deposit";
import DeleteWarning from "../components/Deletewarning";
import ViewContainer from "../components/ViewContainer";
// import PaintingsListContainer from "../components/PaintingsListContainer";
import Footer from "../components/Footer";
import $ from "jquery";
export default function MainPage() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<ViewContainer />} />
          {/* <Route path="/byArtist" element={<PaintingsListContainer />} /> */}
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
    </>
  );
}
