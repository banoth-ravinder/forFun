import React from "react";

export const OrderDetails = ({ total, noOfItems }) => {
  return (
    <div className="orderDetails">
      <p>Your bill</p>
      <hr />
      <div>
        Items Ordered: <span id="count">{noOfItems}</span>
      </div>
      <div>
        Total Price: <span id="price">{total}</span> yens
      </div>
    </div>
  );
};
