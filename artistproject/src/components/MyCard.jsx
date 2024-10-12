import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import AddFavoriteBtn from "./AddFavoriteBtn";
export default function MyCard({ Paintings }) {
  const navigate = useNavigate();

  const placeBid = (e) => {
    console.log("placeBid");
    console.log(e.target.id);
    navigate(`/home/auction/${e.target.id}`);
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
          <div className="cardBtn d-flex justify-content-center ">
            <AddFavoriteBtn paintingId={Paintings.paintingId} />
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
