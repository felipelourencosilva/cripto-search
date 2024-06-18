import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CryptoCard from "../CryptoCard";

import axios from "axios";
import "./styles.css";

export default function CryptosList() {
    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=20&price_change_percentage=24h?x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`);
                setCryptoData(response.data);
                console.log(response.data)
            } catch (ex) {
                console.error(ex);
                setError(ex);
            }
        };

        fetchData();
    }, []);

    if (!cryptoData) {
        return <div className="spinner-container"><div className="spinner-loading"></div></div>;
    }

    return (
        <div className="cryptos-list-container">
            {cryptoData.map((crypto) => (
                <CryptoCard
                    id={crypto.id}
                    key={crypto.id}
                    name={crypto.name}
                    price={crypto.current_price}
                    image={crypto.image}
                    symbol={crypto.symbol}
                    variation={crypto.price_change_percentage_24h}
                />
            ))}
        </div>
    );
}