import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronDoubleRight, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });

  }, []);

  const tstm = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={ urlFor(tstm.imageurl) } alt='testimonial'/>
            <div className='app__testimonial-content'>
              <p className='p-text'>{tstm.feedback}</p>
              <div>
                <h4 className='bold-text'>{tstm.name}</h4>
                <h5 className='p-text'>{tstm.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}> 
              <HiChevronLeft/>
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? 0 : currentIndex + 1)}> 
              <HiChevronRight/>
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__felx'>
        {brands.map((brand) => 
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonials'), 
  'testimonial',
  'app__primarybg'
);