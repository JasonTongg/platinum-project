import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import '../HasilPencarian/style.css'
import Mobil from "./Mobil";


const HasilSearch = () => {
  const [data, setData] = useState({
    nama_mobil: "",
    kategori: "",
    harga: "",
    status: "",
  });

  const Navigate = useNavigate();

  const klikCari = () => {
    Navigate("/result");
  };

  return (
    <>
      <Navbar />
        <div className="part">
          <div className="a1">
            <p>Nama Mobil</p>
            <input
              required
              id="nama"
              type="text"
              placeholder="Car Type"
              onChange={(e) =>
                setData({
                  ...data,
                  nama_mobil: e.target.value,
                })
              }
            ></input>
          </div>

          <div className="a2">
            <p>Kategori</p>
            <select
              required
              id="kategori"
              placeholder="Masukan Kapasitas Mobil"
              onChange={(e) =>
                setData({
                  ...data,
                  kategori: e.target.value,
                })
              }
            >
              <option value="2 - 4 Orang">2 - 4 Orang</option>
              <option value="4 - 6 Orang">4 - 6 Orang</option>
              <option value="6 - 8 Orang">6 - 8 Orang</option>
            </select>
          </div>

          <div className="a3">
            <p>Harga</p>
            <select
              required
              id="harga"
              placeholder="Masukan Harga Sewa per Hari"
              onChange={(e) =>
                setData({
                  ...data,
                  harga: e.target.value,
                })
              }
            >
              <option value="< Rp. 400.000">{"< Rp. 400.000"}</option>
              <option value="Rp. 400.000 - Rp. 600.000">
                {"Rp. 400.000 - Rp. 600.000"}
              </option>
              <option value="> Rp. 600.000">{"> Rp. 600.000"}</option>
            </select>
          </div>
          <div className="a4">
            <p>Status</p>
            <select required id="status" placeholder="Disewa">
              <option value="Disewa">Disewa</option>
            </select>
          </div>
          <button onClick={klikCari}>Cari Mobil</button>
        </div>
      <Mobil />
      <Footer />
    </>
  );
};

export default HasilSearch;
