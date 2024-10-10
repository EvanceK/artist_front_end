export default function BiddingHistoryOffcanvas(){
    return(
        
      <div class="offcanvas offcanvas-end" tabindex="-1" id="biddingHistoryOffcanvas" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header bg-primary-text-gold">
          <h5 class="offcanvas-title" 
          id="offcanvasExampleLabel">
            Bidding History
            </h5>
          {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}