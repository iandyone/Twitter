import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { TitleTemplate, UserAvatar, UserContact } from '@styles';
import styled, { css } from 'styled-components';

export const Container = styled.article`
  display: flex;
  column-gap: 15px;
  padding: ${DEFAULT_GAP} 0px;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: ${Viewposts.TABLET}px) {
    padding: ${DEFAULT_GAP};
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

  @media (max-width: ${Viewposts.TABLET}px) {
    flex-wrap: wrap;
    row-gap: 6px;
  }
`;

export const User = styled(TitleTemplate)`
  font-size: 20px;
`;

export const PostDate = styled(UserContact)``;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  margin-bottom: ${DEFAULT_GAP};
  line-height: 110%;

  @media (max-width: ${Viewposts.MOBILE}px) {
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
  @media (max-width: ${Viewposts.MOBILE}px) {
    align-self: center;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;
