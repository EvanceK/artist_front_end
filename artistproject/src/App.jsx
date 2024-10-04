import { useState, createContext, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ViewContainer from "./components/ViewContainer";
import $ from "jquery";
import MainPage from "./pages/MainPage";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<MainPage />}>
          <Route index element={<ViewContainer />}></Route>
        </Route>
      </Routes>
    </>
  );
}
