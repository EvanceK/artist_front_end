import axios from "axios";
import MyCard from "../../components/MyCard";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

export default function PresaleExhibitionContainer() {
  // const api = "http://localhost:8080/PTController/findall";
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/PTController/findAllPresaleExhibition";
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const [artisList, setArtisList] = useState([]);

  //撈取資料庫
  const getdata = async () => {
    try {
      const result = await axios.get(
        `${api}?currentPage=${requestPageNumber}&pageSize=10`
      );
      setData(result.data.paintingsList);
      console.log(result.data);
      setTotalPage(result.data.totalPage || 1);
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
    setArtisList(plaintingTypeName);
  }, [data]);

  return (
    <>
      <div className="container ">
        <div className="h2 mt-5"> Coming Soon</div>
        {totalPage == 1 ? (
          ""
        ) : (
          <Pagination
            totalPage={totalPage}
            requestPageNumber={requestPageNumber}
            onPageChange={setRequestPageNumber}
          />
        )}
        {artisList.map((d, i) => {
          return (
            <>
              <div className="divByArtis ">
                {/* <p className="h2">Artis： {d}</p> */}
                <div className="list">
                  {
                    data
                      .filter((item) => item.artisName === d)
                      .map((d, i) => {
                        return (
                          <MyCard
                            key={i}
                            Paintings={d}
                            minWidth="22rem"
                            imgHeight="18rem"
                          />
                        );
                      })
                    // data.map((d, i) => {
                    //   return <MyCard key={i} Paintings={d} />;
                    //   // return <MyCard key={i} photo={d.smallUrl} altText={d.paintingName} />;
                    // })
                  }
                </div>
              </div>
              <hr></hr>
            </>
          );
        })}
      </div>
    </>
  );
}
