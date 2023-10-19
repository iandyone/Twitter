import { handler } from '@appTypes/types';

export interface IConfirmPopupProps {
  onConfirm: handler;
  onReject: handler;
}
