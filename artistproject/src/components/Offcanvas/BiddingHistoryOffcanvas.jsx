import BiddingHistoryCard from "./BiddingHistoryCard";

export default function BiddingHistoryOffcanvas(){
  
    return(
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="biddingHistoryOffcanvas" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header bg-primary-text-gold">
          <h5 className="offcanvas-title" 
          id="offcanvasExampleLabel">
            Bidding History
            </h5>
          {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div className="offcanvas-body">
          
          {localStorage.getItem("Wishlist")!=null 
          ? JSON.parse(localStorage.getItem("Wishlist")).map((wp,i)=>{
            return<BiddingHistoryCard key={i} WishlistProps={wp}/>
            })
            :""}
        </div>
      </div>
    </> 
    )
}