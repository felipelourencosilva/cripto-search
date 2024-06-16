import { Link } from "react-router-dom";
import "./styles.css";
import CryptoCard from "../CryptoCard";

export default function CryptosList() {
    return (
        <div>
            <CryptoCard name="Bitcoin" price={-5.8} image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"/>
            <CryptoCard name="Bitcoin" price={5.8}/>
            <CryptoCard name="Bitcoin" price={5.8}/>
        </div>
    );
}