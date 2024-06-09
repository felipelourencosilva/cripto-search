import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-line"></div>
            <div className="footer-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/market">Market</Link>
                    </li>
                    <li>
                        <Link to="/prices">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/">Terms</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                </ul>
            </div>
            <p>&copy; 2024 Crypto Search. All Rights Reserved.</p>
        </footer>
    );
}