import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MyCard from "./components/MyCard";
import projectLogo from "./assets/LOGO11.png";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Artis Project</h1>
      <div className="container d-inline-flex p-2 flex-wrap">
        <MyCard photo={projectLogo} altText="photo alt text" />
        <MyCard photo={projectLogo} altText="photo alt text" />
        <MyCard photo={projectLogo} altText="photo alt text" />
        <MyCard photo={projectLogo} altText="photo alt text" />
      </div>
    </>
  );
}

export default App;
