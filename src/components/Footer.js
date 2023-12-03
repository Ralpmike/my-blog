import './FooterStyles.css'

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>No.20 Spring Road, Ikot Ekpene <span >Akwa Ibom State.</span></p>
            </div>
          </div>
          <div className='phone'>
          <FaPhone size={25} style={{ color: "#fff", marginRight: "2rem"}} />
            <h4>
            +123-7044067831,
            <span style={{display:"block"}}>+123-9025533111</span>
            </h4>
          </div>
          <div className='email'>
          <FaMailBulk size={25} style={{ color: "#fff", marginRight: "2rem" }} />
          <h4>
            ralphmike996@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>Welcome to FairDesigns, where innovation meets purpose! I'm Raphael Michael, founder and visionary behind this tech venture. With a passion for cutting-edge technology and a commitment to ethical design</p>
          <div className='socials'>
          <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;