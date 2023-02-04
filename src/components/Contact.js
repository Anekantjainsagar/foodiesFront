import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const history = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmesssage] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch("https://foodies-d3kg.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 401) {
      alert("Please register yourself before filling contact form");
    } else if (res.status === 200) {
      alert("Send successfully");
      setname("");
      setemail("");
      setmesssage("");
      history("/");
    } else if (res.status === 422) {
      alert("Please fill all the fields");
    } else if (res.status === 400) {
      alert("Please register yourself before filling contact form");
    }
  };

  return (
    <>
      <div className="container2">
        <div className="contactMain">
          <img
            src="https://media.istockphoto.com/vectors/vector-illustration-contact-us-concept-vector-id1226326725?k=20&m=1226326725&s=612x612&w=0&h=vc_IfZFYmX81MoSzH6wt4_HHDqr0Q5xJph3bJQ073JY="
            className="contactImg"
            alt=""
          />
          <div className="contactContent">
            <h1>Contact us</h1>
            <form autoComplete="new-password">
              <input
                type="text"
                autoComplete="new-password"
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                name="name"
              />
              <input
                type="email"
                autoComplete="new-password"
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                name="email"
              />
              <textarea
                placeholder="Enter the message"
                cols="42"
                rows="6"
                onChange={(e) => setmesssage(e.target.value)}
                value={message}
                name="message"
              ></textarea>
            </form>
            <button className="button" onClick={postData}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
