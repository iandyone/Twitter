import { NAME_MAX_LENGTH } from '@constants';
import { ChangeEvent, FC, memo, useMemo } from 'react';

import { data } from './config';
import { Container, Inputelement, Label, Title } from './styled';
import { IInputProps } from './types';

export const InputComponent: FC<IInputProps> = ({ type, label, onChange, value, error, testID }) => {
  const { emailErrorMessage, passwordErrorMessage, phoneErrorMessage } = data;
  const errorMessage = useMemo(getErrorMessage, [
    type,
    emailErrorMessage,
    passwordErrorMessage,
    phoneErrorMessage,
  ]);

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length < NAME_MAX_LENGTH) {
      onChange(value);
    }
  }

  function getErrorMessage() {
    if (type === 'password') {
      return passwordErrorMessage;
    }

    if (type === 'tel') {
      return phoneErrorMessage;
    }

    if (type === 'email') {
      return emailErrorMessage;
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
