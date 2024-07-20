import { useEffect, useState, useCallback, useRef } from 'react';
import { debounce } from 'lodash';

const ScrollHandler = ({ sections }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isChangingSection = useRef(false); // Flag to track section change status

  const scrollToSection = useCallback((index) => {
    if (sections[index] && sections[index].current) {
      window.scrollTo({
        top: sections[index].current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [sections]);

  const handleScroll = useCallback(debounce((delta) => {
    if (isChangingSection.current) return; // Prevent changes while a section change is in progress

    isChangingSection.current = true;
    const newIndex = delta > 0
      ? Math.min(currentSectionIndex + 1, sections.length - 1)
      : Math.max(currentSectionIndex - 1, 0);

    if (newIndex !== currentSectionIndex) {
      setCurrentSectionIndex(newIndex);
      scrollToSection(newIndex);
    }

    setTimeout(() => {
      isChangingSection.current = false;
    }, 175); // Duration should match debounce delay
  }, 175), [currentSectionIndex, sections, scrollToSection]);

  useEffect(() => {
    const onScroll = (event) => {
      handleScroll(event.deltaY);
    };

    window.addEventListener('wheel', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onScroll);
    };
  }, [handleScroll]);

  return null;
};

export default ScrollHandler;
