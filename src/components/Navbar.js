import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';



function Navbar(){
    const [click, setClick] =useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);





 
    
    return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         FAMEMPIRE <i className='fab fa-type3'></i>
          </Link>  
         <div className="menu-icon" onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
                <a href to='/onama' className='nav-links' onClick={closeMobileMenu}>
                O nama
                </a>
             </li>
             <li className='nav-item'>
                <a href to='/usluge' className='nav-links' onClick={closeMobileMenu}>
                Usluge
                </a>
             </li>
             <li className='nav-item'>
                <a href to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
                </a>
             </li>
             <li className='nav-item'>
                <a href to='/kontakt' className='nav-links' onClick={closeMobileMenu}>Kontakt</a>
             </li>
         </ul>
    </div>
    </nav>

    </>
    )

}

export default Navbar