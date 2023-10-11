import userAvatar from '@assets/icons/avatar.svg';
import { LikeIcon } from '@components/SVG/Like';
import { UserContact } from '@styles';
import { getDateData } from '@utils/helpers/date';
import { FC, memo, useMemo, useState } from 'react';

import { Avatar, Body, Container, Content, Header, LikeCounter, Likes, PostDate, User } from './styled';
import { IPostProps } from './types';

const PostComponent: FC<IPostProps> = ({ post }) => {
  const { uid, email, body, likes, month, year } = useMemo(getPostData, [post]);
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setLikes] = useState(likes);

  function getPostData() {
    const { user, body, date, likes } = post;
    const dateData = getDateData(date);

    return { ...user, body, ...dateData, likes };
  }

  function handlerOnLike() {
    setIsLiked(!isLiked);
    setLikes(isLiked ? postLikes - 1 : postLikes + 1);
  }

  return (
    <Container>
      <Avatar src={userAvatar} />
      <Content>
        <Header>
          <User>{uid}</User>
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
