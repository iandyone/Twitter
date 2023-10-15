import { Theme } from '@appTypes/types';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setTheme } from '@store/reducers/app';
import { FC } from 'react';

import { Switcher, Toggler } from './styled';

export const ThemeButton: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  }

  return (
    <Switcher onClick={handlerOnClick} data-testid='theme-switcher'>
      <Toggler $theme={theme} data-testid='theme-toggler' />
    </Switcher>
  );
};
