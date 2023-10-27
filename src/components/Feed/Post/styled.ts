import { Viewports } from '@appTypes/enums';
import { TitleTemplate, UserAvatar } from '@styles';
import styled, { css } from 'styled-components';

const { TABLET, MOBILE } = Viewports;

export const Container = styled.article`
  display: flex;
  column-gap: 15px;
  padding: ${({ theme }) => theme.spaces.gap.ss} 0;

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: ${TABLET}) {
    padding: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const Avatar = styled(UserAvatar)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-wrap: anywhere;
`;

export const Header = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.sm};
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: ${({ theme }) => theme.spaces.gap.xs};
  margin-bottom: 5px;

  @media (max-width: ${TABLET}) {
    flex-wrap: wrap;
    row-gap: ${({ theme }) => theme.spaces.gap.s};
  }
`;

export const User = styled(TitleTemplate)`
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.font.size.s};
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
  line-height: 110%;

  @media (max-width: ${MOBILE}) {
    margin-bottom: 10px;
  }
`;

export const IconContainer = styled.div`
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transformActive};
  }
`;

export const Likes = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spaces.gap.xs};
  align-items: flex-end;
  align-self: flex-start;
  user-select: none;
`;

export const LikeCounter = styled.span<{ $isActive: boolean }>`
  display: inline-block;
  height: 24px;
  line-height: 115%;

  @media (max-width: ${MOBILE}) {
    align-self: center;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;

export const MediaContainer = styled.div`
  display: flex;
  flex-justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Media = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: contain;

  @media (max-width: ${MOBILE}) {
    max-height: 200px;
  }
`;
