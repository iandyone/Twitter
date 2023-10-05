import { ISideMenuOption } from '@appTypes';
import feedIcon from '@assets/icons/feed.svg';
import homeIcon from '@assets/icons/home.svg';
import profileIcon from '@assets/icons/profile.svg';
import twitterIcon from '@assets/icons/twitter.svg';
import { Account } from '@components/Account';
import { AppRoutes } from '@constants/variables';
import { useMobile } from '@hooks/other';
import { useSelectorTyped } from '@hooks/redux';
import { FC } from 'react';

import { Option } from './Option';
import { Container, Menu, Navigation, TweetButton, TwitterIcon, User } from './styled';

export const SideMenu: FC = () => {
  const { uid, email } = useSelectorTyped((store) => store.user);
  const isMobileView = useMobile();

  const sideMenuOptions: ISideMenuOption[] = [
    { title: 'Home', path: AppRoutes.HOME, icon: homeIcon },
    { title: 'Feed', path: AppRoutes.page.FEED, icon: feedIcon },
    { title: 'Profile', path: AppRoutes.page.PROFILE, icon: profileIcon },
  ];

  return (
    <Container>
      <Navigation>
        <TwitterIcon src={twitterIcon} />
        <Menu>
          {sideMenuOptions.map((option) => (
            <Option {...option} key={option.title} />
          ))}
        </Menu>
        <TweetButton>Tweet</TweetButton>
      </Navigation>
      {!isMobileView && (
        <User>
          <Account userName={uid} userEmail={email} />
        </User>
      )}
    </Container>
  );
};
