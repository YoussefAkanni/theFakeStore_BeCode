import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";

const Product = (props) => {
  const { ids } = useParams();
  const [data, setData] = useState([]);
  const onAdd = props.onAdd;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/ ${ids}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <article>
      <img src={data.image} alt={data.title + " image"} />
      <div className="text">
        <h1> {data.title} </h1>
        <p>{data.description} </p>
        <div className="bot">
          <button className="buyNow">Buy Now</button>
          <a href="/">
            <Heart />
          </a>
          <button className="btn-cart" onClick={() => onAdd(data)}>
            <Cart />
          </button>

          <span>{data.price} $ </span>
        </div>
      </div>
    </article>
  );
};

export default Product;
