import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import MainPage from "./pages/MainPage";

import $ from "jquery";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home/*" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}
