import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState([]);

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
    <nav className='app__navbar'>
      <div className='app__navbar-logo' onClick={() => window.location.hash = '#home'}>
        <img src={urlFor(home[0]?.logo)} alt={`logo`} />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'proficiencies','work', 'experience', 'values', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          { toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className='app__navbar-slider'
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul className='app__navbar-links'>
              {['home', 'about', 'proficiencies','work', 'experience', 'values', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
              ))}
              </ul>
            </motion.div>
          )}
      </div>

    </nav>
  )
}

export default Navbar;
