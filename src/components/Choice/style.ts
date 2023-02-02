import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.regularBtn};
  cursor: pointer;
  padding: 9px 38px;
  margin-bottom: 12px;
  transition: opacity 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:last-child {
    background-color: ${theme.colors.bestialBtn};
    color: ${theme.colors.extraOptionTxt};
    font-weight: 600;
    margin-bottom: 0;
  }
`;

export const Text = styled.span`
  color: ${theme.colors.regularOptionTxt};
  font-size: 2rem;
`;

export const Discipline = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.colors.secondaryTxt};
`;
