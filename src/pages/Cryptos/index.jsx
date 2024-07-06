import { useEffect, useState } from "react";
import axios from "axios";

import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import CryptosList from "../../components/CryptosList";

import "./styles.css";
import { FiSearch } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function CryptosPage() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [inputText, setInputText] = useState("");
    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&page=${page}&per_page=20&price_change_percentage=24h?x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`;
                if (search !== "") {
                    url = `https://api.coingecko.com/api/v3/search?query=${search}`;
                    const response = await axios.get(url);
                    setCryptoData(response.data.coins);
                } else {
                    const response = await axios.get(url);
                    setCryptoData(response.data);
                    console.log(response.data)
                }
            } catch (ex) {
                console.error(ex);
                setError(ex);
            }
        };
        console.log(search);
        handleSearch();
    }, [search, page]);

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
            <div className="cryptos-search">
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="search-icon" onClick={handleSearchClick}>
                    <FiSearch />
                </button>
            </div>
            <div className="cryptos-list">
                <CryptosList cryptoData={cryptoData} search={search} page={page}/>
            </div>

            {search ? ("") : (
                <div className="page-button-container">
                    <button onClick={handlePageDecrement}><FiChevronLeft /></button>
                    <div>{page}</div>
                    <button onClick={() => setPage(page+1)}><FiChevronRight /></button>
                </div>
            )}
        </div>
    )
}