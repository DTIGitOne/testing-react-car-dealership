import React, { useState, useEffect } from 'react';
import SouthIcon from '@mui/icons-material/South';

function ScrollForMore() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setIsTop(currentScrollPos === 0); // Check if the user is at the top of the page
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' h-20 w-full justify-center items-center p-1 text-5xl flex-col' style={{position: 'fixed', bottom: 10, right: 10, display: isTop ? 'flex' : 'none' }}>
      <div>
      Scroll for Details
      </div>
      <SouthIcon fontSize='large'/>
    </div>
  );
}

export default ScrollForMore;
