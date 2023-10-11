import { Viewposts } from '@appTypes/enums';
import { handlerString, inputTypes } from '@appTypes/types';
import { InputTemplate, LabelTemplate } from '@styles';
import { ChangeEvent, FC, memo } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const Label = styled(LabelTemplate)`
  line-height: 120%;
  height: 14px;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animation.transition};
`;

export const Inputelement = styled(InputTemplate).attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  padding: 16px 12px;
  font-size: 14px;

  @media (max-width: ${Viewposts.MOBILE}px) {
    padding: 12px 10px;
  }
`;

export interface IInputProps {
  type: inputTypes;
  label: string;
  onChange: handlerString;
  value: string;
}

export const InputComponent: FC<IInputProps> = ({ type, label, onChange, value }) => {
  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length < 50) {
      onChange(value);
    }
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Inputelement type={type} onChange={handlerOnChange} value={value} />
    </Container>
  );
};

export const Input = memo(InputComponent);
