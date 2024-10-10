export default function WinningRecords(){
    return(
        <div className="container my-5 h-auto">
            <div className="title border-bottom my-5 py-4">
                <h2>Winning Records</h2>
            </div>
            <div className="cart ">
                <div className="">
                    <div class="form-check ">
                    <input class="form-check-input " type="checkbox" value="" id="selectAll"/>
                    <label class="form-check-label" for="selectAll">
                        Select All
                    </label>
                    </div>
                <div className="d-flex ">
                    <div className="d-flex justify-content-between ">
                        <div className="">
                            <input class="form-check-input" type="checkbox" value="" id="select"/>
                        </div>    
                        <div className="d-flex justify-content-center">
                            <img className="w-25" src="src\assets\home\orange.jpg" alt="product1" />
                        </div>    
                            <label class="form-check-label" for="select">
                                <h3>Wheat Field with Cypresses</h3>
                                <p>Vincent van Gogh</p>
                                <br/>
                                <br/>
                                <p>$  125,0000</p>
                            </label>
                        <div className="d-flex align-items-center">
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
            
        </div>
    )
}
