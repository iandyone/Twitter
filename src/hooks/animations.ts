import { Theme } from '@appTypes/types';
import { defaultColors } from '@constants';
import { useEffect, useState } from 'react';

import { useSelectorTyped } from './redux';

export const useFillColor = (fillColors = defaultColors) => {
  const { theme } = useSelectorTyped((store) => store.app);
  const [fillColor, setFillColor] = useState(getStartFillColor);

  function getStartFillColor() {
    return getFillColor(theme, fillColors);
  }

  useEffect(() => {
    const fillColor = getFillColor(theme, fillColors);

    setFillColor(fillColor);
  }, [theme, fillColors]);

  return fillColor;
};

function getFillColor(theme: Theme, fillColors = defaultColors, isActive = false) {
  const { dark, light, active } = fillColors;

  if (isActive) return active;

  return theme === 'light' ? dark : light;
}
