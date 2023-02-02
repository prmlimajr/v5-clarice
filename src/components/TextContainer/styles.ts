import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Container = styled.div`
  margin-top: 12px;
  background-color: ${theme.colors.dimmedBcg};
  border-radius: 14px;
  padding: 20px 16px;
  margin-left: 24px;
  margin-right: 50px;
`;

export const ScrollableArea = styled.div`
  width: 670px;
  max-height: 570px;
  overflow: auto;
`;

export const SceneDescription = styled.p`
  color: ${theme.colors.primaryTxt};
  margin-bottom: 16px;
  font-size: 2rem;
`;

export const HighlightedText = styled.span`
  color: ${theme.colors.secondaryTxt};
  cursor: pointer;
`;
