import styled from  'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';



export const HeroContainer =  styled.div`
background-color: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh; //changed from 800px to 100vh
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle at center, transparent, black 70%);
    opacity: .9; // you can change this value for a more intense or less intense shadow
  }
`




export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: black;



`
export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 = styled.h1`
color: black;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;

}
@media screen and (max-width: 480px){
    font-size: 32px;

}`


export const HeroP = styled.p`
    margin-top: 24px;
    margin-right: 20px; // change fixed pixels to percentage
    font-size: 24px;
    text-align: center;
    max-width: 90%; // change fixed pixels to percentage
    border: 1px grey; 
    padding: 20px; 
    background: linear-gradient(to bottom right, black, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.3);
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px){
        font-size: 20px; // decrease font-size for smaller screens
        padding: 10px; // decrease padding for smaller screens
    }

    @media screen and (max-width: 480px){
        font-size: 16px; // decrease font-size for even smaller screens
        padding: 5px; // decrease padding for even smaller screens
    }
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;


`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;

`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`










