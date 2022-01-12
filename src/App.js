import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Electronics from "./pages/Electronics";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
