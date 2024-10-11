import PropTypes from "prop-types";
import axiosInstance from "../axiosConfig";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "./ContextProvider/MainContext";
import { compileString } from "sass";
export default function MyCard({ Paintings }) {
  const [likedCard, setLikedCard] = useState(false);
  const [cardId, setCardId] = useState();
  const [addPainting, setAddPainting] = useState();
  const navigate = useNavigate();
  const {
    showLoginModal,
    loadWishlist,
    setLoadWishlist,
    setGetWishListData,
    getWishlistData,
    like,
    setLike,
  } = useContext(MainContext);
  const path = import.meta.env.VITE_DATA_HOST_API;

  const handleClick = (event) => {
    setLike(!like);
    // console.log(like);
    setAddPainting({ paintingId: event.target.id });
    setCardId(event.target.id);
    let currentValue = event.target.getAttribute("data-value") === "true";
    // console.log(currentValue);
    setLikedCard(!currentValue);
    event.target.setAttribute("data-value", !currentValue);
    // console.log("f", event.target);
    // console.log(addPainting);
  };
  const placeBid = (e) => {
    console.log("placeBid");
    console.log(e.target.id);
    navigate(`/home/auction/${e.target.id}`);
  };
  useEffect(() => {
    // console.log("useEffect: ", addPainting);

    if (addPainting) {
      // like ? addWishlist() : removeWishlist(event);
      likedCard ? addWishlist() : removeWishlist(cardId);
    }
    setGetWishListData(!getWishlistData);
    setLoadWishlist(!loadWishlist);
    buildBtn();
  }, [setLike, like]);

  const addWishlist = async () => {
    const authorization = localStorage.getItem("token");
    const api = path + "/api/wishlist";
    // console.log(authorization);
    // console.log(addPainting);
    try {
      if (authorization) {
        await axiosInstance.post(api, addPainting);
        // console.log("addWishlist result:", result);
      } else {
        showLoginModal();
        console.log("please login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeWishlist = async (cardId) => {
    const api = path + `/api/wishlist/${cardId}`;
    await axiosInstance.delete(api);
    setLoadWishlist(!loadWishlist);
    setGetWishListData(!getWishlistData);
  };

  function buildBtn() {
    let liked = false;
    if (localStorage.getItem("paintingIdArray") != null)
      JSON.parse(localStorage.getItem("paintingIdArray")).map((i) => {
        if (i == Paintings.paintingId) {
          liked = true;
        }
      });

    if (liked) {
      return (
        <>
          <span
            onClick={handleClick}
            data-value={liked}
            id={Paintings.paintingId}
            style={{
              position: "absolute",
              display: "flex",
              height: "100%",
              width: "100%",
              // backgroundColor: "black",
              opacity: "90%",
              zIndex: "2",
            }}
          ></span>
          FAV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            // fill="currentColor"
            fill="red"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
          RITE
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            // fill="currentColor"
            fill="red"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg> */}
        </>
      );
    } else {
      return (
        <>
          <span
            onClick={handleClick}
            data-value={liked}
            id={Paintings.paintingId}
            style={{
              position: "absolute",
              display: "flex",
              height: "100%",
              width: "100%",
              // backgroundColor: "black",
              opacity: "90%",
              zIndex: "2",
            }}
          ></span>
          FAV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
          RITE
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg> */}
        </>
      );
    }
  }

  return (
    <div className="cards d-flex flex-column align-items-center">
      <div className="photoFrame d-flex flex-column ">
        <div className="card-body">
          {/* <h5 className="card-title">{Paintings.paintingName}</h5> */}

          <p className="card-text">
            <span>ID: {Paintings.paintingId}</span>
            <br />
            <span>ARTIST: {Paintings.artisName}</span>
            <br />
            <span>YEAR：{Paintings.date}</span>
            <br />
            <span>STYLE：{Paintings.genre}</span>
          </p>
          <div className="cardBtn d-flex justify-content-center ">
            <span style={{ position: "relative" }} className="btn mx-3">
              {/* <span
                onClick={handleClick}
                data-value={likedCard}
                id={Paintings.paintingId}
                style={{
                  position: "absolute",
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  // backgroundColor: "black",
                  opacity: "90%",
                  zIndex: "2",
                }}
              ></span>
              FAV
              {buildBtn()}
              RITE */}
              {buildBtn()}
            </span>
            <span
              className="btn btn-primary mx-3"
              id={Paintings.paintingId}
              onClick={placeBid}
            >
              PLACE BID
            </span>
          </div>
        </div>
        <img
          src={Paintings.smallUrl}
          className="card-img-top"
          alt={Paintings.paintingName}
        />
      </div>
      <p className="card-text ">
        {Paintings.paintingId}: {Paintings.paintingName}
      </p>
    </div>
  );
}

// MyCard.propTypes = {
//   Paintings: PropTypes.arrayOf(
//     PropTypes.shape({
//       photo: PropTypes.string.isRequired,
//       artisId: PropTypes.string.isRequired,
//       artisName: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       delicated: PropTypes.string.isRequired,
//       dimensions: PropTypes.string.isRequired,
//       genre: PropTypes.string.isRequired,
//       largUrl: PropTypes.string.isRequired,
//       media: PropTypes.string.isRequired,
//       paintingId: PropTypes.string.isRequired,
//       paintingName: PropTypes.string.isRequired,
//       period: PropTypes.string.isRequired,
//       price: PropTypes.string.isRequired,
//       smallUrl: PropTypes.string.isRequired,
//       style: PropTypes.string.isRequired,
//       uploadDate: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
// MyCard.propTypes = {
//   Paintings: PropTypes.shape({
//     artisId: PropTypes.string.isRequired,
//     artist: PropTypes.shape({
//       artistId: PropTypes.string.isRequired,
//       artistName: PropTypes.string.isRequired,
//       desciption: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }).isRequired,
//     date: PropTypes.string.isRequired,
//     delicated: PropTypes.number.isRequired,
//     // dimensions: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     largUrl: PropTypes.string.isRequired,
//     media: PropTypes.any.isRequired,
//     paintingId: PropTypes.string.isRequired,
//     paintingName: PropTypes.string.isRequired,
//     period: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     smallUrl: PropTypes.string.isRequired,
//     style: PropTypes.string.isRequired,
//     uploadDate: PropTypes.array.isRequired,
//   }).isRequired,
// };
MyCard.propTypes = {
  Paintings: PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artisName: PropTypes.string.isRequired,
    paintingId: PropTypes.string.isRequired,
    paintingName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired, //畫作倉作日期
    delicated: PropTypes.number.isRequired,
    // dimensions: PropTypes.string.isRequired,
    genre: PropTypes.string, //畫風
    // media: PropTypes.any.isRequired,//
    // period: PropTypes.string.isRequired,
    smallUrl: PropTypes.string,
    largUrl: PropTypes.string,
    style: PropTypes.string,
    uploadDate: PropTypes.string,
  }).isRequired,
};
