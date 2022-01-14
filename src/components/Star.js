import React, { useEffect, useState } from "react";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";

const Star = (props) => {
  const [data, setData] = useState([]);
  const onAdd = props.onAdd;
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/6")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="star">
      <h2 className="starProducts">Popular this week: </h2>
      <div className="text">
        <h3>{data.title} </h3>
        <p>{data.description} </p>
        <div className="bot">
          <a href="/">
            <Heart />
          </a>
          <button className="btn-cart" onClick={() => onAdd(data)}>
            <Cart />
          </button>
          <p>
            <span>{data.price} $ </span>
          </p>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>
      <img src={data.image} alt="product_image" />
    </div>
  );
};

export default Star;
