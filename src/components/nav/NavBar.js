import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-body">
      <div className="navbar-title-wrapper">
        <h1>G</h1>
        <p>Gilroy's Grocers</p>
      </div>
      <div className="navbar-links-wrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}
