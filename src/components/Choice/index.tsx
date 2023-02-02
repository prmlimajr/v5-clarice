import React from 'react';
import { theme } from 'styles/theme';
import { Container, Discipline, Text } from './style';

interface Props {
  option: string;
  discipline?: string;
  bestial?: boolean;
}

export function Choice({ option, discipline, bestial }: Props) {
  return (
    <Container
      style={
        discipline
          ? {
              background: theme.colors.disciplineBtn,
            }
          : {}
      }
    >
      <Text
        style={
          bestial
            ? { color: theme.colors.primaryTxt }
            : discipline
            ? { color: theme.colors.secondaryTxt, fontWeight: 600 }
            : {}
        }
      >
        {option}
      </Text>

      {discipline && <Discipline>{`(${discipline})`}</Discipline>}

      {bestial && <Text style={{ color: theme.colors.primaryTxt }}>:B</Text>}

      {!discipline && !bestial && <div />}
    </Container>
  );
}
