import React from "react";
import "./header.css";
import logoImage from "../../assets/img/logodon 2.png";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="head">
        <img src={logoImage} alt="" className="logo" />
        <a href="/" className="brand">
          GISCOVERY
        </a>
      </div>
      <div className="category">
        <a href="/">Home</a>
        <a href="/">Discover</a>
        <a href="/">Language</a>
      </div>
      <div className="user">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <p className="account">NewG</p>
      </div>
    </div>
  );
};

export default Header;
