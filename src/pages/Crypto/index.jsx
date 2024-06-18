import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./styles.css";
import Loading from "../../components/Loading";

export default function CryptoPage() {
    const { id } = useParams();

    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}??x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`);
                setCryptoData(response.data);
                console.log(response.data)
            } catch (ex) {
                console.error(ex);
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
                        <h2>$ {cryptoData.market_data.current_price.usd}</h2>
                        <p>{cryptoData.market_data.market_cap_change_percentage_24h_in_currency.usd}%</p>
                    </div>
                </div>
                <div className="coin-container">
                    <label for="coins">Moeda: </label>
                    <select id="coins" name="coins">
                        <option value="apple">BRL</option>
                        <option value="banana">USD</option>
                    </select>
                </div>
            </div>
            <div className="crypto-graph">
            </div>
        </div>
    )
}