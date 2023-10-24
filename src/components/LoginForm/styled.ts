import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, Icon, InputTemplate, LinkTemplate, PageBody, TitleTemplate } from '@styles';
import styled, { css } from 'styled-components';

export const Body = styled(PageBody)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;

  @media (max-width: ${Viewports.MOBILE}px) {
    row-gap: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.xl2};
  margin-bottom: 36px;

  @media (max-width: ${Viewports.MOBILE}px) {
    font-size: ${({ theme }) => theme.font.size.vl};
    margin-bottom: 0;
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 36px;

  @media (max-width: ${Viewports.MOBILE}px) {
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  margin-bottom: 24px;

  @media (max-width: ${Viewports.MOBILE}px) {
    margin-bottom: 0;
  }
}
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.xs};
`;

export const Input = styled(InputTemplate)<{ $error: boolean }>`
  width: 100%;
  padding: 24px ${({ theme }) => theme.spaces.gap.ss};

  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.error};
    `}

  @media (max-width: ${Viewports.MOBILE}px) {
    padding: 12px 10px;
  }

  width: 100%;
  padding: 24px ${({ theme }) => theme.spaces.gap.ss};
  background: ${({ theme }) => theme.colors.inputBg};

  @media (max-width: ${Viewports.MOBILE}px) {
    padding: 12px 10px;
  }
`;

export const Button = styled(ButtonTemplate)`
  min-height: 60px;
  margin-bottom: 40px;
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    opacity: ${({ theme }) => theme.animations.opacity};
    transition: ${({ theme }) => theme.animations.transition};
  }

  @media (max-width: ${Viewports.MOBILE}px) {
    margin-bottom: 0;
  }
`;

export const Link = styled(LinkTemplate)`
  align-self: flex-end;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.error};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 120%;
  height: 14px;
`;
