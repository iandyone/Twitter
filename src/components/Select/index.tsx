import { FC, memo, useState } from 'react';

import { Option } from './Option';
import { Container, Options, Title } from './styled';
import { ISelectComponentProps } from './types';

const SelectComponent: FC<ISelectComponentProps> = ({ title, data, handler, isValid }) => {
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
      <Title $isActive={isActive} $isValid={isValid} onClick={handlerOnClick}>
        {title}
      </Title>
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

export const Select = memo(SelectComponent);
