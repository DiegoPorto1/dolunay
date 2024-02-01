import React from 'react';
import './Footer.css';
import insta from './instagram.png'
import whatsapp from './whatsapp.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Contactanos</h4>
       
        <h5>Tel: +54 9 1139443711</h5>
        <h5>No olvides de pasarte por mi instagram </h5>
        
        
        <div className='containerRedes'>
        <a href="https://www.instagram.com/dolunay_souvenirs/"><img src={insta}></img></a>
        <a href='https://api.whatsapp.com/send?phone=${+5491139443711}&text=Hola%20como%20estas?.Queria%20averiguar%20sobre....'> <img src={whatsapp}></img></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;