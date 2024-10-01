import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import LoginModal from "./components/LoginModal";
import StaffLoginModal from "./components/StaffLoginModal";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <LoginModal></LoginModal>
      <StaffLoginModal></StaffLoginModal>
      <Register></Register>
      <HomeLayout></HomeLayout>
    </>
  );
}

export default App;
