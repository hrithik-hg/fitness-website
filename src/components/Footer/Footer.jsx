import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Insta from '../../assets/instagram.png'
import LinkedIN from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png' 

const Footer = () => {
  return (
    <div className="Footer-container" id="footer-container">
        <hr/>
        <div className="footer">
            <div className="social">
                <img src={LinkedIN} alt="" />
                <img src={Insta} alt="" />
                <img src={Github} alt="" />
            </div>
            <div className="logo-footer">
                <img src={Logo} alt="" />
            </div>
        </div>
        
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
    </div>
  )
}

export default Footer
