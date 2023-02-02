import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Container = styled.div`
  height: 58px;
  width: 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.highlightedBcg};
  padding: 0 24px;
`;

export const Title = styled.h1`
  color: ${theme.colors.primaryTxt};
  font-size: 4rem;
  font-weight: 400;
`;
