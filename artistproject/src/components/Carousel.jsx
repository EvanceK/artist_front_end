export default function Carousel() {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
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
