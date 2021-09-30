import react from 'react';
import '../../App.css';
import Footer from '../Footer';
import Kontakt from '../Kontakt/Kontakt';
import Onama from '../Onama/Onama'
import { homeObjOne } from '../Onama/OnamaData';


function Onama(){
    return 
    <>
    <Onama {...homeObjOne} />
    <Kontakt></Kontakt>
    <Footer></Footer>
    </>


}
export default Onama; 