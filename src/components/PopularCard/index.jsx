import { Link } from "react-router-dom";
import "./styles.css";

export default function PopularCard({ name, image, symbol, price, variation, id, search, index }) {

    return (
        <Link to={`/cryptos/${id}`} className="popular-card-link">
            <div className="popular-card-container">
                
                <div className="popular-card-information">
                    <p className="popular-index">{index}.</p>
                    {image ? (
                        <img src={image} alt={name} />
                    ) : (
                        <div className="popular-card-no-image">{name[0]}</div>
                    )}
                    <div>
                        <p className="popular-name">{name}</p>
                        <p className="popular-code">{symbol}</p>
                    </div>
                </div>
                
                
                <div className="popular-card-prices">
                    <p className="popular-price">R$ {price.toFixed(2)}</p>
                    <p className={`popular-variation 
                        ${variation >= 0 ? 'positive-variation' 
                        : 'negative-variation'}`}>
                            {variation.toFixed(2)}%
                    </p>
                </div>
            </div>
        </Link>
        
    );
}