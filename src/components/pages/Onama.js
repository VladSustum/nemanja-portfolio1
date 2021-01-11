import react from 'react';
import '../../App.css';
import Footer from '../Footer';
import Kontakt from '../Kontakt/Kontakt';
import Onama from '../Onama/Onama'
import { homeObjOne } from '../Onama/OnamaData';
import Portfolios from '../Portfolios';
import Usluge from '../Usluge';

function Onama(){
    return 
    <>
    <Onama {...homeObjOne} />
    <Usluge></Usluge>
    <Portfolio></Portfolio>
    <Kontakt></Kontakt>
    <Footer></Footer>
    </>


}
export default Onama; 