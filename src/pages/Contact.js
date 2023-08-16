
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer/footer';
import GlobalStyles from './GlobalStyles';
import ContactSection from '../components/Contact';



export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyles />
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <ContactSection/>
    <Footer/>
    </>
  );
}
