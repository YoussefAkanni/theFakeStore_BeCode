import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./pages/Product";
import About from "./pages/About";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  const [cartItems, setCratItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((elem) => elem.id === product.id);
    if (exist) {
      setCratItems(
        cartItems.map((elem) =>
          elem.id === product.id
            ? {
                ...exist,
                qty: exist.qty + 1,
              }
            : elem
        )
      );
    } else {
      setCratItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" exact={true} element={<Home onAdd={onAdd} />}></Route>
        <Route path="/product/:ids" element={<Product onAdd={onAdd} />}></Route>
        <Route path="/category/:category" element={<Category />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
