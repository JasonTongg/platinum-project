import React from "react";
import Logo from "../Assets/logo.png";
import LandingPage from "../Assets/landingpage.png";
import TextField from "@mui/material/TextField";
import "./Registration.css";

const SignUp = () => {
    return (
        <div className="login">
            <div className="login-form">
                <div className="form">
                    <img src={Logo} alt='nav-logo' />
                    <h3>Welcome Back!</h3>
                    <p>Name</p>
                    <TextField id="name" label="Nama Lengkap" variant="outlined" style={{width: 370}} />
                    <p>Email</p>
                    <TextField id="email" label="Contoh: aprijanti@gmail.com" variant="outlined" style={{width: 370}} />
                    <p>Password</p>
                    <TextField id="password" label="6+ karakter" variant="outlined" style={{width: 370}} />
                    <br/>
                    <button className="button-registration">Sign In</button>
                    <p style={{textAlign: "center"}}>Already have an account? <a href="#">Sign In here</a></p>
                </div>
            </div>
            <div className="login-landing">
                <h1>Binar Car Rental</h1>
                <img src={LandingPage} alt="landing-page" />
            </div>
        </div>
    )
}

export default SignUp;