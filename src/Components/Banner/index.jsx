import React from 'react'
import './banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section class="banner">
            <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. </p>
            <Link style={{textDecoration: 'none'}} to='/search'>
                <button>Mulai Sewa Mobil</button>
            </Link>
        </section>
    )
}

export default Banner
