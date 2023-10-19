import { NAME_MAX_LENGTH } from '@constants/variables';
import { ChangeEvent, FC, memo, useMemo } from 'react';

import { Container, Inputelement, Label, Title } from './styled';
import { IInputProps } from './types';

export const InputComponent: FC<IInputProps> = ({ type, label, onChange, value, error, testID }) => {
  const errorMessage = useMemo(getErrorMessage, [type]);

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length < NAME_MAX_LENGTH) {
      onChange(value);
    }
  }

  function getErrorMessage() {
    if (type === 'password') {
      return 'The password must be at least 6 characters long and contain a digit';
    }

    if (type === 'tel') {
      return 'Invalid phone number';
    }

    if (type === 'email') {
      return 'Wrong email';
    }

    return '';
  }

  return (
    <Container>
      {!error && <Title>{label}</Title>}
      {error && <Label>{errorMessage}</Label>}
      <Inputelement
        type={type}
        onChange={handlerOnChange}
        value={value}
        $error={error}
        data-testid={testID}
      />
    </Container>
  );
};

export const Input = memo(InputComponent);
