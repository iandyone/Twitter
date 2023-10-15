import { ILikeIconProps } from '@appTypes';
import { colors } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Container } from './styled';

const XMarkIconComponent: FC<ILikeIconProps> = ({ isActive = false, onClick }) => {
  const { theme } = useSelectorTyped((store) => store.app);

  function handlerOnClick() {
    onClick();
  }

  const getFillColor = useCallback(() => {
    const { white, black, blue } = colors;

    if (isActive) {
      return blue;
    }

    if (theme === 'light') {
      return black;
    }

    if (theme === 'dark') {
      return white;
    }
  }, [isActive, theme]);

  const [fillColor, setFillColor] = useState(getFillColor);
  useEffect(() => {
    const fillColor = getFillColor();

    setFillColor(fillColor);
  }, [theme, getFillColor]);

  return (
    <Container onClick={handlerOnClick}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24px' height='24px'>
        <path
          fill={fillColor}
          d='M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z'
        />
      </svg>
    </Container>
  );
};

export const XMarkIcon = memo(XMarkIconComponent);
