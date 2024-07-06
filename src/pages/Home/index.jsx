import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

import "./styles.css";

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="home-title">
                <h1>The <span>Crypto</span> world, </h1>
                <h1>you find here</h1>
                <h2>Discover, Learn, Thrive: Your Premier Destination for Cryptocurrency Information</h2>
            </div>
            <div className="buttons">
               <PrimaryButton path={"/cryptos"}>See cryptos</PrimaryButton>
               <SecondaryButton path={"/cryptos"}>Log in</SecondaryButton>
            </div>
        </div>
    )
}