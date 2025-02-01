import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "home"]';
    client.fetch(query)
      .then((data) => {
        setHome(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div>
            <p className='selam-text'>{home[0]?.greeting}</p>
            <p className='p-text' style={{ visibility: 'hidden' }}>a</p>
            <h1 className='name-text'>{home[0]?.fullName}</h1>
            <p className='p-text' style={{ visibility: 'hidden' }}>a</p>
            <p className='profession-text'>{home[0]?.position}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
       
      <div className='circle-cmp app__flex' key={`circle-keyskilla`}>
        <img src={urlFor(home[0]?.keyskilla)} alt={`keyskill`} />
      </div>
      <div className='circle-cmp app__flex' key={`circle-keyskillb`}>
        <img src={urlFor(home[0]?.keyskillb)} alt={`keyskill`} />
      </div>
      <div className='circle-cmp app__flex' key={`circle-keyskillc`}>
        <img src={urlFor(home[0]?.keyskillc)} alt={`keyskill`} />
      </div>
      <div className='circle-cmp app__flex' key={`circle-keyskilld`}>
        <img src={urlFor(home[0]?.keyskilld)} alt={`keyskill`} />
      </div>
      <div className='circle-cmp app__flex' key={`circle-keyskille`}>
        <img src={urlFor(home[0]?.keyskille)} alt={`keyskill`} />
      </div>
        
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');