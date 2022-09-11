import React from "react";
import "./index.css";


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
                        <i class="square-1 fa-solid fa-thumbs-up"></i>
                        <h4>Mobil Lengkap</h4>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div class="square">
                        <i class="square-2 fa-solid fa-tag"></i>
                        <h4>Harga Murah</h4>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div class="square">
                        <i class="square-3 fa-solid fa-clock"></i>
                        <h4>Layanan 24 Jam</h4>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    <div class="square">
                        <i class="square-4 fa-solid fa-medal"></i>
                        <h4>Sopir Profesional</h4>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Whyus;
