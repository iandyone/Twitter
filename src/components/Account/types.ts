import { IUserProps } from '@appTypes';

export interface IAccountProps extends IUserProps {
  withLogout?: boolean;
}
