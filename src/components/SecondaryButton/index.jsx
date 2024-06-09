import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./styles.css";

export default function SecondaryButton({ children, path }) {
    return (
        <div className="secondary-button">
            <Link to={path}>{children}</Link>
        </div>
    );
}

SecondaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
};