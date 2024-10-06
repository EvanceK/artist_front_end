import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";
import StaffLoginModal from "../components/StaffLoginModal";
import Register from "../components/Register";
import HomeLayout from "../components/HomeLayout";
import SignupSuccess from "../components/SignupSuccess";
import Deposit from "../components/Deposit";
import DeleteWarning from "../components/Deletewarning";
import ViewContainer from "./MainPageComponents/ViewContainer";
import MyAccount from "./MainPageComponents/MyAccount";
import PaintingsListContainer from "../components/PaintingsListContainer";
import { MainPageContext } from "../components/ContextProvider/MainPageContext";
import Footer from "../components/Footer";
import $ from "jquery";
export default function MainPage() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/ArtController/findall";
  const [artistList, setArtisList] = useState();
  const getdata = async () => {
    try {
      const result = await axios.get(`${api}`);
      setArtisList(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <MainPageContext.Provider value={{ artistList, setArtisList }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<ViewContainer />} />
            <Route path="/byArtist" element={<PaintingsListContainer />} />
          </Route>
          <Route>
            <Route path="/cusdash" element={<MyAccount />} />
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
      </MainPageContext.Provider>
    </>
  );
}
