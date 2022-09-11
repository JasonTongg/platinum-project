import React from "react";
import "./Footer.css";


function Footer(){
    return(
        <section className="footer">
            <div class="footer-alamat">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
        </div>
        <ul class="footer-nav">
            <li>Our Services</li>
            <li>Why Us</li>
            <li>Testimonial</li>
            <li>FAQ</li>
        </ul>
        <div class="footer-socmed">
            <p>Connect with us</p>
            <div class="footer-socmed-icon">
                <i class="socmed fa-brands fa-facebook-f"></i>
                <i class="socmed fa-brands fa-instagram"></i>
                <i class="socmed fa-brands fa-twitter"></i>
                <i class="socmed fa-solid fa-envelope"></i>
                <i class="socmed fa-brands fa-twitch"></i>
            </div>
        </div>
        <div class="copy">
            <p>Copyright Binar 2022</p>
            <div class="navigation-logo"></div>
        </div>
        </section>
    )
}

export default Footer;
