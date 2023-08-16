
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import AboutSection from '../components/AboutSection';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer/footer';
import GlobalStyles from './GlobalStyles';


export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyles />
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <AboutSection/>
    <Footer/>
    </>
  );
}
