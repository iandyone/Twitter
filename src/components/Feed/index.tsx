import { FC, memo } from 'react';

import { Post } from './Post';
import { Container, List } from './styled';
import { IFeedProps } from './types';

const FeedComponent: FC<IFeedProps> = ({ posts }) => {
  return (
    <Container>
      <List>
        {posts.map((post) => (
          <Post post={post} key={post.body} />
        ))}
      </List>
    </Container>
  );
};

export const Feed = memo(FeedComponent);
