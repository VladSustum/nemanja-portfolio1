import React from 'react'
import Icon1 from '../../images/stock.svg'
import Icon2 from '../../images/photo.svg'
import Icon3 from '../../images/paint-palette.svg'
import Icon4 from '../../images/3d-modeling.svg'
import Icon5 from '../../images/web-development.svg'
import {ServicesContainer,ServiceCard2, ServicesH1, ServicesWrapper,ServiceIcon, ServiceCard,ServicesH2, ServicesP,ServicesP2, ServicePa } from './UslugeData'

const Usluge = () => {
    return (
       <ServicesContainer id="services">
           <ServicesH1>Naše Usluge</ServicesH1>
           <ServicesWrapper>
               <ServiceCard>
                   <ServiceIcon src={Icon1}/>
                   <ServicesH2>Digitalni Marketing</ServicesH2>
                   <ServicesP>Pomažemo vam pri targetiranju i vođenju kampanje marketinga na društvenim mrezama 
                       ali takođe smo tu i za SEO marketing.</ServicesP>
               </ServiceCard>
               <ServiceCard>
                   <ServiceIcon src={Icon2}/>
                   <ServicesH2>Video Reklame</ServicesH2>
                   <ServicesP>Naš kreativni tim iz ovog odeljka je tu da vam snimi i edituje video reklamu sa punom opremo za snimanje uključujući i dron.</ServicesP>
               </ServiceCard>
               <ServiceCard>
                   <ServiceIcon src={Icon3}/>
                   <ServicesH2>Grafički dizajn</ServicesH2>
                   <ServicesP>Tu smo da uradimo dizajn za bilo kakvu traženu podlogu. Logo dizajn,Vizit-karte, Bilbordi, Posteri, Časopisi...</ServicesP>
               </ServiceCard>
               <ServiceCard>
                   <ServiceIcon src={Icon4}/>
                   <ServicesH2>3D modeling</ServicesH2>
                   <ServicesP>U stanju smo da napravimo 3D projekciju ili virtuelnu reklamu vašeg proizvoda gde će biti prikazana funkcija, sadržaj i kvalitet proizvoda.</ServicesP>
               </ServiceCard>
               <ServiceCard>
                   <ServiceIcon src={Icon5}/>
                   <ServicesH2>Web development</ServicesH2>
                   <ServicesP>U slučaju ne posedovanja sajta kao osnovne potrepštine današnjeg poslovanja , tu smo da vam rešimo i taj problem.</ServicesP>
               </ServiceCard>   
               <ServiceCard2>
                   <ServicesP2><ServicePa><p>Tu smo da vam pružimo usluge na zahtev ili da izgradimo ceo plan uspona Vašeg brenda!</p></ServicePa></ServicesP2>
               </ServiceCard2>
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Usluge
