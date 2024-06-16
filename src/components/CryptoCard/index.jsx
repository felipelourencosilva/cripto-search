import { Link } from "react-router-dom";
import "./styles.css";

export default function CryptoCard({ name, image, code, price  }) {
    return (
        <div className="crypto-card-container">
            <div className="crypto-card-information">
                {image ? (
                    <img src={image} alt={name} />
                ) : (
                    <div className="crypto-card-no-image">{name[0]}</div>
                )}
                <div>
                    <p className="crypto-name">Bitcoin</p>
                    <p className="crypto-code">BTC</p>
                </div>
            </div>
            <div className="crypto-card-prices">
                <p className="crypto-price">$69900</p>
                <p className={`crypto-variation 
                    ${price >= 0 ? 'positive-variation' 
                    : 'negative-variation'}`}>
                        {price}%
                </p>
            </div>
        </div>
    );
}