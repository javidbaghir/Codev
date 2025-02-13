import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToId = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1)); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToId;
