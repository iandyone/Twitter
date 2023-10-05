import { AppRoutes } from '@appTypes/enums';
import { useSelectorTyped } from '@hooks/redux';
import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const FeedPage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      alert('Not Authorized');
      navigate(AppRoutes.HOME);
    }
  });

  return (
    <>
      <div>Feed Page</div>
      <Link to={AppRoutes.HOME}>Home</Link>
      <Link to={AppRoutes.PROFILE}>Profile</Link>
    </>
  );
};
