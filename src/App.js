import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/category/:category" element={<Category />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
