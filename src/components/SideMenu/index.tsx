import { ISideMenuOption } from '@appTypes';
import feedIcon from '@assets/icons/feed.svg';
import homeIcon from '@assets/icons/home.svg';
import profileIcon from '@assets/icons/profile.svg';
import twitterIcon from '@assets/icons/twitter.svg';
import { Account } from '@components/Account';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { setMobileMenu, setTweetPopup } from '@store/reducers/app';
import { FC } from 'react';

import { TweetPopup } from './Modal';
import { Option } from './Option';
import { Container, Menu, Navigation, TweetButton, TwitterIcon, User, Wrapper } from './styled';

export const SideMenu: FC = () => {
  const { uid, email } = useSelectorTyped((store) => store.user);
  const { tweetPopup } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const isMobileView = useMobile();

  const sideMenuOptions: ISideMenuOption[] = [
    { title: 'Home', path: AppRoutes.HOME, icon: homeIcon },
    { title: 'Feed', path: AppRoutes.page.FEED, icon: feedIcon },
    { title: 'Profile', path: AppRoutes.page.PROFILE, icon: profileIcon },
  ];

  function handlerOnClickTweet() {
    dispatch(setTweetPopup(true));
    dispatch(setMobileMenu(false));
  }

  return (
    <Wrapper>
      <Container>
        <Navigation>
          <TwitterIcon src={twitterIcon} />
          <Menu>
            {sideMenuOptions.map((option) => (
              <Option {...option} key={option.title} />
            ))}
          </Menu>
          <TweetButton onClick={handlerOnClickTweet}>Tweet</TweetButton>
        </Navigation>
        {!isMobileView && (
          <User>
            <Account userName={uid} userEmail={email} />
          </User>
        )}
      </Container>
      {tweetPopup && <TweetPopup />}
    </Wrapper>
  );
};
