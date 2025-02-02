import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBarLinks() {
  return (
    <ul className="nav-bar-links">
      <li>
        <NavLink to="/service" className="nav-bar-links-link">
          Service
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className="nav-bar-links-link">
          About us
        </NavLink>
      </li>

      <li>
        <a href="#contact" className="nav-bar-links-link">
          Contact us
        </a>
      </li>
    </ul>
  );
}

export default NavBarLinks;

/*
function NavBarMenuBar({ slideMenu }) {
  return (
    <div
      className="nav-bar--menu"
      onClick={slideMenu}
      role="button"
      aria-label="Open menu"
    >
      <figure className="nav-bar--menu-img">
        <img
          src="./img/burger-bar.png"
          alt="menu-bar"
          width="100"
          height="100"
        />
      </figure>
    </div>
  );
}
*/
