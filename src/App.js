import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
