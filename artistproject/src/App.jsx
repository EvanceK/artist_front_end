import { useState, createContext, useContext, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import LoginModal from "./components/LoginModal";
import StaffLoginModal from "./components/StaffLoginModal";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
import { UserContext } from "./components/UserContext";
import SignupSuccess from "./components/SignupSuccess";
import Deposit from "./components/Deposit";
import DeleteWarning from "./components/DeleteWarning";
import $ from "jquery";

function App() {
  const [userName, setUserName] = useState();

  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <NavBar></NavBar>
        <LoginModal></LoginModal>
        <StaffLoginModal></StaffLoginModal>
        <Register></Register>
        <HomeLayout></HomeLayout>
        <SignupSuccess></SignupSuccess>
        <Deposit></Deposit>
        <DeleteWarning></DeleteWarning>
      </UserContext.Provider>
    </>
  );
}

export default App;
