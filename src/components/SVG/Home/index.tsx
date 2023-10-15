import { ILikeIconProps } from '@appTypes';
import { colors } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Container } from './styled';

const HomeIconComponent: FC<ILikeIconProps> = ({ isActive = false, onClick }) => {
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
      <svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
        <g id='home outline'>
          <mask id='mask0_1_202' maskUnits='userSpaceOnUse' x='0' y='0' width='28' height='28'>
            <rect id='Rectangle 5' width='28' height='28' fill={fillColor} />
          </mask>
          <g mask='url(#mask0_1_202)'>
            <g id='Vector'>
              <path
                d='M26.0287 8.80248L14.2418 2.43831C13.9817 2.29831 13.6702 2.29831 13.41 2.43831L1.62551 8.80248C1.20085 9.03232 1.04218 9.56315 1.27202 9.98898C1.42952 10.2806 1.73168 10.4475 2.04202 10.4475C2.18202 10.4475 2.32552 10.4125 2.45735 10.3425L3.40818 9.82914L5.30868 23.261C5.55835 24.6785 6.83468 25.6666 8.40968 25.6666H19.2387C20.816 25.6666 22.0912 24.6773 22.3455 23.2318L24.2425 9.82681L25.1968 10.3425C25.6215 10.5676 26.1535 10.4125 26.3833 9.98781C26.612 9.56431 26.4533 9.03348 26.0287 8.80248ZM20.6177 22.9576C20.4928 23.6646 19.7975 23.9166 19.241 23.9166H8.41202C7.85202 23.9166 7.15785 23.6646 7.03768 22.9856L5.05201 8.94248L13.8253 4.20348L22.601 8.94014L20.6177 22.9576Z'
                fill={theme === 'light' ? colors.black : '#fff'}
              />
              <path
                d='M9.41532 14.1854C9.41532 16.6168 11.3928 18.5954 13.8253 18.5954C16.2578 18.5954 18.2353 16.6168 18.2353 14.1854C18.2353 11.7541 16.2578 9.77544 13.8253 9.77544C11.3928 9.77544 9.41532 11.7541 9.41532 14.1854ZM16.4853 14.1854C16.4853 15.6531 15.293 16.8454 13.8253 16.8454C12.3577 16.8454 11.1653 15.6531 11.1653 14.1854C11.1653 12.7178 12.3577 11.5254 13.8253 11.5254C15.293 11.5254 16.4853 12.7178 16.4853 14.1854Z'
                fill={theme === 'light' ? colors.black : '#fff'}
              />
            </g>
          </g>
        </g>
      </svg>
    </Container>
  );
};

export const HomeIcon = memo(HomeIconComponent);
