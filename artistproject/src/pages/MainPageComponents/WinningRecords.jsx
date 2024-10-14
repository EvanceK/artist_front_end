import MemberNav from "../../components/MemberNav";
import OrderPage from "./OrderPage";
import { useContext } from "react"; // 新增 useContext
import { MainContext } from "../../components/ContextProvider/MainContext";
import { useNavigate } from "react-router-dom";

export default function WinningRecords(){
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
                <div className="pb-5 border-bottom">
                    <div className="d-flex justify-content-between row">
                        <div className="">
                            <input className="form-check-input" type="checkbox" value="" id="select"/>
                        </div>    
                        <div className="d-flex justify-content-center col-6">
                            <img className="w-25" src="..\..\src\assets\home\orange.jpg" alt="product1" />
                        </div>    
                            <label className="form-check-label col-4" htmlFor="select">
                                <h3>Wheat Field with Cypresses</h3>
                                <p>Vincent van Gogh</p>
                                <br/>
                                <br/>
                                <p>$  125,0000</p>
                            </label>
                        <div className="d-flex justify-content-center align-items-center col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-trash3-fill" 
                        viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                        </div>
                    </div>
                </div>
                </div>
            </div>
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
    )
}
