import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { ButtonTemplate, Icon, UserAvatar } from '@styles';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  position: relative;
  padding: ${DEFAULT_GAP} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${Viewposts.TABLET}px) {
    padding: ${DEFAULT_GAP};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Avatar = styled(UserAvatar)`
  transform: translateY(-10px);

  @media (max-width: ${Viewposts.MOBILE}px) {
    display: none;
  }
`;

export const Input = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 100px;
  font-size: 20px;
  line-height: 110%;
  resize: none;
  transition: ${({ theme }) => theme.animations.transition};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.font.medium};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${Viewposts.MOBILE}px) {
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 120%;
  font-size: ${({ theme }) => theme.font.size};
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
