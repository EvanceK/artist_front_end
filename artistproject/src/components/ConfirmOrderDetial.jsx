import { useEffect, useState } from "react";
import OrangeImage from "../assets/home/orange.jpg";
import Thumbnail from "./Thumbnail";
function ConfirmOrderDetial() {
  const DeliveryOrders = JSON.parse(localStorage.getItem("DeliveryOrders"));
  const Total = JSON.parse(localStorage.getItem("allfee"));
  const servicefee = JSON.parse(localStorage.getItem("servicefee"));
  const orderList = DeliveryOrders.orderList;
  const paintingArray = [];
  const [thumbnailCard, setThumbnailCard] = useState();
  orderList.map((o) => {
    paintingArray.push(o.paintingId);
  });
  useEffect(() => {
    console.log("paintingArray:", paintingArray);
  }, []);

  // const buildThumnail = () => {
  //   paintingArray?.map((p) => {
  //     console.log(p);
  //     return (
  //       <>
  //         <Thumbnail paintingID={p}></Thumbnail>
  //       </>
  //     );
  //   });
  // };
  // useEffect(() => {
  //   setThumbnailCard(buildThumnail());
  // }, [paintingArray]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="border w-75 mb-5">
        <div className="h1">Order Detail:</div>
        <div className=" row gap-5 m-5">
          {paintingArray?.map((p, i) => {
            // console.log(p);
            return <Thumbnail key={i} paintingID={p}></Thumbnail>;
          })}
        </div>

        <div className="h1 underline ms-5 me-5"></div>

        <div className=" d-flex justify-content-between align-items-star mb-5">
          {/*左邊的 delivery instructions */}
          <div className="d-block w-100">
            <label className="h3 grayfont text-star ms-5">
              Delivery Instructions:
            </label>
            <textarea
              className="form-control ms-5 mt-2 w-75"
              rows="10"
              cols="5"
              defaultValue={DeliveryOrders.deliveryInstrictions}
            ></textarea>
          </div>

          {/*右邊的total */}
          <div className="row d-flex justify-content-end ms-2 me-5 mt-5  w-100">
            <div className="col-8">
              <div className="d-flex justify-content-between row">
                <div className="col-4">
                  <h4>Subtotal</h4>
                </div>
                <div className="col-1">
                  <h4>NT$</h4>
                </div>
                <div className="col-4">
                  <h4>
                    {new Intl.NumberFormat("en-IN", {}).format(
                      DeliveryOrders.totalAmount
                    )}
                  </h4>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between row">
                  <div className="col-4">
                    <h4>Delivery fee</h4>
                  </div>
                  <div className="col-1">
                    <h4>NT$</h4>
                  </div>
                  <div className="col-4">
                    <h4>
                      {new Intl.NumberFormat("en-IN", {}).format(
                        DeliveryOrders.deliveryFee
                      )}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="d-flex justify-content-between row">
                  <div className="col-4">
                    <h4>Service fee</h4>
                  </div>
                  <div className="col-1">
                    <h4>NT$</h4>
                  </div>
                  <div className="col-4">
                    <h4>
                      {new Intl.NumberFormat("en-IN", {}).format(servicefee)}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="h1 underline me-3"></div>

              <div className="d-flex justify-content-between row">
                <div className="col-4">
                  <h3>Total</h3>
                </div>
                <div className="col-1">
                  <h3>NT$</h3>
                </div>
                <div className="col-4">
                  <h3>{new Intl.NumberFormat("en-IN", {}).format(Total)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConfirmOrderDetial;
