import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import axios from "axios";

export default function CryptoPage() {
    const { id } = useParams();

    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}??x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`);
                setCryptoData(response.data);
            } catch (ex) {
                setError(ex);
            }
        };

        fetchData();
    }, [id]);

    if (!cryptoData) {
        return <Loading />
    }
    
    return (
        <div className="crypto-container">
            <div className="crypto-information-container">
                <div className="crypto-information">
                    <div className="crypto-names-information">
                        <img src={cryptoData.image.small} alt="" />
                        <h1>{cryptoData.name}</h1>
                        <p>({cryptoData.symbol.toUpperCase()})</p>
                    </div>
                    <div className="crypto-value-information">
                        <h2>R$ {cryptoData.market_data.current_price.brl}</h2>
                        <p className={`${cryptoData.market_data.market_cap_change_percentage_24h_in_currency.brl >= 0 ? 'positive-variation' 
                        : 'negative-variation'}`}>
                            {cryptoData.market_data.market_cap_change_percentage_24h_in_currency.brl.toFixed(2)}%
                        </p>
                    </div>
                </div>
            </div>

            <div className="crypto-info">
                <div className="crypto-info-item">
                    <h3>Volume</h3>
                    <p>R$ {cryptoData.market_data.total_volume.brl}</p>
                </div>
                <div className="crypto-info-item">
                    <h3>Total</h3>
                    <p>{cryptoData.market_data.total_supply}</p>
                </div>
                <div className="crypto-info-item">
                    <h3>Circulating</h3>
                    <p>{cryptoData.market_data.circulating_supply}</p>
                </div>
                <div className="crypto-info-item">
                    <h3>Market Cap</h3>
                    <p>R$ {cryptoData.market_data.market_cap.brl}</p>
                </div>
                <div className="crypto-info-item">
                    <h3>High 24h</h3>
                    <p>R$ {cryptoData.market_data.high_24h.brl}</p>
                </div>
                <div className="crypto-info-item">
                    <h3>Low 24h</h3>
                    <p>R$ {cryptoData.market_data.low_24h.brl}</p>
                </div>
            </div>

            {cryptoData && cryptoData.description && (
                <div className="crypto-about">
                    <h2>About</h2>
                    <div dangerouslySetInnerHTML={{ __html: cryptoData.description.en }} />
                </div>
            )}

            <div className="comeback-arrow">
                <Link to=".." relative="path"><FiArrowLeft /></Link>
            </div>
        </div>
    )
}