import { useEffect, useState } from "react";
import axios from "axios";

import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import CryptosList from "../../components/CryptosList";

import "./styles.css";
import { FiSearch } from "react-icons/fi";

export default function CryptosPage() {
    return (
        <div className="cryptos-container">
            <div className="cryptos-search">
                <div className="search-icon">
                    <FiSearch />
                </div>
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="cryptos-list">
                <CryptosList />
            </div>
        </div>
    )
}