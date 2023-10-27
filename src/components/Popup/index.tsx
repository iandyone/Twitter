import XMarkIcon from '@assets/icons/xMark.svg?react';
import Portal from '@components/Portal';
import { useFillColor } from '@hooks/animations';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setConfirmPopup, setProfilePopup, setTweetPopup } from '@store/reducers/app';
import { setPageScroll } from '@utils/helpers/lists';
import { FC, memo, MouseEvent, useEffect, useMemo } from 'react';

import { CloseButton, Content, PopupElement } from './styled';
import { IModalProps } from './types';

const PopupComponent: FC<IModalProps> = ({ children }) => {
  const { profilePopup, tweetPopup, confirmPopup } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const removeIconFillColor = useFillColor();
  const popupVisability = useMemo(
    () => profilePopup || tweetPopup || confirmPopup,
    [profilePopup, tweetPopup, confirmPopup],
  );

  function handlerOnClick() {
    dispatch(setProfilePopup(false));
    dispatch(setTweetPopup(false));
    dispatch(setConfirmPopup(false));
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
      <PopupElement $isVisible={popupVisability} /* onClick={handlerOnClick} */ data-testid='modal'>
        <Content $isVisible={popupVisability} onClick={handlerOnClickContent}>
          <CloseButton>
            <XMarkIcon fill={removeIconFillColor} onClick={handlerOnClick} data-testid='post-remove-button' />
          </CloseButton>
          {children}
        </Content>
      </PopupElement>
    </Portal>
  );
};

export const Popup = memo(PopupComponent);
