import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, []);


  const handleClick = (index) => {
    experiences.slice(currentIndex, currentIndex + 3).forEach(e => console.log("Name:" + JSON.stringify(e.works[0].name)));
    if(index < experiences.length) {
      setCurrentIndex(index);
    } 
  }

  return (
    <>
      <h2 className='head-text head-text-skills'>Skills & <span>Experiences</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text-skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>


        <div className="app__skills-exp">
        <div className="app__skills-exp-separator"> 
          {experiences.slice(currentIndex, currentIndex + 3).map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={index}
            >
              

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h3 className="work-name-text">{work.name}</h3>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    
                    <div className="app__skills-exp-year">
                      <p className="bold-text-period">{experience.year}</p>
                    </div>

                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        
        </div>
        <div className='app__skills-btns app__flex'>
            <div 
              style={{ opacity: currentIndex === 0 ? 0.5 : 1, pointerEvents: currentIndex === 0 ? 'none' : 'auto' }} 
              className='app__flex' onClick={() => handleClick(currentIndex - 3)}> 
              <HiChevronUp/>
            </div>
            <div
              style={{ opacity: (experiences.length < 4) || (currentIndex + 3 === experiences.length) || (currentIndex >= Math.floor(experiences.length / 3) *3) ? 0.5 : 1, pointerEvents: (experiences.length < 4) || (currentIndex + 3 === experiences.length) || (currentIndex >= Math.floor(experiences.length / 3) *3) ? 'none' : 'auto' }}  
              className='app__flex' onClick={() => handleClick(currentIndex + 3)}> 
              <HiChevronDown/>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'experience',
  'app__whitebg'
);