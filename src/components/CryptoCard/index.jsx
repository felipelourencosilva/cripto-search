import { Link } from "react-router-dom";
import "./styles.css";

export default function CryptoCard({ index, name, image, symbol, price, variation, id, search, page }) {

    return (
        <Link to={`/cryptos/${id}`} className="crypto-card-link">
            <div className="crypto-card-container">
                <div className="crypto-card-information">
                    <p className="crypto-index">{(index+1)+((page-1)*20)}.</p>
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
                
                    {search === "" && variation ? (
                        <div className="crypto-card-prices">
                            <p className="crypto-price">R$ {price.toFixed(2)}</p>
                            <p className={`crypto-variation 
                                ${variation >= 0 ? 'positive-variation' 
                                : 'negative-variation'}`}>
                                    {variation.toFixed(2)}%
                            </p>
                        </div>
                    ) : ("")
                    }
                    
                
            </div>
        </Link>
        
    );
}