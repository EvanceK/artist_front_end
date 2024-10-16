import { Link, useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import Carousel from "./Carousel";
import axiosInstance from "../axiosConfig";
import CountDown from "./countDown";
import AddFavoriteBtn from "./AddFavoriteBtn";
import { MainContext } from "./ContextProvider/MainContext";

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
  const [selectedOption, setSelectedOption] = useState("");
  const [selectionValue, setSelectionValue] = useState();
  const [inputValue, setInputValue] = useState("");
  const [finalBidAmount, setFinalBidAmount] = useState();
  const [selectinOptionList, setSelectinOptionList] = useState();
  const { reLoadBiddingHistory, setReLoadBiddingHistory, showLoginModal } =
    useContext(MainContext);
  const path = import.meta.env.VITE_DATA_HOST_API;

  //Post placeBid
  const handleClickPlaceBid = () => {
    if (!localStorage.getItem("token")) showLoginModal();
    // console.log("placeBid!");
    // console.log("ID:", painting.paintingId);
    // setPlaceBid({
    //   paintingId: painting.paintingId,
    //   bidAmount: "2000",
    // });
    if (placeBid) postPlaceBid();
    console.log("step 1: click Bidbtn");
  };

  useEffect(() => {
    if (inputValue && !selectionValue) {
      setFinalBidAmount(inputValue);
    } else if (selectionValue) {
      setFinalBidAmount(selectionValue);
    }
  }, [inputValue, selectionValue]);
  useEffect(() => {
    console.log(finalBidAmount);
    if (finalBidAmount)
      setPlaceBid({
        paintingId: painting.paintingId,
        bidAmount: finalBidAmount,
      });
  }, [finalBidAmount]);

  // Function to handle changes in the textbox
  const handleInputChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    setInputValue(value);
    setSelectedOption("Bidding amount ..."); // Reset if no match found

    // Check if the input matches any option value and update selectedOption
    // if (value === "1234") {
    //   setSelectedOption("option1");
    // } else if (value === "5678") {
    //   setSelectedOption("option2");
    // } else if (value === "91011") {
    //   setSelectedOption("option3");
    // } else {
    // setSelectedOption(""); // Reset if no match found
    // }
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setInputValue("");
    const value = event.target.value;

    // Extract the number part from the value
    const numberPart = value.match(/\d{1,3}(?:,\d{3})*/);

    if (numberPart) {
      // Remove commas and convert the string back to a number
      const normalValue = parseFloat(numberPart[0].replace(/,/g, ""));
      // Check if it's a valid number
      if (!isNaN(normalValue) && isFinite(normalValue)) {
        // console.log(normalValue);
        setSelectionValue(normalValue);
      } else {
        console.error("Not a valid number");
      }
    } else {
      console.error("No number found in the string");
    }
  };

  const postPlaceBid = async () => {
    const api = path + "/api/bidding/bid";
    try {
      const result = await axiosInstance.post(`${api}`, placeBid);
      console.log(result);
      setReLoadBiddingHistory((prev) => !prev); // Only toggle once
      console.log("step 2: post Bidbtn");
    } catch (e) {
      alert(e.response.data);
      console.log(e.response.data);
      console.log("step 2: post Bidbtn error");
    }
  };
  // useEffect(() => {
  //   if (placeBid) postPlaceBid();
  //   setReLoadBiddingHistory(!reLoadBiddingHistory);
  // }, [placeBid]);
  // Fetch painting data
  const getdata = async () => {
    setSelectedOption("");
    const api = path + "/api/bidding";
    setLoading(true);
    try {
      const result = await axiosInstance.get(`${api}/${id}`);
      // setData(result.data.paintingsList);

      // console.log(result.data);
      setPainting(result.data.painting);
      setBiddingHistory(result.data.biddingHistory);

      console.log("step 3: get auction data");
    } catch (error) {
      console.log(error);
      console.log("step 3: get auction data erro");
    }
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [id, reLoadBiddingHistory]);
  useEffect(() => {
    buildBreadCrumb();
  }, [painting]);

  useEffect(() => {
    if (biddingHistory && biddingHistory.length > 0) {
      setHighestBre(biddingHistory[0].bidAmount);
    } else {
      setHighestBre(painting?.price);
    }

    // console.log("BreAmoutArray:", breAmoutArray);

    // else {
    //   console.log("No bidding history available");
    // }
  }, [biddingHistory]);

  useEffect(() => {
    setBreAmoutArray(
      Array.from({ length: 3 }, (_, i) => highestBre + 50 * (i + 1))
    );
    console.log("step 4: get highestBre and set setBreAmoutArray");
  }, [highestBre]);

  const buildAcutionList = () => {
    if (!biddingHistory || biddingHistory.length === 0) {
      return <p>No bidding history available.</p>;
    }

    console.log("step 4: buil AuctionList");
    return biddingHistory.map((b, i) => {
      return (
        <div key={i} className="auctionList">
          <div className="row m-2">
            <div className="col">{b.nickName}</div>
            <div className="col">{b.bidTime}</div>
            <div className="col">
              ${" "}
              {new Intl.NumberFormat("en-IN", {
                // maximumSignificantDigits: 3,
              }).format(b.bidAmount)}
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    setAuctionList(buildAcutionList());
    console.log("step 5: setAuctionList");
  }, [biddingHistory]);
  //buil selection option
  useEffect(() => {
    if (breAmoutArray) console.log("step 5: setSelectinOptionList");
    setSelectinOptionList(
      breAmoutArray?.map((b, i) => {
        console.log(b);
        return (
          <option key={i} defaultValue={b}>
            ${" "}
            {new Intl.NumberFormat("en-IN", {
              // maximumSignificantDigits: 4,
            }).format(b)}
          </option>
        );
      })
    );
  }, [breAmoutArray]);
  // useEffect(() => {
  // if (painting) console.log("painting:", painting);
  // if (biddingHistory) console.log("biddingHistory:", biddingHistory);
  // }, [painting, biddingHistory]);

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
                <CountDown
                  datetime={painting.uploadDate}
                  config={{
                    days: true,
                    hours: true,
                    minutes: true,
                    seconds: true,
                    CountDownClass:
                      "d-flex justify-content-end align-items-end",
                    textClass: "h4",
                    clockClass: "h1",
                  }}
                />

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
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option defaultValue={0}>Bidding amount ...</option>
                {selectinOptionList}
                {/* {breAmoutArray
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
                  : ""} */}
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
                value={inputValue}
                onChange={handleInputChange}
              ></input>
              <a
                className="d-flex"
                href="#biddingHistoryOffcanvas"
                role="button"
                data-bs-toggle="offcanvas"
                aria-controls="BiddingHistoryModal"
              >
                <div className="cardBtn d-flex justify-content-center m-5">
                  <AddFavoriteBtn paintingId={painting.paintingId} />
                  <span
                    className="btn btn-primary mx-3"
                    onClick={handleClickPlaceBid}
                  >
                    PLACE BID
                  </span>
                </div>
              </a>
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
