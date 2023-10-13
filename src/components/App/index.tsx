import { Layout } from '@components/Layout';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { FeedPage } from '@pages/feed';
import { HomePage } from '@pages/home';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { SignInPage } from '@pages/signIn';
import { SignUpPage } from '@pages/signUp';
import { setMobileMenu, setSelectDay, setSelectMonth, setSelectYear } from '@store/reducers/app';
import { setFeedPosts } from '@store/reducers/posts';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { DataSnapshot, onChildAdded } from 'firebase/database';
import { FC, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { databaseRefs } from '../../../firebase';

export const Wrapper = styled.section``;

export const App: FC = () => {
  const {
    burger,
    selectDay,
    selectMonth,
    selectYear,
    theme: currentTheme,
  } = useSelectorTyped((store) => store.app);

  const dispatch = useDispatchTyped();

  function handlerOnClickApp() {
    if (burger) dispatch(setMobileMenu(false));
    if (selectDay) dispatch(setSelectDay(false));
    if (selectMonth) dispatch(setSelectMonth(false));
    if (selectYear) dispatch(setSelectYear(false));
  }

  const handlerChildAddedPosts = useCallback(
    (data: DataSnapshot) => {
      dispatch(setFeedPosts(data.val()));
    },
    [dispatch],
  );

  useEffect(() => {
    const { posts } = databaseRefs;
    onChildAdded(posts, handlerChildAddedPosts);
  }, [handlerChildAddedPosts]);

  return (
    <Wrapper onClick={handlerOnClickApp} id='wrapper'>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyles />
        <Routes>
          <Route path={AppRoutes.HOME} element={<HomePage />} />
          <Route path={AppRoutes.SIGNIN} element={<SignInPage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.REGISTRATION} element={<SignUpPage />} />
          <Route path='/page' element={<Layout />}>
            <Route path={AppRoutes.page.FEED} element={<FeedPage />} />
            <Route path={AppRoutes.page.PROFILE} element={<ProfilePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Wrapper>
  );
};
