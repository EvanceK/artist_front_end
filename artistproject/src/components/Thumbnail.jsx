import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";

export default function Thumbnail({ paintingID }) {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [painting, setPainting] = useState();
  const findPainting = async () => {
    try {
      const api = path + `/PTController/findpaintingid/${paintingID}`;
      const result = await axiosInstance.get(api);
      console.log(result.data);
      setPainting(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    findPainting();
  }, []);
  return (
    <div className="card" style={{ width: "8rem" }}>
      <img
        className="card-img-top"
        src={`data:image/jpeg;base64,${painting?.image}`}
        alt={paintingID}
      />
      <div className="card-body">
        <p className="card-text">{painting?.paintingId}</p>
      </div>
    </div>
  );
}
Thumbnail.propTypes = {
  paintingID: PropTypes.string.isRequired,
};
