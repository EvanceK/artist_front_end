import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import PropTypes, { func } from "prop-types";
import * as bootstrap from "bootstrap"; // Import Bootstrap as a module

// Create the Context
export const MainContext = createContext();

export function MainContextProvider({ children }) {
  //API path 存放在環境變數 .evn 設定為 http://localhost:8080
  const path = import.meta.env.VITE_DATA_HOST_API;
  //state for data 共用變數
  const [loadWishlist, setLoadWishlist] = useState(false);
  const [artistList, setArtisList] = useState([]); //所有作家名單 目前for navBar 選單用
  const [wishListByCus, setWishListByCus] = useState([]); //目前customer的wishlist產品
  // const [wishlistPaintingIdList, setWishlistPaintingIdList] = useState([]);
  //vv for searching 功能用的變數：
  const [search, setSearch] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  // methods for loading data
  const getArtistList = async () => {
    const api = path + "/ArtController/findall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axios.get(`${api}`);
      // console.log(result);
      setArtisList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getWishList = useCallback(async () => {
    const authorization = localStorage.getItem("token");
    const api = path + "/api/wishlist";
    const paintingIdArray = [];
    if (authorization) {
      try {
        const result = await axios.get(`${api}`, {
          headers: {
            Authorization: `Bearer ${authorization}`,
          },
        });
        // console.log("Wishlist: ", result.data);
        setWishListByCus(result.data);
        localStorage.setItem("Wishlist", JSON.stringify(result.data));
        JSON.parse(localStorage.getItem("Wishlist")).map((w) => {
          paintingIdArray.push(w.paintingId);
        });
        if (paintingIdArray.length > 0) {
          // console.log("setpaintingIdArray");
          localStorage.setItem(
            "paintingIdArray",
            JSON.stringify(paintingIdArray)
          );
        }
      } catch (error) {
        console.log(error);
      }
      // setWishlistPaintingIdList(paintingIdArray);
    }
  });
  // useEffect for preload data
  useEffect(() => {
    // loadWishlist ? getWishList() : "";
    getWishList();
  }, [setLoadWishlist, loadWishlist]);

  // Create a Provider component
  const loginModalRef = useRef(null); // useRef for loginModal

  // Function to trigger the modal
  const showLoginModal = () => {
    if (loginModalRef.current) {
      const modal = new bootstrap.Modal(loginModalRef.current); // Use bootstrap.Modal directly
      modal.show();
    }
  };

  return (
    <MainContext.Provider
      value={{
        artistList,
        setArtisList,
        getArtistList,
        getWishList,
        search,
        setSearch,
        loginModalRef,
        showLoginModal,
        loadWishlist,
        setLoadWishlist,
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
