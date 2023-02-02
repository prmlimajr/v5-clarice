import React from 'react';
import Highlighter from 'react-highlight-words';

import {
  Container,
  HighlightedText,
  SceneDescription,
  ScrollableArea,
} from './styles';

interface Props {
  paragraphs: Paragraph[];
}

interface Paragraph {
  text: string;
  highlightedText: string;
}

export function TextContainer({ paragraphs }: Props) {
  return (
    <Container>
      <ScrollableArea>
        {paragraphs.map((p, index) => {
          return (
            <SceneDescription key={index}>
              <Highlighter
                highlightTag={HighlightedText}
                searchWords={[p.highlightedText]}
                autoEscape={true}
                textToHighlight={p.text}
              />
            </SceneDescription>
          );
        })}
      </ScrollableArea>
    </Container>
  );
}
