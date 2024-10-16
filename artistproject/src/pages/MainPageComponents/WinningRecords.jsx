import MemberNav from "../../components/MemberNav";
import OrderPage from "./OrderPage";
import { useContext, useEffect, useState } from "react"; // 新增 useContext
import { MainContext } from "../../components/ContextProvider/MainContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import WinningRecordsCard from "./MyAccountComponents/WinningRecordsCard";


export default function WinningRecords(){
    const path = import.meta.env.VITE_DATA_HOST_API;
    const Authorization = localStorage.getItem("token");
    const api = path + "/customers/mywinningrecords";
    const [winningRecordsCard, setWinningRecordsCard] = useState();
    const [winningRecords, setWinningRecords] = useState({
      paintingId: "PT0001",
      paintingName: "The Virgin and Child (The Madonna of the Rose)",
      artistId: "AR0001",
      artisName: "Giovanni Antonio Boltraffio",
      smallUrl:
        "https://uploads7.wikiart.org/images/giovanni-antonio-boltraffio/the-virgin-and-child-the-madonna-of-the-rose.jpg!Large.jpg",
      price: 3150.0,
    });
  
    const getWinningRecords = async () => {
      if (Authorization) {
        //axiosInstance就有回傳token的功能
        const result = await axiosInstance.get(api);
        // const result = await axios.get(api);
        console.log(result.data);
        setWinningRecords(result.data.winningRecords);
        console.log(winningRecords);
        
      }
    };
  
    useEffect(() => {
      getWinningRecords();
    }, []);

    useEffect(()=>{
       
        setWinningRecordsCard(
            winningRecords.length > 0
                ? winningRecords.map((bp, i) => {
                    return <WinningRecordsCard key={i} WinningRecordsCardProps={bp} />;
                  })
                : "1"
           ); console.log(winningRecordsCard);
           
         },[winningRecords])
  

    const navigate = useNavigate();
    
    const handlePaymentClick = () => {
        // 導航至 OrderPage 頁面
        navigate("/home/cusdashboard/OrderPage");
      };
    return(
        <div className="container">
            <div className="title mb-5 py-5 border-bottom">
                <h2>Winning Records</h2>
            </div>
            <div className="cart mb-5">
                <div className="">
                    <div className="form-check ">
                    <input className="form-check-input " type="checkbox" value="" id="selectAll"/>
                    <label className="form-check-label" htmlFor="selectAll">
                        Select All
                    </label>
                    </div>
                    
                    {winningRecordsCard}
               
            <div className="row d-flex justify-content-end">
                <div className="col-4">
                    <div className="d-flex justify-content-between row">
                        <div className="col-4"><h4>Subtotal</h4></div>
                        <div className="col-1"><h4>NT$</h4></div>
                        <div className="col-4"><h4>125,000</h4></div>
                    </div>
                <div>
                    <div className="d-flex justify-content-between row">
                        <div className="col-4"><h4>Delivery fee</h4></div>
                        <div className="col-1"><h4>NT$</h4></div>
                        <div className="col-4"><h4>120</h4></div>
                    </div>
                </div>
                <div className=" border-bottom">
                    <div className="d-flex justify-content-between row">
                        <div className="col-4"><h4>Service fee</h4></div>
                        <div className="col-1"><h4>NT$</h4></div>
                        <div className="col-4"><h4>12,500</h4></div>
                    </div>
                </div>
                <div className="d-flex justify-content-between row">
                        <div className="col-4"><h3>Total</h3></div>
                        <div className="col-1"><h3>NT$</h3></div>
                        <div className="col-4"><h3>137,620</h3></div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center m-5 ">
                <div className="col-3 btn btn-primary py-3 h5"
                    onClick={handlePaymentClick}>Enter payment information</div>
            </div>
        </div>
        </div>
        </div>
    )
}
