import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
import "./style.scss";
import img_photo from "../assets/img_photo.png";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Testimonial = () => {
  let posisiAwal = 0;

  const geserKanan = () => {
    posisiAwal = posisiAwal + 1;
    if (posisiAwal > 0) {
      posisiAwal = -3;
    }

    let container = document.getElementsByClassName("containers");
    container[0].style.transform = `translateX(${519 * posisiAwal}px)`;
  };

  const geserKiri = () => {
    posisiAwal = posisiAwal - 1;

    if (posisiAwal < -3) {
      posisiAwal = 0;
    }

    let container = document.getElementsByClassName("containers");
    container[0].style.transform = `translateX(${619 * posisiAwal}px)`;
  };

  return (
    <div className="page-4">
      <h2>Testimonial</h2>
      <p style={{ textAlign: "center" }}>
        Berbagai review positif dari para pelanggan kami
      </p>
      <div className="containers" style={{ backgroundColor: "white" }}>
        <Card className="card" style={{ minWidth: "619px", height: "270px" }}>
          <Card.Body>
            <img src={img_photo} alt=""></img>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <Card.Title></Card.Title>
            <Card.Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ minWidth: "619px", height: "270px" }}>
          <Card.Body>
            <img src={img_photo} alt=""></img>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <Card.Title></Card.Title>
            <Card.Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ minWidth: "619px", height: "270px" }}>
          <Card.Body>
            <img src={img_photo} alt=""></img>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <Card.Title></Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ minWidth: "619px", height: "270px" }}>
          <Card.Body>
            <img src={img_photo} alt=""></img>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <Card.Title></Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cen">
        <Button onClick={geserKanan}><BsChevronLeft /></Button>
        <Button onClick={geserKiri}><BsChevronRight /></Button>
      </div>
    </div>
  );
};

export default Testimonial;
