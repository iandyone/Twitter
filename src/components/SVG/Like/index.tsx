import { ILikeIconProps } from '@appTypes';
import { colors } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Container } from './styled';

const LikeIconComponent: FC<ILikeIconProps> = ({ isActive = false, onClick }) => {
  const { theme } = useSelectorTyped((store) => store.app);

  function handlerOnClick() {
    onClick();
  }

  const getFillColor = useCallback(() => {
    const { white, black, red } = colors;

    if (isActive) {
      return red;
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
      <svg width='24' height='24' viewBox='0 0 24 24' fill={fillColor}>
        <g id='like'>
          <mask id='mask0_1265_138' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
            <rect id='Rectangle 9' width='24' height='24' fill={fillColor} />
          </mask>
          <g mask='url(#mask0_1265_138)'>
            <path
              id='Vector'
              d='M12.05 21.914H12.036C9.453 21.866 2 15.132 2 8.754C2 5.69 4.525 3 7.403 3C9.693 3 11.233 4.58 12.049 5.73C12.863 4.582 14.403 3 16.694 3C19.574 3 22.098 5.69 22.098 8.755C22.098 15.131 14.644 21.865 12.061 21.912H12.05V21.914ZM7.404 4.501C5.324 4.501 3.501 6.489 3.501 8.756C3.501 14.496 10.535 20.352 12.051 20.414C13.569 20.352 20.601 14.497 20.601 8.756C20.601 6.489 18.778 4.501 16.698 4.501C14.17 4.501 12.758 7.437 12.746 7.466C12.516 8.028 11.59 8.028 11.359 7.466C11.345 7.436 9.93401 4.501 7.40501 4.501H7.404Z'
              fill={fillColor}
            />
          </g>
        </g>
      </svg>
    </Container>
  );
};

export const LikeIcon = memo(LikeIconComponent);
