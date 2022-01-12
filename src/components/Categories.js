import React, { useEffect } from "react";
import electronics from "../assets/electronics.png";
import dress from "../assets/dress.png";
import tshirt from "../assets/tshirt.png";
import jewelery from "../assets/necklace.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <Link to={"/electronics"}>
        <img src={electronics} alt="electronics" />
        <p>electronics</p>
      </Link>
      <a href="#">
        <img src={dress} alt="dress" />
        <p>women's clothing</p>
      </a>
      <a href="#">
        <img src={tshirt} alt="tshirt" />
        <p>men's clothing</p>
      </a>
      <a href="#">
        <img src={jewelery} alt="jewelery" />
        <p>jewelery</p>
      </a>
    </div>
  );
};

export default Categories;
