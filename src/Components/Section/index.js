//import Grid from "@mui/material/Grid";
import pic2 from "./pic2.png";
import "./style.scss";
import checkList from "./Checklist.png";

function Section() {
  return (
    <section className="page-2">
      <div className="our">
        <div className="girl">
          <img className="girls" src={pic2} alt="" style={{ maxWidth: "600px" }} />
          {/* <span class="dot-1"></span>
                <span className="dot-2"></span>
                <span className="dot-3"></span> */}
        </div>
        <div className="service">
          <div className="parf">
            <div className="best">
              <h2>
                <b>Best Car Rental for any kind of trip in (Lokasimu)!</b>
              </h2>
              <p className="sewa">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
            </div>
            <ul className="list">
              <ul>
                <img className="checkList" src={checkList} alt="" />
                <p className="point">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </ul>
              <ul>
                <img className="checkList" src={checkList} alt="" />
                <p className="point">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </ul>
              <ul>
                <img className="checkList" src={checkList} alt="" />
                <p className="point">Sewa Mobil Jangka Panjang Bulanan</p>
              </ul>
              <ul>
                <img className="checkList" src={checkList} alt="" />
                <p className="point">Gratis Antar - Jemput Mobil di Bandara</p>
              </ul>
              <ul>
                <img className="checkList" src={checkList} alt="" />
                <p className="point">Layanan Airport Transfer / Drop In Out</p>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
