import { FC, memo } from 'react';

import { OptionElement } from './styled';
import { IOptionProps } from './types';

const OptionComponent: FC<IOptionProps> = ({ option, handler, testID }) => {
  function handlerOnClick() {
    handler(option);
  }

  return (
    <OptionElement onClick={handlerOnClick} data-testid={testID}>
      {option}
    </OptionElement>
  );
};

export const Option = memo(OptionComponent);
