import React, { useRef, useEffect, useState } from 'react';

import { About, Footer, Skills, Testimonial, Work, Intro } from './container'; 
import { Navbar } from './components';
import './App.scss';
import VideoBackground from './components/VideoBackground';

const App = () => {


  const homeRef = useRef(null);
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  const sections = [homeRef, introRef, aboutRef, workRef, skillsRef, testimonialRef, footerRef];
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = (index) => {
    if (sections[index] && sections[index].current) {
      window.scrollTo({
        top: sections[index].current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const newIndex = delta > 0
      ? Math.min(currentSectionIndex + 1, sections.length - 1)
      : Math.max(currentSectionIndex - 1, 0);
    
    if (newIndex !== currentSectionIndex) {
      setCurrentSectionIndex(newIndex);
      scrollToSection(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSectionIndex, sections]);

  return (
    <div className='app'>
      <Navbar/>
      <div ref={homeRef}><VideoBackground/></div>
      <div ref={introRef}><Intro/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={workRef}><Work/></div>
      <div ref={skillsRef}><Skills/></div>
      <div ref={testimonialRef}><Testimonial/></div>
      <div ref={footerRef}><Footer/></div>
    </div>
  )
}

export default App;