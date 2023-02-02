import styled from 'styled-components';

export const Container = styled.main``;

export const GameContent = styled.section`
  height: calc(100vh - 20px);
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
`;

export const SceneDescriptionWrapper = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CharacterIdentifierWrapper = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const SceneIdentifierWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 300px;
  right: 0;
`;

export const InteractiveContainer = styled.section`
  margin-top: 40px;
`;
