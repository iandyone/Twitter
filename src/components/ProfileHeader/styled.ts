import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, UserAvatar, UserContact, UserName } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
`;

export const TweetsCounter = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: ${({ theme }) => theme.animations.opacity};
  margin-bottom: 18px;
  padding: 0 ${({ theme }) => theme.spaces.gap.ss};

  @media (max-width: ${Viewports.TABLET}px) {
    padding: 0;
  }
`;

export const Banner = styled.img`
  display: inline-block;
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${Viewports.DESKTOP}px) {
    height: 200px;
  }

  @media (max-width: ${Viewports.TABLET}px) {
    padding: 0;
    width: calc(100% + 40px);
    transform: translatex(-20px);
  }
`;

export const ProfileElement = styled.article`
  margin-top: -70px;
  position: relative;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: ${({ theme }) => theme.spaces.gap.ss};
  margin-bottom: 10px;

  @media (max-width: ${Viewports.TABLET}px) {
    padding-right: 0;
  }

  @media (max-width: ${Viewports.MOBILE}px) {
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const Avatar = styled(UserAvatar)`
  width: 130px;
  height: 130px;
`;

export const EditButton = styled(ButtonTemplate)`
  height: 44px;
  max-width: 120px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};
  align-self: flex-end;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonBgPrimary};
    transition: ${({ theme }) => theme.animations.transition};
  }

  @media (max-width: ${Viewports.TABLET}px) {
    align-self: flex-start;
  }
  @media (max-width: ${Viewports.MOBILE}px) {
    max-width: none;
  }
`;

export const Name = styled(UserName)`
  font-size: ${({ theme }) => theme.font.size.l};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: ${({ theme }) => theme.font.bold};
  width: 100%;

  @media (max-width: ${Viewports.MOBILE}px) {
    text-align: center;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spaces.gap.ss};
  row-gap: 8px;

  @media (max-width: ${Viewports.TABLET}px) {
    padding: 0;
  }
  @media (max-width: ${Viewports.MOBILE}px) {
    padding: 0;
    align-items: center;
  }
`;

export const Contact = styled(UserContact)``;

export const TelegramLink = styled.a`
  font-size: ${({ theme }) => theme.font.size.s};
  margin-bottom: ${({ theme }) => theme.spaces.gap.ss};

  color: ${({ theme }) => theme.colors.link};
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Social = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spaces.gap.ml};
  font-size: ${({ theme }) => theme.font.size.sm};

  @media (max-width: ${Viewports.TABLET}px) {
    margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const Subscribes = styled(UserContact)``;

export const SubCounter = styled.span`
  font-weight: ${({ theme }) => theme.font.bold};
`;
