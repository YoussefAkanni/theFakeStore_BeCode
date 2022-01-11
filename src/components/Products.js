import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="products">
      {data.map((elem) => (
        <a
          href={"/id/" + elem.id}
          className="product"
          data={elem}
          key={elem.id}
        >
          <img src={elem.image} alt={elem.title} />
          <p>{elem.price} $ </p>
          <h5>{elem.title} </h5>
        </a>
      ))}
    </div>
  );
};

export default Products;
