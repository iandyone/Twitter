import { NAME_MAX_LENGTH } from '@constants';
import { LabelTemplate } from '@styles';
import { ChangeEvent, FC, memo, useMemo } from 'react';

import { data } from './config';
import { Container, Inputelement, Title } from './styled';
import { IInputProps } from './types';

const { emailErrorMessage, passwordErrorMessage, phoneErrorMessage } = data;

export const InputComponent: FC<IInputProps> = ({ type, label, onChange, value, error, testID }) => {
  const errorMessage = useMemo(() => {
    if (type === 'password') return passwordErrorMessage;
    if (type === 'tel') return phoneErrorMessage;
    if (type === 'email') return emailErrorMessage;
    return '';
  }, [type]);

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length < NAME_MAX_LENGTH) onChange(value);
  }

  return (
    <Container>
      {!error && <Title>{label}</Title>}
      {error && <LabelTemplate>{errorMessage}</LabelTemplate>}
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
