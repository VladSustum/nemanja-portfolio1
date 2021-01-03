import react from 'react'
import { Link } from 'react-router-dom';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
  ImgWrap,
  InfoH1
} from './Onama';

const Onama = ({lightBg,id,imgStart,topLine, lightText,darkText,headline,description,alt,img,
}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoH1 darkText={darkText}>O Nama</InfoH1>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
          <TextWrapper>
            <TopLine>full-service marketing company</TopLine>
            <Heading darkText={darkText}>FAMEMPIRE</Heading>
            <Subtitle darkText={darkText}><ul><li>Famempire je kompanija osnovana 2020. godine u Novom Sadu, koja je tu da vam pruži ceo asortiman usluga iz oblasti marketinga.   Kada kažemo marketing, mislimo na marketing u potpunosti 
 jer smo stvoreni da budemo u mogućnosti da vam pomognemo u izgradnji svog brenda čak i ako krećete od nule. </li><br></br><li>
 Zbog raznovrsnosti znanja našeg kreativnog tima, ne postoji grana marketinga koju ne možemo da uradimo za vas.</li><br></br><li>
  Naša misija je jednostavna i vodi se i samim sloganom naše kompanije:<strong>"Vaš uspeh je i naš uspeh"</strong></li><br></br><li>Želimo da transformišemo i unapredimo vaš biznis sa inovativnim idejama i strategijama 
 savremenog marketinga kroz posvećenost,znanje i kreativnost našeg tima.</li><br></br><li>U cilju nam je da stvorimo prepoznatljive brendove i da ga zajedno popnemo do vrha!</li><li>Uz to da smo u stalnom kontaktu sa vama pružamo vam punu transparentnost prilikom izvođenja
  radova jer pre svega nam je bitno poverenje i zadovoljstvo klijenta.</li><br></br></ul></Subtitle>
          </TextWrapper>
          </Column1> 
          <Column2>
          <ImgWrap>
          <Img src={img} alt={alt} />
          </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
    </>
  )
}
 

export default Onama;