import { ChangeEvent, FC, memo } from 'react';

import { Container, Inputelement, Label } from './styled';
import { IInputProps } from './types';

export const InputComponent: FC<IInputProps> = ({ type, label, onChange, value, error }) => {
  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length < 50) {
      onChange(value);
    }
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Inputelement type={type} onChange={handlerOnChange} value={value} $error={error} />
    </Container>
  );
};

export const Input = memo(InputComponent);
