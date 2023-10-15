import Portal from '@components/Portal';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setProfilePopup, setTweetPopup } from '@store/reducers/app';
import { setPageScroll } from '@utils/helpers/common';
import { FC, memo, MouseEvent, useEffect, useMemo } from 'react';

import { Content, PopupElement } from './styled';
import { IModalProps } from './types';

const PopupComponent: FC<IModalProps> = ({ children }) => {
  const { profilePopup, tweetPopup } = useSelectorTyped((store) => store.app);
  const popupVisability = useMemo(getPopupVisability, [profilePopup, tweetPopup]);
  const dispatch = useDispatchTyped();

  function getPopupVisability() {
    return profilePopup || tweetPopup;
  }

  function handlerOnClick() {
    dispatch(setProfilePopup(false));
    dispatch(setTweetPopup(false));
    setPageScroll(true);
  }

  function handlerOnClickContent(e: MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  useEffect(() => {
    setPageScroll(!popupVisability);
    return () => {
      if (!popupVisability) setPageScroll(true);
    };
  }, [popupVisability]);

  return (
    <Portal>
      <PopupElement $isVisible={popupVisability} onClick={handlerOnClick} data-testid='modal'>
        <Content $isVisible={popupVisability} onClick={handlerOnClickContent}>
          {children}
        </Content>
      </PopupElement>
    </Portal>
  );
};

export const Popup = memo(PopupComponent);
