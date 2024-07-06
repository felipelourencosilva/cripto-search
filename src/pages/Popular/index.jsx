import { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";
import PopularList from "../../components/PopularList";

export default function PopularPage() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [inputText, setInputText] = useState("");
    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
                setCryptoData(response.data.coins);
                console.log(response.data.coins);
            } catch (ex) {
                console.error(ex);
                setError(ex);
            }
        };
        handleSearch();
    }, []);

    const handlePageDecrement = () => {
        if(page > 1) {
            setPage(page-1);
        }
    }

    const handleSearchClick = () => {
        setSearch(inputText);
        setInputText("");
    }

    return (
        <div className="cryptos-container">
            <div className="cryptos-list">
                <PopularList cryptoData={cryptoData} search={search}/>
            </div>
        </div>
    )
}