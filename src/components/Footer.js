import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className="footer-container">
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FAMEMPIRE
               
            </Link>
          </div>
          <small class='website-rights'>FAMEMPIRE © 2020</small>

     </div>
  );
}

export default Footer;