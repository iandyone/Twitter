import userAvatar from '@assets/icons/avatar.svg';
import pictureIcon from '@assets/icons/image.svg';
import { ChangeEvent, FC, FormEvent, memo, useState } from 'react';

import {
  Avatar,
  Buttons,
  Container,
  Content,
  Input,
  PictureButton,
  PictureButtonIcon,
  SubmitButton,
} from './styled';

const TweetAreaComponent: FC = () => {
  const [tweet, setTweet] = useState('');

  function handlerOnClickSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handlerOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setTweet(value);
  }

  return (
    <Container onSubmit={handlerOnClickSubmit}>
      <Avatar src={userAvatar} />
      <Content>
        <Input placeholder='What`s happening' value={tweet} onChange={handlerOnChange} />
        <Buttons>
          <PictureButton>
            <PictureButtonIcon src={pictureIcon} />
          </PictureButton>
          <SubmitButton type='submit'>Tweet</SubmitButton>
        </Buttons>
      </Content>
    </Container>
  );
};

export const TweetArea = memo(TweetAreaComponent);
