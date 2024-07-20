import { useEffect, useState, useCallback } from 'react';

const ScrollHandler = ({ sections }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = useCallback((index) => {
    if (sections[index] && sections[index].current) {
      window.scrollTo({
        top: sections[index].current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [sections]);

  const handleScroll = useCallback((event) => {
    const delta = event.deltaY;
    const newIndex = delta > 0
      ? Math.min(currentSectionIndex + 1, sections.length - 1)
      : Math.max(currentSectionIndex - 1, 0);

    if (newIndex !== currentSectionIndex) {
      setCurrentSectionIndex(newIndex);
      scrollToSection(newIndex);
    }
  }, [currentSectionIndex, sections, scrollToSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return null; 
};

export default ScrollHandler;
