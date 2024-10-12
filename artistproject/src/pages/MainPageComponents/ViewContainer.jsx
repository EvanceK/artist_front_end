import axios from "axios";
import axiosInstance from "../../axiosConfig";
import MyCard from "../../components/MyCard";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Carousel from "../../components/Carousel";
import { MainContext } from "../../components/ContextProvider/MainContext";
export default function ViewContainer() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [data, setData] = useState([]);
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cardsView, setCardsView] = useState();
  const { search, searchParams } = useContext(MainContext);

  // Fetch data
  const getdata = async () => {
    const api = path + "/PTController/findByPage";
    setLoading(true);
    try {
      const result = await axios.get(
        `${api}?currentPage=${requestPageNumber}&pageSize=${pageSize}`
      );
      setData(result.data.paintingsList);
      setTotalPage(result.data.totalPage || 1);
      // console.log("viewcontainer: ", result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getSearch = async () => {
    const api = path + `/PTController/search?${searchParams}`;
    const result = await axiosInstance.get(api);
    // console.log(result);
    setData(result.data);
    setTotalPage(1);
  };

  useEffect(() => {
    if (search) {
      getSearch();
      // console.log(totalPage);
    } else {
      getdata();
    }
  }, [requestPageNumber, search, searchParams]); // Fetch data when page changes
  useEffect(() => {
    setCardsView(
      <>
        <div className="container">
          {totalPage == 1 ? (
            ""
          ) : (
            <Pagination
              totalPage={totalPage}
              requestPageNumber={requestPageNumber}
              onPageChange={setRequestPageNumber}
            />
          )}

          <div className="container d-flex flex-wrap">
            {loading ? (
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              data.map((d, i) => {
                return <MyCard key={i} Paintings={d} />;
              })
            )}
            <hr></hr>
          </div>
          {totalPage == 1 ? (
            ""
          ) : (
            <Pagination
              totalPage={totalPage}
              requestPageNumber={requestPageNumber}
              onPageChange={setRequestPageNumber}
            />
          )}
        </div>
      </>
    );
  }, [data]);
  return (
    <>
      <Carousel></Carousel>
      <br></br>
      {cardsView}
    </>
  );
  //  return (
  //   <>
  //     <Carousel></Carousel>
  //     <br></br>
  //     <div className="container">
  //       <Pagination
  //         totalPage={totalPage}
  //         requestPageNumber={requestPageNumber}
  //         onPageChange={setRequestPageNumber}
  //       />
  //       <div className="container d-flex flex-wrap">
  //         {loading ? (
  //           <div className="spinner-border text-info" role="status">
  //             <span className="visually-hidden">Loading...</span>
  //           </div>
  //         ) : (
  //           data.map((d, i) => {
  //             return <MyCard key={i} Paintings={d} />;
  //           })
  //         )}
  //         <hr></hr>
  //       </div>
  //       <Pagination
  //         totalPage={totalPage}
  //         requestPageNumber={requestPageNumber}
  //         onPageChange={setRequestPageNumber}
  //       />
  //     </div>
  //   </>
  // );
}
