import React from 'react';
import { Container, Title } from './styles';

interface Props {
  icons?: string[];
  text: string;
}

export function Identifier({ icons, text }: Props) {
  return (
    <Container>
      {icons?.map((icon) => '*')}

      <Title>{text}</Title>
    </Container>
  );
}
