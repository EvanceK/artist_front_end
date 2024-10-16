import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";
import { useForm } from "react-hook-form";
export default function ArtistMng() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const [artistList, setArtisList] = useState([]); //所有作家名單 目前for navBar 選單用
  const [artistTable, setArtistTable] = useState();
  const [inputData,setInputData] = useState({
    artistId:"",
    artistName:"",
    desciption:"",
    url:"",
})
  const {
    register, //Form state
    handleSubmit, //submit action
    watch, //watching form control change
    setValue, //set value from watched control
  } = useForm();
  // methods for loading data
  const getArtistList = async () => {
    const api = path + "/ArtController/findall";
    // 等同 $.ajax(" get blablablba ")
    try {
      const result = await axiosInstance.get(`${api}`);
      console.log(result.data);
      setArtisList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtistList();
  }, []);

  useEffect(() => {
    if (artistList) setArtistTable(buildArtistTable());
  }, [artistList]);
  const editartist= (e) => {
    console.log();
    console.log(artistList);
    const { name, value } = e.target;
    // console.log(name, value);
    setInputData({ ...artistList, [name]: value });
    // console.log(data);
  };

  const buildArtistTable = () => {
    return artistList.map((a, i) => {
      console.log(a);
      return (
        <tr key={i}>
          <th scope="row">{a.artistId}</th>
          <td>{a.artistName}</td>
          <td className="col-4">
            <div className="row d-flex">
              <div className="btn col-4" id={a.artistId} onClick={editartist}>
                Edit
              </div>
              <div className="btn btn-danger col-4" id={a.artistId}>
                Delete
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  //for 監聽輸入用。 目前先註解
  // useEffect(() => {
  //   //監聽行為 for 即時性變更值， 會搭配SetValue 使用。
  //   const subcription = watch((value, attr) => {
  //     console.log(value, attr);
  //   });

  //   return subcription.unsubscribe(); // useEffect 裡面有監聽行為需要移除避免無窮低迴
  // }, [watch]);

  return (
    <>
      <div className="h1 mt-5">Artist Managerment</div>
      <div className="row">
        <form className="col-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="artistName" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              id="artistName"
              aria-describedby="emailHelp"
              {...register("artistId")}
              value={inputData.artistId}
            />
            <label htmlFor="artistName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="artistName"
              aria-describedby="emailHelp"
              {...register("artistName")}
            />
            {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="desciption" className="form-label">
              Desciption
            </label>
            <textarea
              type="text"
              rows="5"
              className="form-control"
              id="desciption"
              {...register("desciption")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profileUrl" className="form-label">
              Profile URL
            </label>
            <input
              type="password"
              className="form-control"
              id="url"
              {...register("url")}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="confirmed"
              {...register("confirmed")}
            />
            <label className="form-check-label" htmlFor="confirmed">
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
                <th scope="col">Name</th>
                <th scope="col">Modify</th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "380px", overflowY: "auto" }}>
              {artistTable}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
