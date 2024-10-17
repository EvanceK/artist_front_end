import axiosInstance from "../axiosConfig";
import { useState, useEffect } from "react";
export default function Carousel() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/PTController/topfavorites";
  const [data, setData] = useState([]);
  const [CarouselItem, setCarouselItem] = useState();
  //撈取資料庫
  const getdata = async () => {
    try {
      const result = await axiosInstance.get(`${api}?pageSize=3`);
      setData(result.data.paintingsList);
      console.log("Carousel:", result.data);
      // setTotalPage(result.data.totalPage || 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    setCarouselItem(buildCarouselItems());
  }, [data]);
  const buildCarouselItems = () => {
    return (
      <>
        <div className="carousel-item active">
          <img
            src="../../src/assets/Carousel1.png"
            className="d-block w-100"
            alt="picture 1"
          />
        </div>
      </>
    );
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
            <div className="carousel-item active">
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
            </div>
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
