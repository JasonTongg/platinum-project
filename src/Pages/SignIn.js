import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/logo.png";
import LandingPage from "../Assets/landingpage.png";
import TextField from "@mui/material/TextField";
import "./Pages.css";

const SignIn = () => {
  const api = "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login";
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let Navigate = useNavigate();
  const klikLogin = async () => {
    try {
      let data = await window.fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      let token = await data.json();
      console.log(token);

      if (data.status === 201) {
        localStorage.setItem("token", token.access_token);
        Navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="login">
      <div className="login-form">
        <div className="form">
          <img src={Logo} alt="nav-logo" />
          <h3>Welcome Back!</h3>
          <p>Email</p>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Contoh: aprijanti@gmail.com"
            variant="outlined"
            style={{ width: 370 }}
          />
          <p>Password</p>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="6+ karakter"
            variant="outlined"
            style={{ width: 370 }}
          />
          <br />
          <button onClick={klikLogin} className="button-registration">
            Sign In
          </button>
        </div>
        <p style={{ textAlign: "center" }}>
          Don’t have an account? <Link to="/signup">Sign Up for free</Link>
        </p>
      </div>
      <div className="login-landing">
        <h1>Binar Car Rental</h1>
        <img src={LandingPage} alt="landing-page" />
      </div>
    </div>
  );
};

export default SignIn;
