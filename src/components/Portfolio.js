import React from 'react';
import './Portfolio.css'
import Portfolios from './Portfolios';
import ReactPlayer from 'react-player'
import Slika1 from '../images/1.jpg'
import Slika2 from '../images/2.jpg'
import Slika3 from '../images/3.png'
import Slika4 from '../images/4.jpg'
import Slika5 from '../images/5.jpg'
import Slika6 from '../images/6.jpg'

function Portfolio() {
  return (
    <div className='cards'>
      <h1>Neki od naših radova</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <p className='hh'>3D Modeli</p>
          <ul className='cards__items'>
            <Portfolios
              src={Slika1}
              
            />
            <Portfolios
              src={Slika2}
              
              
            />
            <Portfolios
              src={Slika3}
             
              
            />
          </ul>
          <p className='hh'>Graficki dizajn</p>
          <ul className='cards__items'>
            <Portfolios
              src={Slika4}
              
           
            />
            <Portfolios
              src={Slika5}
              
         
            />
            <Portfolios
              src={Slika6}
            />
          </ul>
          <p className='hh'>Reklame</p>
          
            <div className='cards__items'>
          <div className='player'> <ReactPlayer url='https://vimeo.com/474757729' width='400px' height='200px' /></div>
        <div className='player'><ReactPlayer url='https://vimeo.com/474758486' width='400px' height='200px' /></div>
        <div className='player'> <ReactPlayer url='https://vimeo.com/474756530' width='400px' height='200px' /></div>
        </div>
         
          
        </div>
        


      </div>
    </div>
    

  );
}

export default Portfolio;