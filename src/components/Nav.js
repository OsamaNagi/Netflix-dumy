import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
          className="nav-logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          onClick={() => {
            navigate("/profile");
          }}
          className="nav-avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar logo"
        />
      </div>
    </div>
  );
}

export default Nav;
