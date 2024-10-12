import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ContextProvider/UserContext";
import { MainContext } from "../ContextProvider/MainContext";
export default function BiddingHistoryCard({ biddingHistoryProps }) {
  const [status, setStatus] = useState("");
  const [statusfeild, setStatusfeild] = useState();
  const { isLogin, setLogin } = useContext(UserContext);
  const { loadBiddingHistory, setloadBiddingHistory } = useContext(MainContext);
  // setStatus(biddingHistoryProps.status);
  useEffect(() => {
    //修改狀態useState
    setStatus(biddingHistoryProps.status);
    // setStatus("已結標")
    // console.log(biddingHistoryProps.status)
    // console.log(status)
    //如果已結標就將圖像轉為已結標圖像
    if (status === "競標中") {
      setStatusfeild(
        <>
          <div>
            <div className="p-3  me-5 border bg-secondary text-white">
              {status}
            </div>
          </div>
        </>
      );
    } else {
      //修改效果useEffect
      setStatusfeild(
        <>
          <div>
            <div className="p-3  me-5 border bg-info text-white">{status}</div>
          </div>
        </>
      );
    }
  }, [isLogin, loadBiddingHistory]);
  return (
    <div className="row align-items-center my-3">
      <div className="d-flex justify-content-center col-4">
        <img
          className="img-fluid"
          src={biddingHistoryProps.smallUrl}
          alt="product1"
        />
      </div>
      <div className="col">
        <div className="row mb-5">
          <h3>{biddingHistoryProps.paintingName}</h3>
          <p>{biddingHistoryProps.artisName}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-block">$ {biddingHistoryProps.bidAmount} </div>
          {statusfeild}
        </div>
      </div>
    </div>
  );
}

BiddingHistoryCard.propTypes = {
  biddingHistoryProps: PropTypes.shape({
    //artistId: PropTypes.string.isRequired,
    artisName: PropTypes.string.isRequired,
    paintingName: PropTypes.string.isRequired,
    bidAmount: PropTypes.number.isRequired,
    status: PropTypes.string,
    smallUrl: PropTypes.string.isRequired,
  }).isRequired,
};
