import { FC, memo } from 'react';

import { Post } from './Post';
import { Container, List } from './styled';
import { IFeedProps } from './types';

const FeedComponent: FC<IFeedProps> = ({ posts }) => {
  return (
    <Container>
      <List>{posts && posts.map((post) => <Post post={post} key={String(post.timestamp)} />)}</List>
    </Container>
  );
};

export const Feed = memo(FeedComponent);
