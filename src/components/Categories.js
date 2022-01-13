import React, { useEffect } from "react";
import electronics from "../assets/electronics.png";
import dress from "../assets/dress.png";
import tshirt from "../assets/tshirt.png";
import jewelery from "../assets/necklace.png";
import all from "../assets/grid.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <Link to={"/"}>
        <img src={all} alt="all" />
        <p>all</p>
      </Link>
      <Link to={"/category/jewelery"}>
        <img src={jewelery} alt="jewelery" />
        <p>jewelery</p>
      </Link>
      <Link to={"/category/electronics"}>
        <img src={electronics} alt="electronics" />
        <p>electronics</p>
      </Link>
      <Link to={"/category/women's clothing"}>
        <img src={dress} alt="dress" />
        <p>women's clothing</p>
      </Link>
      <Link to={"/category/men's clothing"}>
        <img src={tshirt} alt="tshirt" />
        <p>men's clothing</p>
      </Link>
    </div>
  );
};

export default Categories;
