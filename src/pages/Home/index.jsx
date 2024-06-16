import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import axios from "axios";

import "./styles.css";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(` https://rest.coinapi.io/v1/assets/icons/1?x_cg_pro_api_key=${import.meta.env.VITE_APP_API_KEY}`);
                setCryptoData(response.data);
                console.log(response.data);
            } catch (ex) {
                console.error(ex);
                setError(ex);
            }
        };

        fetchData();
    }, []);

    console.log(cryptoData);

    return (
        <div className="home-container">
            <div className="home-title">
                <h1>The <span>Crypto</span> world, </h1>
                <h1>you find here</h1>
                <h2>At lacus nulla sagittis scelerisque nisl. Pellentesque dius cursus vestibulum, facilisi ac, sed faucibus.</h2>
            </div>
            <div className="buttons">
               <PrimaryButton path={"/cryptos"}>See cryptos</PrimaryButton>
               <SecondaryButton path={"/cryptos"}>Log in</SecondaryButton>
            </div>
        </div>
    )
}