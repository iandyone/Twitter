import { IFooterLink } from '@appTypes';
import searchIcon from '@assets/icons/search.svg';
import { Account } from '@components/Account';
import { AppRoutes } from '@constants/variables';
import { useMobile } from '@hooks/other';
import { useSelectorTyped } from '@hooks/redux';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, Footer, Input, Results, Search, SearchIcon, Title, Wrapper } from './styled';

export const SearchBar: FC = () => {
  const { uid, email } = useSelectorTyped((store) => store.user);
  const isMobileView = useMobile();

  const links: IFooterLink[] = [
    { text: 'Terms of Service', to: AppRoutes.HOME },
    { text: 'Cookie Policy', to: AppRoutes.HOME },
    { text: 'Imprint', to: AppRoutes.HOME },
    { text: 'Ads Info', to: AppRoutes.HOME },
    { text: 'Vacancy', to: AppRoutes.HOME },
    { text: 'About', to: AppRoutes.HOME },
    { text: 'Privacy Policy', to: AppRoutes.HOME },
    { text: '© 2023 Twitter, Inc.', to: AppRoutes.HOME },
  ];

  return (
    <Wrapper>
      <Container>
        <Search>
          <SearchIcon src={searchIcon} />
          <Input placeholder='Search Twitter' />
        </Search>
        <Results>
          <Title>Search results</Title>
          <Account userName={uid} userEmail={email} withLogout={false} />
        </Results>
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
