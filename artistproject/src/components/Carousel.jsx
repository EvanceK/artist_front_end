import axiosInstance from "../axiosConfig";
import { useState, useEffect } from "react";
export default function Carousel() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/PTController/topfavorites";
  const [paintingsCount, setPaintingsCount] = useState([]);
  const [paintingsList, setPaintingsList] = useState();
  const [CarouselItem, setCarouselItem] = useState();
  //撈取資料庫
  const getdata = async () => {
    try {
      const result = await axiosInstance.get(`${api}?pageSize=3`);
      setPaintingsList(result.data.paintingsList);
      setPaintingsCount(result.data.paintingsCount);
      // console.log("Carousel:", result.data);
      // setTotalPage(result.data.totalPage || 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    if (paintingsCount) {
      console.log("paintingsCount", paintingsCount);
      setCarouselItem(buildCarouselItems());
    }
    if (paintingsList) {
      console.log("paintingsList", paintingsList);
      setCarouselItem(buildCarouselItems());
    }
  }, [paintingsList, paintingsCount]);
  const buildCarouselItems = () => {
    if (paintingsList)
      return paintingsList.map((p, i) => {
        return (
          <>
            <div className="carousel-item active">
              <div
                className=""
                style={{
                  position: "relative",
                  display: "block",
                  height: "180px",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    // height: "150px",
                    width: "150px",
                  }}
                  src={p.smallUrl}
                  className="d-block w-100"
                  alt={p.paintingName}
                />
              </div>
            </div>
          </>
        );
      });
  };

  return (
    <>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {CarouselItem}
            {/* <div className="carousel-item active">
              <img
                src="../../src/assets/Carousel1.png"
                className="d-block w-100"
                alt="picture 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../src/assets/Carousel2.png"
                className="d-block w-100"
                alt="picture 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../../src/assets/Carousel3.png"
                className="d-block w-100"
                alt="picture 3"
              />
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
