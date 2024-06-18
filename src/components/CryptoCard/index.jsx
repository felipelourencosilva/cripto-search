import { Link } from "react-router-dom";
import "./styles.css";

export default function CryptoCard({ name, image, symbol, price, variation, id }) {
    return (
        <Link to={`/cryptos/${id}`} className="crypto-card-link">
            <div className="crypto-card-container">
                <div className="crypto-card-information">
                    {image ? (
                        <img src={image} alt={name} />
                    ) : (
                        <div className="crypto-card-no-image">{name[0]}</div>
                    )}
                    <div>
                        <p className="crypto-name">{name}</p>
                        <p className="crypto-code">{symbol}</p>
                    </div>
                </div>
                <div className="crypto-card-prices">
                    <p className="crypto-price">${price}</p>
                    <p className={`crypto-variation 
                        ${Number(price) >= 0 ? 'positive-variation' 
                        : 'negative-variation'}`}>
                            {variation}%
                    </p>
                </div>
            </div>
        </Link>
        
    );
}