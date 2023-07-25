import React from "react";
import Ndata from "./Ndata";

const Cart = () => {
  return (
    <>
      <div className="row d-flex newArrivalsCont">
        {Ndata.map((val, index) => {
          return (
            <div className="col-md-4   newArrivals  " key={index}>
              <div className="img d-flex justify-content-center">
                <img
                  src={val.cover}
                  alt="NewArrivals pic"
                  className="newArrivalsImg"
                />
              </div>
              <h5>{val.name}</h5>
              <span>${val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
