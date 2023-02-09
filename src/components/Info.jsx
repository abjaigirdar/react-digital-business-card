import React from "react";
import ajImg from "../assets/aj.jpg"

export default function Info() {
  return (
    <div className="info">
      <img src={ajImg} className="header--img" />
      <h1>Abrar Jaigirdar</h1>
      <h4>Full-Stack Developer</h4>
      <a href="#">portfolio website</a>
      <div className="infoButton">
        <button className="white-btn">
          <i className="fa fa-envelope"></i>Email
        </button>
        <button className="blue-btn">
          <i className="fa fa-linkedin-square"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
