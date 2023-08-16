import React from 'react';
import styled from 'styled-components';
import { logo } from "./assets";
import { footerLinks, socialMedia } from "./constants";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0; /* Adjust the top and bottom padding as per your requirement */
  background: #000;
  background: black;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 80%;
  padding: 0 20px;
  align-items: start;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottomp:34px;
  margin-right: 70px;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const LogoText = styled.p`
  margin-top: 4px;
  font-size: 14px;
  
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
 
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 15px;
  background:  white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterItem = styled.li`
  font-size: 16px;
  line-height: 24px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
  &:hover {
    color: #FFD700;
  }
  
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #3F3E45;
  
`;

const SocialMediaIcon = styled.img`
  width: 21px;
  height: 21px;
  cursor: pointer;
  margin-right: ${props => props.isLast ? '0' : '6px'};
 
`;

const Copyright = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-right: 20px;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Footer = () => (
  <Section>
    <GridContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="hoobank" />
        <LogoText></LogoText>
      </LogoContainer>

      {footerLinks.map((footerlink) => (
        <LinksColumn key={footerlink.title}>
          <FooterTitle>{footerlink.title}</FooterTitle>
          <ul>
            {footerlink.links.map((link, index) => (
              <FooterItem 
                key={link.name}>
                {link.name}
              </FooterItem>
            ))}
          </ul>
        </LinksColumn>
      ))}
    </GridContainer>

    <FooterBottom>
      <Copyright>Copyright Ⓒ 2023 MGABE. All Rights Reserved.</Copyright>

      <div>
        {socialMedia.map((social, index) => (
          <SocialMediaIcon
            key={social.id}
            src={social.icon}
            alt={social.id}
            isLast={index === socialMedia.length - 1}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </FooterBottom>
  </Section>
);

export default Footer;
