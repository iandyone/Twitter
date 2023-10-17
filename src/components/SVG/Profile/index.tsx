import { IIconComponentProps } from '@appTypes';
import { colors } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Container } from './styled';

const ProfileIconComponent: FC<IIconComponentProps> = ({ isActive = false, onClick }) => {
  const { theme } = useSelectorTyped((store) => store.app);

  function handlerOnClick() {
    if (onClick) onClick();
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
      <svg width='28' height='28' viewBox='0 0 28 28' fill={fillColor}>
        <g id='profile fill'>
          <mask id='mask0_1187_220' maskUnits='userSpaceOnUse' x='0' y='0' width='28' height='28'>
            <rect id='Rectangle 9' width='28' height='28' fill={fillColor} />
          </mask>
          <g mask='url(#mask0_1187_220)'>
            <path
              id='Vector'
              d='M13.9702 14.1878C12.3882 14.1878 10.6196 14.0128 9.49023 12.7225C8.54056 11.6375 8.23373 9.95984 8.55107 7.59851C8.9944 4.30151 11.0197 2.33334 13.9714 2.33334C16.9231 2.33334 18.9496 4.30151 19.3917 7.59851C19.7091 9.95984 19.4011 11.6352 18.4514 12.7225C17.3197 14.0128 15.5522 14.1867 13.9714 14.1867L13.9702 14.1878ZM20.7941 25.6795H7.1464C6.3729 25.6795 5.68807 25.3528 5.2214 24.7625C4.72907 24.1395 4.5494 23.2808 4.74307 22.4665C5.71607 18.3482 9.51006 15.47 13.9691 15.47C18.4281 15.47 22.2221 18.347 23.1974 22.4665C23.3887 23.2808 23.2091 24.1395 22.7167 24.7613C22.2501 25.3505 21.5676 25.6772 20.7941 25.6772V25.6795Z'
              fill={fillColor}
            />
          </g>
        </g>
      </svg>
    </Container>
  );
};

export const ProfileIcon = memo(ProfileIconComponent);
