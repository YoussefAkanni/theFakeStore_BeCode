import React, { useEffect } from "react";
import electronics from "../assets/electronics.png";
import dress from "../assets/dress.png";
import tshirt from "../assets/tshirt.png";
import jewelery from "../assets/necklace.png";

const Categories = () => {
  return (
    <div className="categories">
      <a href="#">
        <img src={electronics} alt="electronics" />
        <p>electronics</p>
      </a>
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
