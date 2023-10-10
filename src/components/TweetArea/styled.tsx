import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { ButtonTemplate, Icon, UserAvatar } from '@styles';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  position: relative;
  padding: ${DEFAULT_GAP} 0px;
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
`;

export const Input = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 100px;
  font-size: 20px;
  line-height: 110%;
  resize: none;
  transition: ${({ theme }) => theme.animation.transition};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.font.medium};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 120%;
  font-style: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const PictureButton = styled.button`
  background: transparent;
`;

export const SubmitButton = styled(ButtonTemplate)`
  height: 40px;
  max-width: 110px;
  font-weight: ${({ theme }) => theme.font.medium};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    transition: ${({ theme }) => theme.animation.transition};
    opacity: ${({ theme }) => theme.animation.opacity};
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;

export const PictureButtonIcon = styled(Icon)`
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;
