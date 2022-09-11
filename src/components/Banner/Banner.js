import React from "react";
import "./Banner.css";
import Button from "../Button";
import { Link } from "react-router-dom";


function Banner(){
    return(
        <section className="banner">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/carimobil"><Button text="Mulai Sewa Mobil"></Button></Link>
        </section>
    )
}

export default Banner;
