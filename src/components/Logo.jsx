import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="nav-bar-logo">
      <Link to="/home">
        <img src="./cyber-logoo.png" alt="website logo" />
      </Link>
    </div>
  );
}

export default Logo;
