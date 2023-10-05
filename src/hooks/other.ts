import { TABLET_VIEW } from '@constants/variables';
import { useEffect, useState } from 'react';

export const useMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width < TABLET_VIEW;
};
