import react from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection(){
    return (
<div className='hero-container'>
<h1>VAŠ USPEH JE I NAŠ USPEH</h1>
<p>Kontaktirajte nas odmah</p>
<div className='hero-btns'>
    <Button className='btns' buttonStyle="btn--outline" buttonSize='btn--large'>
        Kontakt
    </Button>
</div>
</div>

    );
}

export default HeroSection