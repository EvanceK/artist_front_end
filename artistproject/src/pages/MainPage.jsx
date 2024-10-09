import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginModal from "../components/accountModal/LoginModal";
import StaffLoginModal from "../components/StaffLoginModal";
import Register from "../components/accountModal/Register";
import HomeLayout from "./MainPageComponents/HomeLayout";
import SignupSuccess from "../components/SignupSuccess";
import Deposit from "../components/Deposit";
import DeleteWarning from "../components/Deletewarning";
import ViewContainer from "./MainPageComponents/ViewContainer";
import MyAccount from "./MainPageComponents/MyAccount";
import PaintingsListContainer from "./MainPageComponents/ArtistViewContainer";
import { MainContextProvider } from "../components/ContextProvider/MainContext";
import ViewByArtistContainer from "./MainPageComponents/ViewByArtistContainer";
import Auction from "../components/Auction";
import Footer from "../components/Footer";
import CusDashboard from "./CusDashboard";
import ComingSoon from "./Comingsoon";
import EditAccount from "../components/EditAccount";
import DeleteAccount from "../components/DeleteAccount";
export default function MainPage() {
  return (
    <>
      <MainContextProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<ViewContainer />} />
            <Route path="/byArtist" element={<PaintingsListContainer />} />
            <Route path=":id" element={<ViewByArtistContainer />} />
            <Route path="/auction" element={<Auction></Auction>} />
          </Route>
          <Route path="/cusdashboard" element={<CusDashboard />}>
            <Route path="myaccount" element={<MyAccount />} />
            <Route path="comingsoon" element={<ComingSoon />}></Route>
          </Route>
        </Routes>
        {/* modal for navbar vv */}
        <LoginModal></LoginModal>
        <EditAccount/>
        <DeleteAccount/>
        <StaffLoginModal></StaffLoginModal>
        <Register></Register>
        <SignupSuccess />
        <DeleteWarning />
        <Deposit />

        {/* modal for navbar ^^ */}
        <Footer />
      </MainContextProvider>
    </>
  );
}
