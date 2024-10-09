
function MemberNav (){
    return(
        <div className="container mt-5">
            <ul className="nav justify-content-center h4">
            <li className="nav-item">
            <a className="nav-link active " href="#">My Account</a>
            </li>

            <li className="nav-item">
            <a className="nav-link active " href="#">My Order</a>
            </li>

            <li className="nav-item">
            <a className="nav-link active " href="#">My Wallet</a>
            </li>

            <li className="nav-item">
            <a className="nav-link active " href="#">My WishList</a>
            </li>
            </ul>
        </div>
    )

}

export default MemberNav;