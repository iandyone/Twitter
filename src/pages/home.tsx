import { SignIn } from '@components/SignIn';
import { AppRoutes } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isAuthorized ? AppRoutes.page.FEED : AppRoutes.SIGNIN);
  });

  return <SignIn />;
};
