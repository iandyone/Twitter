import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, Icon, UserAvatar } from '@styles';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  position: relative;
  padding: ${({ theme }) => theme.spaces.gap.ss} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${Viewports.TABLET}px) {
    padding: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Avatar = styled(UserAvatar)`
  transform: translateY(-10px);

  @media (max-width: ${Viewports.MOBILE}px) {
    display: none;
  }
`;

export const Input = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 100px;
  font-size: ${({ theme }) => theme.font.size.ss};
  line-height: 110%;
  resize: none;
  transition: ${({ theme }) => theme.animations.transition};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.font.medium};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${Viewports.MOBILE}px) {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 120%;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const FileInput = styled.input`
  background: transparent;
  display: none;
`;

export const SubmitButton = styled(ButtonTemplate)`
  height: 40px;
  max-width: 110px;
  font-weight: ${({ theme }) => theme.font.medium};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    transition: ${({ theme }) => theme.animations.transition};
    opacity: ${({ theme }) => theme.animations.opacity};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }
`;

export const PictureButtonIcon = styled(Icon)`
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }
`;

export const ImageIcon = styled.label`
  display: flex;
  column-gap: 4px;
`;

export const MediaData = styled.span`
  font-weight: ${({ theme }) => theme.font.regular};
`;

export const RemoveIcon = styled(Icon)`
  width: 24px;
  height: 24px;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animations.transition};
    opacity: ${({ theme }) => theme.animations.opacity};
    border-color: ${({ theme }) => theme.colors.link};
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }
`;
