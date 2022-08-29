import React from "react";
import { Card } from "react-bootstrap";


function WhyUs() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '50px'}}>
            <Card border="secondary" style={{width: '18rem'}}>
                <Card.Body>
                <div className="circle" style={{borderRadius: '50%', width: '40px', height: '40px', backgroundColor: 'yellow'}}></div>
                    <Card.Title>Mobil Lengkap</Card.Title>
                    <Card.Text>
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="secondary" style={{width: '18rem'}}>
                <Card.Body>
                <div className="circle" style={{borderRadius: '50%', width: '40px', height: '40px', backgroundColor: 'greenyellow'}}></div>
                    <Card.Title>Mobil Lengkap</Card.Title>
                    <Card.Text>
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="secondary" style={{width: '18rem'}}>
                <Card.Body>
                <div className="circle" style={{borderRadius: '50%', width: '40px', height: '40px', backgroundColor: 'lightblue'}}></div>
                    <Card.Title>Mobil Lengkap</Card.Title>
                    <Card.Text>
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default WhyUs;