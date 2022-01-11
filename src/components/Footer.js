import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to={"/"}> Go Top </Link>
      <Link to={"/about"}> About us </Link>
      <Link to={"/contact"}> Contact us </Link>
    </div>
  );
};

export default Footer;
