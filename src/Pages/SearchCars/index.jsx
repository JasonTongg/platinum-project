import React from 'react'
import './searchCars.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Footer from '../../Components/Footer';

const SearchCars = () => {
  return (
    <div>
      <h1>Header</h1>
      <div className='kotakTengah'>
      <div className='bungkus-form-search'>
        <Form className='form-search'>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Nama Mobil">
                <Form.Control type="text" placeholder="Ketik nama/tipe mobil" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Kategori"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Kapasitas Mobil</option>
                  <option value="1">2 - 4 orang</option>
                  <option value="2">4 - 6 orang</option>
                  <option value="3">6 - 8 orang</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Harga"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Harga Sewa per Hari</option>
                  <option className='hargaOption' value="1">{'< Rp. 400.000'}</option>
                  <option className='hargaOption' value="2">Rp. 400.000 - Rp. 600.000</option>
                  <option className='hargaOption' value="3">{'< Rp. 400.000'}</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Status"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Disewa</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md={1}>
              <Button className='btn-search' variant="success">Cari Mobil</Button>
            </Col>
          </Row>
        </Form>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchCars
