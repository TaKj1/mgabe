import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarContainer, Icon, CloseIcon, SidebarWrpper, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements'

// Styled component for links with white text
const WhiteLink = styled(Link)`
  color: #fff;
  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrpper>
        <SidebarMenu>
            <WhiteLink to='/home' onClick={toggle}>Home</WhiteLink>
            <WhiteLink to='/about' onClick={toggle}>About</WhiteLink>
            <WhiteLink to='/services' onClick={toggle}>Services</WhiteLink>
            <WhiteLink to='/contact' onClick={toggle}>Contact</WhiteLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute>
                Sign In
            </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrpper>
    </SidebarContainer>
  )
}

export default Sidebar
