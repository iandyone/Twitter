import { handlerString } from '@appTypes/types';

export interface ISelectComponentProps {
  title: string;
  data: string[];
  handler: handlerString;
}
