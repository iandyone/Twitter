import { forwardRef, Ref } from 'react';

import { Input, InputContainer, Label } from './styled';
import { IInputAuthProps } from './types';

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
