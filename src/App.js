import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/nav/NavBar";
import Footer from "./components/nav/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";
import NotFound from "./components/pages/NotFound";
import "./styles/app.scss";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="app-body">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/cart"
            render={() => (
              <Cart products={products} cart={cart} setCart={setCart} />
            )}
          />
          <Route
            path="/products"
            render={() => <Products products={products} />}
          />
          <Route
            path="/product/:slug"
            render={(routeProps) => (
              <SingleProduct
                {...routeProps}
                products={products}
                setCart={setCart}
              />
            )}
          />
          <NotFound />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
