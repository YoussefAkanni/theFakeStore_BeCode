import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/ ${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <article>
      <img src={data.image} alt={data.title + " image"} />
      <div className="text">
        <h1> {data.title} </h1>
        <p>{data.description} </p>
        <div className="bot">
          <button>Buy Now</button>
          <a href="#">
            <Heart />
          </a>
          <a href="#">
            <Cart />
          </a>

          <span>{data.price} $ </span>
        </div>
      </div>
    </article>
  );
};

export default Product;
