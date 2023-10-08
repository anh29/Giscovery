import React from "react";
import "./main.css";
import logoImage from "../../assets/img/bannervn 1.png";

const Main = () => {
  return (
    <div className="mainContent">
      <img src={logoImage} alt="Location" className="banner" />
    </div>
  );
};

export default Main;
