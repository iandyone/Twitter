import { Viewports } from '@appTypes/enums';
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

  return width < Viewports.TABLET;
};
