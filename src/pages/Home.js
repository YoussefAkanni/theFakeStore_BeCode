import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Star from "../components/Star";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Star />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;