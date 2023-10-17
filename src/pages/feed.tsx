import { BurgerMenu } from '@components/BurgerMenu';
import { Feed } from '@components/Feed';
import { Header } from '@components/Header';
import { TweetArea } from '@components/TweetArea';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setUserPosts } from '@store/reducers/posts';
import { PageContainer } from '@styles';
import { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const FeedPage: FC = () => {
  const { isAuthorized, uid } = useSelectorTyped((store) => store.user);
  const { all: feedPosts } = useSelectorTyped((store) => store.posts);
  const { theme } = useSelectorTyped((store) => store.app);
  const navigate = useNavigate();
  const dispatch = useDispatchTyped();

  const getCurrentUserPosts = useCallback(async () => {
    const userPosts = await firebaseDB.getUserPosts(uid);
    dispatch(setUserPosts(userPosts));
  }, [dispatch, uid]);

  useEffect(() => {
    if (!isAuthorized) {
      navigate(AppRoutes.HOME);
    }
  });

  useEffect(() => {
    getCurrentUserPosts();
  }, [dispatch, uid, getCurrentUserPosts]);

  return (
    <PageContainer data-testid='feed-page' className={theme}>
      <Header title='Home' />
      <TweetArea />
      <Feed posts={feedPosts} />
      <BurgerMenu />
    </PageContainer>
  );
};
