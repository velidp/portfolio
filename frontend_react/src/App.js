import React, { useRef } from 'react';

import { About, Footer, Skills, Testimonial, Work, Intro } from './container'; 
import { Navbar } from './components';
import './App.scss';
import VideoBackground from './components/VideoBackground';
import ScrollHandler from './components/ScrollHandler';

const App = () => {

  const homeRef = useRef(null);
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  const sections = [homeRef, introRef, aboutRef, workRef, skillsRef, testimonialRef, footerRef];

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
      <ScrollHandler sections={sections} />
    </div>
  );
}

export default App;