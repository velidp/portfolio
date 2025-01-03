import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'proficiencies','work', 'experience', 'values', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: 'var(--black-color)' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;