import { IPost } from '@appTypes';
import userAvatar from '@assets/icons/avatar.svg';
import pictureIcon from '@assets/icons/image.svg';
import removeIcon from '@assets/icons/trash.svg';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setTweetPopup } from '@store/reducers/app';
import { setUserPosts } from '@store/reducers/posts';
import { ChangeEvent, FC, FormEvent, useCallback, useRef, useState } from 'react';

import {
  Avatar,
  Buttons,
  Container,
  Content,
  FileInput,
  ImageIcon,
  Input,
  MediaData,
  MediaDataContainer,
  PictureButtonIcon,
  RemoveIcon,
  SubmitButton,
} from './styled';

export const TweetArea: FC = () => {
  const [tweet, setTweet] = useState('');
  const { email, uid } = useSelectorTyped((store) => store.user);
  const { avatar, name } = useSelectorTyped((store) => store.user);
  const [media, setMedia] = useState<File>(null);
  const dispatch = useDispatchTyped();
  const inputFileRef = useRef(null);

  const getCurrentUserPosts = useCallback(async () => {
    const userPosts = await firebaseDB.getUserPosts(uid);
    dispatch(setUserPosts(userPosts));
  }, [dispatch, uid]);

  function handlerOnChangeMedia(e: ChangeEvent<HTMLInputElement>) {
    const mediaFile = e.target.files[0];
    setMedia(mediaFile);
  }

  function handlerOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value.length <= 250) {
      setTweet(value);
    }
  }

  async function handlerOnClickSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (tweet) {
      const postID = Math.random();
      const post: IPost = {
        id: postID,
        email,
        body: tweet,
        user: uid,
        authorAvatar: avatar ?? null,
        authName: name ?? null,
        likes: null,
        media: Boolean(media),
      };

      if (media) {
        await firebaseDB.uploadMedia(postID, media);
        inputFileRef.current.value = null;
      }

      await firebaseDB.addPost(post);

      getCurrentUserPosts();

      setTweet('');
      dispatch(setTweetPopup(false));
    }
  }

  return (
    <Container onSubmit={handlerOnClickSubmit}>
      <Avatar src={avatar ?? userAvatar} />
      <Content>
        <Input placeholder='What`s happening' value={tweet} onChange={handlerOnChange} />
        <Buttons>
          <ImageIcon htmlFor='media'>
            <PictureButtonIcon src={pictureIcon} />
            {media && (
              <MediaDataContainer>
                <MediaData>{media.name}</MediaData>
                <RemoveIcon src={removeIcon} />
              </MediaDataContainer>
            )}
          </ImageIcon>
          <FileInput type='file' id='media' ref={inputFileRef} onChange={handlerOnChangeMedia} />
          <SubmitButton type='submit'>Tweet</SubmitButton>
        </Buttons>
      </Content>
    </Container>
  );
};
