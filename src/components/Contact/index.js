import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import BackgroundImage from './background2.svg';
import BackgroundPhone from './backgroundphone.svg';

const trackingInExpand = keyframes`
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
  animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh
  padding: 4em;
  color: #fff;
  background: url(${BackgroundImage}) no-repeat center center scroll; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 768px) {
    background: url(${BackgroundPhone}) no-repeat center center scroll; 
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;





const Frame = styled.div`
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 2em;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 45%;
  }
`;

const MapFrame = styled(Frame)`
  height: 90vw; // use viewport width units to ensure it scales with screen size
  width: 90vw; // adjust these values as per your needs
  max-height: 500px; // maintain the max size
  max-width: 500px;

  @media (min-width: 768px) {
    height: 500px;
    width: 500px;
  }
`;



const Title = styled.h1`
  text-align: center;
  ${animateIn}
`;

const Text = styled.p`
  font-size: 1.1em;
  text-align: center;
  ${animateIn}
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
`;

const ContactFormField = styled.input`
  border: 1px grey solid;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 1em;
  background: transparent;
  color: #fff;
`;

const ContactFormButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #CC9900;
  color: #000;
  cursor: pointer;
`;

const MapTitle = styled(Title)`
  flex: 0.1; // You can adjust this value as per your needs.
`;

const InfoBox = styled.div`
  background: rgba(0, 0, 0, 0.1); // background color same as the Frame
  border-radius: 10px; // rounded corners
  padding: 10px;
  margin: 1em;
  ${animateIn}
`;

const ContactSection = () => {
  return (
    <Container>
      <MapFrame>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <MapTitle>Our Location</MapTitle>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.376335798217!2d-96.95116062354423!3d32.755747373672406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e84e3e82fa709%3A0xc6c179d3b453a33!2s3953%20Grand%20Lakes%20Way%2C%20Grand%20Prairie%2C%20TX%2075050%2C%20USA!5e0!3m2!1sen!2sbg!4v1687857974961!5m2!1sen!2sbg"
            width="100%"
            height="100%"
            style={{ border: 0, flex: '0.8' }} // Decrease the iframe's flex ratio to make space for the contact info
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <InfoBox>  
            <Text style={{flex: '0.2'}}> 
              Phone Number: (123) 456-7890 <br/>
              Address: 3953 Grand Lakes Way, Grand Prairie, TX 75050, USA<br/>
              Working Hours: Mon-Fri 9:00 AM - 5:00 PM<br/>
              Email: example@example.com
            </Text>
          </InfoBox>
        </div>
      </MapFrame>
      <Frame>
        <Title>Contact MGABE</Title>
        <Text>If you have a question or want to speak with us, please submit the following form.</Text>
        <ContactForm>
          <ContactFormField type="text" placeholder="Name" />
          <ContactFormField type="email" placeholder="Email" />
          <ContactFormField type="text" placeholder="Phone" />
          <ContactFormField as="textarea" rows="4" placeholder="Message" />
          <ContactFormButton type="submit">Submit</ContactFormButton>
        </ContactForm>
      </Frame>
    </Container>
  );
};

export default ContactSection;
