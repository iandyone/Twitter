import { IIconComponentProps } from '@appTypes';
import { colors } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Container } from './styled';

const SearchIconComponent: FC<IIconComponentProps> = ({ isActive = false }) => {
  const { theme } = useSelectorTyped((store) => store.app);

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
    <Container>
      <svg width='24' height='24' viewBox='0 0 24 24' fill={fillColor}>
        <g id='search'>
          <mask id='mask0_375_724' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
            <rect id='Rectangle 9' width='24' height='24' fill={fillColor} />
          </mask>
          <g mask='url(#mask0_375_724)'>
            <path
              id='Vector'
              d='M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z'
              fill={fillColor}
            />
          </g>
        </g>
      </svg>
    </Container>
  );
};

export const SearchIcon = memo(SearchIconComponent);
