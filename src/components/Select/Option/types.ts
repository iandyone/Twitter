import { handlerString } from '@appTypes/types';

export interface IOptionProps {
  option: string;
  handler: handlerString;
  testID?: string;
}
