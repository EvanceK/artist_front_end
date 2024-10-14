
import { MainContext } from "./ContextProvider/MainContext";
import { Link } from "react-router-dom"; // 從 react-router-dom 引入


function MemberNav (){
    
    return(
        <div className="container mt-5">
            <ul className="nav justify-content-center h4">
            <li className="nav-item">
            <Link className="nav-link active " to="/home/cusdashboard/myaccount">
            My Account
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link active " to="/home/cusdashboard/winningRecords">
            My WinningRecords
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link active " to="/home/cusdashboard/OrderPage">
            My Order
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link active " to="/cusdashboard/MyWallet">
            My Wallet
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link active " to="/home/cusdashboard/ConfirmOrder">
            Confirm Order
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link active " to="/home/cusdashboard/OrderPage">
            My OrderPage
            </Link>
            </li>
            </ul>
        </div>
    )

}

export default MemberNav;