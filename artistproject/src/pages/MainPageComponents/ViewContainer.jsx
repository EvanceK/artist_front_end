import axios from "axios";
import MyCard from "../../components/MyCard";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

export default function ViewContainer() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/PTController/findByPage";
  const [data, setData] = useState([]);
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch data
  const getdata = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${api}?currentPage=${requestPageNumber}&pageSize=${pageSize}`
      );
      setData(result.data.paintingsList);
      setTotalPage(result.data.totalPage || 1);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [requestPageNumber]); // Fetch data when page changes

  // useEffect(() => {
  //   const plaintingTypeName = data
  //     .filter(
  //       (item, index, self) =>
  //         index === self.findIndex((t) => t.artisName === item.artisName)
  //     )
  //     .map((t) => t.artisName);
  //   console.log(plaintingTypeName);
  // }, [data]);

  return (
    <>
      <div className="container">
        <Pagination
          totalPage={totalPage}
          requestPageNumber={requestPageNumber}
          onPageChange={setRequestPageNumber}
        />
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
        <Pagination
          totalPage={totalPage}
          requestPageNumber={requestPageNumber}
          onPageChange={setRequestPageNumber}
        />
      </div>
    </>
  );
}
