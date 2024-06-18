import { Link, useLocation } from "react-router-dom";
import "./styles.css"

export default function NavBar() {
  const location = useLocation();
  return (
    <div className="navbar-container">
        <div className="navbar-line1"></div>
        <nav className="navbar">
            <ul>
                <li>
                    <Link id={location.pathname === "/" ? "selected-path" : ""} to="/">Home</Link>
                </li>
                <li>
                    <Link id={location.pathname.includes("/cryptos") ? "selected-path" : ""} to="/cryptos">Cryptos</Link>
                </li>
                <li>
                    <Link id={location.pathname === "/market" ? "selected-path" : ""} to="/market">Market</Link>
                </li>
                <li>
                    <Link id={location.pathname === "/prices" ? "selected-path" : ""} to="/prices">Pricing</Link>
                </li>
                <li>
                    <Link id={location.pathname === "/contact" ? "selected-path" : ""} to="/cryptos">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="navbar-line2"></div>
    </div>
  );
}