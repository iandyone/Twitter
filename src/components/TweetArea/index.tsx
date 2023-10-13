import { IPost } from '@appTypes';
import userAvatar from '@assets/icons/avatar.svg';
import pictureIcon from '@assets/icons/image.svg';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setTweetPopup } from '@store/reducers/app';
import { setUserPosts } from '@store/reducers/posts';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useState } from 'react';

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
  const { email, uid } = useSelectorTyped((store) => store.user);
  const { avatar, name } = useSelectorTyped((store) => store.user);
  const dispatch = useDispatchTyped();

  function handlerOnClickSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const post: IPost = {
      id: Math.random(),
      body: tweet,
      user: uid,
      authorAvatar: avatar ?? null,
      authName: name ?? null,
      likes: null,
      email,
    };

    firebaseDB.addPost(post);
    getCurrentUserPosts();

    setTweet('');
    dispatch(setTweetPopup(false));
  }

  function handlerOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value.length <= 250) {
      setTweet(value);
    }
  }

  const getCurrentUserPosts = useCallback(async () => {
    const userPosts = await firebaseDB.getUserPosts(uid);
    dispatch(setUserPosts(userPosts));
  }, [dispatch, uid]);

  return (
    <Container onSubmit={handlerOnClickSubmit}>
      <Avatar src={avatar ?? userAvatar} />
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
