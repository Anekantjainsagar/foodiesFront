import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useNavigate();

  useEffect(() => {
    history("/");
    alert("Logged out successfully");
    dispatch({ type: "USER", payload: false });
  }, []);

  return <div>Logout</div>;
};

export default Logout;
