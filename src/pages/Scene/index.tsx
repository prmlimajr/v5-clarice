import React from 'react';
import { Menu } from 'components/Menu';
import { Identifier } from 'components/Identifier';
import { TextContainer } from 'components/TextContainer';
import { Choice } from 'components/Choice';
import BG from 'assets/bg.png';

import {
  Container,
  GameContent,
  SceneDescriptionWrapper,
  InteractiveContainer,
  CharacterIdentifierWrapper,
  SceneIdentifierWrapper,
} from './styles';

export function Scene() {
  return (
    <Container>
      <Menu />

      <GameContent
        style={{
          background: `url('${BG}') no-repeat center center/cover`,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <SceneDescriptionWrapper>
          <Identifier text="The Elisium" />

          <TextContainer
            paragraphs={[
              {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus hendrerit maximus. Nam nec rhoncus ante. Nullam sit amet mollis risus. Maecenas imperdiet metus nec tempor rutrum. Maecenas non diam luctus, aliquet augue vitae, scelerisque lorem. Nulla ut nulla sapien. Nam dictum mauris quis scelerisque accumsan. Cras cursus tempor orci, at porttitor quam.',
                highlightedText: '',
              },
              {
                text: 'Donec vitae rutrum mauris. Pellentesque at nulla neque. Nam neque arcu, ultricies ornare ullamcorper id, tempus in mauris. Quisque posuere dui ac enim efficitur, ac volutpat ligula maximus. Cras sed elit risus. Fusce mauris augue, maximus at luctus ut, tincidunt vel eros. Nulla metus ligula, posuere eu metus a, placerat egestas felis.',
                highlightedText: 'Pellentesque',
              },
            ]}
          />

          <InteractiveContainer>
            <Choice option="Lorem ipsum, dolor sit amet" />

            <Choice option="Donec vitae rutrum mauris." />

            <Choice
              option="Pellentesque at nulla neque"
              discipline="Presence"
            />

            <Choice option="Quisque posuere dui ac" bestial />
          </InteractiveContainer>
        </SceneDescriptionWrapper>

        <CharacterIdentifierWrapper>
          <SceneIdentifierWrapper>
            <Identifier text="Tarsila" icons={['Bru', 'Cam']} />
          </SceneIdentifierWrapper>
        </CharacterIdentifierWrapper>
      </GameContent>
    </Container>
  );
}
