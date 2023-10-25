import { FC, memo } from 'react';

import { Post } from './Post';
import { IFeedProps } from './types';

const FeedComponent: FC<IFeedProps> = ({ posts }) => {
  return (
    <ul>
      <li>{posts && posts.map((post) => <Post post={post} key={String(post.timestamp)} />)}</li>
    </ul>
  );
};

export const Feed = memo(FeedComponent);
