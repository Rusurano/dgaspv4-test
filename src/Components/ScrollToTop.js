import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const goTop = (e = false) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
		if(e) e.preventDefault();
  };

  const handleScroll = () => {
    const scrollDepth  = window.scrollY;

    setShowScroll(scrollDepth > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll, true);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);

  return (
    <button className={`backToTopButton${showScroll ? ' show' : ''}`} onClick={goTop}>
      <FontAwesomeIcon icon={faAngleUp} size="2x" />
    </button>
  );
}

export default ScrollToTop;