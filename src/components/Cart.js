import React, { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [tipValue, settipValue] = useState(0);

  let itemTotal = 0;
  let data, delivery, itemTotalPrice;

  return (
    <>
      <div className="container">
        <h1 className="mt-2">Cart</h1>
        <div className="cartPage container">
          <div className="cartDisplay">
            {cart?.map((e) => {
              return (
                <div className="displaySection mt-2" key={e.key}>
                  <img src={e.img} alt="" />
                  <div className="content">
                    <h1>{e.name}</h1>
                    <p className="ms-1 mb-0 mt-1">{e.desc}</p>
                    <p className="price ms-1 mb-0">Rs. {e.prices}</p>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const index = cart.indexOf(e);
                        const array = cart;
                        array.splice(index, 1);
                        setCart([...array]);
                      }}
                      style={{
                        backgroundColor: "rgb(0, 183, 255)",
                        color: "white",
                        outline: "none",
                        border: "1px solid grey",
                        padding: "0.15rem 0.75rem",
                        borderRadius: "1rem",
                      }}
                    >
                      - Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mrpSection mt-2">
            <h4>Payment</h4>
            <div className="paySection">
              <div className="headings">
                <p>Order price :</p>
                <p>Tax (18%) : </p>
                <p>Delivery Charge : </p>
                <p>Add tip :</p>
                <hr />
                <p>Total price : </p>
              </div>
              <div style={{ display: "none" }}>
                {
                  (data = cart.map((e) => {
                    itemTotal = itemTotal + e.prices;
                    return itemTotal;
                  }))
                }
                {(itemTotalPrice = data[data.length - 1])}
                {(delivery = itemTotalPrice < 999 ? "60" : "0")}
              </div>
              <div className="priceSection">
                <p> Rs. {itemTotalPrice}</p>
                <p>Rs. {parseInt((itemTotalPrice / 100) * 18)}</p>
                <p>Rs. {delivery}</p>
                <select
                  name="tip"
                  value={tipValue}
                  onChange={(e) => settipValue(e.target.value)}
                >
                  <option value="00">00</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <hr />
                <p>
                  Rs.{" "}
                  {itemTotalPrice +
                    parseInt(tipValue) +
                    parseInt(delivery) +
                    parseInt((itemTotalPrice / 100) * 18)}
                </p>
              </div>
            </div>
            <button className="payment">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
