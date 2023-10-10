import userAvatar from '@assets/icons/avatar.svg';
import profileBg from '@assets/images/profileBg.webp';
import { useMobile } from '@hooks/other';
import { useSelectorTyped } from '@hooks/redux';
import { FC, memo, useMemo } from 'react';

import { data } from './config';
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
  const isMobile = useMobile();
  const { tweetCounterText, editButton } = useMemo(getTextContent, []);

  function getTextContent() {
    return { ...data };
  }

  return (
    <Container>
      <TweetsCounter>13 {tweetCounterText}</TweetsCounter>
      <Banner src={profileBg} />
      <Profile>
        <Header>
          <Avatar src={userAvatar} />
          {!isMobile && <EditButton>{editButton}</EditButton>}
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
          {isMobile && <EditButton>{editButton}</EditButton>}
        </Body>
      </Profile>
    </Container>
  );
};

export const ProfileHeader = memo(ProfileHeaderComponent);
