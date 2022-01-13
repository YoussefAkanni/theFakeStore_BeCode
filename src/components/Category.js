import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import Star from "../components/Star";

const Category = () => {
  const { category } = useParams();
  console.log(category);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [category]);
  console.log(data);
  return (
    <div className="Home">
      <Star />
      <Categories />
      <div className="products">
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
    </div>
  );
};

export default Category;
