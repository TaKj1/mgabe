import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleServicesClick = () => {
    navigate('/services');
  };
  const handleRegisterClick = () => {
    navigate('/loginregister');
  };
  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">MGABE</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={handleHomeClick}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleAboutClick}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleServicesClick}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleContactClick}>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={handleRegisterClick}>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/loginregister">Login In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
