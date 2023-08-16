import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Button } from '../ButtonElements';
import { ArrowForward, ArrowRight } from './HeroElements';
import { FaRegHandshake, FaLock, FaBalanceScale } from 'react-icons/fa';
import BackgroundImage from './background2.svg'
const trackingInExpandFwdTop = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const animateIn = css`
  animation: ${trackingInExpandFwdTop} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
  background: url(${BackgroundImage}) no-repeat center center/cover;
  min-height: 100vh;
  padding: 2em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2.8em;
  line-height: 1.2;
  margin-bottom: 1.5em;
  margin-left: 2em; /* Adjust the margin-left to your desired value */
  ${animateIn}
`;

const Text = styled.p`
  font-size: 1.1em;
  color: white;
  margin-left: 5em; /* Adjust the margin-left to your desired value */
  margin-bottom: 1.5em;
  ${animateIn}
`;

const ButtonContainer = styled.div`
  margin-left: 13%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70%; /* Adjust the width to your desired value */
  margin-left: 2em;
  margin-right: 10%;

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%; /* Adjust the width to your desired value */
    margin-left: 0;
  }
`;

const Box = styled.div`
  background: transparent;
  padding: 1em;
  margin: 1em;
  width: 70%;
  height: 100px;
  color: #000;
  transition: background 0.3s ease-in-out;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: grey;
  }
`;

// Icon styling
const Icon = styled.div`
  margin-right: 1em;
  display: flex;
  align-items: center;
  color: #FFD700;
`;

const BoxTitle = styled.h2`
  font-size: 1.4em;
  margin-bottom: 0.5em;
  color : white;
  ${animateIn}
  display: flex;
  align-items: center;
`;

const BoxText = styled.p`
  font-size: 1em;
  color: white;
  ${animateIn}
`;

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Section>
      <div style={{ maxWidth: '65%' }}>
        <Title>
          You do the business,
          <br />
          we’ll handle the
          <br />
          money.
        </Title>
        <Text>
          With the right credit card, you can improve
          <br />
          your financial life by building credit, earning rewards and
          <br />
          saving money.
          But with hundreds of credit cards on
          <br />
          the market.
        </Text>
        <ButtonContainer>
          <Button to="/register" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ButtonContainer>
      </div>
      <BoxContainer>
        <Box>
          <BoxTitle>
            <Icon>
              <FaRegHandshake size={24} />
            </Icon>
            Rewards
          </BoxTitle>
          <BoxText>The best credit cards offer some tantalizing combinations of promotions and prizes</BoxText>
        </Box>
        <Box>
          <BoxTitle>
            <Icon>
              <FaLock size={24} />
            </Icon>
            100% Secured
          </BoxTitle>
          <BoxText>We take proactive steps make sure your information and transactions are secure.</BoxText>
        </Box>
        <Box>
          <BoxTitle>
            <Icon>
              <FaBalanceScale size={24} />
            </Icon>
            Balance Transfer
          </BoxTitle>
          <BoxText>A balance transfer credit card can save you a lot of money in interest charges.</BoxText>
        </Box>
      </BoxContainer>
    </Section>
  );
};

export default HeroSection;
