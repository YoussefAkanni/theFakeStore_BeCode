import Categories from "../components/Categories";
import Products from "../components/Products";
import Star from "../components/Star";

function Home(props) {
  const onAdd = props.onAdd;
  return (
    <div className="Home">
      <Star onAdd={onAdd} />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
