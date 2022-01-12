import Categories from "../components/Categories";
import Products from "../components/Products";
import Star from "../components/Star";

function Home() {
  return (
    <div className="Home">
      <Star />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
