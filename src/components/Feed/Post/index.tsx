import userAvatar from '@assets/icons/avatar.svg';
import { LikeIcon } from '@components/SVG/Like';
import { XMarkIcon } from '@components/SVG/XMark';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { updatePostLikes } from '@store/reducers/posts';
import { UserContact } from '@styles';
import { getDateData, getFormattedPostDate } from '@utils/helpers/date';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

import {
  Avatar,
  Body,
  Container,
  Content,
  Header,
  HeaderContent,
  LikeCounter,
  Likes,
  Media,
  MediaContainer,
  PostDate,
  User,
} from './styled';
import { IPostProps } from './types';

const PostComponent: FC<IPostProps> = ({ post }) => {
  const { uid } = useSelectorTyped((store) => store.user);
  const { user, email, body, authorAvatar, authName, likes, timestamp, media, id } = useMemo(getPostData, [
    post,
  ]);
  const [isLiked, setIsLiked] = useState(getLikeStatus);
  const [postLikes, setLikes] = useState(getPostLikes);
  const [postDate, setPostDate] = useState<string>(getPostDate);
  const [mediaURL, setMediaURL] = useState<string>(null);
  const isUserPost = useMemo(getIsuserPost, [user, uid]);
  const dispatch = useDispatchTyped();

  function getIsuserPost() {
    return user === uid;
  }

  const downloadPostMedia = useCallback(async () => {
    if (media) {
      const data = await firebaseDB.downloadMedia(id);
      setMediaURL(data);

      return data;
    }
  }, [id, media]);

  function getPostDate() {
    return getFormattedPostDate(timestamp as number);
  }

  function getPostData() {
    const { timestamp } = post;
    const dateData = getDateData(new Date(timestamp as number));

    return { ...post, ...dateData, timestamp };
  }

  function getLikeStatus() {
    if (Array.isArray(likes)) {
      return likes && likes.includes(uid);
    }
  }

  function getPostLikes() {
    if (typeof likes === 'number') {
      return likes;
    }

    if (likes) {
      return likes.length;
    }

    return 0;
  }

  async function handlerOnLikePost() {
    const likesList = await firebaseDB.setPostLike(post, uid);
    setIsLiked(!isLiked);
    setLikes(likesList.length);
    dispatch(updatePostLikes({ likes: likesList, postID: post.id }));
  }

  async function handlerOnRemovePost() {
    firebaseDB.removePost(post);

    if (media) {
      firebaseDB.removeMedia(id);
    }
  }

  useEffect(() => {
    downloadPostMedia();
  }, [downloadPostMedia]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setPostDate(getPostDate());
    }, 1000);

    return () => clearInterval(intervalID);
  });

  return (
    <Container>
      <Avatar src={authorAvatar ?? userAvatar} />
      <Content>
        <Header>
          <HeaderContent>
            <User>{authName ?? user}</User>
            <UserContact>{email} · </UserContact>
            <PostDate>{postDate}</PostDate>
          </HeaderContent>
          {isUserPost && <XMarkIcon isActive={false} onClick={handlerOnRemovePost} />}
        </Header>
        <Body>{body}</Body>
        {media && (
          <MediaContainer>
            <Media src={mediaURL} />
          </MediaContainer>
        )}
        <Likes>
          <LikeIcon isActive={isLiked} onClick={handlerOnLikePost} />
          {postLikes > 0 && <LikeCounter $isActive={isLiked}>{postLikes}</LikeCounter>}
        </Likes>
      </Content>
    </Container>
  );
};

export const Post = memo(PostComponent);
