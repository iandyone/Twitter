import userAvatar from '@assets/icons/avatar.svg';
import { LikeIcon } from '@components/SVG/Like';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { firebaseDB } from '@services/database';
import { updatePostLikes } from '@store/reducers/posts';
import { UserContact } from '@styles';
import { getDateData } from '@utils/helpers/date';
import { FC, memo, useMemo, useState } from 'react';

import { Avatar, Body, Container, Content, Header, LikeCounter, Likes, PostDate, User } from './styled';
import { IPostProps } from './types';

const PostComponent: FC<IPostProps> = ({ post }) => {
  const { uid } = useSelectorTyped((store) => store.user);
  const { user, email, body, month, year, authorAvatar, authName, likes } = useMemo(getPostData, [post]);
  const [isLiked, setIsLiked] = useState(getLikeStatus);
  const [postLikes, setLikes] = useState(getPostLikes);
  const dispatch = useDispatchTyped();

  function getPostData() {
    const { timestamp } = post;
    const dateData = getDateData(new Date(timestamp as number));

    return { ...post, ...dateData };
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

  async function handlerOnLike() {
    const likesList = await firebaseDB.setPostLike(post, uid);
    setIsLiked(!isLiked);
    setLikes(likesList.length);
    dispatch(updatePostLikes({ likes: likesList, postID: post.id }));
  }

  return (
    <Container>
      <Avatar src={authorAvatar ?? userAvatar} />
      <Content>
        <Header>
          <User>{authName ?? user}</User>
          <UserContact>{email}</UserContact>
          <PostDate>
            {month}.{year}
          </PostDate>
        </Header>
        <Body>{body}</Body>
        <Likes>
          <LikeIcon isActive={isLiked} onClick={handlerOnLike} />
          {postLikes > 0 && <LikeCounter $isActive={isLiked}>{postLikes}</LikeCounter>}
        </Likes>
      </Content>
    </Container>
  );
};

export const Post = memo(PostComponent);
