import { BurgerMenu } from '@components/BurgerMenu';
import { Feed } from '@components/Feed';
import { Header } from '@components/Header';
import { TweetArea } from '@components/TweetArea';
import { AppRoutes, mockPosts } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { PageContainer } from '@styles';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const FeedPage: FC = () => {
  const { isAuthorized } = useSelectorTyped((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(AppRoutes.HOME);
    }
  });

  return (
    <PageContainer>
      <Header title='Home' />
      <TweetArea />
      <Feed posts={mockPosts} />
      <BurgerMenu />
    </PageContainer>
  );
};
