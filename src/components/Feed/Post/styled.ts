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
  overflow-wrap: anywhere;
`;

export const Header = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size};
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
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
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
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
  column-gap: 5px;
  align-items: flex-end;
  align-self: flex-start;
  user-select: none;
`;

export const LikeCounter = styled.span<{ $isActive: boolean }>`
  display: inline-block;
  height: 24px;
  line-height: 115%;

  @media (max-width: ${Viewposts.MOBILE}px) {
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
  margin: 10px 0px;
`;

export const Media = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: contain;
`;
