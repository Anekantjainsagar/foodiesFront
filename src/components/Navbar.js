import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../ezgif.com-gif-maker.gif";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link active"
            aria-current="page"
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/explore"
          >
            Explore
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/logout"
          >
            Logout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link active"
            aria-current="page"
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/explore"
          >
            Explore
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/register"
          >
            Register
          </Link>
          <Link
            style={{ fontSize: "1.15rem", paddingRight: "1rem" }}
            className="nav-link"
            to="/login"
          >
            Login
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "500" }}
          >
            <img
              style={{ width: "60%", padding: "0.2rem 0.5rem" }}
              src={img}
              alt="This is a logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <RenderMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
