import React from "react";
import "./index.css";
import {AiOutlineTag, AiFillLike, AiOutlineFieldTime} from 'react-icons/ai'
import { FaMedal } from 'react-icons/fa'


function Whyus(){
    return(
        
        <section className="Why">
            <div className="judul">
                <h3>Why Us?</h3>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="All">
                <div class="whyus-square">
                    <div class="square">
                        <AiFillLike></AiFillLike>
                        <h4>Mobil Lengkap</h4>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div class="square">
                        <AiOutlineTag></AiOutlineTag>
                        <h4>Harga Murah</h4>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div class="square">
                        <AiOutlineFieldTime></AiOutlineFieldTime>
                        <h4>Layanan 24 Jam</h4>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    <div class="square">
                        <FaMedal></FaMedal>
                        <h4>Sopir Profesional</h4>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Whyus;
