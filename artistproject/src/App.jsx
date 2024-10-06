import { Route, Routes } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "./components/ContextProvider/UserContext";

// import "./App.css";
import Welcome from "./pages/Welcome";
import MainPage from "./pages/MainPage";

import $ from "jquery";

export default function App() {
  const [userName, setUserName] = useState();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <UserContext.Provider
        value={{ userName, setUserName, isLogin, setIsLogin }}
      >
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/home/*" element={<MainPage />}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}
