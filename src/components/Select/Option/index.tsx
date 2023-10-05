import { handlerString } from '@appTypes/types';
import { FC, memo } from 'react';

import { OptionElement } from './styled';

interface IOptionProps {
  option: string;
  handler: handlerString;
}

const OptionComponent: FC<IOptionProps> = ({ option, handler }) => {
  function handlerOnClick() {
    handler(option);
  }

  return <OptionElement onClick={handlerOnClick}>{option}</OptionElement>;
};

export const Option = memo(OptionComponent);
