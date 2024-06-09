import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./styles.css";

export default function PrimaryButton({ children, path }) {
    return (
        <Link className="primary-button" to={path}>{children}</Link>
    );
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
};