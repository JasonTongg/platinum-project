import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-White.png";
import React from "react";
import "./style.css"
import Button from "../Button/index";

const Navbar = () => {
    const isLogin = localStorage.getItem("token");
    return (
            <div className="nav">
                <div className="container-logo">
                    <img src={Logo} alt='nav-logo' />
                </div>
                <div className="nav-link">
                    <div className="title">
                        <Link to ="/Home">Home</Link>
                        <Link to ="/Our Service">Our Service</Link>
                        <Link to ="/Why Us">Why Us</Link>
                        <Link to ="/Testimonial">Testimonial</Link>
                        <Link to ="/FAQ">FAQ</Link>
                    </div>
                    {isLogin ? <Button klikLogOut={() => {
                        window.localStorage.removeItem("token")
                        window.location.reload()
                    }} text="Log Out"></Button> : <Link to="/signup"><Button text="Register"></Button></Link>}
                </div>
            </div>
            )
        }

export default Navbar;