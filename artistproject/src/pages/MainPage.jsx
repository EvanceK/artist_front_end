import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginModal from "../components/Modal/LoginModal";
import StaffLoginModal from "../components/Modal/StaffLoginModal";
import Register from "../components/Modal/RegisterModal";
import HomeLayout from "./MainPageComponents/HomeLayout";
import SignupSuccess from "../components/Modal/SignupSuccess";
import Deposit from "../components/Modal/DepositModal";
import DeleteAccount from "./MainPageComponents/MyAccountComponents/DeleteAccount";
import ViewContainer from "./MainPageComponents/ViewContainer";
import MyAccount from "./MainPageComponents/MyAccount";
import PaintingsListContainer from "./MainPageComponents/ArtistViewContainer";
import { MainContextProvider } from "../components/ContextProvider/MainContext";
import ViewByArtistContainer from "./MainPageComponents/ViewByArtistContainer";
import Auction from "../components/Auction";
import Footer from "../components/Footer";
import CusDashboard from "./CusDashboard";
import ComingSoon from "./Comingsoon";
import EditAccount from "./MainPageComponents/MyAccountComponents/EditAccount";
import OrderPage from "./MainPageComponents/OrderPage";
import OrderHistory from "./MainPageComponents/OrderRecord";
import OrderRecord from "./MainPageComponents/OrderRecord";
import WinningRecords from "./MainPageComponents/WinningRecords";
import BiddingHistory from "../components/Offcanvas/BiddingHistoryOffcanvas";
import WishlistOffcanvas from "../components/Offcanvas/WishlistOffcanvas";
import BiddingHistoryOffcanvas from "../components/Offcanvas/BiddingHistoryOffcanvas";

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
            <Route path="winningRecords" element={<WinningRecords />}>
              <Route path="biddingHistory" element={<BiddingHistory />}></Route>{" "}
            </Route>
          </Route>
        </Routes>
        {/* modal for navbar vv */}
        <LoginModal></LoginModal>
        <EditAccount />
        <DeleteAccount />
        <StaffLoginModal></StaffLoginModal>
        <Register></Register>
        <SignupSuccess />
        <Deposit />
        {/* modal for navbar ^^ */}
        {/* Offcanvas vv*/}
        <BiddingHistoryOffcanvas/>
        <WishlistOffcanvas />
        {/* Offcanvas ^^*/}
        <Footer />
      </MainContextProvider>
    </>
  );
}
