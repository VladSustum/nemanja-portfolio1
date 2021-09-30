import React from 'react'
import '../Kontakt/Kontakt.css'
import {Link} from 'react-router-dom'


function Kontakt() {
    return (
        <div id="kontakt">
        <div className='body'>
        <p className='centar'>Contact</p>
        <div class="contact-info">
        <div class="card">
          <i class="card-icon far fa-envelope"></i>
          <p>famempire20@gmail.com</p>
        </div>
  
        <div class="card">
          <i class="card-icon fas fa-phone"></i>
          <p>+381621571643</p>
        </div>
  
        <div class="card">  
         <a class='card-icon' href='https://www.facebook.com/profile.php?id=100007077889453'
               target='_blank'><i class="fab fa-facebook-f" aria-hidden="true" /></a>
               <p></p> 
        </div> 
        {/* <div class="card">  
           <a class="card-icon" href='https://www.instagram.com/famempire20/' 
               target='_blank'><i class='fab fa-instagram' /></a>
               <p></p>
        </div> */}
        </div>
        </div>
        
        </div>
    )
}

export default Kontakt
