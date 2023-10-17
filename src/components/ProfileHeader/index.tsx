import userAvatar from '@assets/icons/avatar.svg';
import profileBg from '@assets/images/profileBg.webp';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { firebaseDB } from '@services/database';
import { setProfilePopup } from '@store/reducers/app';
import { FC, memo, useEffect, useMemo, useState } from 'react';

import { data } from './config';
import { ProfilePopup } from './Modal';
import {
  Avatar,
  Banner,
  Body,
  Contact,
  Container,
  EditButton,
  Header,
  Name,
  ProfileElement,
  Social,
  SubCounter,
  Subscribes,
  TelegramLink,
  TweetsCounter,
} from './styled';

const ProfileComponent: FC = () => {
  const { uid, email, name, avatar, telegram } = useSelectorTyped((state) => state.user);
  const { profilePopup } = useSelectorTyped((store) => store.app);
  const { tweetCounterText, editButton } = useMemo(getTextContent, []);
  const { all } = useSelectorTyped((store) => store.posts);
  const dispatch = useDispatchTyped();
  const isMobile = useMobile();
  const tweetCounter = useMemo(getUserPosts, [all, uid]);
  const [followings, setFollowings] = useState(0);

  function getUserPosts() {
    return all.filter((post) => post.user === uid).length;
  }

  function getTextContent() {
    return { ...data };
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
          <Name data-testid='profile-user-name'>{name ?? uid}</Name>
          <Contact data-testid='profile-user-email'>{email}</Contact>
          {telegram && (
            <TelegramLink
              href={`https://t.me/${telegram}`}
              target='_blank'
              data-testid='profile-user-telegram'>{`@${telegram}`}</TelegramLink>
          )}
          <Social>
            <Subscribes data-testid='profile-user-subs'>
              <SubCounter>{followings}</SubCounter> followers
            </Subscribes>
            <Subscribes>
              <SubCounter>{followings}</SubCounter> following
            </Subscribes>
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
