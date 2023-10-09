import { FC, memo } from 'react';
import styled from 'styled-components';

import { Post } from './Post';
import { IFeedProps } from './types';

export const Container = styled.div``;

export const List = styled.ul``;

const FeedComponent: FC<IFeedProps> = ({ posts }) => {
  return (
    <Container>
      <List>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </List>
    </Container>
  );
};

export const Feed = memo(FeedComponent);
