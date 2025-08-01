import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import'./footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
          <h3>متجر عربي</h3>
          <div className="social">
            <Link to="/"><FaFacebook /></Link>
            <Link to="/"><FaTwitter /></Link>
            <Link to="/"><FaInstagram /></Link>
            <Link to="/"><FaLinkedin /></Link>
            <Link to="/"><FaDiscord /></Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer
