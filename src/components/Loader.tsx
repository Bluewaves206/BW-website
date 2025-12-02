import React from "react";
import "../assets/styles/Loader.css";  
import logo from "../assets/loader.gif"; 


const Loader: React.FC = () => {
  return (
    <div className="loaderContainer">
      <img src={logo} alt="Loading..." className="loaderLogo" />
    </div>
  );
};

export default Loader;
