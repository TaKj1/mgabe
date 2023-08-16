import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import LoginRegister from './pages/LoginRegister';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';







function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
    </Router>
  );
}

export default App;
