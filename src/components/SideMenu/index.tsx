import { ISideMenuOption } from '@appTypes';
import twitterIcon from '@assets/icons/twitter.svg';
import { Account } from '@components/Account';
import { HomeIcon } from '@components/SVG/Home';
import { ProfileIcon } from '@components/SVG/Profile';
import { AppRoutes } from '@constants/variables';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { setMobileMenu, setTweetPopup } from '@store/reducers/app';
import { FC, useCallback } from 'react';

import { TweetPopup } from './Modal';
import { Option } from './Option';
import { Container, Menu, Navigation, TweetButton, TwitterIcon, User, Wrapper } from './styled';

export const SideMenu: FC = () => {
  const { uid, email, name, avatar } = useSelectorTyped((store) => store.user);
  const { tweetPopup } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const isMobileView = useMobile();

  const sideMenuOptions: ISideMenuOption[] = [
    { title: 'Home', path: AppRoutes.HOME, element: HomeIcon },
    { title: 'Profile', path: AppRoutes.page.PROFILE, element: ProfileIcon },
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
            <Account userName={name ?? uid} userEmail={email} avatar={avatar} />
          </User>
        )}
      </Container>
      {tweetPopup && <TweetPopup />}
    </Wrapper>
  );
};
