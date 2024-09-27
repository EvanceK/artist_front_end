import axios from "axios";
import MyCard from "./MyCard";
import projectLogo from "../assets/LOGO11.png"; // will replace by ajax data
import { useEffect, useState } from "react";

export default function PaintingsListContainer() {
  // const api = "http://localhost:8080/mvweb0923/forReactServlet";
  const api = "http://localhost:8080/artistproject//PTController/findall";
  const [data, setData] = useState([]);
  const [requestPageNumber, setRequestPageNumber] = useState();
  const [currentPage, setCurrentPage] = useState("1");
  //撈取資料庫
  const getdata = async () => {
    try {
      const result = await axios.get(`${api}?page=${requestPageNumber}`);
      setData(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(requestPageNumber);
  }, [requestPageNumber]);

  return (
    <>
      <div className="container ">
        {data.map((d, i) => {
          return <MyCard key={i} Paintings={d} />;
          // return <MyCard key={i} photo={d.smallUrl} altText={d.paintingName} />;
        })}
      </div>
    </>
  );
}
