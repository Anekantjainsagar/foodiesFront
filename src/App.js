import React, { createContext, useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Explore from "./components/Explore";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
export const UserContext = createContext();

const App = () => {
  const initialState = null;
  const reducer = (state, action) => {
    if (action.type === "USER") {
      return action.payload;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState([]);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/explore"
            element={<Explore cart={cart} setCart={setCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
