import { DataSelect, handlerString } from '@appTypes/types';

export interface ISelectComponentProps {
  title: string;
  data: string[];
  onClick: handlerString;
  isValid: boolean;
  type: DataSelect;
}
