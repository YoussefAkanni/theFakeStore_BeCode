import React, { useEffect, useState } from "react";

const Star = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div className="star">
      <img src={data.image} alt="product_image" />
    </div>
  );
};

export default Star;
