import { inputTypes, handlerString } from '@appTypes/types';

export interface IInputProps {
  type: inputTypes;
  label: string;
  onChange: handlerString;
  value: string;
  error?: boolean;
  testID?: string;
}
