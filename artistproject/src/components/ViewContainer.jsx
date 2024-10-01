import axios from "axios";
import MyCard from "./MyCard";
import projectLogo from "../assets/LOGO11.png"; // will replace by ajax data
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function ViewContainer() {
  // const api = "http://localhost:8080/mvweb0923/forReactServlet";
  const api = "http://localhost:8080/artistproject/PTController/findByPage";
  const [data, setData] = useState([]);
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pages, setPages] = useState();
  // const [artisList, setArtisList] = useState([]);

  //撈取資料庫
  const getdata = async () => {
    try {
      const result = await axios.get(
        `${api}?currentPage=${requestPageNumber}&pageSize=${pageSize}`
      );
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    const plaintingTypeName = data
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.artisName === item.artisName)
      )
      .map((t) => t.artisName);
    console.log(plaintingTypeName);
  }, [data]);

  return (
    <>
      <div className="container ">
        {data.map((d, i) => {
          return <MyCard key={i} Paintings={d} />;
          // return <MyCard key={i} photo={d.smallUrl} altText={d.paintingName} />;
        })}
        <hr></hr>
      </div>
      <Pagination></Pagination>
    </>
  );
}
