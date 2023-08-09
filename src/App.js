import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";
import "./styles/app.scss";

export default function App() {
  return (
    <div className="app-body">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:slug" component={SingleProduct} />
        </Switch>
      </Router>
    </div>
  );
}
