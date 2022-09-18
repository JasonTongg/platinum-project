import React from "react";
import Logo from "../../Assets/logo.png";
import "./style.css"

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer-alamat">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <ul className="footer-nav">
                <li>Our Services</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
            </ul>
            <div className="footer-socmed">
                <p>Connect with us</p>
            </div>
            <div className="footer-copy">
                <p>Copyright Binar 2022</p>
                <img src={Logo} alt='nav-logo' />
            </div>
        </div>
        </>
    )
}

export default Footer;