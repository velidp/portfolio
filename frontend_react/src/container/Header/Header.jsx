import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import VideoBackground from '../../components/VideoBackground';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
     
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
            <div>
              <p className='selam-text'>ٱلسَّلَامُ عَلَيْكُمْ</p>
              <p className='p-text' style={{ visibility: 'hidden' }}>a</p>
              <h1 className='name-text'>Velid Poško</h1>
              <p className='p-text' style={{ visibility: 'hidden' }}>a</p>
              <p className='p-text'>SOFTWARE ENGINEER</p>
            </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.angular, images.java, images.react, images.spring, images.node].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
