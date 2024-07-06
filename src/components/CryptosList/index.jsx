import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CryptoCard from "../CryptoCard";

import axios from "axios";
import "./styles.css";
import Loading from "../Loading";

export default function CryptosList({ cryptoData, search, page }) {
    if (!cryptoData) {
        return <Loading />
    }

    return (
        <div className="cryptos-list-container">
            {cryptoData.map((crypto, index) => (
                <CryptoCard
                    index={index}
                    page={page}
                    id={crypto.id}
                    key={crypto.id}
                    name={crypto.name}
                    price={crypto.current_price}
                    image={search !== "" ? crypto.large : crypto.image}
                    symbol={crypto.symbol}
                    variation={crypto.price_change_percentage_24h}
                    search={search}
                />
            ))}
        </div>
    );
}