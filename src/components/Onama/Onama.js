import styled from 'styled-components'

export const InfoContainer = styled.div`
  padding-top: 160px;
  background: ${({ lightBg }) => (lightBg ? '#f1f1f1' : '#f1f1f1')};
  

  @media screen and (max-width : 768px){
    padding-bottom: 400px;
    
  }
`;

export const InfoWrapper = styled.div`
 display : grid;
 z-index : 1;
 height : 860px
 width : 100%;
 max-width: 1100px;
 margin-right : auto;
 margin-left : auto;
 padding : 0 24px;
 justify-content : center;
`

export const InfoRow = styled.div`

display: grid;s
grid-auto-columns : minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


@media screen and (max-width: 768px){
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`

export const Column1 = styled.div`
 margin-bottom: 15px;
 padding : 0 15px;
 grid-area: col1;


`;

export const Column2 = styled.div`
 margin-bottom: 15px;
 padding : 0 15px;
 grid-area: col2;
 

`;

export const TextWrapper = styled.div`

  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`

  color: #01bf71;
  font-size = 16px;
  line-height: 16px;
  font-weight: 700:
  letter-spacing : 1.4px;
  text-transform : uppercase;
  margin-bottom: 16px;

`;

export const Heading = styled.h1`


  color: #000000;
  
  margin-bottom: 24px;
  text-align: center;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  // color: ${({darkText}) => (darkText? '#f7f8fa' : '010606')};

  @media screen and (max-width: 480px){
    font-size : 32px;
  }
`;



export const Subtitle = styled.ul`

  max-width: 440px;
  ul {
    list-style-type: none;
    
    
}
  list-style-type: none
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align : center;

 
  color:'010606'
`;

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 120%;
margin: 0px 0 10px -250px;
padding-right : 0;

@media screen and (max-width: 480px){
  visibility: hidden;
} 

 @media screen and (max-width: 768px){
  visibility: hidden;
 }
 @media screen and (max-width: 800px){
  visibility: hidden;
 }
 `
export const InfoH1 = styled.h1`
font-size: 2.5rem;
color: #000000;
margin-bottom: 64px;


@media screen and (max-width: 480px){
    font-size: 2rem;
}
`