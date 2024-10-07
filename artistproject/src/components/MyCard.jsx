import PropTypes from "prop-types";
import axios from "axios";
import { useContext, useState } from "react";
import $ from "jquery";
import { MainPageContext } from "./ContextProvider/MainPageContext";

export default function MyCard({ Paintings }) {
  const [addPainting, setAddPainting] = useState({
    paintingId: "",
  });
  const { showLoginModal } = useContext(MainPageContext);
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/api/wishlist";
  const handleClick = (event) => {
    const elementId = event.target.id;
    console.log(event.target);
    console.log("Element ID:", elementId);
    setAddPainting({ ...addPainting, paintingId: elementId });
    addWishlist();
  };
  const addWishlist = () => {
    const authorization = localStorage.getItem("token");
    if (authorization) {
      axios.post(api, addPainting, {
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      });
    } else {
      showLoginModal();
      console.log("please login");
    }
  };
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
          <div
            className="cardBtn d-flex justify-content-center "
            id={Paintings.paintingId}
            onClick={handleClick}
          >
            <span id={Paintings.paintingId} className="btn btn mx-3">
              FAV
              <svg
                id={Paintings.paintingId}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  id={Paintings.paintingId}
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                />
              </svg>
              RITE
            </span>
            <span id={Paintings.paintingId} className="btn btn-primary mx-3">
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
    artisId: PropTypes.string.isRequired,
    artisName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, //畫作倉作日期
    delicated: PropTypes.number.isRequired,
    // dimensions: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired, //畫風
    largUrl: PropTypes.string.isRequired,
    // media: PropTypes.any.isRequired,//
    paintingId: PropTypes.string.isRequired,
    paintingName: PropTypes.string.isRequired,
    // period: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    smallUrl: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    uploadDate: PropTypes.array.isRequired,
  }).isRequired,
};
