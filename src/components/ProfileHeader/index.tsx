import userAvatar from '@assets/icons/avatar.svg';
import profileBg from '@assets/images/profileBg.webp';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { setProfilePopup } from '@store/reducers/app';
import { FC, memo, useMemo } from 'react';

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
  Profile,
  Social,
  Status,
  SubCounter,
  Subscribes,
  TweetsCounter,
} from './styled';

const ProfileHeaderComponent: FC = () => {
  const { uid, email } = useSelectorTyped((state) => state.user);
  const { profilePopup } = useSelectorTyped((store) => store.app);
  const { tweetCounterText, editButton } = useMemo(getTextContent, []);
  const dispatch = useDispatchTyped();
  const isMobile = useMobile();

  function getTextContent() {
    return { ...data };
  }

  function handlerOnClickEditButton() {
    dispatch(setProfilePopup(true));
  }

  return (
    <Container>
      <TweetsCounter>13 {tweetCounterText}</TweetsCounter>
      <Banner src={profileBg} />
      <Profile>
        <Header>
          <Avatar src={userAvatar} />
          {!isMobile && <EditButton onClick={handlerOnClickEditButton}>{editButton}</EditButton>}
        </Header>
        <Body>
          <Name>{uid}</Name>
          <Contact>{email}</Contact>
          <Status>Some status</Status>
          <Social>
            <Subscribes>
              <SubCounter>13</SubCounter> lorem
            </Subscribes>
            <Subscribes>
              <SubCounter>13</SubCounter> lorem
            </Subscribes>
          </Social>
          {isMobile && <EditButton onClick={handlerOnClickEditButton}>{editButton}</EditButton>}
        </Body>
      </Profile>
      {profilePopup && <ProfilePopup />}
    </Container>
  );
};

export const ProfileHeader = memo(ProfileHeaderComponent);
