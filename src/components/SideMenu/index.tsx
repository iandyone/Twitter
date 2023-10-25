import { ISideMenuOption } from '@appTypes';
import HomeIcon from '@assets/icons/home.svg?react';
import ProfileIcon from '@assets/icons/profile.svg?react';
import twitterIcon from '@assets/icons/twitter.svg';
import { Account } from '@components/Account';
import { AppRoutes } from '@constants';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { setMobileMenu, setTweetPopup } from '@store/reducers/app';
import { FC, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { TweetPopup } from './Modal';
import { Option } from './Option';
import { Container, Menu, Navigation, TweetButton, TwitterIcon, User, Wrapper } from './styled';

const { HOME, page } = AppRoutes;
const { PROFILE, FEED } = page;

export const SideMenu: FC = () => {
  const { uid, email, name, avatar } = useSelectorTyped((store) => store.user);
  const { tweetPopup } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const isMobileView = useMobile();
  const location = useLocation();

  const sideMenuOptions: ISideMenuOption[] = [
    {
      title: 'Home',
      testID: 'route-button-home',
      path: HOME,
      active: location.pathname === FEED,
      element: HomeIcon,
    },
    {
      title: 'Profile',
      testID: 'route-button-profile',
      path: PROFILE,
      active: location.pathname === PROFILE,
      element: ProfileIcon,
    },
  ];

  const handlerOnClickTweet = useCallback(() => {
    dispatch(setTweetPopup(true));
    dispatch(setMobileMenu(false));
  }, []);

  const handlerOnClickOption = useCallback(() => {
    dispatch(setMobileMenu(false));
  }, []);

  return (
    <Wrapper>
      <Container>
        <Navigation>
          <TwitterIcon src={twitterIcon} />
          <Menu>
            {sideMenuOptions.map((option) => (
              <Option {...option} key={option.title} onClick={handlerOnClickOption} />
            ))}
          </Menu>
          <TweetButton onClick={handlerOnClickTweet} data-testid='tweet-popup-button'>
            Tweet
          </TweetButton>
        </Navigation>
        {!isMobileView && (
          <User>
            <Account userName={name ?? uid} userEmail={email} avatar={avatar} />
          </User>
        )}
      </Container>
      {tweetPopup && <TweetPopup />}
    </Wrapper>
  );
};
