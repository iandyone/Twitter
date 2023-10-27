import { Viewports } from '@appTypes/enums';
import { ButtonTemplate, Icon, LinkTemplate, PageBody, SubtitleTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

const marginBottom = '32px';

const { MOBILE, TABLET_MEDIUM } = Viewports;

export const Body = styled(PageBody)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 680px;

  @media (max-width: ${MOBILE}) {
    row-gap: ${({ theme }) => theme.spaces.gap.ss};
  }
`;

export const TwitterIcon = styled(Icon)`
  white-space: nowrap;
  width: 50px;
  height: 40px;
  margin-bottom: 42px;

  @media (max-width: ${MOBILE}) {
    margin-bottom: 0;
  }
`;

export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.sl};
  align-self: flex-start;
`;

export const Form = styled.form`
  margin-bottom: 24px;
`;

export const Link = styled(LinkTemplate)`
  align-self: flex-start;
  margin-bottom: 18px;

  @media (max-width: ${MOBILE}) {
    margin-bottom: 0;
  }
`;

export const Subtitle = styled(SubtitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.sm};
  align-self: flex-start;
  margin-bottom: ${marginBottom};

  @media (max-width: ${TABLET_MEDIUM}) {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 400;
  line-height: 150%;
  opacity: ${({ theme }) => theme.animations.opacity};
  margin-bottom: ${marginBottom};

  @media (max-width: ${TABLET_MEDIUM}) {
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: ${marginBottom};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 22px;

  @media (max-width: ${TABLET_MEDIUM}) {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
`;

export const Button = styled(ButtonTemplate)`
  min-height: 60px;
  margin-bottom: 40px;
  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    opacity: ${({ theme }) => theme.animations.opacity};
    transition: ${({ theme }) => theme.animations.transition};
  }

  @media (max-width: ${MOBILE}) {
    margin-bottom: 0;
  }
`;
