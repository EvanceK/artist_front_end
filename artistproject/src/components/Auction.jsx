import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Carousel from "./Carousel";
import axiosInstance from "../axiosConfig";
import CountDown from "./countDown";
import AddFavoriteBtn from "./AddFavoriteBtn";

export default function Auction() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [biddingHistory, setBiddingHistory] = useState();
  const [painting, setPainting] = useState();
  const [breadcrumb, setBreadcrumb] = useState();
  const [highestBre, setHighestBre] = useState();
  const [breAmoutArray, setBreAmoutArray] = useState();
  const [auctionList, setAuctionList] = useState();
  const [placeBid, setPlaceBid] = useState();
  const path = import.meta.env.VITE_DATA_HOST_API;

  //Post placeBid
  const handleClickPlaceBid = () => {
    console.log("placeBid!");
    console.log("ID:", painting.paintingId);
    setPlaceBid({
      paintingId: painting.paintingId,
      bidAmount: "2000",
    });
  };
  const postPlaceBid = async () => {
    const api = path + "/api/bidding/bid";
    try {
      const result = await axiosInstance.post(`${api}`, placeBid);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (placeBid) postPlaceBid();
  }, [placeBid]);
  // Fetch painting data
  const getdata = async () => {
    const api = path + "/api/bidding";
    setLoading(true);
    try {
      const result = await axiosInstance.get(`${api}/${id}`);
      // setData(result.data.paintingsList);

      // console.log(result.data);
      setPainting(result.data.painting);
      setBiddingHistory(result.data.biddingHistory);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [id]);
  useEffect(() => {
    buildBreadCrumb();
  }, [painting]);

  useEffect(() => {
    if (biddingHistory && biddingHistory.length > 0) {
      setHighestBre(biddingHistory[0].bidAmount);
    } else {
      setHighestBre(painting?.price);
    }
    setBreAmoutArray(
      Array.from({ length: 3 }, (_, i) => highestBre + 50 * (i + 1))
    );

    // console.log("BreAmoutArray:", breAmoutArray);

    // else {
    //   console.log("No bidding history available");
    // }
  }, [biddingHistory]);

  const buildAcutionList = () => {
    if (!biddingHistory || biddingHistory.length === 0) {
      return <p>No bidding history available.</p>;
    }

    return biddingHistory.map((b, i) => {
      return (
        <div key={i} className="auctionList">
          <div className="row m-2">
            <div className="col">{b.nickName}</div>
            <div className="col">{b.bidTime}</div>
            <div className="col">
              ${" "}
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(b.bidAmount)}
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    setAuctionList(buildAcutionList());
  }, [biddingHistory]);

  useEffect(() => {
    if (painting) console.log("painting:", painting);
    if (biddingHistory) console.log("biddingHistory:", biddingHistory);
  }, [painting, biddingHistory]);

  const buildBreadCrumb = useCallback(() => {
    if (!painting) return; // Exit if painting is undefined
    setBreadcrumb(
      <div className="Breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">ARTIST</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/home/${painting.artistId}`}>
                {painting.artisName}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {painting.paintingId}
            </li>
          </ol>
        </nav>
      </div>
    );
  }, [painting]);

  if (painting)
    return (
      <>
        <Carousel></Carousel>
        <div className="container my-5">
          {breadcrumb}
          <h2>{painting.paintingName}</h2>
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <img
                style={{
                  // width: "250px",
                  height: "250px",
                  backgroundColor: "blue",
                }}
                className="m-4"
                src={painting.largUrl}
                alt="Painting IMG"
              />
              <div className="context h6">
                <div className="row">
                  <div className="col-4 text-end">ARTIST</div>
                  <div className="col-1 ">:</div>
                  <div className="col text-center">{painting.artisName}</div>
                </div>
                <div className="row">
                  <div className="col-4  text-end">YEAR</div>
                  <div className="col-1 ">:</div>
                  <div className="col text-center">{painting.date}</div>
                </div>
                <div className="row">
                  <div className="col-4  text-end">STYLE</div>
                  <div className="col-1 ">:</div>
                  <div className="col text-center">{painting.style}</div>
                </div>
                <div className="row">
                  <div className="col-4  text-end">Genre</div>
                  <div className="col-1 ">:</div>
                  <div className="col text-center">{painting.genre}</div>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-column">
              <div className="countdown d-flex justify-content-center align-items-center m-3">
                <CountDown datetime={painting.uploadDate} />

                {/* <strong className="h1 ms-4">10H 23m 41s</strong> */}
              </div>
              <p className="price h4 text-center mb-5">
                ${" "}
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(painting.price)}{" "}
              </p>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                {breAmoutArray
                  ? breAmoutArray.map((b, i) => {
                      return (
                        <option key={i} defaultValue={b}>
                          ${" "}
                          {new Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(b)}
                        </option>
                      );
                    })
                  : ""}
                {/* <option defaultValue>$ 1,600</option>
                <option defaultValue="1">$1,605</option>
                <option defaultValue="2">$ 1.610</option> */}
              </select>
              <span className="small text-danger">
                Once a bid is placed, it cannot be canceled. Please bid
                carefully.
              </span>
              <input
                className="form-control"
                placeholder="optional amount"
              ></input>
              <div className="cardBtn d-flex justify-content-center m-5">
                <AddFavoriteBtn paintingId={painting.paintingId} />

                <span
                  className="btn btn-primary mx-3"
                  onClick={handleClickPlaceBid}
                >
                  PLACE BID
                </span>
              </div>
              <div className="row shipment">
                <div className="row m-3">
                  <div className="col-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-airplane-engines"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                    </svg>
                  </div>
                  <div className="col">
                    @ 120 from Taiwan, arrives in 3-5 days
                  </div>
                </div>
                <div className="row m-3">
                  <div className="col-1">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <div className="col">Byer Protection fee: 10%</div>
                </div>
                <div className="row m-3">
                  <div className="col-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    </svg>
                  </div>
                  <div className="col">Closes: Tomorrow 00:30</div>
                </div>
                <hr />
                {auctionList}

                {/* <div className="auctionList">
                  <div className="row m-2">
                    <div className="col">Lisa</div>
                    <div className="col">3 h ago</div>
                    <div className="col">$ 1595</div>
                  </div>
                  <div className="row m-2">
                    <div className="col">Mary</div>
                    <div className="col">10 h ago</div>
                    <div className="col">$ 1500</div>
                  </div>
                  <div className="row m-2">
                    <div className="col">Mike</div>
                    <div className="col">15 h age</div>
                    <div className="col">$ 1200</div>
                  </div>
                  <div className="row m-2">
                    <div className="col">Allen</div>
                    <div className="col">20 h ago</div>
                    <div className="col">$ 800</div>
                  </div>
                  <div className="row m-2">
                    <div className="col">Lisa</div>
                    <div className="col">20 h ago</div>
                    <div className="col">$ 500</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
