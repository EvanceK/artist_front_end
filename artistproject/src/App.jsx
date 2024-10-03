import { useState, createContext, useContext, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import LoginModal from "./components/LoginModal";
import StaffLoginModal from "./components/StaffLoginModal";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
import { UserContext } from "./components/UserContext";
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
      </UserContext.Provider>
    </>
  );
}

export default App;
