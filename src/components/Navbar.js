import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
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
         FAMEMPIRE <i className='fab fa-type3'></i>
          </NavLink>  
         <div className="menu-icon" onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
                <NavLink to='/onama' className='nav-links' onClick={closeMobileMenu}>
                O nama
                </NavLink>
             </li>
             <li className='nav-item'>
                <NavLink to='/usluge' className='nav-links' onClick={closeMobileMenu}>
                Usluge
                </NavLink>
             </li>
             <li className='nav-item'>
                <NavLink to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
                </NavLink>
             </li>
             <li className='nav-item'>
                <NavLink to='/kontakt' className='nav-links' onClick={closeMobileMenu}>Kontakt</NavLink>
             </li>
         </ul>
    </div>
    </nav>

    </>
    )

}

export default Navbar