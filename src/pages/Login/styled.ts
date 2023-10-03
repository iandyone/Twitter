import { ButtonTemplate, Icon, InputTemplate, LinkTemplate, PageBody, TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Body = styled(PageBody)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;

  @media (max-width: 480px) {
    row-gap: 28px;
  }
`;

export const Title = styled(TitleTemplate)`
  font-size: 42px;
  margin-bottom: 36px;

  @media (max-width: 480px) {
    font-size: 36px;
    margin-bottom: 0px;
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 36px;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
}
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Input = styled(InputTemplate).attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  padding: 24px 20px;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`;

export const Button = styled(ButtonTemplate)`
  min-height: 60px;
  margin-bottom: 40px;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    opacity: 0.7;
    transition: ${({ theme }) => theme.animation.transition};
  }

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`;

export const Link = styled(LinkTemplate)`
  align-self: flex-end;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  line-height: 120%;
  height: 14px;
`;
