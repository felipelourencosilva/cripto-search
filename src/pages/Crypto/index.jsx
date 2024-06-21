import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import axios from "axios";

export default function CryptoPage() {
    const { id } = useParams();

    const [cryptoData, setCryptoData] = useState(null);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (search != "") {
                    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}??x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`);
                    setCryptoData(response.data);
                }
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}??x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`);
                setCryptoData(response.data);
                console.log(response.data)
            } catch (ex) {
                console.error(ex);
                setError(ex);
            }
        };

        fetchData();
    }, [id, search]);

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
                        <h2>$ {cryptoData.market_data.current_price.brl}</h2>
                        <p className={`${cryptoData.market_data.market_cap_change_percentage_24h_in_currency.brl >= 0 ? 'positive-variation' 
                        : 'negative-variation'}`}>
                            {cryptoData.market_data.market_cap_change_percentage_24h_in_currency.brl}%
                        </p>
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

            <div className="comeback-arrow">
                <Link to=".." relative="path"><FiArrowLeft /></Link>
            </div>
        </div>
    )
}