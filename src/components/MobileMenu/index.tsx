import { Account } from '@components/Account';
import { SearchBar } from '@components/SearchBar';
import { SideMenu } from '@components/SideMenu';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo } from 'react';

import { AccountContainer, MenuContent, MenuOption } from './styled';
import { IMobileMenuProps } from './types';

const MobileMenuComponent: FC<IMobileMenuProps> = ({ isMenuOpened }) => {
  const { uid, email, name } = useSelectorTyped((store) => store.user);

  return (
    <MenuContent $isOpen={isMenuOpened}>
      <MenuOption>
        <SideMenu />
        <SearchBar />
        <AccountContainer>
          <Account userName={name ?? uid} userEmail={email} />
        </AccountContainer>
      </MenuOption>
    </MenuContent>
  );
};

export const MobileMenu = memo(MobileMenuComponent);
