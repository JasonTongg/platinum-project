import "./style.css";
import img_car from "./img_car.png"
import React from "react";

function Hero () {
    return(
    <div>
        <div className="page-1">
            <div className="container">
            <div className="content">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil 
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
            <img src={img_car} className="image" />
            </div>
        </div>
    </div>
    )
}

export default Hero;