import React from 'react'
import ListSosmed from '../../assets/list-sosmed.svg'
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="addres">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="nav">
                <ul>
                    <li>Our Services</li>
                    <li>Why Us</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="sosmed">
                <p>Connect with us</p>
                <img src={ListSosmed} alt="" />
            </div>
            <div className="coppyright">
                <p>Copyright Binar 2022</p>
            </div>
        </footer>
    )
}

export default Footer
