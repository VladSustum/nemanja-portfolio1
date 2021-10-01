import react from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection(){
    return (
<div className='hero-container'>    
<h1>Nemanja Šuštum</h1>
<h2>Entrepreneur</h2>
{/* <p><b>"Vas uspeh je i nas uspeh"</b></p> */}
<div className='hero-btns'>
    <Button className='btns' buttonStyle="btn--outline" buttonSize='btn--large'>
        Contact me
    </Button>
</div>
</div>

    );
}

export default HeroSection