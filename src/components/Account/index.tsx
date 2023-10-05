import avatar from '@assets/icons/avatar.svg';
import { useDispatchTyped } from '@hooks/redux';
import { logoutUser } from '@store/reducers/user';
import { UserAvatar, UserData, UserEmail, UserInfo, UserName } from '@styles';
import { FC } from 'react';

import { Container, LogOutButton } from './styled';
import { IAccountProps } from './types';

export const Account: FC<IAccountProps> = ({ userName, userEmail, withLogout = true }) => {
  const dispatch = useDispatchTyped();

  function handlerOnLogOut() {
    dispatch(logoutUser());
  }

  return (
    <Container>
      <UserData>
        <UserAvatar src={avatar} />
        <UserInfo>
          <UserName>{userName}</UserName>
          <UserEmail>{userEmail}</UserEmail>
        </UserInfo>
      </UserData>
      {withLogout && <LogOutButton onClick={handlerOnLogOut}>Log out</LogOutButton>}
    </Container>
  );
};
