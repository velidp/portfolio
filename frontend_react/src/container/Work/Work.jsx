import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MotionWrap, AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';


const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [tags, setTags] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])

  useEffect(() => {
    const query = '*[_type == "tag"]';

    client.fetch(query).then((data) => {
      setTags(data);
    })
  }, [])


  const handleClick = (index) => {
    if(index < filterWork.length) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(0);
    }
  }
  

  const handleWorkFilter = (tag) => {
    setActiveFilter(tag);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if(tag === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(tag)));
      }
    }, 500);
  }


  return (
    <>
      <h2 className='head-text head-text-work'>
        <span>My </span> Innovation <span> Hub </span>
      </h2>

      <div className='app__work-filter'>
        {tags.map((tag, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(tag.tagName)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === tag ? 'item-active' : ''}`}
          >
            {tag.tagName}
          </div>
        ))}
      </div>
      
      {filterWork.length < 4 ? 
      <div className='app__work-portfolio-separator'>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
        >
          {filterWork.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9]}}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye/>
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9]}}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>

                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='title-text'>{work.title}</h4>
                <p className='description-text'>{work.description}</p>

                <div className='app__work-tag app__flex'>
                  <p>{work.tags[0]}</p>
                </div>
              </div>

            </div>
          ) )}
        </motion.div> 
      </div>
      :
      <div className='app__work-portfolio-separator'>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
        >
          {filterWork.slice(currentIndex, currentIndex + 4).map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9]}}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye/>
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9]}}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>

                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='title-text'>{work.title}</h4>
                <p className='description-text'>{work.description}</p>

                <div className='app__work-tag app__flex'>
                  <p>{work.tags[0]}</p>
                </div>
              </div>

            </div>
          ) )}
          </motion.div> 
          <div className='app__works-buttons app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? Math.floor(works.length / 4) * 4 : currentIndex - 4)}> 
              <HiChevronLeft/>
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex + 4)}> 
              <HiChevronRight/>
            </div>
          </div>
      </div>
      } 
    </>
  )
}


export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__primarybg'
);
