import { Popup } from '@components/Popup';
import { TweetArea } from '@components/TweetArea';
import { FC } from 'react';

import { Container, Title } from './styled';

export const TweetPopup: FC = () => {
  return (
    <Popup>
      <Container>
        <Title>New Tweet</Title>
        <TweetArea />
      </Container>
    </Popup>
  );
};
