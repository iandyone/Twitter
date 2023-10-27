import userAvatar from '@assets/icons/avatar.svg';
import profileBg from '@assets/images/profileBg.webp';
import { NAME_MAX_LENGTH } from '@constants';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { firebaseDB } from '@services/database';
import { setProfilePopup } from '@store/reducers/app';
import { UserContact } from '@styles';
import { FC, memo, useEffect, useMemo, useState } from 'react';

import { data } from './config';
import { ProfilePopup } from './Modal';
import {
  Avatar,
  Banner,
  Body,
  Container,
  EditButton,
  Header,
  Name,
  ProfileElement,
  Social,
  SubCounter,
  TelegramLink,
  TweetsCounter,
} from './styled';

const { tweetCounterText, editButton } = data;

const ProfileComponent: FC = () => {
  const { uid, email, name, avatar, telegram } = useSelectorTyped((state) => state.user);
  const { profilePopup } = useSelectorTyped((store) => store.app);
  const { posts } = useSelectorTyped((store) => store.posts);
  const dispatch = useDispatchTyped();
  const isMobile = useMobile();
  const tweetCounter = useMemo(() => posts.filter((post) => post.user === uid).length, [posts, uid]);
  const [followings, setFollowings] = useState(0);
  const userName = useMemo(getUserName, [uid, name]);
  const telegramURL = import.meta.env.VITE_TG;

  function getUserName() {
    const user = name ?? uid;
    return user ? user.slice(0, NAME_MAX_LENGTH) : null;
  }

  function handlerOnClickEditButton() {
    dispatch(setProfilePopup(true));
  }

  async function getFollowings() {
    const data = await firebaseDB.getUsers('');
    setFollowings(Object.keys(data).length);
  }

  useEffect(() => {
    getFollowings();
  }, []);

  return (
    <Container data-testid='profile'>
      <TweetsCounter>
        {tweetCounter} {tweetCounterText}
      </TweetsCounter>
      <Banner src={profileBg} />
      <ProfileElement>
        <Header>
          <Avatar src={avatar ?? userAvatar} data-testid='profile-avatar' />
          {!isMobile && (
            <EditButton onClick={handlerOnClickEditButton} data-testid='profile-edit-button'>
              {editButton}
            </EditButton>
          )}
        </Header>
        <Body>
          <Name data-testid='profile-user-name'>{userName}</Name>
          <UserContact data-testid='profile-user-email'>{email}</UserContact>
          {telegram && (
            <TelegramLink
              href={telegramURL + telegram}
              target='_blank'
              data-testid='profile-user-telegram'>{`@${telegram}`}</TelegramLink>
          )}
          <Social>
            <UserContact data-testid='profile-user-subs'>
              <SubCounter>{followings}</SubCounter> followers
            </UserContact>
            <UserContact>
              <SubCounter>{followings}</SubCounter> following
            </UserContact>
          </Social>
          {isMobile && (
            <EditButton onClick={handlerOnClickEditButton} data-testid='profile-edit-button'>
              {editButton}
            </EditButton>
          )}
        </Body>
      </ProfileElement>
      {profilePopup && <ProfilePopup />}
    </Container>
  );
};

export const Profile = memo(ProfileComponent);
