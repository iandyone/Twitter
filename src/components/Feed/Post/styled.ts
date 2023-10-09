import { MOBILE_VIEW, TABLET_VIEW } from '@constants/variables';
import { TitleTemplate, UserAvatar } from '@styles';
import styled, { css } from 'styled-components';

export const Container = styled.article`
  display: flex;
  column-gap: 15px;
  padding: 20px 20px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${TABLET_VIEW}px) {
    padding: 20px 0px;
  }
`;

export const Avatar = styled(UserAvatar)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 5px;
  margin-bottom: 5px;

  @media (max-width: ${TABLET_VIEW}px) {
    flex-wrap: wrap;
    row-gap: 6px;
  }
`;

export const User = styled(TitleTemplate)`
  font-size: 20px;
`;

export const UserContact = styled.span`
  font-size: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.regular};
  opacity: ${({ theme }) => theme.animation.buttonHoverOpacity};
`;
export const PostDate = styled(UserContact)``;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  line-height: 110%;
  margin-bottom: 20px;

  @media (max-width: ${MOBILE_VIEW}px) {
    margin-bottom: 10px;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 10px;
  align-self: flex-start;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;

export const LikeCounter = styled.span<{ $isActive: boolean }>`
  @media (max-width: ${MOBILE_VIEW}px) {
    align-self: center;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;
