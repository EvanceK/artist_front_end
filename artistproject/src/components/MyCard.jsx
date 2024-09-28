import PropTypes from "prop-types";

export default function MyCard({ Paintings }) {
  return (
    <div className="cards " id={Paintings.paintingId}>
      <div className="card-body">
        <h5 className="card-title">{Paintings.paintingName}</h5>

        <p className="card-text">
          <span>作家：{Paintings.artisId}</span>
          <br />
          <span>年分：{Paintings.date}</span>
          <br />
          <span>原作尺寸：{Paintings.dimensions}</span>
          <br />
          <span>畫風：{Paintings.genre}</span>
          {/* <br />
          <span>media：{Paintings.media}</span>
          <br />
          <span>period：{Paintings.period}</span>
          <br />
          <span>price：{Paintings.price}</span>
          <br />
          <span>style：{Paintings.style}</span>
          <br />
          <span>uploadDate：{Paintings.uploadDate}</span> */}
        </p>
        <a href="#" className="btn btn-primary">
          搶購
        </a>
      </div>
      <div className="photoFrame">
        <img
          src={Paintings.smallUrl}
          className="card-img-top"
          alt={Paintings.paintingName}
        />
      </div>
      <p className="alt">
        {Paintings.paintingId}: {Paintings.paintingName}
      </p>
    </div>
  );
}

MyCard.propTypes = {
  Paintings: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      artisId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      delicated: PropTypes.string.isRequired,
      dimensions: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      largUrl: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
      paintingId: PropTypes.string.isRequired,
      paintingName: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      smallUrl: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
      uploadDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};
