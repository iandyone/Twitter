import { AppRoutes } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const ProfilePage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(AppRoutes.HOME);
    }
  });

  return (
    <>
      <div>Profile</div>
      <Link to={AppRoutes.HOME}>Home</Link>
      <Link to={AppRoutes.page.FEED}>Feed</Link>
    </>
  );
};
