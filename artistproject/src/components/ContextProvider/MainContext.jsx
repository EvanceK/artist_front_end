import {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import * as bootstrap from "bootstrap"; // Import Bootstrap as a module
import axiosInstance from "../../axiosConfig";
import { UserContext } from "./UserContext";
// Create the Context
export const MainContext = createContext();

export function MainContextProvider({ children }) {
  //API path 存放在環境變數 .evn 設定為 http://localhost:8080
  const path = import.meta.env.VITE_DATA_HOST_API;
  //state for data 共用變數
  // const [loadWishlist, setLoadWishlist] = useState(false);
  // const [getWishlistData, setGetWishListData] = useState(false);
  const [artistList, setArtisList] = useState([]); //所有作家名單 目前for navBar 選單用
  const [WToS, setWToS] = useState(false);
  const [wishlistResult, setWishlistResult] = useState();
  const [reLoadBiddingHistory, setReLoadBiddingHistory] = useState(false);
  const [reLoadBiddingNum, setReLoadBiddingNum] = useState(false);
  const [addRemoveWishlistprocessed, setaddRemoveWishlistprocessed] =
    useState(false);
  // const [wishlistPaintingIdList, setWishlistPaintingIdList] = useState([]);
  //vv for searching 功能用的變數：
  const [search, setSearch] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const { isLogin } = useContext(UserContext);

  // methods for loading data
  const getArtistList = async () => {
    const api = path + "/ArtController/findall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      // console.log(result);
      setArtisList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getWishList = useCallback(async () => {
    const authorization = localStorage.getItem("token");
    const api = path + "/api/wishlist";

    if (authorization) {
      try {
        const result = await axiosInstance.get(`${api}`);
        setWishlistResult(result.data);
        console.log("step 4: got wishlsht from data");
      } catch (error) {
        showLoginModal();
        console.log(error);
      }
    }
  }, []);
  useEffect(() => {
    if (wishlistResult) {
      const paintingIdArray = wishlistResult.map((w) => w.paintingId);
      localStorage.setItem("Wishlist", JSON.stringify(wishlistResult));
      localStorage.setItem("paintingIdArray", JSON.stringify(paintingIdArray));
      setWToS(localStorage.getItem("paintingIdArray"));
      console.log("step 5: record to localStorage", WToS);
    }
    // setLike(!like);
  }, [wishlistResult, getWishList]);
  // useEffect for preload data
  useEffect(() => {
    getWishList();
  }, [isLogin, addRemoveWishlistprocessed]);

  // Create a Provider component
  const loginModalRef = useRef(null); // useRef for loginModal
  const incorrectAccountModalRef = useRef(null); // useRef for loginModal
  const PasswordChangedRef = useRef(null); // useRef for loginModal
  // Function to trigger the modal
  const showLoginModal = () => {
    if (loginModalRef.current) {
      const modal = new bootstrap.Modal(loginModalRef.current); // Use bootstrap.Modal directly
      modal.show();
    }
  };

  // Function to trigger the modal
  const showIncorrectAccountModal = () => {
    if (incorrectAccountModalRef.current) {
      const modal = new bootstrap.Modal(incorrectAccountModalRef.current); // Use bootstrap.Modal directly
      modal.show();
    }
  };

  // Function to trigger the modal
  const showPasswordChangedRef = () => {
    if (PasswordChangedRef.current) {
      const modal = new bootstrap.Modal(PasswordChangedRef.current); // Use bootstrap.Modal directly
      modal.show();
    }
  };
  // const getSearch = async () => {
  //   const api = path + `/PTController/search?${searchParams}`;
  //   const result = await axiosConfig.get(api);
  //   console.log(result);
  // };

  useEffect(() => {
    setSearch(searchParams.get("keyword"));
    // console.log("search", search);
  }, [searchParams]);
  //for test method
  // useEffect(() => {
  //   if (search) getSearch();
  // }, [search]);
  return (
    <MainContext.Provider
      value={{
        artistList,
        setArtisList,
        getArtistList,
        getWishList,
        requestPageNumber,
        setRequestPageNumber,
        search,
        setSearch,
        searchParams,
        setSearchParams,
        loginModalRef,
        showLoginModal,
        // loadWishlist,
        // setLoadWishlist,
        // getWishlistData,
        // setGetWishListData,
        // like,
        // setLike,
        setWToS,
        WToS,
        addRemoveWishlistprocessed,
        setaddRemoveWishlistprocessed,
        incorrectAccountModalRef,
        showIncorrectAccountModal,
        PasswordChangedRef,
        showPasswordChangedRef,
        reLoadBiddingHistory,
        setReLoadBiddingHistory,
        reLoadBiddingNum,
        setReLoadBiddingNum,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
// Define propTypes for the component
MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that 'children' prop is passed
};
