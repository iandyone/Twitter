import { SignIn } from '@components/SignIn';
import { AppRoutes } from '@constants';
import { useSelectorTyped } from '@hooks/redux';
import { FC, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const { SIGNIN, page } = AppRoutes;
const { FEED } = page;

export const HomePage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate(isAuthorized ? FEED : SIGNIN);
  });

  return <SignIn />;
};
