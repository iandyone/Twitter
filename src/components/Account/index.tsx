import userAvatar from '@assets/icons/avatar.svg';
import { useDispatchTyped } from '@hooks/redux';
import { logoutUser } from '@store/reducers/user';
import { UserAvatar, UserData, UserEmail, UserInfo, UserName } from '@styles';
import { FC, memo } from 'react';

import { Container, LogOutButton } from './styled';
import { IAccountProps } from './types';

const AccountComponent: FC<IAccountProps> = ({ userName, userEmail, avatar, withLogout = true }) => {
  const dispatch = useDispatchTyped();

  function handlerOnLogOut() {
    dispatch(logoutUser());
  }

  return (
    <Container data-testid='account'>
      <UserData>
        <UserAvatar src={avatar ?? userAvatar} />
        <UserInfo>
          <UserName data-testid='account-name'>{userName}</UserName>
          <UserEmail data-testid='account-email'>{userEmail}</UserEmail>
        </UserInfo>
      </UserData>
      {withLogout && (
        <LogOutButton onClick={handlerOnLogOut} data-testid='account-button-logout'>
          Log out
        </LogOutButton>
      )}
    </Container>
  );
};

export const Account = memo(AccountComponent);
