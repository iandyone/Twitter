import { SearchBar } from '@components/SearchBar';
import { SideMenu } from '@components/SideMenu';
import { useMobile } from '@hooks/other';
import { AppContainer, PageWrapper } from '@styles';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Body, Main } from './style';

export const Layout: FC = () => {
  const isMobileView = useMobile();

  return (
    <PageWrapper>
      <AppContainer>
        <Body>
          {!isMobileView && <SideMenu />}
          <Main>
            <Outlet />
          </Main>
          {!isMobileView && <SearchBar />}
        </Body>
      </AppContainer>
    </PageWrapper>
  );
};
