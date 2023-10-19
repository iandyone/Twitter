import { Popup } from '@components/Popup';
import { useDispatchTyped } from '@hooks/redux';
import { setConfirmPopup } from '@store/reducers/app';
import { setPageScroll } from '@utils/helpers/common';
import { FC, memo } from 'react';

import { Button, Buttons, Container, Title } from './styled';
import { IConfirmPopupProps } from './types';

const ConfirmPopupComponent: FC<IConfirmPopupProps> = ({ onConfirm, onReject }) => {
  const dispatch = useDispatchTyped();

  function handlerOnConfirm() {
    onConfirm();
    setPageScroll(true);
    dispatch(setConfirmPopup(false));
  }

  function handlerOnReject() {
    onReject();
    setPageScroll(true);
    dispatch(setConfirmPopup(false));
  }

  return (
    <Popup>
      <Container data-testid='confirm-popup'>
        <Title>Do you really want to remote the post?</Title>
        <Buttons>
          <Button data-testid='confirm-button-yes' onClick={handlerOnConfirm}>
            Yes
          </Button>
          <Button data-testid='confirm-button-no' onClick={handlerOnReject}>
            No
          </Button>
        </Buttons>
      </Container>
    </Popup>
  );
};

export const ConfirmPopup = memo(ConfirmPopupComponent);
