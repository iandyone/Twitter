import { IFooterLink, IUser } from '@appTypes';
import { Account } from '@components/Account';
import { SearchIcon } from '@components/SVG/Search';
import { AppRoutes } from '@constants/variables';
import { useDebounce } from '@hooks/timers';
import { useMobile } from '@hooks/window';
import { firebaseDB } from '@services/database';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

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

export const SearchBar: FC = () => {
  const isMobileView = useMobile();
  const links = useMemo(getLinks, []);
  const [searchData, setSearchData] = useState('');
  const debouncedValue = useDebounce(searchData);
  const [users, setUsers] = useState<IUser[]>([]);

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

  const getUsers = useCallback(async () => {
    if (debouncedValue.length >= 2) {
      const users = await firebaseDB.getUsers(debouncedValue);
      if (users) {
        const userList: IUser[] = Object.values(users);

        setUsers(userList);
      }
      return;
    }
    setUsers([]);
  }, [debouncedValue]);

  const handlerOnChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData(value);
  }, []);

  useEffect(() => {
    getUsers();
  }, [debouncedValue, getUsers]);

  return (
    <Wrapper>
      <Container>
        <SearchContainer>
          <Search>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <Input value={searchData} onChange={handlerOnChangeSearch} placeholder='Search Twitters' />
          </Search>
          {users.length > 0 && (
            <Results>
              <Title>Search results</Title>
              {users.map(({ email, uid, name, avatar }) => (
                <Account
                  userName={name ?? uid}
                  userEmail={email}
                  withLogout={false}
                  key={uid}
                  avatar={avatar}
                />
              ))}
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
