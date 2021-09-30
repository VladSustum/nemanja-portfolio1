import react from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Onama from '../Onama'
import { homeObjOne } from '../Onama/OnamaData';
import Footer from '../Footer';
import Kontakt from '../Kontakt/Kontakt';

function Home(){
    return (
        <div id="pocetna">
        
        <HeroSection></HeroSection>
        <Onama {...homeObjOne} />
        <Kontakt/>
        <Footer></Footer>
    
        

        </div>

    )
}

export default Home;