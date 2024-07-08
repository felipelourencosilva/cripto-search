import { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";
import PopularList from "../../components/PopularList";

export default function PopularPage() {
    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
                setCryptoData(response.data.coins);
            } catch (ex) {
                setError(ex);
            }
        };
        handleSearch();
    }, []);

    return (
        <div className="cryptos-container">
            <div className="cryptos-list">
                <PopularList cryptoData={cryptoData}/>
            </div>
        </div>
    )
}