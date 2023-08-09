import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar-body">
      <div className="navbar-title-wrapper">
        <p>Website Title</p>
      </div>
      <div className="navbar-links-wrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </div>
  );
}
