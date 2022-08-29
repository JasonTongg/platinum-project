//import Grid from "@mui/material/Grid";
import pic2 from "./pic2.png";
import "./style.css";
import checkList from "./Checklist.png";

function Section () {
    return (
        <section className="page-2">
        <div className="our">
            <div className="girl">
                <img className="girls" src={pic2} />
                {/* <span class="dot-1"></span>
                <span className="dot-2"></span>
                <span className="dot-3"></span> */}
            </div>
            <div className="service">
                <div className="parf">
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <h3 className="sewa">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih 
                murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan 
                terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</h3>
                <ul className="list">
                    <ul><img className="checkList" src={checkList} /><b className="point">Sewa Mobil Dengan Supir di Bali 12 Jam</b></ul>
                    <ul><img className="checkList" src={checkList} /><b className="point">Sewa Mobil Lepas Kunci di Bali 24 Jam</b></ul>
                    <ul><img className="checkList" src={checkList} /><b className="point">Sewa Mobil Jangka Panjang Bulanan</b></ul>
                    <ul><img className="checkList" src={checkList} /><b className="point">Gratis Antar - Jemput Mobil di Bandara</b></ul>
                    <ul><img className="checkList" src={checkList} /><b className="point">Layanan Airport Transfer / Drop In Out</b></ul>
                </ul>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Section;