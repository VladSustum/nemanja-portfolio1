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
      {/* <InfoH1 darkText={darkText}>About me</InfoH1> */}
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
          <TextWrapper>
            {/* <TopLine>full-service marketing company</TopLine> */}
            <Heading darkText={darkText}>About me</Heading>
            <Subtitle darkText={darkText}><ul><li>My name is Nemanja. I'm a man on a mission. I quit my job a year ago with a dream of becoming a milionaire in the next 6 years. I've been working super hard to achieve my dream and I'm actually on target to make it happen.
  </li><br></br><li>
  I make majority of my income from Affiliate Marketing but also have a side hustle on Instagram. </li><br></br><li>
  Besides Digital Marketing some of my attention goes to CryptoCurrencies but I'm more of a patient giant than a Daytime trader.</li><br></br><li>Always positive and with a smile on my face I will answer your emails and help as much as I can.
 </li><br></br><li>So feel free to hit me up.</li>
 <br></br></ul></Subtitle>
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