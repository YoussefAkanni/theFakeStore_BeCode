import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Star from "../components/Star";

const Electronics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="Home">
      <Star />
      <Categories />
      {data.map((elem) => (
        <Link
          to={"/product/" + elem.id}
          className="product"
          data={elem}
          key={elem.id}
        >
          <img src={elem.image} alt={elem.title} />
          <p>{elem.price} $ </p>
          <h5>{elem.title} </h5>
        </Link>
      ))}
    </div>
  );
};

export default Electronics;
