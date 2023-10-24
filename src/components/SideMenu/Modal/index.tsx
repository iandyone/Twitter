import { Popup } from '@components/Popup';
import { TweetArea } from '@components/TweetArea';
import { FC } from 'react';

import { data } from './config';
import { Container, Title } from './styled';

export const TweetPopup: FC = () => {
  const { title } = data;

  return (
    <Popup>
      <Container data-testid='tweet-popup'>
        <Title>{title}</Title>
        <TweetArea />
      </Container>
    </Popup>
  );
};
