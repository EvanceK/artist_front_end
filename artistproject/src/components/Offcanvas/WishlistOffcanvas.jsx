import WishlistOffCanCard from "./WishlistOffCanCard";
export default function WishlistOffcanvas() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end "
        tabIndex="-1"
        id="wishlistOffcanvas"
        aria-labelledby="wishlistOffcanvasLabel"
      >
        <div className="offcanvas-header bg-primary-text-gold">
          <h5 className="offcanvas-title" id="wishlistOffcanvasLabel">
            Favorites List
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex  flex-column">
          {localStorage.getItem("Wishlist")
            ? JSON.parse(localStorage.getItem("Wishlist")).map((wp, i) => {
                return <WishlistOffCanCard key={i} wishlisProps={wp} />;
              })
            : ""}
        </div>
      </div>
    </>
  );
}
