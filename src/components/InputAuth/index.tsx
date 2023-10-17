import { handler, handlerChange, inputTypes } from '@appTypes/types';
import { forwardRef, Ref } from 'react';

import { Input, InputContainer, Label } from './styled';

interface IInputAuthProps {
  type: inputTypes;
  label: string;
  value: string;
  placeholder: string;
  onChange: handlerChange;
  onBlur: handler;
  onFocus?: handler;
  $error: boolean;
  $isNotEmpty: boolean;
  required?: boolean;
  testID?: string;
}

export const InputAuth = forwardRef(
  (
    {
      type,
      value,
      label,
      placeholder,
      onBlur,
      onChange,
      onFocus,
      $error,
      $isNotEmpty,
      required,
      testID,
    }: IInputAuthProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <InputContainer>
        <Label data-testid={testID + '-error'}>{label}</Label>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          $error={$error}
          $isNotEmpty={$isNotEmpty}
          ref={ref}
          required={required}
          onFocus={onFocus}
          data-testid={testID}
        />
      </InputContainer>
    );
  },
);
