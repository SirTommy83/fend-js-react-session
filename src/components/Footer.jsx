import React from "react";
import { Link } from "react-router-dom";
import footerIcon from "../footerIcon.svg";


const Footer = () => {
  return (
    <div>
      <Link to="/">
      <img src={footerIcon} alt="Home" />
      </Link>
    </div>
  );
};

export default Footer;
