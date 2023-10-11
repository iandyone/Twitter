import { FC, memo, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const [container] = useState<HTMLElement>(getInitialState);

  function getInitialState() {
    const container = document.createElement('div');
    return container;
  }

  useEffect(() => {
    const appElement = document.querySelector('#wrapper');
    appElement.appendChild(container);

    return () => {
      appElement.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default memo(Portal);
