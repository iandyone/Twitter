import { databaseRefs } from '@config/firebase';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setMobileMenu, setSelectDay, setSelectMonth, setSelectYear } from '@store/reducers/app';
import { removePost, setFeedPosts } from '@store/reducers/posts';
import { GlobalStyles } from '@styles';
import { theme } from '@styles/theme';
import { DataSnapshot, onChildAdded, onChildRemoved } from 'firebase/database';
import { FC, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { routes } from './config';

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
    if (selectYear) dispatch(setSelectYear(false));
  }

  const handlerChildAddedPosts = useCallback((data: DataSnapshot) => {
    dispatch(setFeedPosts(data.val()));
  }, []);

  const handlerOnPostRemoved = useCallback((data: DataSnapshot) => {
    const removedPost = data.val();
    dispatch(removePost(removedPost));
  }, []);

  useEffect(() => {
    const { posts } = databaseRefs;
    onChildAdded(posts, handlerChildAddedPosts);
    onChildRemoved(posts, handlerOnPostRemoved);
  }, [handlerChildAddedPosts, handlerOnPostRemoved]);

  return (
    <div onClick={handlerOnClickApp} id='wrapper'>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyles />
        <Routes>
          {routes.map(({ element, path, children }, index) => (
            <Route key={index} path={path} element={element}>
              {children &&
                children.map(({ element: childrenElement, path: childrenPath }, childIndex) => (
                  <Route key={childIndex} path={childrenPath} element={childrenElement} />
                ))}
            </Route>
          ))}
        </Routes>
      </ThemeProvider>
    </div>
  );
};
