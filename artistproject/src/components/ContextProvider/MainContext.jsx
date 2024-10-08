import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as bootstrap from "bootstrap"; // Import Bootstrap as a module

// Create the Context
export const MainContext = createContext();

export function MainContextProvider({ children }) {
  //API path
  const path = import.meta.env.VITE_DATA_HOST_API;
  //state for data
  const [artistList, setArtisList] = useState([]);
  const [wishListByCus, setWishListByCus] = useState();
  const [search, setSearch] = useState();
  // methods for loading data
  const getArtistList = async () => {
    const api = path + "/ArtController/findall";
    try {
      const result = await axios.get(`${api}`);
      setArtisList(result.data);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getWishList = async () => {
    const authorization = localStorage.getItem("token");
    const api = path + "/api/wishlist";
    if (authorization) {
      try {
        const result = await axios.get(`${api}`, {
          headers: {
            Authorization: `Bearer ${authorization}`,
          },
        });
        console.log("Wishlist: ", result);
        setWishListByCus(result.data);
        console.log("Wishlistdata: ", wishListByCus);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // useEffect for preload data

  useEffect(() => {
    // getWishList();
  }, []);

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
        search,
        setSearch,
        loginModalRef,
        showLoginModal,
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
