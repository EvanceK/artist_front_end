import { useContext, useEffect, useState } from "react";
import BiddingHistoryCard from "./BiddingHistoryCard";
import { UserContext } from "../ContextProvider/UserContext";
import { MainContext } from "../ContextProvider/MainContext";

export default function BiddingHistoryOffcanvas(){
  const { isLogin, setLogin } = useContext(UserContext);
  const { loadWishList, setLoadWishList } = useContext(MainContext);
  const [wishlist,setWishlist]=useState([]);
  const [renderCart,setRenderCart] = useState

  useEffect(()=>{
    if(isLogin){
      //取得token
      const storedWishlist = localStorage.getItem("wishlist")
      if(storedWishlist){
        //將token轉為JSON存到setWishlist
        setWishlist(JSON.parse(storedWishlist));
      }
    }
  },[isLogin,loadWishList])
  useEffect(()=>{
    setRenderCart(
      //取得長度,再用三元運算將資料帶入 card
      wishlist.length > 0
        ? wishlist.map((wp,i) => {
          return <BiddingHistoryCard key={i} WishlistProps={wp} />;
        })
        :""
    );
  },[setWishlist,wishlist]);
  
    return(
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="biddingHistoryOffcanvas" aria-labelledby="biddingHistoryOffcanvas">
        <div className="offcanvas-header bg-primary-text-gold">
          <h5 className="offcanvas-title" 
          id="offcanvasExampleLabel">
            Bidding History
            </h5>
          {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div className="offcanvas-body">
          
          {wishlist.length > 0
            ?wishlist.map((mp,i)=>{
              return <BiddingHistoryCard key={i} WishlistProps={wp} />;
            })
            :""}
        </div>
      </div>
    </> 
    )
}
