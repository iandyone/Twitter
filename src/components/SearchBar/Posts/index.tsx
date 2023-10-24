import { Account } from '@components/Account';
import { FC, memo } from 'react';

import { IPostsProps } from './types';

const PostsComponent: FC<IPostsProps> = ({ posts }) => {
  return (
    <>
      {posts?.map(({ body, authorAvatar, user, authName, email }) => (
        <Account
          userName={authName ?? user}
          userEmail={email}
          withLogout={false}
          key={body + authName}
          avatar={authorAvatar}
          post={body}
        />
      ))}
    </>
  );
};

export const Posts = memo(PostsComponent);
