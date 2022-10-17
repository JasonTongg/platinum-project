import React from "react";
import Button from "../Button";
import ImageCar from "../../Assets/img_car.png";
import { Link } from "react-router-dom";
import "./style.css";

function SectionHero(props) {
  if (props.button) {
    return (
      <section className="hero">
        <div className="hero-deskripsi">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link to="/search">
            <Button text="Mulai Sewa Mobil"></Button>
          </Link>
        </div>
        <div className="hero-gambar">
          <img src={ImageCar} alt="imagecar" />
        </div>
      </section>
    );
  } else if (props.nobutton) {
    return (
      <section className="hero">
        <div className="hero-deskripsi">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="hero-gambar">
          <img src={ImageCar} alt="imagecar" />
        </div>
      </section>
    );
  } else {
    return (
      <section
        className="hero"
        style={{ height: "calc(266px - 88px)" }}
      ></section>
    );
  }
}

export default SectionHero;
