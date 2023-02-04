import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index";

const Register = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, number, password, cpassword } = user;

    const res = await fetch("https://foodiesbackend.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        password,
        cpassword,
      }),
    });

    console.log(res);

    if (res.status === 422) {
      alert("Please fill all the fields correctly");
      history("/register");
    } else if (res.status === 420) {
      alert("Entered email is already registered please go and login");
      history("/register");
    } else if (res.status === 421) {
      alert("Password and confirm password is not same");
      history("/register");
    } else {
      alert("registered successfully");
      history("/login");
    }
  };

  return (
    <>
      <div className="registrationBox">
        <div className="registerBox">
          <div className="registrationCredentials">
            <h1>Sign up</h1>
            <form autoComplete="new-password">
              <input
                autoComplete="new-password"
                value={user.name}
                onChange={handleOnChange}
                type="text"
                placeholder="Your name"
                name="name"
              />
              <input
                autoComplete="new-password"
                value={user.number}
                onChange={handleOnChange}
                type="text"
                placeholder="Mobile number"
                name="number"
              />
              <input
                autoComplete="new-password"
                value={user.email}
                onChange={handleOnChange}
                type="email"
                placeholder="Your email"
                name="email"
              />
              <input
                autoComplete="new-password"
                value={user.password}
                onChange={handleOnChange}
                type="password"
                minLength={8}
                placeholder="Password"
                name="password"
              />
              <input
                autoComplete="new-password"
                value={user.cpassword}
                onChange={handleOnChange}
                type="password"
                minLength={8}
                placeholder="Confirm password"
                name="cpassword"
              />
            </form>
            <button className="button" onClick={postData}>
              Register
            </button>
            <Link to="/login" className="switch">
              Click here for login
            </Link>
          </div>
          <div className="img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cartoon_Call_Centre_Guy_Using_A_Computer.svg/1200px-Cartoon_Call_Centre_Guy_Using_A_Computer.svg.png"
              className="registerImg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
