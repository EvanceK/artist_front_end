import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";

export default function PaintingMgn() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [artistList, setArtisList] = useState([]); //所有作家名單 目前for navBar 選單用
  const [artistSelectionList, setArtistSelectionList] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [paintingData, setPaintingData] = useState();
  const [paintingTable, setPaintingTable] = useState();
  // methods for loading data
  const getArtistList = async () => {
    const api = path + "/ArtController/findall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      // console.log(result);
      setArtisList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtistList();
  }, []);
  const buildArtistSelection = () => {
    return artistList?.map((a, i) => {
      return (
        <option key={i} value={a.artistId}>
          {a.artistName}
        </option>
      );
    });
  };
  useEffect(() => {
    setArtistSelectionList(buildArtistSelection());
  }, [artistList]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
  const getPaintdata = async (event)=>{
    const id = event.target.id
    console.log(id);
    const api = path + "/PTController/findpaintingid/"+id;
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      console.log(result.data);
      //setInputData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getdata = useCallback(async () => {
    const api = path + "/PTController/artists";
    if (!selectedOption) return; // Prevent call if artistId is not available

    try {
      const result = await axiosInstance.get(
        `${api}?artistId=${selectedOption}`
      );
      console.log(result.data.paintingsList);
      setPaintingData(result.data.paintingsList);
    } catch (error) {
      console.log(error);
    }
  }, [selectedOption]);
  useEffect(() => {
    getdata();
  }, [selectedOption]);
  useEffect(() => {
    if (paintingData) setPaintingTable(buildArtistTable());
  }, [paintingData]);

  const buildArtistTable = () => {
    return paintingData.map((a, i) => {
      console.log(a);
      return (
        <tr key={i}>
          <th scope="row">{a.paintingId}</th>
          <td>{a.paintingName}</td>
          <td className="text-end">
            {new Intl.NumberFormat("en-IN", {
              // maximumSignificantDigits: 3,
            }).format(a.price)}
          </td>
          <td>{a.uploadDate}</td>
          <td>{a.delicated}</td>
          <td>{a.status}</td>

          <td className="d-flex align-items-center justify-conten-center">
            <div className="row d-flex ">
              <div className="btn col-5" id={a.paintingId} onClick={getPaintdata}>
                Edit
              </div>
              <div className="btn btn-danger col-5" id={a.artistId}>
                Delete
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="h1 mt-5">Paningting Management</div>
      <div className="row">
        <form className="col-3">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Artist Name
            </label>

            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option defaultValue={0}>select an artist ...</option>
              {artistSelectionList}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Paintig Name
            </label>
            <input
              type="text"
              className="form-control"
              id="paintigName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Photo" className="form-label">
              Photo
            </label>
            <input type="file" className="form-control" id="Photo" />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input type="text" className="form-control" id="date" />
          </div>

          <div className="mb-3">
            <label htmlFor="Style" className="form-label">
              Style
            </label>
            <input type="text" className="form-control" id="Style" />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input type="text" className="form-control" id="genre" />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Price
            </label>
            <input type="text" className="form-control" id="genre" />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Confirmed
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="col"></div>
        <div
          className="table-responsive col-8"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#Id</th>
                <th scope="col">Paintig Name</th>
                <th scope="col">price</th>
                <th scope="col">Upload Date</th>
                <th scope="col">delicated</th>
                <th scope="col">status</th>
                <th scope="col">Modify</th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "380px", overflowY: "auto" }}>
              {paintingTable}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
