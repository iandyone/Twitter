import { Popup } from '@components/Popup';
import { TweetArea } from '@components/TweetArea';
import { FC } from 'react';

import { data } from './config';
import { Container, Title } from './styled';

const { title } = data;

export const TweetPopup: FC = () => {
  return (
    <Popup>
      <Container data-testid='tweet-popup'>
        <Title>{title}</Title>
        <TweetArea />
      </Container>
    </Popup>
  );
};
