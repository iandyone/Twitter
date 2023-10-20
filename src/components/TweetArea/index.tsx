import { IPost } from '@appTypes';
import userAvatar from '@assets/icons/avatar.svg';
import pictureIcon from '@assets/icons/image.svg';
import removeIcon from '@assets/icons/trash.svg';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { setTweetPopup } from '@store/reducers/app';
import { setUserPosts } from '@store/reducers/posts';
import { ChangeEvent, FC, FormEvent, MouseEvent, useCallback, useRef, useState } from 'react';

import { data } from './config';
import {
  Avatar,
  Buttons,
  Container,
  Content,
  FileInput,
  ImageIcon,
  Input,
  MediaData,
  PictureButtonIcon,
  RemoveIcon,
  SubmitButton,
} from './styled';

export const TweetArea: FC = () => {
  const [tweet, setTweet] = useState('');
  const { email, uid, avatar, name } = useSelectorTyped((store) => store.user);
  const [media, setMedia] = useState<File>(null);
  const { buttonSubmitText } = data;
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

  function handlerOnResetMedia(e: MouseEvent<HTMLElement>) {
    clearMediaStash();
    e.preventDefault();
  }

  function clearMediaStash() {
    inputFileRef.current.value = null;
    setMedia(null);
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
      clearMediaStash();
      dispatch(setTweetPopup(false));

      setTweet('');
    }
  }

  return (
    <Container onSubmit={handlerOnClickSubmit} data-testid='tweet-area'>
      <Avatar src={avatar ?? userAvatar} />
      <Content>
        <Input
          placeholder='What`s happening'
          value={tweet}
          onChange={handlerOnChange}
          data-testid='tweet-input'
        />
        <Buttons>
          <ImageIcon htmlFor='media' data-testid='tweet-upload-media-label'>
            <PictureButtonIcon src={pictureIcon} />
            {media && (
              <>
                <MediaData data-testid='tweet-filename'>{media.name}</MediaData>
                <RemoveIcon
                  src={removeIcon}
                  onClick={handlerOnResetMedia}
                  data-testid='tweet-filename-remove-button'
                />
              </>
            )}
          </ImageIcon>
          <FileInput
            type='file'
            id='media'
            ref={inputFileRef}
            onChange={handlerOnChangeMedia}
            data-testid='tweet-upload-media-button'
          />
          <SubmitButton type='submit' data-testid='tweet-submit-button'>
            {buttonSubmitText}
          </SubmitButton>
        </Buttons>
      </Content>
    </Container>
  );
};
