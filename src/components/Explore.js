import React, { useState } from "react";
import Foodies from "./Data";
import Footer from "./Footer";
const containerStyle = {
  width: "100%",
};

const Explore = ({ cart, setCart }) => {
  const [inputVal, setinputVal] = useState("");

  const handleOnChange = (e) => {
    setinputVal(e.target.value);
  };

  return (
    <>
      <div className="exploreContainer">
        <h2>Foodies</h2>
        <p>Discover the best food anytime</p>
        <div className="search">
          <input
            type="text"
            placeholder="Search for dishes"
            className="searchBar"
            onChange={handleOnChange}
            value={inputVal}
          />
        </div>
      </div>
      <div className="container-fluid" style={containerStyle}>
        <div className="row">
          {Foodies.filter((e) => {
            if (inputVal === "") {
              return e;
            } else if (e.name.toLowerCase().includes(inputVal)) {
              return e;
            }
          }).map((e) => {
            return (
              <div className="col-md-3" key={e.key}>
                <h4 className="title" style={{ height: "54px" }}>
                  {e.name}
                </h4>
                <img src={e.img} alt="" />
                <div className="desc">{e.desc}</div>
                <div className="finalSection">
                  <span className="price">Rs. {e.prices}</span>
                  <button
                    className="cartBtn"
                    onClick={() => {
                      if (cart.includes(e)) {
                        const index = cart.indexOf(e);
                        const array = cart;
                        array.splice(index, 1);
                        setCart([...array]);
                      } else {
                        setCart([...cart, e]);
                      }
                    }}
                  >
                    {!cart.includes(e) ? "+ Add to Cart" : "- Remove"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
