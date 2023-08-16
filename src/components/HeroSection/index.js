import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight }from './HeroElements'
import {Button} from '../ButtonElements'




const HeroSection = () => {
    const[hover,setHover] = React.useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>MGABE Banking</HeroH1>
            <HeroP>Welcome to MGABE, where we're transforming the way we digitally transact 
              financial services. As a cooperative, we're owned and controlled by our members, 
              putting the power back into your hands.
               We leverage blockchain technology to provide secure, transparent, and ethical financial services.
                Join us today and be part of a financial community that truly works
               for its members. Together, we can build a better financial future for everyone.</HeroP>
            <HeroBtnWrapper>
                <Button to='loginregister' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
        
      
    </HeroContainer>
    
  )
}

export default HeroSection
