import { Viewposts } from '@appTypes/enums';
import { DEFAULT_GAP } from '@constants/variables';
import {
  ButtonTemplate,
  FormTemplate,
  Icon,
  LinkTemplate,
  PageBody,
  SubtitleTemplate,
  TitleTemplate,
} from '@styles';
import styled from 'styled-components';

const marginBottom = '32px';

export const Body = styled(PageBody)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 680px;

  @media (max-width: ${Viewposts.MOBILE}px) {
    row-gap: ${DEFAULT_GAP};
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 42px;

  @media (max-width: ${Viewposts.MOBILE}px) {
    margin-bottom: 0px;
  }
`;

export const Title = styled(TitleTemplate)`
  font-size: 30px;
  align-self: flex-start;
`;

export const Form = styled(FormTemplate)`
  margin-bottom: 24px;
`;

export const Link = styled(LinkTemplate)`
  align-self: flex-start;
  margin-bottom: 18px;

  @media (max-width: ${Viewposts.MOBILE}px) {
    margin-bottom: 0px;
  }
`;

export const Subtitle = styled(SubtitleTemplate)`
  font-size: ${({ theme }) => theme.font.size};
  align-self: flex-start;
  margin-bottom: ${marginBottom};

  @media (max-width: ${Viewposts.TABLET_MEDIUM}px) {
    margin-bottom: 0px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  opacity: ${({ theme }) => theme.animation.opacity};
  margin-bottom: ${marginBottom};

  @media (max-width: ${Viewposts.TABLET_MEDIUM}px) {
    margin-bottom: 0px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: ${marginBottom};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 22px;

  @media (max-width: ${Viewposts.TABLET_MEDIUM}px) {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
`;

export const Button = styled(ButtonTemplate)`
  min-height: 60px;
  margin-bottom: 40px;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    opacity: ${({ theme }) => theme.animation.opacity};
    transition: ${({ theme }) => theme.animation.transition};
  }

  @media (max-width: ${Viewposts.MOBILE}px) {
    margin-bottom: 0px;
  }
`;
