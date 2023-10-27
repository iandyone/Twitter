import { BurgerMenu } from '@components/BurgerMenu';
import { Feed } from '@components/Feed';
import { Header } from '@components/Header';
import { Profile } from '@components/ProfileHeader';
import { TweetArea } from '@components/TweetArea';
import { AppRoutes } from '@constants';
import { useSelectorTyped } from '@hooks/redux';
import { PageContainer, SubHeader } from '@styles';
import { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { HOME } = AppRoutes;

export const ProfilePage: FC = () => {
  const { isAuthorized, uid } = useSelectorTyped((store) => store.user);
  const { posts } = useSelectorTyped((store) => store.posts);
  const getUserPosts = useCallback(() => {
    return posts.filter((post) => post.user === uid);
  }, [uid, posts]);

  const navigate = useNavigate();
  const [feed, setFeed] = useState(getUserPosts);

  useLayoutEffect(() => {
    if (!isAuthorized) navigate(HOME);
  });

  useEffect(() => {
    setFeed(getUserPosts());
  }, [posts, getUserPosts]);

  return (
    <PageContainer data-testid='profile-page'>
      <Header title='Profile' />
      <BurgerMenu />
      <Profile />
      <TweetArea />
      {feed.length !== 0 && (
        <>
          <SubHeader>Tweets</SubHeader>
          <Feed posts={feed} />
        </>
      )}
    </PageContainer>
  );
};
