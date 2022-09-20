import React from "react";
import Footer from "../Components/Footer";
import "./DetailSewa.scss";
import mobil from "../Components/assets/image.png";
import { FiUsers } from "react-icons/fi";

function DetailSewa() {
  return (
    <div className="page-5">
      <div className="hero">
        <div className="tabel">
          <h3 className="pen">Pencarianmu</h3>
          <div className="inputs">
            <pertama>
              <p>Nama Mobil</p>
              <input></input>
            </pertama>
            <pertama>
              <p>Kategori</p>
              <select className="seleksi">
                <option value={0}>Masukan Kapasitas Mobil</option>
                <option value={1}>2 - 4 Orang</option>
                <option value={2}>4 - 6 Orang</option>
                <option value={3}>6 - 8 Orang</option>
              </select>
            </pertama>
            <pertama>
              <p>Nama Mobil</p>
              <select className="seleksi">
                <option value={0}>Masukan Kapasitas Mobil</option>
                <option value={1}>2 - 4 Orang</option>
                <option value={2}>4 - 6 Orang</option>
                <option value={3}>6 - 8 Orang</option>
              </select>
            </pertama>
            <pertama>
              <p>Nama Mobil</p>
              <select className="seleksi">
                <option value={0}>Masukan Kapasitas Mobil</option>
                <option value={1}>2 - 4 Orang</option>
                <option value={2}>4 - 6 Orang</option>
                <option value={3}>6 - 8 Orang</option>
              </select>
            </pertama>
          </div>
        </div>
      </div>
      <div className="contain">
        <div className="desc">
          <ul>
            <h3 className="satu">Tentang Paket</h3>
            <p>include</p>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <ul>
            <p>Exclude</p>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <ul>
            <h3 className="dua">Refound, Reschedule, Overtime</h3>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>

            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>

            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className="detmo">
          <img src={mobil} alt="" />
          <p className="nama-mobil">Innova</p>
          <FiUsers className="FiUsers" />
          <aa>6 - 8 orang</aa>
          <div>
            <input
              className="tanggal"
              type="date"
              placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailSewa;
