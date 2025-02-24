import { useEffect, useState, useCallback } from 'react';

const ScrollHandler = ({ sections }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const scrollToSection = useCallback((index) => {
    sections[index].current.scrollIntoView({ behavior: 'smooth' });
    setCurrentSectionIndex(index);
  }, [sections]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((ref) => ref.current === entry.target);
          if (index !== -1) {
            setCurrentSectionIndex(index);
          }
        }
      });
    }, options);

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections]);

  useEffect(() => {
    const handleWheel = debounce((event) => {
      if (event.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else {
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    }, 170);

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (event.key === 'ArrowUp') {
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY;

      if (deltaY < -50) {
        // Swipe up
        if (currentSectionIndex < sections.length - 1) {
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (deltaY > 50) {
        // Swipe down
        if (currentSectionIndex > 0) {
          scrollToSection(currentSectionIndex - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSectionIndex, scrollToSection, sections]);

  return null;
};

export default ScrollHandler;