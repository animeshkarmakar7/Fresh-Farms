import React from 'react'
import './Footer.css'
import whatsapp from '../Components/Assets/whatsapp_icon.png'
import instagram from '../Components/Assets/instagram_icon.png'
import X from '../Components/Assets/twitter.png'
import copyright from '../Components/Assets/copyright.png'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="footer-title">
        <h1>Fresh-Farms</h1>
        <hr />
      </div>
      <div className="footer-main">
        <div className="footer-media">
          <div className="footer-links">
            <h1>Follow us on</h1>
          </div>
          <div className="footer-social">
            <div className="footer-social-details">
              <img src={whatsapp} alt="" />
              <p>7771342666</p>
            </div>
            <div className="footer-social-details">
              <img src={instagram} alt="" />
              <p>fresh_farmsOG</p>
            </div>
            <div className="footer-social-details">
              <img id='X' src={X} alt="" />
              <p>__freshFarms</p>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-title">
            <h1>Connect</h1>
          </div>
          <div className="footer-contact-desp">
            <h2>Join Our Marketplace!</h2>
            <p>Have fresh vegetables or Fruits to sell? Partner with us to reach more customers. Contact us at freshfarms@gmail.com or +9177827782 to learn more and get started today!</p>
          </div>
        </div>
      </div>
    <hr style={{width:'80rem' , color:'black'}} />
    <div className="footer-copyright">
      <p>copyright</p><span> <img src={copyright} alt="" />
      <p>2024</p>
      </span>
      
      <p>.All Rights Reserved</p>
     
    </div>
    
    </div>
    </> 
  )
}

export default Footer
