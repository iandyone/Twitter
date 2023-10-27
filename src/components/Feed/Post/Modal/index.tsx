import { Popup } from '@components/Popup';
import { useDispatchTyped } from '@hooks/redux';
import { setConfirmPopup } from '@store/reducers/app';
import { setPageScroll } from '@utils/helpers/lists';
import { FC, memo } from 'react';

import { data } from './config';
import { Button, Buttons, Container, Title } from './styled';
import { IConfirmPopupProps } from './types';

const { confirmMessage, confirmButtonText, rejectButtonText } = data;

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
        <Title>{confirmMessage}</Title>
        <Buttons>
          <Button data-testid='confirm-button-yes' onClick={handlerOnConfirm}>
            {confirmButtonText}
          </Button>
          <Button data-testid='confirm-button-no' onClick={handlerOnReject}>
            {rejectButtonText}
          </Button>
        </Buttons>
      </Container>
    </Popup>
  );
};

export const ConfirmPopup = memo(ConfirmPopupComponent);
