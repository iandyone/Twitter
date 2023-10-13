import userAvatar from '@assets/icons/avatar.svg';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { logoutUser } from '@store/reducers/user';
import { UserAvatar, UserData, UserEmail, UserInfo, UserName } from '@styles';
import { FC, memo } from 'react';

import { Container, LogOutButton } from './styled';
import { IAccountProps } from './types';

const AccountComponent: FC<IAccountProps> = ({ userName, userEmail, withLogout = true }) => {
  const dispatch = useDispatchTyped();
  const { avatar, name } = useSelectorTyped((store) => store.user);

  function handlerOnLogOut() {
    dispatch(logoutUser());
  }

  return (
    <Container>
      <UserData>
        <UserAvatar src={avatar ?? userAvatar} />
        <UserInfo>
          <UserName>{name ?? userName}</UserName>
          <UserEmail>{userEmail}</UserEmail>
        </UserInfo>
      </UserData>
      {withLogout && <LogOutButton onClick={handlerOnLogOut}>Log out</LogOutButton>}
    </Container>
  );
};

export const Account = memo(AccountComponent);
