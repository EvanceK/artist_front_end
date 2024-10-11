import React, { useState } from "react";
import OrangeImage from "../assets/home/orange.jpg";
import { info } from "sass";

function Order() {
  return (
    <div className="orderInfo mt-5 row justify-content-center">
      <div className="h1 underline">Order</div>
      <div className="col-md-11">
        <div className="mt-5 d-flex gap-5 align-items-center">
          <img
            src={OrangeImage}
            alt="orange.jpg"
            style={{ width: "300px", height: "auto" }}
          ></img>
          <div>
            <label className="h2">What a cute orange</label>
            <br />
            <label className="h4 grayfont">Orange Chen</label>
            <br />
            <label className="h4 grayfont mt-5">$ 120,000</label>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              {/* Recipient Information 標題 */}
              <h1 className="underline mb-4">Recipient Information</h1>

              <form>
                {/* Same as customer information Checkbox */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sameAsCustomer"
                  />
                  <label
                    className="form-check-label grayfont"
                    htmlFor="sameAsCustomer"
                  >
                    Same as customer information
                  </label>
                </div>

                {/* Name Input */}
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter recipient name"
                  />
                </div>

                {/* Phone Input */}
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Address Input */}
                <div className="form-group mb-3">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                  />
                </div>

                {/* Shipping Method */}
                <div className="form-group mb-3">
                  <p>Shipping Method : Delivery</p>
                </div>

                {/* Delivery Instructions */}
                <div className="form-group mb-3">
                  <label htmlFor="instructions">Delivery Instructions:</label>
                  <textarea
                    className="form-control"
                    id="instructions"
                    rows="3"
                  ></textarea>
                </div>

                {/* submit button*/}
                <div className="place-Bid d-flex justify-content-center m-5 ">
                      <div className="btn">Confirm</div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
