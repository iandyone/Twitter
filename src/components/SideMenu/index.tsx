import { ISideMenuOption } from '@appTypes';
import homeIcon from '@assets/icons/home.svg';
import profileIcon from '@assets/icons/profile.svg';
import twitterIcon from '@assets/icons/twitter.svg';
import { Account } from '@components/Account';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { setMobileMenu, setTweetPopup } from '@store/reducers/app';
import { FC, useCallback } from 'react';

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
    { title: 'Profile', path: AppRoutes.page.PROFILE, icon: profileIcon },
  ];

  const handlerOnClickTweet = useCallback(() => {
    dispatch(setTweetPopup(true));
    dispatch(setMobileMenu(false));
  }, [dispatch]);

  const handlerOnClickOption = useCallback(() => {
    dispatch(setMobileMenu(false));
  }, [dispatch]);

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
