import { inputTypes, handlerChange, handler } from '@appTypes/types';

export interface IInputAuthProps {
  type: inputTypes;
  label: string;
  value: string;
  placeholder: string;
  onChange: handlerChange;
  onBlur?: handler;
  onFocus?: handler;
  $error: boolean;
  $isNotEmpty: boolean;
  required?: boolean;
  testID: string;
}
