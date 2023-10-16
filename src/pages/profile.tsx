import { BurgerMenu } from '@components/BurgerMenu';
import { Feed } from '@components/Feed';
import { Header } from '@components/Header';
import { Profile } from '@components/ProfileHeader';
import { TweetArea } from '@components/TweetArea';
import { AppRoutes } from '@constants/variables';
import { useSelectorTyped } from '@hooks/redux';
import { PageContainer, SubHeader } from '@styles';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage: FC = () => {
  const { isAuthorized, uid } = useSelectorTyped((store) => store.user);
  const { all } = useSelectorTyped((store) => store.posts);
  const getUserPosts = useCallback(() => {
    return all.filter((post) => post.user === uid);
  }, [uid, all]);

  const navigate = useNavigate();
  const [posts, setPosts] = useState(getUserPosts);

  useEffect(() => {
    if (!isAuthorized) navigate(AppRoutes.HOME);
  });

  useEffect(() => {
    setPosts(getUserPosts());
  }, [all, getUserPosts]);

  return (
    <PageContainer>
      <Header title='Profile' />
      <BurgerMenu />
      <Profile />
      <TweetArea />
      {posts.length !== 0 && (
        <>
          <SubHeader>Tweets</SubHeader>
          <Feed posts={posts} />
        </>
      )}
    </PageContainer>
  );
};
