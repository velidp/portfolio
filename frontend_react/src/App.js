import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Intro } from './container'; 
import { Navbar } from './components';
import './App.scss';
import VideoBackground from './components/VideoBackground';

const App = () => { 
  return ( 
    <div className='app'>
      <Navbar/>
      <VideoBackground/>
      <Intro/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div> 
  )
}

export default App