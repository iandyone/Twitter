import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, UserAvatar, UserContact, UserName } from '@styles';
import styled from 'styled-components';

const { TABLET, MOBILE, DESKTOP } = Viewports;

export const Container = styled.div`
  padding-bottom: 20px;
`;

export const TweetsCounter = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: ${({ theme }) => theme.animations.opacity};
  padding: 0 ${({ theme }) => theme.spaces.gap.ss};
  margin-bottom: 18px;

  @media (max-width: ${TABLET}) {
    padding: 0;
  }
`;

export const Banner = styled.img`
  display: inline-block;
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${DESKTOP}) {
    height: 200px;
  }

  @media (max-width: ${TABLET}) {
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

  @media (max-width: ${TABLET}) {
    padding-right: 0;
  }

  @media (max-width: ${MOBILE}) {
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

  @media (max-width: ${TABLET}) {
    align-self: flex-start;
  }
  @media (max-width: ${MOBILE}) {
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

  @media (max-width: ${MOBILE}) {
    text-align: center;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spaces.gap.ss};
  row-gap: 8px;

  @media (max-width: ${TABLET}) {
    padding: 0;
  }
  @media (max-width: ${MOBILE}) {
    padding: 0;
    align-items: center;
  }
`;

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

  @media (max-width: ${TABLET}) {
    margin-bottom: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const Subscribes = styled(UserContact)``;

export const SubCounter = styled.span`
  font-weight: ${({ theme }) => theme.font.bold};
`;
