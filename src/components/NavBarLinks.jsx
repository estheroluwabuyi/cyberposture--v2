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
