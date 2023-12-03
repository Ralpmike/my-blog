import "./HeroimgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"

import React from 'react';
import {Link} from 'react-router-dom';

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer.</h1>
        <div className="content-btn">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
          Contacts
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage;