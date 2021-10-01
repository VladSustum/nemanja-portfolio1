import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {NavLink} from 'react-router-dom';
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
      <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
         Nemanja Šuštum <i className='fab fa-type3'></i>
          </NavLink>  
         <div className="menu-icon" onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' > <Link to='pocetna' spy={true} activeClass="active" smooth={true} className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
            </li>
             <li className='nav-item'>
                <Link to='onama' smooth={true} className='nav-links' onClick={closeMobileMenu}>
                About me
                </Link>
             </li>
             {/* <li className='nav-item'>
                <Link to='usluge' smooth={true} className='nav-links' onClick={closeMobileMenu}>
                Usluge
                </Link>
             </li>
             <li className='nav-item'>
                <Link to='portfolio' smooth={true} className='nav-links' onClick={closeMobileMenu}>
                Portfolio
                </Link>
             </li> */}
             <li className='nav-item'>
                <Link to='kontakt'  smooth={true}   className='nav-links' onClick={closeMobileMenu}>Contact</Link>
             </li>
         </ul>
    </div>
    </nav>

    </>
    )

}

export default Navbar