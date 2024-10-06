export default function WinningRecords(){
    return(
        <div className="container">
            <div className="title">
                <h2>Winning Records</h2>
            </div>
            <div className="cart">
                <div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="selectAll"/>
                    <label class="form-check-label" for="selectAll">
                        Select All
                    </label>
                </div>
                <div>
                    <div className="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="select"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
