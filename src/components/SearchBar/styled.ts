import { TABLET_VIEW } from '@constants/variables';
import { Icon, InputTemplate, LinkTemplate, SidesTemplate, TitleTemplate } from '@styles';
import styled from 'styled-components';

export const Container = styled(SidesTemplate)`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  overflow: hidden;
  // min-width: 300px;

  @media (max-width: 1200px) {
    max-width: none;
    min-width: none;
    align-items: flex-start;
  }

  @media (max-width: ${TABLET_VIEW}px) {
    row-gap: 20px;
    padding: 20px 0px;
  }
`;

export const Search = styled.div`
  position: relative;

  @media (max-width: ${TABLET_VIEW}px) {
    max-width: none;
    width: 100%;
  }
`;

export const Input = styled(InputTemplate)`
  border-radius: 30px;
  width: 100%;
  height: 48px;
  padding: 15px 15px 15px 48px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animation.transition};
  font-size: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.medium};
  background: ${({ theme }) => theme.colors.searchBg};
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  background: ${({ theme }) => theme.colors.searchBg};
  padding: 20px;
  border-radius: 10px;
  width: 100%;
`;
export const Title = styled(TitleTemplate)`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const Link = styled(LinkTemplate)`
  color: ${({ theme }) => theme.colors.searchLink};
  transition: ${({ theme }) => theme.animation.transition};
  font-size: 16px;
`;
