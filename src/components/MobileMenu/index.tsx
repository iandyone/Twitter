import { Account } from '@components/Account';
import { SearchBar } from '@components/SearchBar';
import { SideMenu } from '@components/SideMenu';
import { useSelectorTyped } from '@hooks/redux';
import { FC } from 'react';

import { AccountContainer, MenuContent, MenuOption } from './styled';
import { IMobileMenuProps } from './types';

export const MobileMenu: FC<IMobileMenuProps> = ({ isMenuOpened }) => {
  const { uid, email } = useSelectorTyped((store) => store.user);
  return (
    <MenuContent $isOpen={isMenuOpened}>
      <MenuOption>
        <SideMenu />
        <SearchBar />
        <AccountContainer>
          <Account userName={uid} userEmail={email} />
        </AccountContainer>
      </MenuOption>
    </MenuContent>
  );
};
