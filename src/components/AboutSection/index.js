import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from './logo.png';
import BackgroundImage from './background2.svg';
import BackgroundPhone from './backgroundphone.svg';
const textFocusIn = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const textFocusInAnimation = css`
  animation: ${textFocusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  background: url(${BackgroundImage}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 120vh;
  padding: 2em;
  overflow: hidden;

  @media (max-width: 768px) {
    background: url(${BackgroundPhone}) no-repeat center center; // Use different background image
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;


const TextFrame = styled.div`
  padding: 20px;
  align-items: flex-end;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: rgba(0, 0, 0, 0.1);
  width: 60%;  // Reduced width
  max-width: 600px;  // Set a max-width to maintain reasonable dimensions on larger screens
  height: auto;
  margin-left: auto; // Push the box to the right

  @media (min-width: 768px) {
    width: 50%;  // Slightly wider on larger screens
    max-width: 600px;  // Keep the same max-width
  }
`;

const Title = styled.h1`
  font-size:2em; // Reduced size for mobile
  line-height: 1.2;
  text-align: right;
  color: rgba(255, 255, 255, 1);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  ${textFocusInAnimation}

  @media (min-width: 768px) {
    font-size: 2.5em; // Original size for larger screens
  }
`;

const Text = styled.p`
  font-size: 1.1em; // Reduced size for mobile
  color: rgba(255, 255, 255, 0.88);
  text-align: justify;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  ${textFocusInAnimation}

  @media (min-width: 768px) {
    font-size: 1.3em; // Original size for larger screens
  }
`;

const BoxTitle = styled.h2`
  font-size:1.8em; // Reduced size for mobile
  line-height: 1.2;
  text-align: center;  
  color: rgba(255, 255, 255, 1);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  ${textFocusInAnimation}

  @media (min-width: 768px) {
    font-size: 2em; // Original size for larger screens
  }
`;

const BoxText = styled.p`
  font-size: 1em; // Reduced size for mobile
  color: rgba(255, 255, 255, 0.88);
  text-align: center;  
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  ${textFocusInAnimation}

  @media (min-width: 768px) {
    font-size: 1.1em; // Original size for larger screens
  }
`;

const ImageContainer = styled.div`
  width: 90%; // More space for small screens
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  @media (min-width: 768px) {
    width: 50%;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap; // Allow wrapping
  margin-top: 2em;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

const Box = styled(TextFrame)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1 1 20em;
  width: 100%;  // specify the width
  height: auto; // specify the height
  margin: 1em;

  @media (min-width: 768px) {
    width: 450px;
    height: 300px;
  }
`;

const BoxComponent = ({ title, children }) => (
  <Box>
    <BoxTitle>{title}</BoxTitle>
    <BoxText>{children}</BoxText>
  </Box>
);

const AboutSection = () => {
  return (
    <Section>
      <ContentContainer>
        <ImageContainer>
          <img src={Logo} alt="Company logo" style={{ width: '60%', height: 'auto' }} />
        </ImageContainer>
        <TextContainer>
          <TextFrame>
            <Title>About Us</Title>
            <Text>
            Established in 2023, MGABE is more than just a business consulting firm. We are a family of entrepreneurs, dreamers, innovators, and achievers who are dedicated to promoting a cooperative and sustainable approach to doing business. 
            We help small and medium businesses not just survive, but thrive in the constantly evolving and highly competitive marketplace.

Our philosophy is rooted in our commitment to creating lasting partnerships and fostering a sense of belonging. We believe that the success of a business is intertwined with the prosperity of its community, and we promote business strategies that benefit not just individual companies, but the ecosystem in which they operate.
            </Text>
          </TextFrame>
        </TextContainer>
      </ContentContainer>
      <BoxContainer>
        <BoxComponent title="Box Title 1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</BoxComponent>
        <BoxComponent title="Box Title 2">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</BoxComponent>
        <BoxComponent title="Box Title 3">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</BoxComponent>
      </BoxContainer>
    </Section>
  );
};

export default AboutSection;
