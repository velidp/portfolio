import React from 'react';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt='logo'></img>
      </div>
      <ul>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar