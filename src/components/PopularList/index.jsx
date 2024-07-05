import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./styles.css";
import Loading from "../Loading";
import PopularCard from "../PopularCard";

export default function PopularList({ cryptoData }) {
    if (!cryptoData) {
        return <Loading />
    }

    console.log(cryptoData[0].item.data.price_change_percentage_24h)

    return (
        <div className="popular-list-container">
            <h1>Trending cryptos</h1>
            {cryptoData.map((crypto, index) => (
                <PopularCard
                    id={crypto.item.id}
                    index={index+1}
                    key={crypto.item.id}
                    name={crypto.item.name}
                    price={crypto.item.data.price}
                    image={crypto.item.large}
                    symbol={crypto.item.symbol}
                    variation={crypto.item.data.price_change_percentage_24h.brl}
                />
            ))}
        </div>
    );
}