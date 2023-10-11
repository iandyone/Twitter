import Portal from '@components/Portal';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setProfilePopup, setTweetPopup } from '@store/reducers/app';
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
    document.body.style.position = 'static';
  }

  function handlerOnClickContent(e: MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  useEffect(() => {
    document.body.style.position = popupVisability ? 'fixed' : 'static';

    return () => {
      if (!popupVisability) document.body.style.position = 'static';
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
