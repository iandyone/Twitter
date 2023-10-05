import { FC, useState } from 'react';

import { Option } from './Option';
import { Container, Options, Select } from './styled';
import { ISelectComponentProps } from './types';

export const SelectComponent: FC<ISelectComponentProps> = ({ title, data, handler, isValid }) => {
  const [isActive, setActivity] = useState(false);

  function handlerOnClick() {
    setActivity(!isActive);
  }

  function handlerOnClickOption(option: string) {
    handler(option);
    setActivity(false);
  }

  return (
    <Container>
      <Select $isActive={isActive} $isValid={isValid} onClick={handlerOnClick}>
        {title}
      </Select>
      {isActive && (
        <Options>
          {data.map((option) => (
            <Option option={option} handler={handlerOnClickOption} key={option} />
          ))}
        </Options>
      )}
    </Container>
  );
};
