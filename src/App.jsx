import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TopAbout from "./components/TopAbout";
import Tours from "./components/Tours";
import Contact from "./components/Contact";
import React from 'react';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/" element={<HeroSecond/>} />
      <Route path="/TopAbout" element={<TopAbout/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/footer" element={<Footer/>} />
    </Routes>
    {/*<Hero />
    <About />
    <Services />
    <Tours />
    
   */}
    
    <Footer />
    </>
  );
}

export default App;
