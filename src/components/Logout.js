import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useNavigate();

  useEffect(() => {
    fetch("https://foodies-d3kg.onrender.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history("/login", { replace: true });
        dispatch({ type: "USER", payload: false });
        if (res.status !== 200) {
          alert("Something went wrong please try again");
        } else if (res.status === 200) {
          alert("Logged out successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>Logout</div>;
};

export default Logout;
