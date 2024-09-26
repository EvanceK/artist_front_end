export default function MyCard({ photo, altText }) {
  return (
    <div className="card" style={{ width: "28rem" }}>
      <div className="photoFrame">
        <img src={photo} className="card-img-top" alt={altText} />
      </div>
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">
          作家：橘🍊 <br />
          作品年份： 2024
          <br /> 風格： 科技復古
          <br /> 售價： 1000000$
        </p>
        <a href="#" className="btn btn-primary">
          搶購
        </a>
      </div>
    </div>
  );
}
