import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import { ButtonTemplate, UserAvatar, UserContact, UserName } from '@styles';
import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
`;

export const TweetsCounter = styled.h3`
  font-size: 16px;
  opacity: ${({ theme }) => theme.animation.opacity};
  margin-bottom: 18px;
  padding: 0px ${DEFAULT_GAP};

  @media (max-width: ${Viewposts.TABLET}px) {
    padding: 0px;
  }
`;

export const Banner = styled.img`
  display: inline-block;
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${Viewposts.DESKTOP}px) {
    height: 200px;
  }

  @media (max-width: ${Viewposts.TABLET}px) {
    padding: 0px;
    width: calc(100% + 40px);
    transform: translatex(-20px);
  }
`;

export const Profile = styled.article`
  margin-top: -70px;
  position: relative;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;
  margin-bottom: 10px;

  @media (max-width: ${Viewposts.TABLET}px) {
    padding-right: 0px;
  }

  @media (max-width: ${Viewposts.MOBILE}px) {
    flex-direction: column;
    margin-bottom: ${DEFAULT_GAP};
  }
`;

export const Avatar = styled(UserAvatar)`
  width: 150px;
  height: 150px;
`;

export const EditButton = styled(ButtonTemplate)`
  height: 44px;
  max-width: 120px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animation.transition};
  align-self: flex-end;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonBg};
    transition: ${({ theme }) => theme.animation.transition};
  }

  @media (max-width: ${Viewposts.TABLET}px) {
    align-self: flex-start;
  }
  @media (max-width: ${Viewposts.MOBILE}px) {
    max-width: none;
  }
`;

export const Name = styled(UserName)`
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: ${({ theme }) => theme.font.bold};
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${DEFAULT_GAP};
  row-gap: 8px;

  @media (max-width: ${Viewposts.TABLET}px) {
    padding: 0px;
  }
  @media (max-width: ${Viewposts.MOBILE}px) {
    padding: 0px;
    align-items: center;
  }
`;

export const Contact = styled(UserContact)``;

export const Status = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  margin-bottom: ${DEFAULT_GAP};
`;

export const Social = styled.div`
  display: flex;
  column-gap: 30px;
  font-size: ${({ theme }) => theme.font.size};

  @media (max-width: ${Viewposts.TABLET}px) {
    margin-bottom: ${DEFAULT_GAP};
  }
`;

export const Subscribes = styled(UserContact)``;

export const SubCounter = styled.span`
  font-weight: ${({ theme }) => theme.font.bold};
`;
