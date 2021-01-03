import styled from 'styled-components'

export const ServicesContainer = styled.div`
background: #f1f1f1;
height: 1300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 300x;

@media screen and (max-width: 768px){
    padding-top: 350px;
   }

@media screen and (max-width: 480px){
    height: 1500px;
     padding-top: 350px;
  padding-bottom: 200px;
}

@media screen and (max-width: 800px){
    height: 1500px;
     padding-top: 350px;
  padding-bottom: 200px;
}
 `;

 export const ServicesWrapper = styled.div`
  max-width : 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns : 1fr 1fr 1fr;
  align-items : center;
  grid-gap: 16px;
  padding : 0 50px;

  @media screen and (max-width: 1000px){
      grid-template-columns: 1fr;
  }

  @media screen and (max-width : 768){
      grid-template-columns: 1fr;
      padding : 0 20px;
  }
 `;

 export const ServiceCard = styled.div`
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items : center;
 border-radius : 10px;
 max-height : 339px;
 padding : 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover{
     transform: scale(1.02);
     transition : all 0.2s ease-in-out;
     cursor : pointer;
 }
 `;

 export const ServiceIcon = styled.img`
 border-radius: 10px;
 height: 160px;
 width: 160px;
 margin-bottom : 10px;

 `;

 export const ServicesH1 = styled.h1`
 padding-bottom: 100px;
 font-size: 2.5rem;
 color: #00000;
 margin-bottom: 64px;

 @media screen and (max-width: 480px){
     font-size: 2rem;
     padding-top: 200px;
 }
 `;

 export const ServicesH2 = styled.h2`
 font-size: 1rem;
 margin-bottom: 10px;
 `;



export const ServiceCard2 = styled.div`
 background #fff;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items : center;
 border-radius : 10px;
 height : 340px;
 padding : 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover{
     transform: scale(1.02);
     transition : all 0.2s ease-in-out;
     cursor : pointer;
 }
 `;

export const ServicesP = styled.p`
 font-size: 1rem;
 text-align: center;
 `;

export const ServicesP2 = styled.div`
width: 220px;
height: 220px;
background: #FFCE00;
border-radius: 50%;

 `;

export const ServicePa = styled.p`
font-size: 1.3rem;
text-align: center;
padding: 13%;

 `

 



