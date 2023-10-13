import { BurgerMenu } from '@components/BurgerMenu';
import { Feed } from '@components/Feed';
import { Header } from '@components/Header';
import { ProfileHeader } from '@components/ProfileHeader';
import { TweetArea } from '@components/TweetArea';
import { AppRoutes } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { PageContainer, SubHeader } from '@styles';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const { currentUser } = useSelectorTyped((store) => store.posts);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(AppRoutes.HOME);
    }
  });

  return (
    <PageContainer>
      <Header title='Profile' />
      <BurgerMenu />
      <ProfileHeader />
      <TweetArea />
      <SubHeader>Tweets</SubHeader>
      <Feed posts={currentUser} />
    </PageContainer>
  );
};
