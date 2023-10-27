import { Account } from '@components/Account';
import { FC, memo } from 'react';

import { IUsersProps } from './types';

const UsersComponent: FC<IUsersProps> = ({ users }) => {
  return (
    <>
      {users.map(({ email, uid, name, avatar }) => (
        <Account userName={name ?? uid} userEmail={email} withLogout={false} key={uid} avatar={avatar} />
      ))}
    </>
  );
};

export const Users = memo(UsersComponent);
