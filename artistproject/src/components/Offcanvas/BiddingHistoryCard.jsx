import PropTypes from "prop-types";
export default function BiddingHistoryCard({WishlistProps}){

    return(
        <div className="row align-items-center my-3">
        <div className="d-flex justify-content-center col-4">
          <img
            className="img-fluid"
            src={WishlistProps.smallUrl}
            alt="product1"
          />
        </div>
        <div className="col">
          <div className="row mb-5">
            <h3>{WishlistProps.paintingName}</h3>
            <p>{WishlistProps.artisName}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-block">$ {WishlistProps.price} </div>
            <div className="p-3  me-5 border bg-secondary text-white">競標中</div>
          </div>
        </div>
      </div>
    )
}

BiddingHistoryCard.propTypes = {
    WishlistProps: PropTypes.shape({
      //artistId: PropTypes.string.isRequired,
      artisName: PropTypes.string.isRequired,
      paintingName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      smallUrl: PropTypes.string.isRequired,
    }).isRequired,
  };