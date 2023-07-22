import React from 'react';
import styled from 'styled-components';
import { colors, flex } from './styles';
import './styles/globals.css';

function App() {
  const isActive = false;

  return (
    <Container>
      <Box1>박스1</Box1>
      <Box2>박스2</Box2>
      <Box1>박스1</Box1>
      <Box3>박스3</Box3>
      <Button isActive={isActive}>버튼1</Button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  width: 100vw;
  height: 100vh;
`;

const Box1 = styled.div`
  background-color: red;
`;

const Box2 = styled.div`
  background-color: blue;
`;

const Box3 = styled(Box2)`
  color: yellow;
`;

const Button = styled.button<{ isActive: boolean }>`
  ${(props) => (props.isActive ? colors.BLACK : colors.PINK)}
`;
