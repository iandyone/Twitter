import { Viewports } from '@appTypes/enums';
import { InputTemplate, LinkTemplate, SidesTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

const { TABLET, DESKTOP, DESKTOP_MEDIUM } = Viewports;

export const Wrapper = styled.aside`
  position: relative;
  width: 100%;
`;

export const Container = styled(SidesTemplate)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 60px;
  overflow: hidden;
  width: 300px;

  @media (max-width: ${DESKTOP}) {
    width: 270px;
  }
  @media (max-width: ${DESKTOP_MEDIUM}) {
    max-width: none;
    min-width: none;
    width: 270px;
    align-items: flex-start;
  }

  @media (max-width: ${TABLET}) {
    row-gap: ${({ theme }) => theme.spaces.gap.ss};
    padding: ${({ theme }) => theme.spaces.gap.ss} 0;
    position: static;
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spaces.gap.ss};
  width: 100%;
`;

export const Search = styled.div`
  position: relative;

  @media (max-width: ${TABLET}) {
    max-width: none;
    width: 100%;
  }
`;

export const Input = styled(InputTemplate)`
  border-radius: 30px;
  width: 100%;
  height: 48px;
  padding: 15px 15px 15px 42px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.regular};
  background: ${({ theme }) => theme.colors.searchBg};
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  background: ${({ theme }) => theme.colors.searchBg};
  transition: ${({ theme }) => theme.animations.transition};
  border: 1px solid ${({ theme }) => theme.colors.searchBorder};
  padding: ${({ theme }) => theme.spaces.gap.ss};
  border-radius: 10px;
  width: 100%;
`;
export const Title = styled(TitleTemplate)`
  font-size: ${({ theme }) => theme.font.size.ss};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.gap.sm};

  @media (max-width: ${DESKTOP}) {
    flex-direction: column;
  }
`;

export const Link = styled(LinkTemplate)`
  color: ${({ theme }) => theme.colors.searchLink};
  transition: ${({ theme }) => theme.animations.transition};
  font-size: ${({ theme }) => theme.font.size.s};
`;
