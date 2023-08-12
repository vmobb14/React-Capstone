import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  return (
    <div className="app-body">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/product/:slug" component={SingleProduct} />
          <NotFound />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
