import react from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection(){
    return (
<div className='hero-container'>
<h1>Markentiska kompanija</h1>    
<h3>FAMEMPIRE</h3>
<p>Vas uspeh je i nas uspeh</p>
<div className='hero-btns'>
    <Button className='btns' buttonStyle="btn--outline" buttonSize='btn--large'>
        Kontakt
    </Button>
</div>
</div>

    );
}

export default HeroSection