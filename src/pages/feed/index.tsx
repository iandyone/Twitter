import { BurgerMenu } from '@components/BurgerMenu';
import { Feed } from '@components/Feed';
import { Header } from '@components/Header';
import { TweetArea } from '@components/TweetArea';
import { AppRoutes } from '@constants';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setUserPosts } from '@store/reducers/posts';
import { PageContainer } from '@styles';
import { FC, useCallback, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const { HOME } = AppRoutes;

export const FeedPage: FC = () => {
  const { isAuthorized, uid } = useSelectorTyped((store) => store.user);
  const { posts } = useSelectorTyped((store) => store.posts);
  const { theme } = useSelectorTyped((store) => store.app);
  const navigate = useNavigate();
  const dispatch = useDispatchTyped();

  const getCurrentUserPosts = useCallback(async () => {
    const userPosts = await firebaseDB.getUserPosts(uid);
    dispatch(setUserPosts(userPosts));
  }, [dispatch, uid]);

  useEffect(() => {
    if (!isAuthorized) navigate(HOME);
  });

  useLayoutEffect(() => {
    if (!isAuthorized) navigate(HOME);
  });

  useEffect(() => {
    getCurrentUserPosts();
  }, [uid, getCurrentUserPosts]);

  return (
    <PageContainer data-testid='feed-page' data-theme={theme}>
      <Header title='Home' />
      <TweetArea />
      <Feed posts={posts} />
      <BurgerMenu />
    </PageContainer>
  );
};
