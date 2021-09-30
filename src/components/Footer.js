import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className="footer-container">
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             Portfolio
               
            </Link>
          </div>
          <small class='website-rights'>Nemanja Sustum © 2021</small>

     </div>
  );
}

export default Footer;