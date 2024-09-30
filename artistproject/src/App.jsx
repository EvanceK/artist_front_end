import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";

import HomeLayout from "./components/HomeLayout";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <HomeLayout></HomeLayout>
    </>
  );
}

export default App;
