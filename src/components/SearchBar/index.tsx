import { IFooterLink, IPostDB, IUser } from '@appTypes';
import SearchIcon from '@assets/icons/search.svg?react';
import { AppRoutes, colors } from '@constants';
import { useFillColor } from '@hooks/animations';
import { useDebounce } from '@hooks/timers';
import { useMobile } from '@hooks/window';
import { firebaseDB } from '@services/database';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { data } from './config';
import { Posts } from './Posts';
import {
  Container,
  Footer,
  Input,
  Results,
  Search,
  SearchContainer,
  SearchIconContainer,
  Title,
  Wrapper,
} from './styled';
import { Users } from './Users';

export const SearchBar: FC = () => {
  const isMobileView = useMobile();
  const links = useMemo(getLinks, []);
  const [searchData, setSearchData] = useState('');
  const debouncedValue = useDebounce(searchData);
  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPostDB[]>([]);
  const { gray, white } = colors;
  const fillColor = useFillColor({ dark: gray, light: white });
  const location = useLocation();
  const { placeholderPosts, placeholderUsers } = data;

  const pathname = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);

  function getLinks(): IFooterLink[] {
    const currentYear = new Date().getFullYear();

    return [
      { text: 'Terms of Service', to: AppRoutes.HOME },
      { text: 'Cookie Policy', to: AppRoutes.HOME },
      { text: 'Imprint', to: AppRoutes.HOME },
      { text: 'Ads Info', to: AppRoutes.HOME },
      { text: 'Vacancy', to: AppRoutes.HOME },
      { text: 'About Twitter', to: AppRoutes.HOME },
      { text: 'Privacy Policy', to: AppRoutes.HOME },
      { text: `© ${currentYear} Twitter, Inc.`, to: AppRoutes.HOME },
    ];
  }

  const findUsers = useCallback(async () => {
    if (searchData.length > 0 && debouncedValue.length >= 2) {
      const users = await firebaseDB.getUsers(debouncedValue);
      if (users) {
        const userList: IUser[] = Object.values(users);
        setUsers(userList);
      }
      return;
    }
    setUsers([]);
  }, [debouncedValue, searchData]);

  const findPosts = useCallback(async () => {
    if (searchData.length > 0 && debouncedValue.length >= 2) {
      const posts = await firebaseDB.getPosts(searchData);
      if (posts) {
        const postsList: IPostDB[] = Object.values(posts);
        setPosts(postsList);
      }
      return;
    }
    setPosts([]);
  }, [searchData, debouncedValue]);

  const handlerOnChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  }, []);

  useEffect(() => {
    if (pathname === AppRoutes.page.FEED) {
      findUsers();
    }
    if (pathname === AppRoutes.page.PROFILE) {
      findPosts();
    }
  }, [debouncedValue, findUsers, findPosts, pathname]);

  useEffect(() => {
    setSearchData('');
    setUsers([]);
    setPosts([]);
  }, [pathname]);

  return (
    <Wrapper>
      <Container>
        <SearchContainer>
          <Search>
            <SearchIconContainer>
              <SearchIcon fill={fillColor} />
            </SearchIconContainer>
            <Input
              value={searchData}
              onChange={handlerOnChangeSearch}
              placeholder={pathname === AppRoutes.page.FEED ? placeholderUsers : placeholderPosts}
            />
          </Search>
          {(users.length > 0 || posts.length > 0) && (
            <Results>
              <Title>Search results</Title>
              <Users users={users} />
              <Posts posts={posts} />
            </Results>
          )}
        </SearchContainer>
        {!isMobileView && (
          <Footer>
            {links.map(({ text, to }) => (
              <Link to={to} key={text}>
                {text}
              </Link>
            ))}
          </Footer>
        )}
      </Container>
    </Wrapper>
  );
};
