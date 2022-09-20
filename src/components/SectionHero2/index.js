import ImageHero from "../../assets/img_service.png";
import React from "react";
import "./style.css";
import { AiFillCheckCircle } from 'react-icons/ai'


function SectionHero2(){
    return(
        <section className="hero2">
            <div className="hero-gambar2">
                <img src={ImageHero} alt="imagehero" />
            </div>

            <div className='nav-tulisan'>
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, 
                bisnis, wedding, meeting, dll.</p>
                <p> <AiFillCheckCircle></AiFillCheckCircle> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                <p><AiFillCheckCircle></AiFillCheckCircle>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                <p><AiFillCheckCircle></AiFillCheckCircle>Sewa Mobil Jangka Panjang Bulanan</p>
                <p><AiFillCheckCircle></AiFillCheckCircle>Gratis Antar - Jemput Mobil di Bandara</p>
                <p><AiFillCheckCircle></AiFillCheckCircle>Layanan Airport Transfer / Drop In Out</p>
            </div>
        </section>
    )
}

export default SectionHero2;
