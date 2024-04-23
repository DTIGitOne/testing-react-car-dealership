import React, { useEffect } from 'react';

function ScrollToTopBottom() {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY < 0) { // Scrolling up
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else { // Scrolling down
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollToTopBottom;