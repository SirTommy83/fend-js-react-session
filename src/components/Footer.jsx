import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import user from "../assets/user.svg";
import programs from "../assets/programs.svg";

const Footer = () => {
  return (
    <div className="flex justify-between p-4 bg-fitness-color-black rounded-t-3xl w-full fixed bottom-0">
      <Link to="/">
        <img src={home} alt="Home" />
      </Link>
      <Link to="/programs">
        <img src={programs} alt="Programme browsen" />
      </Link>
      <Link to="/profile">
        <img src={user} alt="Profil" />
      </Link>
    </div>
  );
};

export default Footer;
