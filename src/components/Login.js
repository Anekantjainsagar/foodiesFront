import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch("https://foodiesbackend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 400) {
      alert("Please fill all the data");
      history("/login");
    } else if (res.status === 401) {
      alert("Email is not registered");
      history("/login");
    } else if (res.status === 402) {
      alert("Wrong password");
      history("/login");
    } else if (res.status === 200) {
      dispatch({ type: "USER", payload: true });
      alert("logged in successfully");
      history("/");
    } else {
      alert("Kuch bhi");
    }
  };

  return (
    <>
      <div className="registrationBox">
        <div className="registerBox">
          <div className="registrationCredentials alignCenter">
            <h1>Sign in</h1>
            <form autoComplete="new-password">
              <input
                autoComplete="new-password"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="Your email"
                name="email"
              />
              <input
                autoComplete="new-password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="Password"
                name="password"
              />
            </form>
            <button className="button" onClick={postData}>
              Login
            </button>
            <Link to="/register" className="switch">
              Click here to Register
            </Link>
          </div>
          <div className="img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cartoon_Call_Centre_Guy_Using_A_Computer.svg/1200px-Cartoon_Call_Centre_Guy_Using_A_Computer.svg.png"
              className="loginImg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
